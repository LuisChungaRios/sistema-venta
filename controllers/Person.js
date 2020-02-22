import { Person } from "./../models"
const store = async (req, res, next) => {
    try {
        const reg = await Person.create(req.body);
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
        const reg = await Person.findOne({_id: req.query._id});
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
        const reg = await Person.find({
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

const listClients = async (req, res, next) => {
    try {
        let search = req.query.search;
        const reg = await Person.find({
            $or:[
                {
                    "name" : new RegExp(search, 'i')
                },
                {
                    "email" : new RegExp(search, 'i')
                }
            ],
            'type_person': 'CLIENT'
        },{created_at: 0}).sort({'created_at': -1});
        res.status(200).json(reg);
    } catch (e) {
        res.status(500).send({
            message: "Ocurrio un error",
        });
        next(e)
    }
};

const listSuppliers = async (req, res, next) => {
    try {
        let search = req.query.search;
        const reg = await Person.find({
            $or:[
                {
                    "name" : new RegExp(search, 'i')
                },
                {
                    "email" : new RegExp(search, 'i')
                }
            ],
            'type_person': 'SUPPLIER'
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
        const reg = await  Person.findByIdAndUpdate({_id: req.body._id},{active: 1});
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
        const reg = await  Person.findByIdAndUpdate({_id: req.body._id},{active: 0});
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

        const reg = await  Person.findByIdAndUpdate({_id: req.body._id},
            {
                type_person: req.body.type_person,
                name: req.body.name,
                last_name: req.body.last_name,
                email: req.body.email,
                type_document: req.body.type_document,
                number_document: req.body.number_document,
                address: req.body.address,
                mobile_number: req.body.mobile_number
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
        const reg = await Person.findByIdAndDelete(({_id: req.body._id}));
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
    listClients,
    listSuppliers,
    activate,
    disable,
    update,
    remove
}