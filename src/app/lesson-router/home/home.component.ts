import { Component, OnInit } from '@angular/core';
import { combineLatest, of, switchMap } from 'rxjs';
import { AuthService } from '../auth/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  readonly vm$ = combineLatest([this.authService.isLoggedIn$]).pipe(
    switchMap(
      ([isLoggedIn]) => of({ isLoggedIn })
    )
  );

  constructor(private authService: AuthService) {}

  ngOnInit(): void {}
}
