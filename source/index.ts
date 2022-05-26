import 'dotenv/config';

import Application from './App';
import { IController } from './utils/interfaces';
import { PostController } from './resources';
import validateEnvVars from './utils/validateEnvVars';

validateEnvVars();

// controllers
const postsController = new PostController();

const appControllers: IController[] = [postsController];
const PORT = Number(process.env.PORT) || 9000;
const App = new Application(PORT, appControllers);
App.startAppListening();
