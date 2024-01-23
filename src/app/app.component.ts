// import { Component ,HostListener} from '@angular/core';

// @Component({
//   selector: 'app-root',
//   templateUrl: './app.component.html',
//   styleUrls: ['./app.component.css']
// })
// export class AppComponent {
//   title = 'Netflix';
//   navbg:any;
//   @HostListener('document:scroll') scrollover(){
//     console.log(document.body.scrollTop,'scrolllength#');
//     if(document.body.scrollTop >0 || document.documentElement.scrollTop >0){
//       this.navbg = {
//         'background-color':'#000000'
//       }
//     }
//     else
//     {
//     this.navbg={}
//     }
// }}

import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Netflix';
  isNavbarTransparent = true;
  navbg: any; // Declare navbg property

  @HostListener('document:scroll') scrollover() {
    console.log(document.body.scrollTop, 'scrolllength#');
    const scrollTop = document.body.scrollTop || document.documentElement.scrollTop;

    // Change isNavbarTransparent based on scroll position
    this.isNavbarTransparent = scrollTop === 0;

    // Update navbg property based on isNavbarTransparent
    this.navbg = {
      'background-color': this.isNavbarTransparent ? 'transparent' : '#E50914'
    };
  }
}
