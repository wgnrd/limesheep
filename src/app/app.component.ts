import { Component, Input, OnChanges, SimpleChange  } from '@angular/core';
import { Wurst } from './wurst.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  isGesamtcalled = false;

  wursts: Wurst[] = [
    new Wurst('Kaisekrainer', 10, 80, 5, 5),
    new Wurst('Wiener'      , 20, 30, 40, 10)
  ];

  gesamtZt: number[] = [
    0, 1, 2, 3
  ];

  getSum(gesamtWurst: Wurst) {
    console.log(gesamtWurst);
    this.wursts[0].gesamt = gesamtWurst.zt1 + gesamtWurst.zt2 + gesamtWurst.zt3 + gesamtWurst.zt4;
  }

  onSumChanged(event: Event, i: number) {
    const gesamtProzent = this.wursts[i].gesamt / 100;
    this.wursts[i].zt1 = gesamtProzent * this.wursts[i].antzt1;
    this.wursts[i].zt2 = gesamtProzent * this.wursts[i].antzt2;
    this.wursts[i].zt3 = gesamtProzent * this.wursts[i].antzt3;
    this.wursts[i].zt4 = gesamtProzent * this.wursts[i].antzt4;
    this.calculateGesamtZt();
  }

  onZtChanged(event: Event, i: number) {
    switch (event.srcElement.id) {
      case 'zt1':
        const foo1 = this.wursts[i].zt1 / this.wursts[i].antzt1;
        this.wursts[i].zt2 = foo1 * this.wursts[i].antzt2;
        this.wursts[i].zt3 = foo1 * this.wursts[i].antzt3;
        this.wursts[i].zt4 = foo1 * this.wursts[i].antzt4;
        break;
      case 'zt2':
        const foo2 = this.wursts[i].zt2 / this.wursts[i].antzt2;
        this.wursts[i].zt1 = foo2 * this.wursts[i].antzt1;
        this.wursts[i].zt3 = foo2 * this.wursts[i].antzt3;
        this.wursts[i].zt4 = foo2 * this.wursts[i].antzt4;
        break;
      case 'zt3':
        const foo3 = this.wursts[i].zt3 / this.wursts[i].antzt3;
        this.wursts[i].zt1 = foo3 * this.wursts[i].antzt1;
        this.wursts[i].zt2 = foo3 * this.wursts[i].antzt2;
        this.wursts[i].zt4 = foo3 * this.wursts[i].antzt4;
        break;
      case 'zt4':
        const foo4 = this.wursts[i].zt4 / this.wursts[i].antzt4;
        this.wursts[i].zt1 = foo4 * this.wursts[i].antzt1;
        this.wursts[i].zt2 = foo4 * this.wursts[i].antzt2;
        this.wursts[i].zt3 = foo4 * this.wursts[i].antzt3;
        break;
    }

    this.wursts[i].gesamt = this.wursts[i].zt1 + this.wursts[i].zt2 + this.wursts[i].zt3 + this.wursts[i].zt4;
    this.calculateGesamtZt();
  }
  calculateGesamtZt() {
    for (let index = 0; index < this.gesamtZt.length; index++) {
      this.gesamtZt[index] = 0;
    }
    for (const item of this.wursts){
      if (item.zt1 != null) {
        this.gesamtZt[0] += item.zt1;
      }
      if (item.zt2 != null) {
        this.gesamtZt[1] += item.zt2;
        }
      if (item.zt3 != null) {
        this.gesamtZt[2] += item.zt3;
        }
      if (item.zt4 != null) {
        this.gesamtZt[3] += item.zt4;
        }
    }
  }
}
