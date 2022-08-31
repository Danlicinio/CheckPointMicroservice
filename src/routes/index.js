'use strict'
const express = require('express')
const router = new express.Router()

//endpoint  - para testar a API
router.get('/', (req, res, next) => {
    res.status(200).send({
        "nome" :"Xavier"
    });
});
module.exports = router;
