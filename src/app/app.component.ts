import { Component, Input, OnChanges, SimpleChange  } from '@angular/core';
import { Wurst } from './wurst.model';
// import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  isGesamtcalled = false;

  wursts: Wurst[] = [
    // new Wurst('Kaisekrainer', 10, 80, 5, 5),
    new Wurst('Wiener', 0, 0, 0, 0)
  ];
  // 20 30 40 10
  getSum(gesamtWurst: Wurst) {
    console.log(gesamtWurst);
    this.wursts[0].gesamt = gesamtWurst.zt1 + gesamtWurst.zt2 + gesamtWurst.zt3 + gesamtWurst.zt4;
  }

  onSumChanged(event: Event) {
    this.wursts[0].zt1 = this.wursts[0].gesamt / 5;
    this.wursts[0].zt2 = (this.wursts[0].gesamt / 100) * 30;
    this.wursts[0].zt3 = (this.wursts[0].gesamt / 100) * 40;
    this.wursts[0].zt4 = this.wursts[0].gesamt / 10;
  }

  onZtChanged(event: Event) {
    if (event.srcElement.id.startsWith('zt1')) {
      this.wursts[0].zt2 = (this.wursts[0].zt1 / 2) * 3;
      this.wursts[0].zt3 = (this.wursts[0].zt1 / 2) * 4;
      this.wursts[0].zt4 = (this.wursts[0].zt1 / 2);
    }else if ((event.srcElement.id.startsWith('zt2'))) {
      this.wursts[0].zt1 = (this.wursts[0].zt2 / 3) * 2;
      this.wursts[0].zt3 = (this.wursts[0].zt2 / 3) * 4;
      this.wursts[0].zt4 = (this.wursts[0].zt2 / 3);
    }else if ((event.srcElement.id.startsWith('zt3'))) {
      this.wursts[0].zt1 = (this.wursts[0].zt3 / 4) * 2;
      this.wursts[0].zt2 = (this.wursts[0].zt3 / 4) * 3;
      this.wursts[0].zt4 = (this.wursts[0].zt3 / 4);
    }else if ((event.srcElement.id.startsWith('zt4'))) {
      this.wursts[0].zt1 = (this.wursts[0].zt4) * 2;
      this.wursts[0].zt2 = (this.wursts[0].zt4) * 3;
      this.wursts[0].zt3 = (this.wursts[0].zt4) * 4;
    }

    this.wursts[0].gesamt = this.wursts[0].zt1 + this.wursts[0].zt2 + this.wursts[0].zt3 + this.wursts[0].zt4;
  }
}
