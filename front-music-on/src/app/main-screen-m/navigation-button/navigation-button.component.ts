import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navigation-button',
  templateUrl: './navigation-button.component.html',
  styleUrls: ['./navigation-button.component.css']
})
export class NavigationButtonComponent implements OnInit {

  @Input()
  icon: string = '';

  @Input()
  textContent: string = '';

  @Input()
  path: string = '';

  router: Router;
  constructor(private r: Router) {
    this.router = r;
  }

  ngOnInit(): void {
  }

  redirectTo(path: string): void {
    this.router.navigate([path]);
  }

}
