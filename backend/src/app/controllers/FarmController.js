const { Farm, Field } = require('../models');

module.exports = {

    async index(req, res){
        console.log('[CONTROLLER] farm (index)');

        const result = await Farm.findAll({
            include: {
                model: Field
            }
        });

        return res.json(result);
    },

    async show(req, res){
        console.log('[CONTROLLER] farm (show)');

        return res.json({'message': 'GET by ID farm OK'});
    },

    async store(req, res){
        console.log('[CONTROLLER] farm (store)');
 
        return res.json({'message': 'POST farm OK'});
    },

    async update(req, res){
        console.log('[CONTROLLER] farm (update)');

        return res.json({'message': 'PUT by ID farm OK'});
    },

    async destroy(req, res){
        console.log('[CONTROLLER] farm (destroy)');

        return res.json({'message': 'DELETE by ID farm OK'});
    }
}
