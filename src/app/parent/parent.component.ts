import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DemoService } from '../services/demo.service';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {

  constructor(private route: ActivatedRoute, private _demoService: DemoService) { }

  ngOnInit() {
    /** Capture URL on page init */
    const firstParam: string = this.route.snapshot.queryParamMap.get('firstParamKey');
    const secondParam: string = this.route.snapshot.queryParamMap.get('secondParamKey');
    const firstPathParam: string = this.route.snapshot.params.firstParam;
    // const pathKeys: string = this.route.snapshot.pathFromRoot.keys;
    // const pathValues: string = this.route.snapshot.pathFromRoot.values;

    this.getFoods();
  }

  getFoods() {
    // this._demoService.getFoods().subscribe(
    //   data => { this.foods = data},
    //   err => console.error(err),
    //   () => console.log('done loading foods')
    // );
  }

}
