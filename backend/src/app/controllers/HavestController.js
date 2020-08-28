const { Mill, Havest, Farm, Field } = require('../models');
const socketIo = require('../socket/index');

module.exports = {

    async index(req, res){
        console.log('[CONTROLLER] Havest (index) REQUEST');
        try {
            const result = await Havest.findAll({
                where: req.query,
                include: {
                    model: Farm,
                    include: {
                        model: Field
                    }
                }
            });
            return res.status(200).json(result);
        } catch (error) {
            console.log('[CONTROLLER] Havest (index) ERROR', error);
            return res.status(500).json({"error": "Havest unexpected error found (index)."}) 
        }
    },

    async show(req, res){
        console.log('[CONTROLLER] Havest (show) REQUEST');
        try {
            const result = await Havest.findByPk(req.params.id, {
                include: {
                    model: Farm,
                    include: {
                        model: Field
                    }
                }
            });
            if (!result){
                return res.status(400).json({"warning": "Havest was not found."});
            }else{
                return res.status(200).json(result);
            }
        } catch (error) {
            console.log('[CONTROLLER] Havest (show) ERROR', error);
            return res.status(500).json({"error": "Havest unexpected error found (show)."}); 
        }
    },

    async store(req, res){
        console.log('[CONTROLLER] Havest (store) REQUEST');
        try {
            const { millId } = req.body;
            const millCount = await Mill.count({where: {id: millId}});
            if (millCount == 0){
                res.status(400).json({"warning": "Mill ID does not exists."});
            }else{
                const result = await Havest.create(req.body);
                socketIo.update('{message: "New Havest created"}');
                return res.status(200).json(result);
            }
        } catch (error) {
            console.log('[CONTROLLER] Havest (store) ERROR', error);
            return res.status(500).json({"error": "Havest unexpected error found (update)."}); 
        }
    },

    async update(req, res){
        console.log('[CONTROLLER] Havest (update) REQUEST');
        try {
            const { millId } = req.body;
            const millCount = await Mill.count({where: {id: millId}});
            if (millCount == 0){
                res.status(400).json({"warning": "Mill ID does not exists."});
            }else {
                const havest = await Havest.findByPk(req.params.id);
                if (!havest){
                    return res.status(400).json({"warning": "Havest was not found."});
                }else{
                    const result = await havest.update(req.body);
                    return res.status(200).json(result);
                }
            }
        } catch (error) {
            console.log('[CONTROLLER] Havest (update) ERROR');
            return res.status(500).json({"error": "Havest unexpected error found (update)."}); 
        }  
    },

    async destroy(req, res){
        console.log('[CONTROLLER] Havest (destroy) REQUEST');
        try {
            const havest = await Havest.findByPk(req.params.id, {
                include: {
                    model: Farm,
                    include: {
                        model: Field
                    }
                }
            });
            if (!havest){
                return res.status(400).json({"warning": "Havest was not found."});
            }else if (havest && havest.Farms.length > 0){
                return res.status(400).json({"warning": "Havest has relation with Farms (destroy)."});
            }else {
                await havest.destroy({here: {id: req.params.id}});
                return res.status(200).json({"sucess": "Havest was removed."});
            }
        } catch (error) {
            console.log('[CONTROLLER] Havest (destroy) ERROR');
            return res.status(500).json({"error": "Havest unexpected error found (destroy)."}); 
        }   
    }
}
