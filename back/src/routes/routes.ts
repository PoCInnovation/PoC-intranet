import { Router } from 'express';
import upload from './components/upload';
import users from './components/users';

const router = Router();

/**
 * @description Router
 *
 * @summary
 * - Upload : handle profil picture upload.
 */
router.use('/upload', upload);
router.use('/users', users);

export default router;
