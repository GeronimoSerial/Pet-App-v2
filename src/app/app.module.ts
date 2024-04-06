import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { ForgotPasswordComponent } from './auth/forgot-password/forgot-password.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { NotFoundComponent } from './shared/not-found/not-found.component';
import { InputComponent } from './auth/modules/input/input.component';
import { HTTP_INTERCEPTORS, HttpClientModule, provideHttpClient } from '@angular/common/http';
import { ModalComponent } from './modal/modal.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { DarkModeComponent } from './dark-mode/dark-mode.component';
import { HomeComponent } from './pages/home/home.component';
import {ToastrModule} from 'ngx-toastr';
import {MatTabsModule} from '@angular/material/tabs';
import { SearchPetsComponent } from './pages/tabs-pages/search-pets/search-pets.component';
import { UploadPetsComponent } from './pages/tabs-pages/upload-pets/upload-pets.component';
import { MyPetsComponent } from './pages/tabs-pages/my-pets/my-pets.component';
import {MatDialogModule, MatDialog, MAT_DIALOG_DATA, MatDialogRef, MatDialogTitle, MatDialogContent, MatDialogActions, MatDialogClose} from '@angular/material/dialog';
import {MatButtonModule} from '@angular/material/button';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInput, MatInputModule} from '@angular/material/input';
import {InputTextModule} from 'primeng/inputtext';
import {MatSelect, MatSelectModule} from '@angular/material/select';
import {MatTableModule} from '@angular/material/table';
import {MatCardModule} from '@angular/material/card';
import { PopupComponent } from './pages/tabs-pages/search-pets/popup/popup.component';
// import { HttpInterceptorService } from './core/interceptors/http.interceptor';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    ForgotPasswordComponent,
    NavbarComponent,
    NotFoundComponent,
    InputComponent,
    ModalComponent,
    DarkModeComponent,
    HomeComponent,
    SearchPetsComponent,
    UploadPetsComponent,
    MyPetsComponent,
    PopupComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule,
    ToastrModule.forRoot(),
    MatTabsModule,
    HttpClientModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatDialogTitle,
    MatDialogContent,
    MatDialogActions,
    MatDialogClose,
    InputTextModule,
    MatSelectModule,
    MatTableModule,
    MatCardModule
  ],
  providers: [
    provideClientHydration(),
    provideAnimationsAsync(),
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
