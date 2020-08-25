const { Mill, Havest, Farm, Field } = require('../models');

module.exports = {

    async index(req, res){
        console.log('[CONTROLLER] mill (index)');

        const result = await Mill.findAll({
            include: {
                model: Havest,
                include: {
                    model: Farm,
                    include: {
                        model: Field
                    }
                }
            }
        });

        return res.json(result);
    },

    async show(req, res){
        console.log('[CONTROLLER] mill (show)');

        const result = await Mill.findByPk(req.params.id, {
            include: {
                model: Havest,
                include: {
                    model: Farm,
                    include: {
                        model: Field
                    }
                }
            }   
        });

        if (!result){
            return res.json({"warning": "Mill was not found."});
        }

        return res.json(result);
    },

    async store(req, res){
        console.log('[CONTROLLER] mill (store)');

        const result = await Mill.create(req.body);
   
        return res.json(result);
    },

    async update(req, res){
        console.log('[CONTROLLER] mill (update)');

        const mill = await Mill.findByPk(req.params.id);

        if (!mill){
            return res.json({"warning": "Mill was not found."});
        }

        const result = await mill.update({
            name: req.body.name});

        return res.json(result);
    },

    async destroy(req, res){
        console.log('[CONTROLLER] mill (destroy)');

        const mill = await Mill.findByPk(req.params.id);

        if (!mill){
            return res.json({"warning": "Mill was not found."});
        }

        const result = await mill.destroy({
            where: {id: req.params.id}
        });
        
        return res.json({"sucess": "Mill was removed."});
    }
}
