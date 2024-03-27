import PinoPretty from 'pino-pretty';
import pino from 'pino';


const logger = pino(
	PinoPretty({
		colorize: true,
      translateTime:"SYS:standard",
	}),
);
export default logger;
