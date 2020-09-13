import { Logger } from '@tsed/logger';

/** Define an Application logger */
const logger = new Logger('Intranet');

/** Define different outputs depends of the cases */
logger.appenders
	.set('Information log', {
		type: 'stdout',
		levels: ['debug', 'info', 'trace'],
	})
	.set('Error log', {
		type: 'stderr',
		levels: ['fatal', 'error', 'warn'],
	})
	.set('Safe log file', {
		type: 'file',
		filename: `${__dirname}/../logs/app.log`,
		layout: {
			type: 'json',
			separator: ',',
		},
	});

export default logger;
