import { Component } from '@angular/core';
import { Wurst } from './wurst.model';
// import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  wursts: Wurst[] = [
    // new Wurst('Kaisekrainer', 10, 80, 5, 5),
    new Wurst('Wiener', 20, 30, 40, 10)
  ];

  gesamt = this.wursts[0].zt1 * 10;
}
