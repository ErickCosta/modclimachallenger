module.exports = {

    async index(req, res){
        return res.json({'message': 'GET mill OK'});
    },

    async show(req, res){
        return res.json({'message': 'GET by ID mill OK'});
    },

    async store(req, res){
       return res.json({'message': 'POST mill OK'});
    },

    async update(req, res){
        return res.json({'message': 'PUT by ID mill OK'});
    },

    async destroy(req, res){
        return res.json({'message': 'DELETE by ID mill OK'});
    }
}
