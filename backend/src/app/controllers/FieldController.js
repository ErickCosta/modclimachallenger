const { Field } = require('../models');

module.exports = {

    async index(req, res){
        console.log('[CONTROLLER] field (index)');

        const result = await Field.findAll();

        return res.json(result);
    },

    async show(req, res){
        console.log('[CONTROLLER] field (show)');

        const result = await Field.findByPk(req.params.id);

        if (!result){
            return res.json({"warning": "Field was not found."});
        }

        return res.json(result);
    },

    async store(req, res){
        console.log('[CONTROLLER] field (store)');

        const result = await Field.create({
            code: req.body.code, 
            coordinates: {
                type: 'Point', 
                coordinates: [req.body.latitude, req.body.longitude]
            },
            farmId: req.body.farmId
        });
   
        return res.json(result);
    },

    async update(req, res){
        console.log('[CONTROLLER] field (update)');

        const field = await Field.findByPk(req.params.id);

        if (!field){
            return res.json({"warning": "Field was not found."});
        }

        const result = await field.update({
            code: req.body.code, 
            coordinates: {
                type: 'Point', 
                coordinates: [req.body.latitude, req.body.longitude]
            },
            farmId: req.body.farmId
        });

        return res.json(result);
    },

    async destroy(req, res){
        console.log('[CONTROLLER] field (destroy)');

        const field = await Field.findByPk(req.params.id);

        if (!field){
            return res.json({"warning": "Field was not found."});
        }

        const result = await field.destroy({
            where: {id: req.params.id}
        });
        
        return res.json({"sucess": "Field was removed."});
    }
}