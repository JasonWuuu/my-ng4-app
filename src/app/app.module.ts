import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgModel } from '@angular/forms';
import { AppComponent } from './app.component';
import { RouterModule, Routes } from '@angular/router';
import { MyNewComponentComponent } from './my-new-component/my-new-component.component';
import { Demo1ComponentComponent } from './demo1-component/demo1-component.component';
import { MessageService } from './services/message.service';

const appRoutes: Routes = [
  { path: '', component: Demo1ComponentComponent },
  { path: 'new', component: MyNewComponentComponent },
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
    Demo1ComponentComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: false } // <-- debugging purposes only
    )
  ],
  providers: [MessageService],
  bootstrap: [AppComponent]
})
export class AppModule { }



