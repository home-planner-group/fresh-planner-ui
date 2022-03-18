import {Component, OnInit} from '@angular/core';
import {AppRoute} from "../../../app-routing.module";
import {Location} from "@angular/common";
import {Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private location: Location,
              private router: Router) {
  }

  ngOnInit(): void {
  }

  public submitLogin(): void {
    this.router.navigate(['/' + AppRoute.DASHBOARD]);
  }

  public navigateToRegistration(): void {
    this.router.navigate(['/' + AppRoute.REGISTRATION]);
  }

  public navigateBack(): void {
    this.location.back();
  }
}
