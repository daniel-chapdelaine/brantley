import { Component, HostBinding, OnInit, ViewEncapsulation } from '@angular/core';
import {
  BreakpointObserver,
  BreakpointState
} from '@angular/cdk/layout';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class AppComponent implements OnInit {
  
  @HostBinding('class') classes = 'app-container';

  showFullGiftCardText = false;
  showFullFooterList = false;
  isMobileUser = false;
  isMobileSize = false;
  year = new Date().getFullYear()

  constructor(public breakpointObserver: BreakpointObserver) {}

  ngOnInit() {
    const ua = navigator.userAgent;
    if(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini|Mobile|mobile|CriOS/i.test(ua)) {
      this.isMobileUser = true;
    } else {
      this.isMobileUser = false;
    }
    this.breakpointObserver
      .observe(['(min-width: 600px)'])
      // .pipe(takeUntil)
      .subscribe((state: BreakpointState) => {
        if (state.matches) {
          this.isMobileSize = false;
          this.showFullGiftCardText = true;
        } else {
          this.isMobileSize = true;
          this.showFullGiftCardText = false;
        }
      });

    this.breakpointObserver
      .observe(['(min-width: 900px)'])
       // .pipe(takeUntil)
      .subscribe((state: BreakpointState) => {
        if (state.matches) {
          this.showFullFooterList = true;
        } else {
          this.showFullFooterList = false;
        }
      });
  }

}
