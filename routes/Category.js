import routerx from "express-promise-router";
import CategoryController from '../controllers/Category';

const router = routerx();

router.post('/add', CategoryController.store);
router.get('/query', CategoryController.query);
router.get('/', CategoryController.list);
router.put('/update', CategoryController.update);
router.delete('/delete', CategoryController.remove);
router.put('/activate', CategoryController.activate);
router.put('/disable', CategoryController.disable);

export default router;