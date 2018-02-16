import { Component } from '@angular/core';

export class MyFormModel {
	constructor(
		public msg: string
	) {}
}

@Component({
	selector: 'form-app',
	template: `
	<p>{{message}}</p>
	<form>
		<input type="text" id="msg" name="msg" [(ngModel)]="model.msg">
		<input type="button" (click)="onSubmit();" value="click">
	</form>
	`
})
export class FormComponent {
	model = new MyFormModel('message...');
	onSubmit() {
		this.message = 'you typed: ' + this.model.msg;
	}
}

export class MyFormModel2 {
	constructor(
		public msg: string,
		public check: boolean,
		public radio: string
	) {}
}

@Component({
	selector: 'form-app2',
	templateUrl: 'form/template.html'
})
export class FormComponent2 {
	model = new MyFormModel2('message...', false, 'A');
	onSubmit() {
		this.message = this.model.msg + ', ' + this.model.check
			+ ', ' + this.model.radio;
	}
}

export class MyFormModel3 {
	constructor(
		public select: string,
		public select2: string[]
	) {}
}

@Component({
	selector: 'form-app3',
	templateUrl: 'form/template3.html'
})
export class FormComponent3 {
	message = '';
	model = new MyFormModel3('',[]);
	items = ['北海道','本州','四国','九州','沖縄'];
	items2 = ['Windows', 'macOS', 'Linux', 'Android', 'iOS'];
	onSubmit() {
		this.message = this.model.select + ' [' + this.model.select2 + ']';
	}
}

export class MyFormModel4 {
	constructor(
		public color: string,
		public background: string,
		public fontSize: number,
		public padding: number
	) {}
}

@Component({
	selector: 'form-app4',
	templateUrl:'form/template4.html'
})
export class FormComponent4 {
	model = new MyFormModel4('blue','white',24,10);
	message = 'this is sample component.';

	setStyle(){
		return {
			'color': this.model.color,
			'background': this.model.background,
			'font-size': this.model.fontSize + 'pt',
			'padding': this.model.padding + 'px'
		};
	}
}

export class MyFormModel5 {
	constructor(
		public classA: boolean,
		public classB: boolean
	) {}
}

@Component({
	selector: 'form-app5',
	templateUrl:'form/template5.html'
})
export class FormComponent5 {
	model = new MyFormModel5(false, false);
	message = 'this is sample component.';

	setClass(){
		return {
			'classA': this.model.classA,
			'classB': this.model.classB
		};
	}
}
