module.exports = {

    async index(req, res, next) {
        console.log('[MIDDLEWARE] havest data validation (index)');

        return next();
    },

    async show(req, res, next) {
        console.log('[MIDDLEWARE] havest data validation (show)');

        return next();
    },

    async store(req, res, next) {
        console.log('[MIDDLEWARE] havest data validation (store)');

        return next();
    },

    async update(req, res, next) {
        console.log('[MIDDLEWARE] havest data validation (update)');

        return next();
    },

    async destroy(req, res, next) {
        console.log('[MIDDLEWARE] havest data validation (destroy)');

        return next();
    }

}
