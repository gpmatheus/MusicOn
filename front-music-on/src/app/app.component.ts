import { Component } from '@angular/core';

export interface Action {
  menuToggleEnabled: boolean;
  toggleDrawer() : void;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'front-music-on';

  menuButtonEnabled: boolean = false;
  component!: Action;

  onActivate(componentReference: Action): void {
    this.component = componentReference;
    this.menuButtonEnabled = componentReference.menuToggleEnabled;
  }

  toggleDrawer() : void {
    this.component.toggleDrawer();
  }
}
