module.exports = {

    async index(req, res){
        console.log('[CONTROLLER] field (index)');

        return res.json({'message': 'GET field OK'});
    },

    async show(req, res){
        console.log('[CONTROLLER] field (show)');

        return res.json({'message': 'GET by ID field OK'});
    },

    async store(req, res){
        console.log('[CONTROLLER] field (store)');

        return res.json({'message': 'POST field OK'});
    },

    async update(req, res){
        console.log('[CONTROLLER] field (update)');

        return res.json({'message': 'PUT by ID field OK'});
    },

    async destroy(req, res){
        console.log('[CONTROLLER] field (destroy)');
        
        return res.json({'message': 'DELETE by ID field OK'});
    }
}
