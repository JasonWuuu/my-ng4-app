import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { SettingsComponent } from '../settings/settings.component';
import { ProfileDemoComponent } from '../profile-demo/profile-demo.component';
import { PasswordDemoComponent } from '../password-demo/password-demo.component';



const ROUTES: Routes = [
  {
    path: '', component: SettingsComponent, children: [
      { path: 'profile/:username', component: ProfileDemoComponent },
      { path: 'password', component: PasswordDemoComponent }]
  }
];
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(ROUTES)
  ],
  declarations: [SettingsComponent, ProfileDemoComponent, PasswordDemoComponent],
  providers: []
})
export class SettingModule { }
