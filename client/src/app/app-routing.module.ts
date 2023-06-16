import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './components/home-page/home-page.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { WrongRouteComponent } from './components/wrong-route/wrong-route.component';
import { AuthGuard, AuthGuardReverse } from './guards/auth.guard';
import { LogBookComponent } from './components/logbook/log-book.component';
import { AddNewLogBookComponent } from './components/add-new-logbook/add-new-log-book.component'
import { EditLogBookComponent } from './components/edit-logbook/edit-log-book.component';

const routes: Routes = [
  { path: 'home', component: HomePageComponent },
  { path: 'login', component: LoginComponent, canActivate: [AuthGuard] },
  { path: 'register', component: RegisterComponent, canActivate: [AuthGuard] },
  { path: 'logbook', component: LogBookComponent, canActivate: [AuthGuardReverse] },
  { path: 'add', component: AddNewLogBookComponent, canActivate: [AuthGuardReverse] },
  { path: 'edit/:id', component: EditLogBookComponent, canActivate: [AuthGuardReverse] },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: '**', component: WrongRouteComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
