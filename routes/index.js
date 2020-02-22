import routerx from "express-promise-router";
import CategoryRouter from "./Category";
import ArticleRouter from "./Article";
import UserRouter from "./User";
import AuthRouter from "./Auth";
const router = routerx();

router.use('/category', CategoryRouter);
router.use('/article', ArticleRouter);
router.use('/user', UserRouter);
router.use('/auth', AuthRouter);
export default  router;
