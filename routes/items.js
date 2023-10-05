const express = require('express');
const Router = express.Router();

let products = [
    {
        id: "1",
        name: "hammer",
        price: 75
    },
    {
        id: "2",
        name: "mirror",
        price: 35
    },
    {
        id: "3",
        name: "broom",
        price: 75
    },
    {
        id: "4",
        name: "shampoo",
        price: 75
    },
]

router.get('/', function (req, res) {
    res.status(200).json(data);
});

router.get('/:id', function (req, res) {
    let found = data.find(function (item) {
        return item.id === parseInt(req.params.id);
    });
    if (found) {
        res.status(200).json(found);
    } else {
        res.sendStatus(404);
    }
});

module.exports = router;