const { Farm, Field } = require('../models');

module.exports = {

    async index(req, res){
        console.log('[CONTROLLER] Field (index) REQUEST');
        try {
            const result = await Field.findAll({
                where: req.query
            });
            return res.status(200).json(result);
        } catch (error) {
            console.log('[CONTROLLER] Field (index) ERROR', error);
            return res.status(500).json({"error": "Field unexpected error found (index)."}) 
        }
    },

    async show(req, res){
        console.log('[CONTROLLER] Field (show) REQUEST');
        try {
            const result = await Field.findByPk(req.params.id);
            if (!result){
                return res.status(400).json({"warning": "Field was not found."});
            }else{
                return res.status(200).json(result);
            }
        } catch (error) {
            console.log('[CONTROLLER] Field (show) ERROR', error);
            return res.status(500).json({"error": "Field unexpected error found (show)."}); 
        }
    },

    async store(req, res){
        console.log('[CONTROLLER] Field (store) REQUEST');
        try {
            const { farmId } = req.body;
            const farmCount = await Farm.count({
                where: {id: farmId}
            });
            if (farmCount == 0){
                return res.status(400).json({"warning": "Farm ID does not exixts."});
            }else{
                const result = await Field.create({
                    code: req.body.code, 
                    coordinates: {
                        type: 'Point', 
                        coordinates: [req.body.latitude, req.body.longitude]
                    },
                    farmId: req.body.farmId
                });
                return res.status(200).json(result);
            }
        } catch (error) {
            console.log('[CONTROLLER] Field (store) ERROR', error);
            return res.status(500).json({"error": "Field unexpected error found (update)."}); 
        } 
    },

    async update(req, res){
        console.log('[CONTROLLER] Field (update) REQUEST');
        try {
            const { farmId } = req.body;
            const farmCount = await Farm.count({where: {id: farmId}});
            if (farmCount == 0){
                return res.status(400).json({"warning": "Farm ID does not exixts."});
            }else{
                const field = await Field.findByPk(req.params.id);
                if (!field){
                    return res.status(400).json({"warning": "Field was not found."});
                }else{
                    const result = await field.update({
                        code: req.body.code, 
                        coordinates: {
                            type: 'Point', 
                            coordinates: [req.body.latitude, req.body.longitude]
                        },
                        farmId: req.body.farmId
                    });
                    return res.status(200).json(result);
                }   
            }  
        } catch (error) {
            console.log('[CONTROLLER] Field (update) ERROR', error);
            return res.status(500).json({"error": "Field unexpected error found (update)."}); 
        }
    },

    async destroy(req, res){
        console.log('[CONTROLLER] Field (destroy) REQUEST');
        try {
            const field = await Field.findByPk(req.params.id);
            if (!field){
                return res.status(400).json({"warning": "Field was not found."});
            }else{
                await field.destroy({
                    where: {id: req.params.id}
                }); 
                return res.status(200).json({"sucess": "Field was removed."});
            }
        } catch (error) {
            console.log('[CONTROLLER] Field (destroy) ERROR', error);
            return res.status(500).json({"error": "Field unexpected error found (destroy)."}); 
        }  
    }
}