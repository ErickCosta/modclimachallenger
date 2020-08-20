module.exports = {

    async index(req, res){
        return res.json({'message': 'GET farm OK'});
    },

    async show(req, res){
        return res.json({'message': 'GET by ID farm OK'});
    },

    async store(req, res){
       return res.json({'message': 'POST farm OK'});
    },

    async update(req, res){
        return res.json({'message': 'PUT by ID farm OK'});
    },

    async destroy(req, res){
        return res.json({'message': 'DELETE by ID farm OK'});
    }
}
