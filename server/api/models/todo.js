import mongoose from 'mongoose';

const todoSchema = new mongoose.Schema({
    name: String,
    number: Number
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
                name: req.body.name,
                number: req.body.number
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
            name: req.body.name,
            number: req.body.number
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