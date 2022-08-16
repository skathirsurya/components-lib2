import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NxWelcomeComponent } from './nx-welcome.component';
import { HttpClientModule } from '@angular/common/http';
import { NavLayoutComponent } from './components/nav-layout/nav-layout.component';
import { NavItemComponent } from './components/nav-item/nav-item.component';
import { RouterModule, Routes } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'app',
  },
];

@NgModule({
  declarations: [
    AppComponent,
    NxWelcomeComponent,
    NavLayoutComponent,
    NavItemComponent,
  ],
  imports: [BrowserModule, HttpClientModule, RouterModule.forRoot(routes), BrowserAnimationsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
