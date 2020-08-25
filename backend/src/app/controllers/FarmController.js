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

        const result = await Farm.findByPk(req.params.id, {
            include: {
                model: Field
            }
        });

        if (!result){
            return res.json({"warning": "Farm was not found."});
        }

        return res.json(result);
    },

    async store(req, res){
        console.log('[CONTROLLER] farm (store)');
 
        const result = await Farm.create(req.body);
   
        return res.json(result);
    },

    async update(req, res){
        console.log('[CONTROLLER] farm (update)');

        const farm = await Farm.findByPk(req.params.id);

        if (!farm){
            return res.json({"warning": "Farm was not found."});
        }

        const result = await farm.update(req.body);

        return res.json(result);
    },

    async destroy(req, res){
        console.log('[CONTROLLER] farm (destroy)');

        const farm = await Farm.findByPk(req.params.id);

        if (!farm){
            return res.json({"warning": "Mill was not found."});
        }

        const result = await farm.destroy({
            where: {id: req.params.id}
        });
        
        return res.json({"sucess": "Farm was removed."});
    }
}
