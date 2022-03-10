import { Component, HostBinding, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class AppComponent {
  
  @HostBinding('class') classes = 'app-container';

  year = new Date().getFullYear()

}
