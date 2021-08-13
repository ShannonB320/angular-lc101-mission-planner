import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-experiments',
  templateUrl: './experiments.component.html',
  styleUrls: ['./experiments.component.css']
})
export class ExperimentsComponent implements OnInit {
  labTests: object[] = [];
  
  experiments: string[] = ['Moon soil sample', 'Plant growth in orbit', 'Human bone density changes', 'Water droplet podcast for grades K-5', 'Satellite launch'];

   constructor() { }

   ngOnInit() { }

   addExperiment(experiment) {
    if (!this.labTests.includes(experiment) && this.labTests.length < 2) {
      this.labTests.push(experiment);
    } else if (this.labTests.includes(experiment)) {
      let index = this.labTests.indexOf(experiment);
      this.labTests.splice(index, 1);
    }
  }

  resetExperiments() {
    this.labTests = [];
  }

}
