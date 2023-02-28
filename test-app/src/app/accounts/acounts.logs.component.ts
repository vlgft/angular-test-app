import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-account-logs',
  template: `
    <nz-breadcrumb>
      <nz-breadcrumb-item>Users</nz-breadcrumb-item>
      <nz-breadcrumb-item>History</nz-breadcrumb-item>
    </nz-breadcrumb>
    <div class="inner-content">
      <h1>This is User History</h1>
    </div>
  `,
  styles: [`
    nz-breadcrumb {
      margin: 16px 0;
    }

    .inner-content {
      padding: 24px;
      background: #fff;
      // min-height: 360px;
      height: 100%;
    }

  `],
})
export class AccountLogsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
