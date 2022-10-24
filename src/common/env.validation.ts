import * as Joi from 'joi';
import { APP_SECRET, PORT, PRISMA_LOGGING } from './contants';
const envValidationSchema = Joi.object({
  NODE_ENV: Joi.string()
    .valid('local', 'development', 'production')
    .default('local'),
  [PORT]: Joi.number().default(3000),
  [APP_SECRET]: Joi.string().required(),
  [PRISMA_LOGGING]: Joi.boolean().default(false),
});
export default envValidationSchema;
