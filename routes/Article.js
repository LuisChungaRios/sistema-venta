import routerx from "express-promise-router";
import ArticleController from '../controllers/Article';

const router = routerx();
import {isGrocer} from "../middlewares/auth";

router.post('/add',isGrocer, ArticleController.store);
router.get('/query',isGrocer, ArticleController.query);
router.get('/',isGrocer, ArticleController.list);
router.put('/update',isGrocer, ArticleController.update);
router.delete('/delete',isGrocer, ArticleController.remove);
router.put('/activate',isGrocer, ArticleController.activate);
router.put('/disable',isGrocer, ArticleController.disable);

export default router;