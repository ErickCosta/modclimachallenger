module.exports = {

    async index(req, res){
        return res.json({'message': 'GET field OK'});
    },

    async show(req, res){
        return res.json({'message': 'GET by ID field OK'});
    },

    async store(req, res){
       return res.json({'message': 'POST field OK'});
    },

    async update(req, res){
        return res.json({'message': 'PUT by ID field OK'});
    },

    async destroy(req, res){
        return res.json({'message': 'DELETE by ID field OK'});
    }
}
