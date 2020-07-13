const router = require('express').Router()
const privatePersonController = require('../../controllers/privatePerson/privatePerson.controller');
router.post('/privatePerson',privatePersonController)