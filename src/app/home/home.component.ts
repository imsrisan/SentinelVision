import { Component } from '@angular/core';
import { ToolbarComponent } from '../toolbar/toolbar.component';
import { WelcomeComponent } from '../welcome/welcome.component';

@Component({
  selector: 'app-home',
  imports: [ToolbarComponent, WelcomeComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  
}
