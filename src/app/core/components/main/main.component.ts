import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from '../navbar/navbar.component';
import { RouterOutlet } from '@angular/router';
import {MatButtonModule} from '@angular/material/button';
import {MatSidenavModule} from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { LoginComponent } from '../login/login.component';

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [CommonModule, NavbarComponent, RouterOutlet, MatSidenavModule, MatButtonModule, MatIconModule, LoginComponent],
  
  templateUrl: './main.component.html',
  styleUrl: './main.component.scss'
})
export class MainComponent {
  showFiller = false;

}
