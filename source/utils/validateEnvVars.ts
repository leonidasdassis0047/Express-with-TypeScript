import * as envalid from 'envalid';

const validateEnvVars = (environment: NodeJS.ProcessEnv | unknown) => {
  envalid.cleanEnv(environment, {
    PORT: envalid.num(),
    DATABASE_URI: envalid.str(),
    DATABASE_NAME: envalid.str(),
    JWT_SECRET: envalid.str()
  });
};

export default validateEnvVars;
