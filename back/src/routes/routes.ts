import { Router } from 'express';
import upload from './components/upload'

const router = Router();

/**
 * @description Router
 *
 * @summary
 * - Upload : handle profil picture upload.
 */
router.use('/upload', upload);

export default router;
