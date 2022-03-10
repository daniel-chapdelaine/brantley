import { Component, HostBinding, OnInit, ViewEncapsulation } from '@angular/core';
// import {
//   BreakpointObserver,
//   BreakpointState
// } from '@angular/cdk/layout';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class AppComponent implements OnInit {
  
  @HostBinding('class') classes = 'app-container';

  isMobileUser = false;
  year = new Date().getFullYear()

  constructor() {}

  ngOnInit() {
    const ua = navigator.userAgent;
    if(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini|Mobile|mobile|CriOS/i.test(ua)) {
      this.isMobileUser = true;
    } else {
      this.isMobileUser = false;
    }
    console.log(this.isMobileUser);
    
    // console.log()
    // this.breakpointObserver
    //   .observe(['(min-width: 500px)'])
    //   .subscribe((state: BreakpointState) => {
    //     if (state.matches) {
    //       console.log('Viewport width is 500px or greater!');
    //     } else {
    //       console.log('Viewport width is less than 500px!');
    //     }
    //   });
  }

}
