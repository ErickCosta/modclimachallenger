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

        const result = await Havest.create(req.body);
   
        return res.json(result);
    },

    async update(req, res){
        console.log('[CONTROLLER] havest (update)');

        const havest = await Havest.findByPk(req.params.id);

        if (!havest){
            return res.json({"warning": "Havest was not found."});
        }

        const result = await havest.update(req.body);

        return res.json(result);
    },

    async destroy(req, res){
        console.log('[CONTROLLER] havest (destroy)');

        const havest = await Havest.findByPk(req.params.id);

        if (!havest){
            return res.json({"warning": "Mill was not found."});
        }

        const result = await havest.destroy({
            where: {id: req.params.id}
        });
        
        return res.json({"sucess": "Havest was removed."});
    }
}
