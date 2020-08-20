module.exports = {

    async index(req, res){
        console.log('[CONTROLLER] mill (index)');

        return res.json({'message': 'GET mill OK'});
    },

    async show(req, res){
        console.log('[CONTROLLER] mill (show)');

        return res.json({'message': 'GET by ID mill OK'});
    },

    async store(req, res){
        console.log('[CONTROLLER] mill (store)');

        return res.json({'message': 'POST mill OK'});
    },

    async update(req, res){
        console.log('[CONTROLLER] mill (update)');

        return res.json({'message': 'PUT by ID mill OK'});
    },

    async destroy(req, res){
        console.log('[CONTROLLER] mill (destroy)');

        return res.json({'message': 'DELETE by ID mill OK'});
    }
}
