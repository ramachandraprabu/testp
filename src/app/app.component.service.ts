import {Injectable} from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class AppComponentService {
  progressbar:Array<any>;
  constructor(private http:Http)
  {
  }

  public getProgressBarData(): Promise<any[]>
  {
    return (this.http.request('assets/data/progressbardata.json'))
      .toPromise()
      .then((response) => {
      return response.json();
    });
  }
}
