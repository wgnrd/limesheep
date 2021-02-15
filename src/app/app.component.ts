import { Component } from "@angular/core";
import { Wurst } from "./wurst.model";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  title = "app";

  isGesamtcalled = false;

  // R1, R2, S1, Wiener, Speck, Eis, Brat, Käse, Göderl
  wursts: Wurst[] = [
    new Wurst("Wiener", [0, 10, 0, 50, 0, 0, 20, 0, 20]),
    new Wurst("Käswurst", [0, 0, 0, 75, 0, 0, 0, 25, 0]),
    new Wurst("Polnische", [20, 0, 45, 0, 0, 0, 20, 0, 15]),
    new Wurst("Cabanossi", [0, 0, 0, 70, 0, 0, 20, 0, 10]),
    new Wurst("Käskreiner", [0, 0, 0, 39, 0, 0, 30, 25, 6]),
    new Wurst("Bratwurstges.", [0, 0, 0, 70, 0, 0, 0, 0, 30]),
    new Wurst("Saumeisen", [0, 0, 0, 60, 0, 0, 20, 0, 20]),
    new Wurst("Grillwurst", [0, 0, 0, 40, 0, 0, 40, 0, 20]),
    new Wurst("Leberkäs", [18.19, 0, 0, 24.07, 25.93, 31.48, 0, 0, 0]),
    new Wurst("Rindsbrat", [0, 67, 0, 0, 0, 33, 0, 0, 0]),
    new Wurst("Weises Brat", [0, 0, 0, 34, 33, 33, 0, 0, 0]),
    new Wurst("Jagdwurst", [20, 0, 0, 40, 0, 0, 20, 0, 20]),
    new Wurst("Wildwurst", [0, 0, 0, 60, 0, 0, 20, 0, 20]),
    new Wurst("Speckwurst", [0, 0, 0, 0, 0, 0, 16.67, 0, 83.33]),
    new Wurst("Jalapena", [0, 0, 0, 58.82, 0, 0, 23.53, 0, 17.65]),
    new Wurst("Tiroler ger.", [0, 0, 71.42, 0, 0, 0, 28.58, 0, 0]),
    new Wurst("Knoblauchw.", [0, 0, 0, 62.5, 0, 0, 18.75, 0, 18.75]),
    new Wurst("Zwiebelw.", [0, 0, 0, 58.82, 0, 0, 23.53, 0, 17.65]),
    new Wurst("ges. Wildbratwurst", [1, 1, 1, 1, 1, 1, 1, 1, 1]),
    new Wurst("Krakauer", [0, 0, 71.42, 0, 0, 0, 28.58, 0, 0])
  ];

  gesamtZt: number[] = [0, 0, 0, 0, 0, 0, 0, 0, 0];

  // if the sum is changed, change the ingredients in this sausage
  onSumChanged(event: Event, i: number) {
    for (let j = 0; j < this.wursts[0].ingredients.length; j++) {
      this.wursts[i].ingredients[j] =
        Math.round(
          (this.wursts[i].gesamt / 100) * this.wursts[i].antzt[j] * 100
        ) / 100;
    }
    this.calculateColumnSum();
  }

  // if the ingredient is changed, set the other ingredients 
  onZtChanged(event: Event, i: number) {
    const target = event.target as HTMLInputElement;
    const ingredientId = this.getNumberfromID(target.id);
    const basepercent =
      this.wursts[i].ingredients[ingredientId] / this.wursts[i].antzt[ingredientId];

    this.wursts[i].gesamt = 0;
    if (this.wursts[i].name !== "ges. Wildbratwurst") {
      for (let j = 0; j < this.wursts[0].ingredients.length; j++) {
        if (j !== ingredientId) {
          this.wursts[i].ingredients[j] =
            Math.round(basepercent * this.wursts[i].antzt[j] * 100) / 100;
        }
        this.wursts[i].gesamt += Math.round(this.wursts[i].ingredients[j] * 100) / 100;
      }
    }

    this.calculateColumnSum();
  }

  calculateColumnSum() {
    this.gesamtZt.fill(0);
    for (const item of this.wursts) {
      for (let i = 0; i < item.ingredients.length; i++) {
        if (item.ingredients[i] != null) {
          this.gesamtZt[i] += item.ingredients[i];
          this.specialKaeswurst(item, i);
        }
      }
    }
  }

  private specialKaeswurst(kasewurst: Wurst, ingredientId: number) {
    if (kasewurst.name === "Käswurst" && ingredientId === 3) {
      this.gesamtZt[ingredientId] -= kasewurst.ingredients[ingredientId];
    }
  }

  getNumberfromID(controlIndex: string) {
    return parseInt(controlIndex.substring(2, 3), 10) - 1;
  }

  printTable() {
    window.print();
  }
}
