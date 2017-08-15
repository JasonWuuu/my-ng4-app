import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgModel } from '@angular/forms';
import { AppComponent } from './app.component';
import { HttpModule } from '@angular/http';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';
import { MyNewComponentComponent } from './my-new-component/my-new-component.component';
import { Demo1ComponentComponent } from './demo1-component/demo1-component.component';
import { MessageService } from './services/message.service';
import { DebounceClickDirective } from './directives/appDebounceClick';
import { DebounceClickDemoComponent } from './debounce-click-demo/debounce-click-demo.component';
import { HttpClientDemoComponent } from './http-client-demo/http-client-demo.component';
import { AuthService } from './services/auth.service';
import { AuthInterceptor } from './services/auth-interceptor';
import { ForkJoinDemoComponent } from './fork-join-demo/fork-join-demo.component';
import { UserService } from './services/user.service';
import './common/custom-operator';
import { HttpDemoComponent } from './http-demo/http-demo.component';

const appRoutes: Routes = [
  { path: '', component: Demo1ComponentComponent },
  { path: 'new', component: MyNewComponentComponent },
  { path: 'debounce', component: DebounceClickDemoComponent },
  { path: 'httpclient', component: HttpClientDemoComponent },
  { path: 'forkjoin', component: ForkJoinDemoComponent },
  { path: 'http', component: HttpDemoComponent },
  // {
  //   path: 'heroes',
  //   component: HeroListComponent,
  //   data: { title: 'Heroes List' }
  // },
  // { path: '',
  //   redirectTo: '/heroes',
  //   pathMatch: 'full'
  // },
  // { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    NgModel,
    MyNewComponentComponent,
    Demo1ComponentComponent,
    DebounceClickDirective,
    DebounceClickDemoComponent,
    HttpClientDemoComponent,
    ForkJoinDemoComponent,
    HttpDemoComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    HttpClientModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: false } // <-- debugging purposes only
    )
  ],
  providers: [MessageService,
    AuthService,
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true },
    UserService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }



