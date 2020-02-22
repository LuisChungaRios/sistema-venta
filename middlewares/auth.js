import token from "../services/token";
const isAdmin = async (req, res, next) => {
    if (!req.headers.token) {
        return res.status(404).send({
            message: 'not token'
        })
    }

    const response = await token.decode(req.headers.token);

    if (response.rol === 'ADMIN') {
        return next();
    }

    return res.status(403).send({
        message: 'no autorizado'
    });
};
const isGrocer = async (req, res, next) => {
    if (!req.headers.token) {
        return res.status(404).send({
            message: 'not token'
        })
    }

    const response = await token.decode(req.headers.token);

    if (response.rol === 'ADMIN' || response.rol === 'GROCER') {
        return next();
    }

    return res.status(403).send({
        message: 'no autorizado'
    });
};
const isSeller = async (req, res, next) => {
    if (!req.headers.token) {
        return res.status(404).send({
            message: 'not token'
        })
    }

    const response = await token.decode(req.headers.token);

    if (response.rol === 'ADMIN' || response.rol === 'SELLER') {
        return next();
    }

    return res.status(403).send({
        message: 'no autorizado'
    });
};

const isAuth = async (req, res, next) => {
    if (!req.headers.token) {
        return res.status(404).send({
            message: 'not token'
        })
    }

    const response = await token.decode(req.headers.token);

    if (response.rol === 'ADMIN' || response.rol === 'GROCER' || response.rol === 'SELLER') {
        return next();
    }

    return res.status(403).send({
        message: 'no autorizado'
    });
};

export  {
    isAdmin,
    isGrocer,
    isSeller,
    isAuth
}