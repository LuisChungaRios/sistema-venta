import { User } from "./../models"
import bcrypt from "bcryptjs";
const store = async (req, res, next) => {
    try {
        req.body.password = await bcrypt.hash(req.body.password, 10);
        const reg = await User.create(req.body);
        res.status(200).json(reg);
    } catch (e) {
        res.status(500).send({
            message: "Ocurrio un error",
        });
        next(e)
    }
};
const query = async (req, res, next) => {
    try {
        const reg = await User.findOne({_id: req.query._id});
        if (!reg) {
            res.status(404).send({
                message: 'El registro no existe'
            })
        } else {
            res.status(200).json(reg)
        }

    } catch (e) {
        res.status(500).send({
            message: "Ocurrio un error",
        });
        next(e)
    }

};
const list = async (req, res, next) => {
    try {
        let search = req.query.search;
        const reg = await User.find({
            $or:[
                {
                    "name" : new RegExp(search, 'i')
                },
                {
                    "email" : new RegExp(search, 'i')
                }
            ]
        },{created_at: 0}).sort({'created_at': -1});
        res.status(200).json(reg);
    } catch (e) {
        res.status(500).send({
            message: "Ocurrio un error",
        });
        next(e)
    }
};
const activate = async (req, res, next) => {
    try {
        const reg = await  User.findByIdAndUpdate({_id: req.body._id},{active: 1});
        res.status(200).json(reg);
    } catch (e) {
        res.status(500).send({
            message: "Ocurrio un error",
        });
        next(e)
    }
};
const disable = async (req, res, next) => {
    try {
        const reg = await  User.findByIdAndUpdate({_id: req.body._id},{active: 0});
        res.status(200).json(reg);
    } catch (e) {
        res.status(500).send({
            message: "Ocurrio un error",
        });
        next(e)
    }
};
const update = async (req, res, next) => {
    try {
        let password = req.body.password;
        const user = await User.findById({_id: req.body._id});
        if (user.password !== password) {
            password = bcrypt.hash(req.body.password);
        }
        const reg = await  User.findByIdAndUpdate({_id: req.body._id},
            {
                rol: req.body.rol,
                name: req.body.name,
                last_name: req.body.last_name,
                email: req.body.email,
                type_document: req.body.type_document,
                number_document: req.body.number_document,
                address: req.body.address,
                mobile_number: req.body.mobile_number,
                password
            });
        res.status(200).json(reg);
    } catch (e) {
        res.status(500).send({
            message: "Ocurrio un error",
        });
        next(e)
    }
};
const remove = async (req, res, next) => {
    try {
        const reg = await User.findByIdAndDelete(({_id: req.body._id}));
        res.send(200).json(reg)
    } catch (e) {
        res.status(500).send({
            message: "Ocurrio un error",
        });
        next(e)
    }
};

export default  {
    store,
    query,
    list,
    activate,
    disable,
    update,
    remove
}