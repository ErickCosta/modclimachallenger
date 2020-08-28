module.exports = {

    async main(req, res, next) {
        console.log('Default data validation middleware (main)');
        return next();
    }
}
