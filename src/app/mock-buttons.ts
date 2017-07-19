import { Button } from './button';

import { HelloIonicPage } from '../pages/hello-ionic/hello-ionic';
import { JourneyPage }       from '../pages/journey/journey';

export const BUTTONS : Button [] = [
	{ name : '行程' ,component: JourneyPage },
	{ name : '钱包' ,component: HelloIonicPage },
	{ name : '设置' ,component: HelloIonicPage }
];