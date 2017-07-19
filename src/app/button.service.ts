import { Injectable } from '@angular/core';

import { Button } from './button';
import { BUTTONS } from './mock-buttons';

@Injectable()
export class ButtonService{

	getButtons(): Promise<Button[]> {
		return Promise.resolve(BUTTONS);
	}

}