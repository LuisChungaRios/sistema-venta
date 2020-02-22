import { User } from "./../models";
import bcrypt from "bcryptjs";
import token from "./../services/token";
const login = async (req, res, next) => {
    try {

        const user = await User.findOne({email: req.body.email, active:1});
        if (user) {
            const verifyPassword = bcrypt.compare(user.password, req.body.password);
            if (verifyPassword) {
                let tokenResult = await token.encode(user._id);
                return res.status(200).send({
                    user,
                    tokenResult
                })
            }
            return res.status(404).send({
                message: 'Incorrect Password'
            });
        }

        return res.status(404).send({
            message: 'User not found'
        });
    } catch (e) {
        res.status(500).send({
            message: "Ocurrio un error",
        });
        next(e)
    }
};

export default  {
    login,
}