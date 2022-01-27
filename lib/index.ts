import * as dotenv from 'dotenv';
import { App } from './App';

dotenv.config();

const myApp = new App({ name: process.env.APP_NAME || 'My App' });

console.log(`${myApp.name} is up and running!`);
