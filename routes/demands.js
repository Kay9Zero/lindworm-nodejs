// demands.js

var express = require('express');
var router = express.Router();
var db = require('../database');

router.get("/", function(req, res) {
    db.Demand.findAll()
        .then( demands => {
            res.status(200).send(JSON.stringify(demands));
        })
        .catch( err => {
            res.status(500).send(JSON.stringify(err));
        });
});

router.get("/:id", function(req, res) {
    db.Demand.findByPk(req.params.id)
        .then( demand => {
            res.status(200).send(JSON.stringify(demand));
        })
        .catch( err => {
            res.status(500).send(JSON.stringify(err));
        });
});

router.put("/", function(req, res) {
    db.Demand.create({
        action: req.body.action,
        id: req.body.id
        })
        .then( demand => {
            res.status(200).send(JSON.stringify(demand));
        })
        .catch( err => {
            res.status(500).send(JSON.stringify(err));
        });
});

router.delete("/:id", function(req, res) {
    db.Demand.destroy({
        where: {
            id: req.params.id
        }
        })
        .then( () => {
            res.status(200).send();
        })
        .catch( err => {
            res.status(500).send(JSON.stringify(err));
        });
});

module.exports = router;
