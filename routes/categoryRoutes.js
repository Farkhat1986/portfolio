import express from 'express';
import { categoryController } from '../controllers/categoryController.js'
import { checkRoleMiddleware } from '../middlewware/checkRoleMiddleware.js'

const categoryRouter = express();

categoryRouter.get('/', categoryController.getAll)
categoryRouter.post('/', categoryController.create)

export { categoryRouter };

//*checkRoleMiddleware("ADMIN")/