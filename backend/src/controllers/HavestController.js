module.exports = {

    async index(req, res){
        return res.json({'message': 'GET havest OK'});
    },

    async show(req, res){
        return res.json({'message': 'GET by ID havest OK'});
    },

    async store(req, res){
       return res.json({'message': 'POST havest OK'});
    },

    async update(req, res){
        return res.json({'message': 'PUT by ID havest OK'});
    },

    async destroy(req, res){
        return res.json({'message': 'DELETE by ID havest OK'});
    }
}
