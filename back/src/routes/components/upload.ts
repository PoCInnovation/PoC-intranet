import {Router, Request, Response, NextFunction} from 'express';
import multer from "multer";
import {prisma} from "../../context";
import * as fs from "fs";

/**
 * @description Allow upload and fixe field
 */
const upload = multer().fields([
		{name: 'file', maxCount: 1},
		{name: 'name', maxCount: 1}
	]
);

const path = __dirname + "/../../../../front/public/profil_pic/";
const router = Router();

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
}

const getExtension = (filename: string) => {
	return filename.substring(filename.lastIndexOf('.') + 1, filename.length);
}

const deletePreviousImg = async (id: string) => {
	const user = await prisma.user.findOne(
		{
			where: {id}
		});
	if (user && user.profil_pic) {
		try {
			fs.unlinkSync(path + user.profil_pic)
		} catch (error) {
			throw new Error("Can't delete previous image");
		}
	}
}

const addNewImage = async (id: string, file: any) => {
	const extension = getExtension(file.originalname);

	try {
		await fs.writeFileSync(path + id + extension, file.buffer);
		await prisma.user.update({
			where: {id},
			data: {profil_pic: id + extension}
		});
	} catch (error) {
		throw new Error("Can't add file");
	}
}

router.post('/', upload, verify_user, async (req, res) => {
	const file = req.files['file'][0];
	const user = req.body.name;

	try {
		await deletePreviousImg(user);
		await addNewImage(user, file);
	} catch (error) {
		res.status(400).send('Unexpected Error');
		return;
	}
	res.status(200)
		.header({"Access-Control-Origin-Allow": "*"})
})

export default router;
