import routerx from "express-promise-router";
import UserController from '../controllers/User';
import {isAdmin} from "../middlewares/auth";

const router = routerx();

router.post('/add',isAdmin ,UserController.store);
router.get('/query',isAdmin ,UserController.query);
router.get('/', isAdmin, UserController.list);
router.put('/update',isAdmin, UserController.update);
router.delete('/delete',isAdmin, UserController.remove);
router.put('/activate',isAdmin ,UserController.activate);
router.put('/disable', isAdmin, UserController.disable);

export default router;