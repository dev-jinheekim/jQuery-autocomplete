const addressController = require('../controllers/')

module.exports = (app) => {

    app.get('/api/address', addressController.search);

};
