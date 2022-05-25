import 'dotenv/config';

import Application from './App';

const PORT = Number(process.env.PORT) || 9000;
const App = new Application(PORT);
App.startAppListening();
