import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-experiments',
  templateUrl: './experiments.component.html',
  styleUrls: ['./experiments.component.css']
})
export class ExperimentsComponent implements OnInit {
  experimentBeingEdited: string = "";
  inScience: boolean = false;
  scienceList: string[] = ['Mars soil sample', 'Plant growth in habitat', 'Human bone density'];

  constructor() { }

  ngOnInit() {
  }

  add(experimentName: string) {
    for (let i=0; i < this.scienceList.length; i++) {
      if (this.scienceList[i] === experimentName) {
        this.inScience = true;
      }
    }
    if (!this.inScience) {
    this.scienceList.push(experimentName);
    }
    this.inScience = false;
  }

  remove(experiment: string) {
    let index = this.scienceList.indexOf(experiment);
    this.scienceList.splice(index, 1);
  }

  edit(experiment: string) {
    this.experimentBeingEdited = experiment;
  }

  save(experiment: string, name: string) {
    let index = this.scienceList.indexOf(experiment);
    this.scienceList[index] = name;
    this.experimentBeingEdited = "";
  }

}
