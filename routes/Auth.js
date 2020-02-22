import routerx from "express-promise-router";
import AuthController from '../controllers/Auth';

const router = routerx();

router.post('/login', AuthController.login);

export default router;