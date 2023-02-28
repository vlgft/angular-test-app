import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  isCollapsed = false;
  // title = 'FalcoApp';

  about =
  function abouts() {
    alert('FalcoApp is running! (^.^)\n \tGood Jobs!')
  }

}
