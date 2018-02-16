import { Component } from '@angular/core';

@Component({
	selector: 'my-app3',
	template: `<p>{{title}}</p>`
})
export class AppComponent {
	title = "１つ目のコンポーネント";
}

@Component({
	selector: 'other-app',
	template: `<p>{{title}}</p>`
})
export class OtherComponent {
	title = "Second Component!";
}
