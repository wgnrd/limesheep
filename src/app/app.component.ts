import { Component } from '@angular/core';
import { Sausage } from '../model/Sausage.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'app';

  isGesamtcalled = false;
  numberOfIngredients = 9;

  // R1, R2, S1, Wiener, Speck, Eis, Brat, Käse, Göderl
  sausages: Sausage[] = [
    new Sausage('Wiener', [0, 0, 0, 60, 0, 0, 20, 0, 20]),
    new Sausage('Käswurst', [0, 0, 0, 75, 0, 0, 0, 25, 0]),
    new Sausage('Polnische', [0, 0, 65, 0, 0, 0, 20, 0, 15]),
    new Sausage('Cabanossi', [0, 0, 0, 70, 0, 0, 20, 0, 10]),
    new Sausage('Käskreiner', [0, 0, 0, 39, 0, 0, 30, 25, 6]),
    new Sausage('Bratwurstges.', [0, 0, 0, 60, 0, 0, 20, 0, 20]),
    new Sausage('Saumeisen', [0, 0, 0, 60, 0, 0, 20, 0, 20]),
    new Sausage('Grillwurst', [0, 0, 0, 40, 0, 0, 40, 0, 20]),
    new Sausage('Leberkäs', [18.19, 0, 0, 24.07, 25.93, 31.48, 0, 0, 0]),
    new Sausage('Rindsbrat', [0, 67, 0, 0, 0, 33, 0, 0, 0]),
    new Sausage('Weises Brat', [0, 0, 0, 34, 33, 33, 0, 0, 0]),
    new Sausage('Jagdwurst', [0, 0, 0, 60, 0, 0, 20, 0, 20]),
    new Sausage('Wildwurst', [0, 0, 0, 60, 0, 0, 20, 0, 20]),
    new Sausage('Speckwurst', [0, 0, 0, 0, 0, 0, 16.67, 0, 83.33]),
    new Sausage('Jalapena', [0, 0, 0, 58.82, 0, 0, 23.53, 0, 17.65]),
    new Sausage('Tiroler ger.', [0, 0, 71.42, 0, 0, 0, 28.58, 0, 0]),
    new Sausage('Knoblauchw.', [0, 0, 0, 62.5, 0, 0, 18.75, 0, 18.75]),
    new Sausage('Zwiebelw.', [0, 0, 0, 58.82, 0, 0, 23.53, 0, 17.65]),
    new Sausage('Krakauer', [0, 0, 71.42, 0, 0, 0, 28.58, 0, 0]),
  ];

  columnSum: number[] = [0, 0, 0, 0, 0, 0, 0, 0, 0];

  // if the sum is changed, change the ingredients in this sausage
  onSumChanged(event: Event, i: number) {
    for (let j = 0; j < this.sausages[0].ingredients.length; j++) {
      this.sausages[i].ingredients[j] = this.RoundTwoDigits(
        (this.sausages[i].sum / 100) * this.sausages[i].recipe[j]
      );
    }
    this.calculateColumnSum();
  }

  // if the ingredient is changed, set the other ingredients
  onZtChanged(event: Event, sausageId: number, ingredientId: number) {
    const basepercent =
      this.sausages[sausageId].ingredients[ingredientId] /
      this.sausages[sausageId].recipe[ingredientId];

    this.sausages[sausageId].sum = 0;

    for (let j = 0; j < this.sausages[0].ingredients.length; j++) {
      // don't calculate the changed ingredient itself
      if (j !== ingredientId) {
        this.sausages[sausageId].ingredients[j] = this.RoundTwoDigits(
          basepercent * this.sausages[sausageId].recipe[j]
        );
      }
      // add to the sum of the sausge
      this.sausages[sausageId].sum += this.RoundTwoDigits(
        this.sausages[sausageId].ingredients[j]
      );
    }

    this.calculateColumnSum();
  }

  calculateColumnSum() {
    this.columnSum.fill(0);
    for (const item of this.sausages) {
      for (let i = 0; i < item.ingredients.length; i++) {
        if (item.ingredients[i] != null) {
          this.columnSum[i] += item.ingredients[i];
          this.specialKaeswurst(item, i);
        }
        this.columnSum[i] = this.RoundTwoDigits(this.columnSum[i]);
      }
    }
  }

  // one ingredient must not be added to the columnSum at this particular sausages
  private specialKaeswurst(kasewurst: Sausage, ingredientId: number) {
    if (kasewurst.name === 'Käswurst' && ingredientId === 3) {
      this.columnSum[ingredientId] -= kasewurst.ingredients[ingredientId];
    }
  }

  private RoundTwoDigits(number: number) {
    return Math.round(number * 100) / 100;
  }

  printTable() {
    window.print();
  }
}
