import { Component } from '@angular/core';

@Component({
  selector: 'app-hello',
  templateUrl: './hello.component.html',
  styleUrls: ['./hello.component.scss']
})
export class HelloComponent {
  // View Model Attribute
  name = '';
  greetings = '';

  // View Logic
  sayHello(): void {
    this.greetings = 'Hello ' + this.name;
  }
}
