import {Router, Request, Response, NextFunction} from 'express';
import multer from 'multer';
import {prisma} from '../../context';
import * as fs from 'fs';

/**
 * @description Allow upload and declare field
 */
const upload = multer().fields([
		{name: 'file', maxCount: 1},
		{name: 'name', maxCount: 1}
	]
);

const path = __dirname + '/../../../../front/public/profil_pic/';
const router = Router();

/**
 * @type Middleware.
 * @description Verify in the database if the user given exist (prevent from bad request).
 */
let verify_user = async (req: Request, res: Response, next: NextFunction) => {
	const user = await prisma.user.findOne(
		{
			where: {
				id: req.body.name
			}
		});
	if (user) {
		next();
	} else {
		res.status(400).send('Bad request');
	}
};

/**
 * @param filename
 * @return : extension of the file (png, jpg).
 */
const getExtension = (filename: string) => {
	return filename.substring(filename.lastIndexOf('.'), filename.length);
};

/**
 * @description Delete the previous user image.
 * @param id : user id
 */
const deletePreviousImg = async (id: string) => {
	const user = await prisma.user.findOne(
		{
			where: {id}
		});
	if (user && user.profil_pic) {
		try {
			fs.unlinkSync(path + user.profil_pic);
		} catch (error) {
			throw new Error('Can\'t delete previous image');
		}
	}
};

/**
 * @description Add new image to the user.
 * Inset path in the database.
 *
 * @param id : userId
 * @param file : image
 */
const addNewImage = async (id: string, file: Express.Multer.File) => {
	const extension = getExtension(file.originalname);

	try {
		await fs.writeFileSync(path + id + extension, file.buffer);
		await prisma.user.update({
			where: {id},
			data: {profil_pic: id + extension}
		});
	} catch (error) {
		throw new Error('Can\'t add file');
	}
};

/**
 * Use multer middleware to get file from form/data request
 *
 * @returns 400 / 200 depend of the case.
 */
router.post('/', upload, verify_user, async (req, res) => {
	// @ts-ignore
	const file: Express.Multer.File = req.files['file'][0];
	const user: string = req.body.name;

	try {
		await deletePreviousImg(user);
		await addNewImage(user, file);
		console.log(`New image added on user ${user}`);
		res.status(200)
			.header({'Access-Control-Origin-Allow': '*'});
	} catch (error) {
		console.log(error);
		res.status(400).send('Unexpected Error');
	}
});

export default router;
