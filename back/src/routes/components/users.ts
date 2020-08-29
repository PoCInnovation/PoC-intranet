import Router from 'express';
import httpStatus from 'http-status-codes';
import AirtableSDK from '../../integrations/airtable/AirtableSDK';
import { prisma } from '../../context';
import { verifyId } from '../middlewares/users';

const router = Router();

router.get('/:id/projects', verifyId, async (req, res) => {
	const { id } = req.params;

	try {
		const user = await prisma.user.findOne({
			where: { id },
		});

		if (!user) {
			res.status(httpStatus.NOT_FOUND).send(`User ${id} does not exist`);
			return;
		}

		const userProjects = await AirtableSDK.getMemberProjects(user.mail);
		res.status(httpStatus.OK).send(userProjects);
	} catch (e) {
		res.status(httpStatus.INTERNAL_SERVER_ERROR).send(e.message);
	}
});

export default router;
