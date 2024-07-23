import { Component, OnInit } from '@angular/core';
import { isLoggedIn } from './shared/helpers/auth';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'AiQA-Web';

  constructor(private router: Router) {}

  ngOnInit(): void {
  }
}
