import { Router } from 'express';
import multer from "multer";

/**
 * @description Allow upload and fixe field
 */
const upload = multer().fields([
	{name: 'file', maxCount: 1},
	{name: 'name', maxCount: 1}
	]
);

const router = Router();

router.post('/', upload, (req, res) => {
	const file = req.files['file'][0];
	console.log(req.body.name);

	console.log(file.originalname);
	console.log(file.buffer);
	res.status(200)
})

export default router;
