import $ from 'jquery';
import * as ko from 'knockout';
import {MainMenuViewModel} from './MainMenuViewModel';
import { Fireworks } from 'fireworks-js';

$(() => {
	ko.applyBindings({
		mainMenu: new MainMenuViewModel(),
	});

	const container = document.querySelector('.fireworks');
	if (container !== null) {
		const fireworks = new Fireworks(container);
		fireworks.start();

		const fireworksStop = document.querySelector('.fireworks-stop');
		if (fireworksStop !== null) {
			let fireworking = true;
			document.addEventListener('scroll', (event) => {
				const rect = fireworksStop.getBoundingClientRect();
				const bottom = rect.bottom;
				if (bottom > 0) {
					if (!fireworking) {
						fireworks.start();
						fireworking = true;
					}
				} else {
					if (fireworking) {
						fireworks.stop();
						fireworking = false;
					}
				}
			});
		}
	}
});
