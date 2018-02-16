import { Component } from '@angular/core';

@Component({
	selector: 'my-app2',
	template: `
		<p>{{title}}</p>
		<p>{{message}}</p>
	`
})

export class AppComponent {
	title = "Hello!";
	message = "これは、Angularのサンプルです。"
}
