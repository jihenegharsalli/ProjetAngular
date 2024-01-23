// import { Component } from '@angular/core';

// @Component({
//   selector: 'app-signin',
//   templateUrl: './signin.component.html',
//   styleUrls: ['./signin.component.css']
// })
// export class SigninComponent {

// }

// signin.component.ts
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent {
  email: string = '';
  password: string = '';
  errorMessage: string = '';

  constructor(private router: Router) {}

  signIn(event: Event): void {
    // Prevent the default form submission
    event.preventDefault();

    // Vérifier si l'email et le mot de passe sont corrects
    if (this.email === 'admin@example.com' && this.password === 'admin') {
      // Si c'est l'admin, rediriger vers la page d'accueil
      this.router.navigate(['/home']);
    } else {
      // Gérer des informations d'identification invalides (par exemple, afficher un message d'erreur)
      this.errorMessage = 'Email ou mot de passe incorrect.';
    }
  }
}
