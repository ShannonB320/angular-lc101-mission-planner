import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-equipment',
  templateUrl: './equipment.component.html',
  styleUrls: ['./equipment.component.css']
})
export class EquipmentComponent implements OnInit {
   equipmentItems: object[] = [
       {name: 'Duct Tape', mass: 0.5},
       {name: 'Space Camera', mass: 20},
       {name: 'Food', mass: 150},
       {name: 'Oxygen Tanks', mass: 400},
       {name: 'AE-35 Unit', mass: 5},
       {name: 'ISS Supplies', mass: 800},
       {name: 'Water', mass: 250},
       {name: 'Satellite', mass: 1200},
       {name: 'R2 Unit', mass: 32}
   ];
   cargoHold: object[] = [];
   cargoMass: number = 0;
   maximumAllowedMass: number = 2000;
   maxItems: number = 10;

   cargoButtonActive: boolean = true;
   isCargoEmpty: boolean = true;

   constructor() { }

   ngOnInit() { }

   // Code your addItem function here:
   addItem(equipment) {
      this.cargoHold.push(equipment);
      this.cargoMass += equipment.mass;

      if (this.cargoMass >= this.maximumAllowedMass-200) {
        this.isCargoEmpty = false;
        return true;
      } else {
        return false;
      }
   }

   isActive(item) {
     if (this.cargoHold.length === this.maxItems || (this.cargoMass + item.mass > this.maximumAllowedMass || this.isPresentInCargo(item) >= 2)) {
       this.cargoButtonActive = false;
     } else {
       this.cargoButtonActive = true;
     }
     return this.cargoButtonActive;
   }

   resetCargo() {
     this.cargoHold = [];
     this.cargoMass = 0;
     this.cargoButtonActive = true;
     this.isCargoEmpty = true;
   }

   isPresentInCargo(item) {
      let total = 0;
      for (let i=0; i < this.cargoHold.length; i++) {
        if (item === this.cargoHold[i]) {
          total += 1;
        } else {
          total += 0
        }
      }
      return total;
   }

   removeItem(item) {
      let index = this.cargoHold.indexOf(item);
      this.cargoHold.splice(index, 1);
      this.cargoMass -= item.mass;
   }

}
