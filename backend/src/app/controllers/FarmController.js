const { Havest, Farm, Field } = require('../models');
const socketIo = require('../socket/index');

module.exports = {

    async index(req, res){
        console.log('[CONTROLLER] Farm (index) REQUEST');
        try {
            const result = await Farm.findAll({
                where: req.query,
                include: {
                    model: Field
                }
            });
            return res.status(200).json(result);
        } catch (error) {
            console.log('[CONTROLLER] Farm (index) ERROR', error);
            return res.status(500).json({"error": "Farm unexpected error found (index)."}) 
        }
    },

    async show(req, res){
        console.log('[CONTROLLER] Farm (show) REQUEST');
        try {
            const result = await Farm.findByPk(req.params.id, {
                include: {
                    model: Field
                }
            });
            if (!result){
                return res.status(400).json({"warning": "Farm was not found."});
            }else {
                return res.status(200).json(result);
            }
        } catch (error) {
            console.log('[CONTROLLER] Farm (show) ERROR', error);
            return res.status(500).json({"error": "Farm unexpected error found (show)."}); 
        }
    },

    async store(req, res){
        console.log('[CONTROLLER] Farm (store) REQUEST');
        try {
            const { havestId } = req.body;
            const havestCount = await Havest.count({where: {id: havestId}});
            if (havestCount == 0){
                return res.status(400).json({"warning": "Havest ID does not exixts."});
            }else{
                const result = await Farm.create(req.body);
                socketIo.update('{message: "New farm created"}');
                return res.status(200).json(result);
            }
        } catch (error) {
            console.log('[CONTROLLER] Farm (store) ERROR', error);
            return res.status(500).json({"error": "Farm unexpected error found (update)."}); 
        }  
    },

    async update(req, res){
        console.log('[CONTROLLER] Farm (update) REQUEST');
        try {
            const { havestId } = req.body;
            const havestCount = await Havest.count({where: {id: havestId}});
            if (havestCount == 0){
                return res.status(400).json({"warning": "Havest ID does not exixts."});
            }else{
                const farm = await Farm.findByPk(req.params.id);
                if (!farm){
                    return res.status(400).json({"warning": "Farm was not found."});
                }else{
                    const result = await farm.update(req.body);
                    return res.status(200).json(result);
                }  
            }
        } catch (error) {
            console.log('[CONTROLLER] Farm (update) REQUEST', error);
            return res.status(500).json({"error": "Farm unexpected error found (update)."}); 
        }  
    },

    async destroy(req, res){
        console.log('[CONTROLLER] Farm (destroy) REQUEST');
        try {
            const farm = await Farm.findByPk(req.params.id,{
                include: {
                    model: Field
                }
            });
            if (!farm){
                return res.status(400).json({"warning": "Farm was not found."});
            }else if (farm && farm.Fields.lenght > 0){
                return res.status(400).json({"warning": "Farm has relation with Fields (destroy)."});
            }else{
                await farm.destroy({where: {id: req.params.id}});
                return res.status(200).json({"sucess": "Farm was removed."});
            }
        } catch (error) {
            console.log('[CONTROLLER] Farm (destroy) REQUEST', error);
            return res.status(500).json({"error": "Farm unexpected error found (destroy)."}); 
        }
    }
}
