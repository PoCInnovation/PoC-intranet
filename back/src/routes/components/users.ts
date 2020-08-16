import Router from 'express';
import httpStatus from 'http-status-codes';
import AirtableSDK from '../../integrations/airtable/AirtableSDK';
import { prisma } from '../../context';
import { verifyId } from '../middlewares/users';

const users = Router();

users.get('/:id/projects', verifyId, async (req, res) => {
	try {
		const user = await prisma.user.findOne({
			where: { id: req.params.id },
		});

		if (!user) {
			throw new Error('User does not exist');
		}

		const userProjets = await AirtableSDK.getMemberProjects(user.mail);
		res.status(httpStatus.OK).send(userProjets);
	} catch (e) {
		res.status(httpStatus.UNAUTHORIZED).send(e.message);
	}
});

export default users;
