const { Mill, Havest, Farm, Field } = require('../models');
const socketIo = require('../socket/index');

module.exports = {

    async index(req, res){  
        console.log('[CONTROLLER] Mill (index) REQUEST');    
        try {
            const result = await Mill.findAll({
                where: req.query,
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
            return res.status(200).json(result);
        } catch (error) {
            console.log('[CONTROLLER] Mill (index) ERROR', error);
            return res.status(500).json({"error": "Mill unexpected error found (index)."}) 
        }  
    },

    async show(req, res){
        console.log('[CONTROLLER] Mill (show) REQUEST');
        try {
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
                return res.status(400).json({"warning": "Mill was not found (show)."});
            }else{
                return res.status(200).json(result);
            }
        } catch (error) {
            console.log('[CONTROLLER] Mill (show) ERROR', error);
            return res.status(500).json({"error": "Mill unexpected error found (show)."}); 
        } 
    },

    async store(req, res){
        console.log('[CONTROLLER] Mill (store) REQUEST');
        try {
            const result = await Mill.create(req.body);
            socketIo.update('{message: "New Mill created"}');
            return res.json(result);
        } catch (error) {
            console.log('[CONTROLLER] Mill (store) ERROR', error);
            return res.status(500).json({"error": "Mill unexpected error found (store)."}); 
        }
    },

    async update(req, res){
        console.log('[CONTROLLER] Mill (update)');
        try {
            const mill = await Mill.findByPk(req.params.id);
            if (!mill){
                return res.status(400).json({"warning": "Mill was not found (update)."});
            }else{
                const result = await mill.update({name: req.body.name});
                return res.status(200).json(result);
            }
        } catch (error) {
            console.log('[CONTROLLER] Mill (update) ERROR', error);
            return res.status(500).json({"error": "Mill unexpected error found (update)."}); 
        }    
    },

    async destroy(req, res){
        console.log('[CONTROLLER] Mill (destroy)');
        try {
            const mill = await Mill.findByPk(req.params.id, {
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
            if (!mill){
                return res.status(400).json({"warning": "Mill was not found (destroy)."});
            }else if(mill && mill.Havests.length > 0){
                return res.status(400).json({"warning": "Mill has relation with Havest (destroy)."});
            }else{
                await mill.destroy({where: {id: req.params.id}});
                return res.status(200).json({"sucess": "Mill was removed."});
            }
        } catch (error) {
            console.log('[CONTROLLER] mill (destroy) ERROR', error);
            return res.status(500).json({"error": "Mill unexpected error found (destroy)."}); 
        }     
    }
}