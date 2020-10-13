import { Router } from 'express';
import OrphanagesController from './controllers/OphanageController';

const router = Router() ;

router.post('/orphanages', OrphanagesController.create);
router.get('/orphanages', OrphanagesController.index);
router.get('/orphanages/:id', OrphanagesController.show);



export default router;