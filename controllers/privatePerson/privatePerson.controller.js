const privatePersons = require('../../models/privatePersons');
module.exports.create = (req, res) => {
    console.log(req.body)
    privatePersons.create({
         
    }, (err, event) => {
      if (err) return res.send({ error: err });
      res.status(200).send({ event: event });
    });
  }
  