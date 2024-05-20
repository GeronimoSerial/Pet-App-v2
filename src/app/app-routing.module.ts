import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { ForgotPasswordComponent } from './auth/forgot-password/forgot-password.component';
import { NotFoundComponent } from './shared/not-found/not-found.component';
import { HomeComponent } from './pages/home/home.component';
import { loginGuard } from './core/guards/login.guard';
import { accessGuard } from './core/guards/access.guard';
import { ChatAIComponent } from './pages/chat-ai/chat-ai.component';

const routes: Routes = [
  {
    path: 'auth',
    canActivate: [loginGuard],
    children: [
      {
        path: 'login',
        canActivate: [],
        component: LoginComponent,
      },

      {
        path: 'register',
        component: RegisterComponent,
      },
      {
        path: 'forgot-password',
        component: ForgotPasswordComponent,
      },
    ],
  },
  {
    path: 'pages',
    // canActivate: [accessGuard],
    children: [
      {
        path: 'home',
        component: HomeComponent
      },
      {
        path: 'aivet',
        component: ChatAIComponent,
      }
    ]
  },
  {
    path: '',
    redirectTo: 'pages/home',
    pathMatch: 'full',
  },
  
  {
    path: '',
    redirectTo: 'pages/aivet',
    pathMatch: 'full',
  },
  
  {
    path: '**',
    component: NotFoundComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
