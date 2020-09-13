import { Request, Response, NextFunction } from 'express';
import httpStatus from 'http-status-codes';

// eslint-disable-next-line import/prefer-default-export
export const verifyId = (req: Request, res: Response, next: NextFunction): void => {
	if (!req.params.id) {
		res.status(httpStatus.BAD_REQUEST).send('Id is required');
	} else {
		next();
	}
};
