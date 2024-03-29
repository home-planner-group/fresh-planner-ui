import {Component, OnInit} from '@angular/core';
import {Location} from "@angular/common";
import {UserModel} from "../../../models/user.model";
import {AuthenticationService} from "../../../services/authentication.service";
import {OpenSnackBar} from "../../../utility/snackbar";
import {MatSnackBar} from "@angular/material/snack-bar";
import {Router} from "@angular/router";
import {AppRoute} from "../../../app-routing.module";
import {Store} from "@ngrx/store";
import {AuthAction, AuthState} from "../../../stores/auth.reducer";

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  userInfoData: UserModel | undefined;
  editingDisabled = true;

  constructor(private location: Location,
              private router: Router,
              private snackBar: MatSnackBar,
              private authService: AuthenticationService,
              private authStore: Store<AuthState>) {
  }

  ngOnInit(): void {
    this.loadUserInfo();
  }

  public deleteProfile(): void {
    this.authService.deleteUser().subscribe((response) => {
      OpenSnackBar(this.snackBar, 'Deleted Profile: ' + response.username);
    });
  }

  public logout(): void {
    this.authStore.dispatch(AuthAction.reset());
    this.router.navigate(['/' + AppRoute.DASHBOARD]);
  }

  private loadUserInfo(): void {
    this.authService.getUserInfo().subscribe((response) => {
      this.userInfoData = response;

      OpenSnackBar(this.snackBar, 'Loaded Profile: ' + response.username);
    });
  }

  public navigateBack(): void {
    this.location.back();
  }
}
