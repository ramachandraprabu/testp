import {Observable} from "rxjs/Rx";

export class MockProgressBarDataService {
  public data = {
    "buttons":[
      10,
      38,
      -13,
      -13
    ],
    "bars":[
      62,
      45,
      62
    ],
    "limit":230
  };
  private getAll() {
    return Observable.of(this.data);
  }
}
