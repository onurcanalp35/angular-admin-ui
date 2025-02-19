import { Routes } from '@angular/router';
import { MainContentComponent } from './core/components/main-content/main-content.component';
import { LoginComponent } from './core/components/login/login.component';
import { MainComponent } from './core/components/main/main.component';
import { UsersComponent } from './core/components/users/users.component';

export const routes: Routes = [
    {path: '', redirectTo: "/home", pathMatch: 'full'},
    {path: 'login', component: LoginComponent},
    {path: 'home', component: MainComponent, children: [
        {path: "", component: MainContentComponent},
        {path: "users", component: UsersComponent}
    ]}
];
