import {TestBed, async, ComponentFixture, fakeAsync} from '@angular/core/testing';
import { AppComponent } from './app.component';
import { AppComponentService } from './app.component.service';
import { FormsModule } from '@angular/forms';
import {Http, HttpModule} from '@angular/http';
import {Progress} from './common/directive/progress.directive';
import {Bar} from './common/component/bar.component';
import {Progressbar} from './common/component/progressbar.component';
import {NO_ERRORS_SCHEMA} from "@angular/core";
import {MockProgressBarDataService} from "./mockProgressBarDataService";

describe('AppComponent', () => {
  let comp: AppComponent;
  let fixure: ComponentFixture<AppComponent>;
  let appComponentService: AppComponentService;
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports:[
        FormsModule,
        HttpModule
      ],
      declarations: [
        AppComponent,
        Progress,
        Bar,
        Progressbar
      ],
      providers: [
        AppComponentService,
        {
          provide: Http
        },
        {
          provide: AppComponentService, useClass: MockProgressBarDataService
        }
      ],
      schemas: [NO_ERRORS_SCHEMA]
    }).compileComponents()
      .then(() => {
        fixure = TestBed.createComponent(AppComponent);
        comp = fixure.componentInstance;
      });
  }));

  it ('should able to initialize AppComponent', () =>{
    expect (comp).toBeDefined();
   // expect (comp.appDataService).toBeDefined();
  });

  it ('should able to do ngOInit', fakeAsync(() => {
    spyOn (comp, 'ngOnInit');
    comp.ngOnInit();
    expect(comp.ngOnInit).toHaveBeenCalled();
  }));

  /*it ('should able to excute generateNewProgressValues for button click', () => {
    const val: number = 0;
    comp.generateNewProgressValues(val);
    expect(true).toBe(true);
  });*/

  it ('should able to excute getType', () => {
    let bar: number = 60;
    comp.getType(bar);
    bar = 120;
    comp.getType(bar);
    expect(true).toBe(true);
  });

  it ('should able to excute calculatePercentage', () => {
    const val: number = 20;
    comp.calculatePercentage(val);
    expect(true).toBe(true);
  });

});
