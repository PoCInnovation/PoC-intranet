import { Router } from 'express';
import upload from './components/upload'

const router = Router();

router.use('/upload', upload);

export default router;
