import envalid from 'envalid';

const validateEnvVars = () => {
  envalid.cleanEnv(process.env, {
    PORT: envalid.num({ default: 9000 }),
    DATABASE_URI: envalid.str(),
    DATABASE_NAME: envalid.str(),
    JWT_SECRET: envalid.str()
  });
};

export default validateEnvVars;
