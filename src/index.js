import './client/main.css';
import { Main } from './client/Main.elm';
import registerServiceWorker from './client/registerServiceWorker';

Main.embed(document.getElementById('root'));

registerServiceWorker();
