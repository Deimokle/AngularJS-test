import mongoose from 'mongoose';

const combatSchema = new mongoose.Schema({
    win: String,
    pok1: Array,
    pok2: Array,
    date: Date,
});

let model = mongoose.model('Combat', combatSchema);

export default class Combat {

    findAll(req, res) {
        model.find({}, (err, combats) => {
            if (err) {
                res.sendStatus(403);
            } else {
                res.json(combats);
            }
        });
    }

    findById(req, res) {
        model.findById(req.params.id, (err, combat) => {
            if (err || !combat) {
                res.sendStatus(403);
            } else {
                res.json(combat);
            }
        });
    }

    create(req, res) {
        model.create({
                win: req.body.win,
                pok1: req.body.pok1,
                pok2: req.body.pok2,
                date: req.body.date
            },
            (err, combat) => {
                if (err) {
                    res.status(500).send(err.message);
                } else {
                    res.json(combat);
                }
            });
    }

    update(req, res) {
        model.update({
            _id: req.params.id
        }, {
            nom: req.body.win,
            pok1: req.body.pok1,
            pok2: req.body.pok2,
            date: req.body.date
        }, (err, combat) => {
            if (err || !combat) {
                res.status(500).send(err.message);
            } else {
                res.json(combat);
            }
        });
    }

    delete(req, res) {
        model.findByIdAndRemove(req.params.id, (err) => {
            if (err) {
                res.status(500).send(err.message);
            } else {
                res.sendStatus(200);
            }
        })
    }
}
