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
    new Wurst('Kaisekrainer', [10, 65, 5, 2, 8, 3, 7]),
    new Wurst('Wiener'      , [15, 25, 40, 10, 5, 2, 3])
  ];

  gesamtZt: number[] = [
    0, 0, 0, 0, 0, 0, 0
  ];

  onSumChanged(event: Event, i: number) {
    for (let j = 0; j < this.wursts[0].zt.length; j++) {
      this.wursts[i].zt[0] = (this.wursts[i].gesamt / 100) * this.wursts[i].antzt[0];
    }
    this.calculateGesamtZt();
  }

  onZtChanged(event: Event, i: number) {
    const inputfrom = this.getNumberfromID(event.srcElement.id);
    const basepercent = this.wursts[i].zt[inputfrom] / this.wursts[i].antzt[inputfrom];
    this.wursts[i].gesamt = 0;

    for (let j = 0; j < this.wursts[0].zt.length; j++) {
      if (j !== inputfrom) {
        this.wursts[i].zt[j] = basepercent * this.wursts[i].antzt[j];
      }
      this.wursts[i].gesamt += this.wursts[i].zt[j];
    }

    this.calculateGesamtZt();
  }
  calculateGesamtZt() {
    this.gesamtZt.fill(0);
    for (const item of this.wursts){
    }
    for (const item of this.wursts){
      for (let i = 0; i < item.zt.length; i++) {
        if (item.zt[i] != null) {
          this.gesamtZt[i] += item.zt[i];
        }
      }
      // if (item.zt[0] != null) {
      //   this.gesamtZt[0] += item.zt[0];
      // }
      // if (item.zt[1] != null) {
      //   this.gesamtZt[1] += item.zt[1];
      //   }
      // if (item.zt[2] != null) {
      //   this.gesamtZt[2] += item.zt[2];
      //   }
      // if (item.zt[3] != null) {
      //   this.gesamtZt[3] += item.zt[3];
      //   }
    }
  }

  getNumberfromID(controlIndex: string) {
    return parseInt(controlIndex.substring(2, 3), 10) - 1;
  }
}
