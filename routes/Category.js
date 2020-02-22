import routerx from "express-promise-router";
import CategoryController from '../controllers/Category';
import {isGrocer} from "../middlewares/auth";

const router = routerx();

router.post('/add',isGrocer, CategoryController.store);
router.get('/query',isGrocer, CategoryController.query);
router.get('/',isGrocer, CategoryController.list);
router.put('/update',isGrocer, CategoryController.update);
router.delete('/delete',isGrocer, CategoryController.remove);
router.put('/activate',isGrocer, CategoryController.activate);
router.put('/disable',isGrocer, CategoryController.disable);

export default router;