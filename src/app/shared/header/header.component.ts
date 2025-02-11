import {Component, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {Router, RouterLink, RouterLinkActive} from "@angular/router";
import {AuthService} from "../../core/service/auth/auth.service";
import {NgIf} from "@angular/common";


@Component({
    selector: 'app-header',
  imports: [
    RouterLink,
    RouterLinkActive,
    NgIf
  ],
    templateUrl: './header.component.html',
    styleUrl: './header.component.scss'
})
export class HeaderComponent implements OnInit{

  constructor(private authService:AuthService, private router:Router) {
  }

  isAuthenticated: boolean = false;

  ngOnInit(): void {
    this.authService.authenticated.subscribe({
      next: value => {
        console.log(value);
        this.isAuthenticated = value
      },
      error:err => console.log(err)
    })

  }

  logout(){
    this.authService.logout().then(()=> {
      this.authService.updateAuthStatus(this.authService.isAuthenticated());
      this.router.navigate(['/home']);
    });
  }


}
