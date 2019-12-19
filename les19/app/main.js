import { ControllerNews } from './news/ControllerNews.js';
import { ControllerMenu } from './menu/ControllerMenu.js';
import { Publisher } from './share/Publisher.js';
const publisher = new Publisher();
const menu = new ControllerMenu(publisher.ctrls);
const news = new ControllerNews(publisher.ctrls);