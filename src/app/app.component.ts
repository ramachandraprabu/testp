import { Component, OnInit } from '@angular/core';
import { AppComponentService } from './app.component.service';

@Component({
  selector: 'app-root',
  providers: [AppComponentService],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  public selectedProgressIndex: number = 0;
  public barList: any = [];
  public percentRatio: number;
  public response: any = {
    'buttons': [
      10,
      38,
      -13,
      -18
    ],
    'bars': [
      62,
      45,
      62
    ],
    ' limit': 230
  };

  constructor( private _progressBarDataService: AppComponentService) {
    this._progressBarDataService.getProgressBarData().then((response) => {
      this.response = response;
      this.percentRatio = 100 / this.response.limit ;
      console.log('precen', this.percentRatio, 'res', this.response.limit);
      for ( let i = 0 ; i < this.response.bars.length; i++ ) {
        let val: number = this.calculatePercentage( this.response.bars[i]);
        let type: string = this.getType(val);
        this.barList.push({value: val, type: type });
      }
    });
  }

  ngOnInit() {
    /*this._progressBarDataService.getProgressBarData().then((response) =>{
      this.response = response;
    })
    console.log('init');
    this.percentRatio = 100 / this.response.limit ;
    console.log('precen', this.percentRatio, 'res',this.response.limit);
    for ( let i = 0 ; i <this.response.bars.length; i++){
      let val: number= this.calculatePercentage( this.response.bars[i]);
      let type: string = this.getType(val);
      this.barList.push({value: val,type: type });
    }*/
  }

  private generateNewProgressValues(val: number) {
    val = this.calculatePercentage(val);
    this.barList[this.selectedProgressIndex].value = val + this.barList[this.selectedProgressIndex].value;
    let type: string;
    if ( this.barList[this.selectedProgressIndex].value < 0) {
      this.barList[this.selectedProgressIndex].value = 0;
    }
    this.barList[this.selectedProgressIndex].type = this.getType(this.barList[this.selectedProgressIndex].value);

  }

  private getType(bar: number) {
    let _type: string = 'success';
    if (bar > 100) {
      _type = 'danger';
    }else {
      _type = 'success';
    }
    return _type;
  }
  private calculatePercentage(val: number) {
     return Math.round(val * this.percentRatio);

  }

}
