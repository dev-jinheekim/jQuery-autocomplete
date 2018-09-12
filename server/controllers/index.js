const address  = require('../models/address');

function filter(address, search) {
    return address.filter(data => data.text.includes(search))
}

module.exports = {
    search(req, res){
        return res.status(200).send({
            "query": "Unit",
            "suggestions": filter(address, req.query.query)
        })
    }
};
