import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { ScrollingModule } from '@angular/cdk/scrolling';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { UsersComponent } from './users/users.component';

import { NZ_ICONS } from 'ng-zorro-antd/icon';
import { IconDefinition } from '@ant-design/icons-angular';
import * as AllIcons from '@ant-design/icons-angular/icons';
import { DemoNgZorroAntdModule } from './ng-zorro-antd.module';
import { AccountsComponent } from './accounts/accounts.component';
import { AccountLogsComponent } from './accounts/acounts.logs.component';
import { MitreComponent } from './mitre/mitre.component';
import { HttpClientModule } from '@angular/common/http';

const antDesignIcons = AllIcons as {
  [key: string]: IconDefinition;
};
const icons: IconDefinition[] = Object.keys(antDesignIcons).map(key => antDesignIcons[key])

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    UsersComponent,
    AccountsComponent,
    AccountLogsComponent,
    MitreComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    ScrollingModule,
    AppRoutingModule,
    DemoNgZorroAntdModule,
    HttpClientModule
  ],
  providers: [{ provide: NZ_ICONS, useValue: icons }],
  bootstrap: [AppComponent]
})
export class AppModule { }
