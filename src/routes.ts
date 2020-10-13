import { Router } from 'express';
import multer from 'multer';

import uploadConfig from './config/upload';
import OrphanagesController from './controllers/OphanageController';

const router = Router();
const upload = multer(uploadConfig);

router.get('/orphanages', OrphanagesController.index);
router.get('/orphanages/:id', OrphanagesController.show);
router.post('/orphanages', OrphanagesController.create);



export default router;