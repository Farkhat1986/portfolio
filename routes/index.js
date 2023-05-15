import express from 'express';
import { projectRouter } from './projectRouter.js'
import { tehnoRouter } from './tehnoRouter.js'
import { categoryRouter } from './categoryRoutes.js'
import { programRoutes } from './programRoutes.js'
//*import { userRouter } from './userRouter.js'

const rootRouter = express();

//*rootRouter.use('/user', userRouter);*/
rootRouter.use('/project', projectRouter);
rootRouter.use('/program', programRoutes);
rootRouter.use('/tehno', tehnoRouter);
rootRouter.use('/category', categoryRouter);

export { rootRouter };