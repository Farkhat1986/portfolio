import express from 'express';
import { programController } from '../controllers/programController.js';
import { checkRoleMiddleware } from '../middlewware/checkRoleMiddleware.js'

const programRoutes = express();
programRoutes.post('/', checkRoleMiddleware("ADMIN"),  programController.create)
programRoutes.get('/', programController.getAll)
programRoutes.get('/:id', programController.getOne)

export { programRoutes };