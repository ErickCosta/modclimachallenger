const { Havest, Farm, Field } = require('../models');

module.exports = {

    async index(req, res){
        console.log('[CONTROLLER] havest (index)');

        const result = await Havest.findAll({
            include: {
                model: Farm,
                include: {
                    model: Field
                }
            }
        });


        return res.json(result);
    },

    async show(req, res){
        console.log('[CONTROLLER] havest (show)');

        return res.json({'message': 'GET by ID havest OK'});
    },

    async store(req, res){
        console.log('[CONTROLLER] havest (store)');

        return res.json({'message': 'POST havest OK'});
    },

    async update(req, res){
        console.log('[CONTROLLER] havest (update)');

        return res.json({'message': 'PUT by ID havest OK'});
    },

    async destroy(req, res){
        console.log('[CONTROLLER] havest (destroy)');

        return res.json({'message': 'DELETE by ID havest OK'});
    }
}
