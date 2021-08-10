import { Component, OnInit } from '@angular/core';
import { stringify } from '@angular/core/src/render3/util';

@Component({
  selector: 'app-equipment',
  templateUrl: './equipment.component.html',
  styleUrls: ['./equipment.component.css']
})
export class EquipmentComponent implements OnInit {
  equipmentBeingEdited: string = "";
  inCargo: boolean = false;
  cargoList: string[] = ['Habitat dome', 'Drones', 'Food containers', 'Oxygen tanks'];

  constructor() { }

  ngOnInit() {
  }

  add(equipmentName: string) {
    for (let i=0; i < this.cargoList.length; i++) {
      if (this.cargoList[i] === equipmentName) {
        this.inCargo = true;
      }
    }
    if (!this.inCargo) {
    this.cargoList.push(equipmentName);
    }
    this.inCargo = false;
  }

  remove(equipment: string) {
    let index = this.cargoList.indexOf(equipment);
    this.cargoList.splice(index, 1);
  }

  edit(equipment: string) {
    this.equipmentBeingEdited = equipment;
  }

  save(equipment: string, name: string) {
    let index = this.cargoList.indexOf(equipment);
    this.cargoList[index] = name;
    this.equipmentBeingEdited = "";
  }

}
