import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { AccountsComponent } from './accounts/accounts.component';
import { AccountLogsComponent } from './accounts/acounts.logs.component';
import { HomeComponent } from './home/home.component';
import { MitreComponent } from './mitre/mitre.component';
import { UsersComponent } from './users/users.component';


const routes: Routes = [
  { path: "", component: HomeComponent },
  { path: "home", component: HomeComponent },
  { path: "user/list-user", component: UsersComponent},
  { path: "user/history", component: AccountLogsComponent},
  { path: "user/profile", component: AccountsComponent},
  { path: "mitre", component: MitreComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule, NzMenuModule]
})
export class AppRoutingModule { }
