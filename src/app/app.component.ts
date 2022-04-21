import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  value: number;
  lastValue: number;

  onSubmit() {
    this.lastValue = this.value;
  }
}
