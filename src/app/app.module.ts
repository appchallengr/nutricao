import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HeaderModule } from 'iris-header-v2';
import { environment } from 'src/environments/environment';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { ApiService } from './core/services/api.service';
import { HelperService } from './core/services/helper.service';
import { MAT_DIALOG_DATA } from '@angular/material';
import { DateFormatService } from './core/services/dateFormat.service';
import { ExcelService } from './core/services/excel.service';
import { AuthCallbackComponent } from './core/auth-callback/auth-callback.component';
import { AuthGuard } from './core/auth/auth.guard';
import { TokenInterceptor } from './core/interceptor/token.interceptor';
import { NgxContentLoadingModule } from 'ngx-content-loading';
import { AuthTokenService } from './core/auth/auth.token.service';
import { PoliciesService } from './core/services/policies.service';

@NgModule({
  declarations: [
    AppComponent,
    AuthCallbackComponent
  ],
  imports: [
    NgxContentLoadingModule,
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    HeaderModule.forRoot(environment),
    BrowserAnimationsModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptor,
      multi: true
    },
    ExcelService,
    ApiService,
    PoliciesService,
    HelperService,
    AuthGuard,
    AuthTokenService,
    { provide: MAT_DIALOG_DATA, useValue: [] }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
