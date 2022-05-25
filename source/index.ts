import 'dotenv/config';

import Application from './App';
import { IController } from './utils/interfaces';

const appControllers: IController[] = [];
const PORT = Number(process.env.PORT) || 9000;
const App = new Application(PORT, appControllers);
App.startAppListening();
