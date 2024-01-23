// // import { NgModule } from '@angular/core';
// // import { RouterModule, Routes } from '@angular/router';
// // import { HomeComponent } from './pages/home/home.component';
// // import { SearchComponent } from './pages/search/search.component';
// // import { MovieDetailsComponent } from './pages/movie-details/movie-details.component';
// // import { SigninComponent } from './pages/signin/signin.component';
// // import { SignupComponent } from './pages/signup/signup.component';

// // import { FormsModule } from '@angular/forms';





// // const routes: Routes = [
// //   {path:'',component:HomeComponent},
// //   {path:'search',component:SearchComponent},
// //   {path:'movie/:id',component:MovieDetailsComponent},{ path: '', component: HomeComponent },
// //   { path: 'signin', component: SigninComponent },
// //   { path: 'signup', component: SignupComponent }
// // ];

// // @NgModule({
// //   imports: [RouterModule.forRoot(routes)],
// //   exports: [RouterModule]
// // })
// // export class AppRoutingModule { }
// import { NgModule } from '@angular/core';
// import { RouterModule, Routes } from '@angular/router';
// import { HomeComponent } from './pages/home/home.component';
// import { SearchComponent } from './pages/search/search.component';
// import { MovieDetailsComponent } from './pages/movie-details/movie-details.component';
// import { SigninComponent } from './pages/signin/signin.component';
// import { SignupComponent } from './pages/signup/signup.component';

// import { FormsModule } from '@angular/forms'; // Import FormsModule here

// const routes: Routes = [
//   // { path: '', redirectTo: '/signin', pathMatch: 'full' }, // Redirect to 'signin'
//   // { path: 'home', component: HomeComponent },
//   // { path: 'search', component: SearchComponent },
//   // { path: 'movie/:id', component: MovieDetailsComponent },
//   // { path: 'signin', component: SigninComponent },
//   // { path: 'signup', component: SignupComponent },
//   // { path: '', component: SigninComponent }, // Display 'SigninComponent' on the default route
//   // { path: 'home', component: HomeComponent },
//   // { path: 'search', component: SearchComponent },
//   // { path: 'movie/:id', component: MovieDetailsComponent },
//   // { path: 'signup', component: SignupComponent },


//  { path: '', component: HomeComponent },
//   { path: 'search', component: SearchComponent },
//   { path: 'movie/:id', component: MovieDetailsComponent },
//   { path: '', component: HomeComponent },
//   { path: 'signin', component: SigninComponent },
//   { path: 'signup', component: SignupComponent },
//   { path: 'home', component: HomeComponent },
// ];

// @NgModule({
//   imports: [RouterModule.forRoot(routes), FormsModule], // Add FormsModule here
//   exports: [RouterModule]
// })
// export class AppRoutingModule {}


// app-routing.module.ts

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { SearchComponent } from './pages/search/search.component';
import { MovieDetailsComponent } from './pages/movie-details/movie-details.component';
import { SigninComponent } from './pages/signin/signin.component';
import { SignupComponent } from './pages/signup/signup.component';

const routes: Routes = [
  { path: '', component: SigninComponent }, // Set 'SigninComponent' as the default route
  { path: 'home', component: HomeComponent },
  { path: 'search', component: SearchComponent },
  { path: 'movie/:id', component: MovieDetailsComponent },
  { path: 'signin', component: SigninComponent },
  { path: 'signup', component: SignupComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
