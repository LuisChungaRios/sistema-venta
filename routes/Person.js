import routerx from "express-promise-router";
import PersonController from '../controllers/Person';
import {isAuth} from "../middlewares/auth";

const router = routerx();

router.post('/add',isAuth ,PersonController.store);
router.get('/query',isAuth ,PersonController.query);
router.get('/', isAuth, PersonController.list);
router.get('/clients', isAuth, PersonController.listClients);
router.get('/suppliers', isAuth, PersonController.listSuppliers);
router.put('/update',isAuth, PersonController.update);
router.delete('/delete',isAuth, PersonController.remove);
router.put('/activate',isAuth ,PersonController.activate);
router.put('/disable', isAuth, PersonController.disable);

export default router;