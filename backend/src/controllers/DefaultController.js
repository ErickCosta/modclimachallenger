module.exports = {

    async main(req, res){
        console.log('Default controller (main)');
        return res.json({'message': 'Welcome to the ModClima!'});
    }
}
