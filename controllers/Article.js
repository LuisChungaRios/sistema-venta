import { Article } from "./../models"
const store = async (req, res, next) => {
    try {
        const reg = await Article.create(req.body);
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
        const reg = await Article.findOne({_id: req.query._id}).populate('category',{name: 1});
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
        const reg = await Article.find({
            $or:[
                {
                    "name" : new RegExp(search, 'i')
                },
                {
                    "description" : new RegExp(search, 'i')
                }
            ]
        },{created_at: 0})
            .populate('category',{name: 1})
            .sort({'created_at': -1});
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
        const reg = await  Article.findByIdAndUpdate({_id: req.body._id},{active: 1});
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
        const reg = await  Article.findByIdAndUpdate({_id: req.body._id},{active: 0});
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
        const reg = await  Article.findByIdAndUpdate({_id: req.body._id},
        {
                category: req.body.category,
                code: req.body.code,
                name: req.body.name,
                description: req.body.description,
                price_sale: req.body.price_sale,
                stock: req.body.stock
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
        const reg = await Article.findByIdAndDelete(({_id: req.body._id}));
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