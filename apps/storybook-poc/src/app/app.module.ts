import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { NavLayoutComponent } from './components/nav-comp-basic/nav-layout/nav-layout.component';
import { NavItemComponent } from './components/nav-comp-basic/nav-item/nav-item.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatSidenavModule } from '@angular/material/sidenav';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { AppRoutes } from './app.routing';
import { AccountsComponent } from './components/accounts/accounts.component';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { ButtonComponent } from './components/button/button.component';
import { ButtonGroupComponent } from './components/button-group/button-group.component';
import { AvatarComponent } from './components/avatar/avatar.component';
import { ProgressBarComponent } from './components/progress-bar/progress-bar.component';
import { DatePickerComponent } from './components/date-picker/date-picker.component';
import { TableComponent } from './components/table/table.component';
import { FormComponent } from './components/form/form.component';
import { CardComponent } from './components/card/card.component';

@NgModule({
  declarations: [
    AppComponent,
    NavLayoutComponent,
    NavItemComponent,
    DashboardComponent,
    AccountsComponent,
    ButtonComponent,
    ButtonGroupComponent,
    AvatarComponent,
    ProgressBarComponent,
    DatePickerComponent,
    TableComponent,
    FormComponent,
    CardComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([], { initialNavigation: 'enabledBlocking' }),
    FlexLayoutModule,
    MatSidenavModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatIconModule,
    CommonModule,
    AppRoutes,
    MatSnackBarModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
