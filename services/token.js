import {User} from "./../models";
import jwt from "jsonwebtoken";

const key = 'AAKJWLKDJLAKJSLKJDLAKSJDASKD';

const refreshToken = async (token) => {
    let __id;
    try {
        const {_id} = await jwt.decode(token);
        __id = _id;
    } catch (e) {
        return false;
    }

    const user = await User.findOne({_id: __id, active: 1});

    if (user) {
        const token = jwt.sign({_id: __id}, key, {expiresIn: "1d"});

        return {
            token,
            rol: user.rol
        };
    }
    return false;
};

const encode = async (_id) => {
    return jwt.sign({_id}, key, {expiresIn: "1d"});
};

const decode = async (token) => {
    try {
        const {_id} = await jwt.verify(token,key);
        const user = await User.findOne({_id, active: 1});
        if (user) {
            return user;
        }
        return false;
    } catch (e) {
        return await refreshToken(token);

    }
};


export default {
    encode,
    decode
}
