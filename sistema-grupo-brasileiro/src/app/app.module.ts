import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { NgxPaginationModule } from 'ngx-pagination';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './modules/core/login/login.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RecoveryPasswordComponent } from './modules/core/recovery-password/recovery-password.component';
import { ResetPasswordComponent } from './modules/core/reset-password/reset-password.component';
import { RegisterComponent } from './modules/core/register/register.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { provideHttpClient, withFetch } from '@angular/common/http';
import { provideToastr } from 'ngx-toastr';
import { provideAnimations } from '@angular/platform-browser/animations';
import { HeaderComponent } from './modules/layout/header/header.component';
import { SidenavComponent } from './modules/layout/sidenav/sidenav.component';
import { CollaboratorSystemComponent } from './modules/feature/collaborator-system/collaborator-system.component';
import { ListCollaboratorsComponent } from './modules/feature/list-collaborators/list-collaborators.component';
import { CreateCollaboratorComponent } from './modules/feature/create-collaborator/create-collaborator.component';
import { CheckRequestsComponent } from './modules/feature/check-requests/components/check-requests.component';
import { MainProfileComponent } from './modules/core/profile/main-profile/main-profile.component';
import { UserDataComponent } from './modules/core/profile/user-data/user-data.component';
import { EditUserDataComponent } from './modules/core/profile/edit-user-data/edit-user-data.component';
import { RequestDetailsComponent } from './modules/feature/request-details/request-details.component';
import { NgCircleProgressModule } from 'ng-circle-progress';
import { ProfileRoutingModule } from './modules/core/profile/main-profile/profile-routing.module';
import { CreateRequestComponent } from './modules/feature/create-request/create-request.component';

import { NgScrollbarModule } from 'ngx-scrollbar';
import { ColorClassDirective } from './modules/directives/colorClass/color-class.directive';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RecoveryPasswordComponent,
    ResetPasswordComponent,
    RegisterComponent,
    HeaderComponent,
    SidenavComponent,
    CollaboratorSystemComponent,
    CreateCollaboratorComponent,
    ListCollaboratorsComponent,
    CheckRequestsComponent,
    MainProfileComponent,
    UserDataComponent,
    EditUserDataComponent,
    RequestDetailsComponent,
    CreateRequestComponent,
    ColorClassDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule,
    NgxPaginationModule,
    NgCircleProgressModule.forRoot({
    }),
    ProfileRoutingModule,
    NgScrollbarModule,
    
  ],
  providers: [
    provideHttpClient(withFetch()),
    provideToastr(),
    provideAnimations()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
