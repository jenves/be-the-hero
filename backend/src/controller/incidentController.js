const connection = require('../database/connection');

module.exports = {

    async index(req, res) {
        const { page = 1 } = req.query;

        const [count] = await connection('incidents').count();   //[count] || count[0]

        const incidents = await connection('incidents')
            .join('ongs', 'ongs.id', '=', 'incidents.ong_id') //Join para retornar as informações da ong relacionada ao incidente
            .limit(5)
            .offset((page - 1) * 5)
            .select([
                'incidents.*',
                'ongs.name',
                'ongs.email',
                'ongs.whatsapp',
                'ongs.city',
                'ongs.uf'
            ]);

        res.header('X-Total-Count', count['count(*)']);
        return res.json(incidents);
    },

    async create(req, res) {
        const { title, description, value } = req.body;

        const ong_id = req.headers.authorization;

        const [id] = await connection('incidents').insert({
            title,
            description,
            value,
            ong_id
        });

        return res.json({ id });
    },

    async delete(req, res) {
        const { id } = req.params; //recupera o ID da url
        const ong_id = req.headers.authorization; // Recupera o ID do cabeçalho

        //Verifica se o ID e correspondente a ong que criou o mesmo, os id's precisam ser iguais.
        const incident = await connection('incidents').where('id', id).select('ong_id').first();

        if (incident.ong_id !== ong_id) {
            console.log(incident.ong_id !== ong_id)
            return res.status(401).json({ error: 'Operation not permited.' });
        }

        await connection('incidents').where('id', id).delete();

        return res.status(204).send();
    }
};