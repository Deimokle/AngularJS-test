import mongoose from 'mongoose';

const todoSchema = new mongoose.Schema({
    nom: String,
    vie: Number,
    date: Date,
    cat: Array,
    pc: Number,
    exp: Number
});

let model = mongoose.model('Todo', todoSchema);

export default class Todo {

    findAll(req, res) {
        model.find({}, (err, todos) => {
            if (err) {
                res.sendStatus(403);
            } else {
                res.json(todos);
            }
        });
    }

    findById(req, res) {
        model.findById(req.params.id, (err, todo) => {
            if (err || !todo) {
                res.sendStatus(403);
            } else {
                res.json(todo);
            }
        });
    }

    create(req, res) {
        model.create({
                nom: req.body.nom,
                vie: req.body.vie,
                date: req.body.date,
                cat: req.body.cat,
                pc: req.body.pc,
                exp: req.body.exp
            },
            (err, todo) => {
                if (err) {
                    res.status(500).send(err.message);
                } else {
                    res.json(todo);
                }
            });
    }

    update(req, res) {
        model.update({
            _id: req.params.id
        }, {
            nom: req.body.nom,
            vie: req.body.vie,
            date: req.body.date,
            cat: req.body.cat,
            pc: req.body.pc,
            exp: req.body.exp
        }, (err, todo) => {
            if (err || !todo) {
                res.status(500).send(err.message);
            } else {
                res.json(todo);
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
