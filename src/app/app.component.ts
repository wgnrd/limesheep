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

  // R1, R2, Wiener, Speck, Eis, Brat, Käse, Göderl
  wursts: Wurst[] = [
    new Wurst('Wiener'        , [0, 10, 50, 0, 0, 20, 0, 20]),
    new Wurst('Käswurst'      , [0,  0, 75, 0, 0, 0, 25,  0]),
    new Wurst('Polnische'     , [20, 0, 45, 0, 0, 20, 0, 15]),
    new Wurst('Cabanossi'     , [ 0, 0, 70, 0, 0, 20, 0, 10]),
    new Wurst('Käskreiner'    , [ 0, 0, 65, 0, 0,  0, 25, 10]),
    new Wurst('Bratwurstges.' , [ 0, 0, 60, 0, 0, 20,  0, 20]),
    new Wurst('Saumeisen'     , [ 0, 0, 60, 0, 0, 20, 0, 20]),
    new Wurst('Grillwurst'    , [ 0, 0, 40, 0, 0, 40, 0, 20]),
    new Wurst('Leberkäs'      , [18.19, 0,  24.07, 25.93, 31.48, 0, 0, 0]),
    new Wurst('Rindsbrat'     , [0, 67,  0, 0, 33, 0, 0, 0]),
    new Wurst('Weises Brat'   , [ 0, 0, 34, 33, 33, 0, 0, 0]),
    // new Wurst('Braunschweiger', [ 0, 0, 40, 0, 0, 40, 0, 20]),
    new Wurst('Jagdwurst'     , [20, 0, 40, 0, 0, 20, 0, 20]),
    new Wurst('Wildwurst'     , [ 0, 0, 60, 0, 0, 20, 0, 20]),
  ];

  gesamtZt: number[] = [
    0, 0, 0, 0, 0, 0, 0, 0
  ];

  onSumChanged(event: Event, i: number) {
    // console.log(i);
    for (let j = 0; j < this.wursts[0].zt.length; j++) {
      this.wursts[i].zt[j] = (this.wursts[i].gesamt / 100) * this.wursts[i].antzt[j];
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
      for (let i = 0; i < item.zt.length; i++) {
        if (item.zt[i] != null) {
          this.gesamtZt[i] += item.zt[i];
        }
      }
    }
  }

  getNumberfromID(controlIndex: string) {
    return parseInt(controlIndex.substring(2, 3), 10) - 1;
  }

  onPrint() {
    window.print();
  }
}
