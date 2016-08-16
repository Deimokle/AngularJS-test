import express from 'express';
import Combat from '../models/combat.js';

let router = express.Router();

module.exports = (app) => {

    var combat = new Combat();

    router.get('/', combat.findAll);

    router.get('/:id', combat.findById);

    router.post('/', combat.create);

    router.put('/:id', combat.update);

    router.delete('/:id', combat.delete);

    app.use('/combats', router);

}
