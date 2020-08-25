const { Mill ,Havest, Farm, Field } = require('../models');

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

        const result = await Havest.findByPk(req.params.id, {
            include: {
                model: Farm,
                include: {
                    model: Field
                }
            }
        });

        if (!result){
            return res.json({"warning": "Havest was not found."});
        }

        return res.json(result);
    },

    async store(req, res){
        console.log('[CONTROLLER] havest (store)');

        const { millId } = req.body;

        const millCount = await Mill.count({
            where: {id: millId}
        });

        if (millCount == 0){
            res.json({"warning": "Mill ID dos not exixts."});
        }

        const result = await Havest.create(req.body);
   
        return res.json(result);
    },

    async update(req, res){
        console.log('[CONTROLLER] havest (update)');

        const { millId } = req.body;

        const millCount = await Mill.count({
            where: {id: millId}
        });

        if (millCount == 0){
            res.json({"warning": "Mill ID dos not exixts."});
        }

        const havest = await Havest.findByPk(req.params.id);

        if (!havest){
            return res.json({"warning": "Havest was not found."});
        }

        const result = await havest.update(req.body);

        return res.json(result);
    },

    async destroy(req, res){
        console.log('[CONTROLLER] havest (destroy)');

        const { millId } = await Havest.findByPk(req.params.id);

        if (!havest){
            return res.json({"warning": "Havest was not found."});
        }

        await havest.destroy({
            where: {id: req.params.id}
        });
        
        return res.json({"sucess": "Havest was removed."});
    }
}
