import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  public max:number = 200;
  public currentValue:number = 10;
  public type:string = "success";
  selectedProgressIndex: number =0;

  barList: any =[];

  percentRatio: number;

  response: any = {
    "buttons": [
      10,
      38,
      -13,
      -18
    ],
    "bars": [
      62,
      45,
      62
    ],
    "limit": 230
  }

  constructor() {

  }

  ngOnInit(){
    console.log('init');
    this.percentRatio = 100 / this.response.limit ;
    console.log('precen', this.percentRatio, 'res',this.response.limit);
    for ( let i = 0 ; i <this.response.bars.length; i++){
      let val: number= this.calculatePercentage( this.response.bars[i]);
      let type: string = this.getType(val);
      this.barList.push({value: val,type: type });
    }
  }
  onBarChange(index : number){
    console.log('index', index);
  }
  private generateNewProgressValues(val: number) {
   // console.log('val', val);
    val = this.calculatePercentage(val);
    this.barList[this.selectedProgressIndex].value = val+  this.barList[this.selectedProgressIndex].value;
    let type:string;
    if ( this.barList[this.selectedProgressIndex].value < 0){
      this.barList[this.selectedProgressIndex].value = 0;
    }
    this.barList[this.selectedProgressIndex].type = this.getType(this.barList[this.selectedProgressIndex].value);

  };

  getType(bar: number){
    let _type: string = 'success';
    if (bar > 100) {
      _type = 'danger';
    }else {
      _type = 'success';
    }
    return _type;
  }
  calculatePercentage(val: number){
     return Math.round(val* this.percentRatio);

  }

}
