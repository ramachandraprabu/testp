import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Progressbar } from './progressbar.component';
import { Progress } from '../directive/progress.directive';
import { Bar } from './bar.component';

describe('ProgressbarComponent', () => {
  let component: Progressbar;
  let fixture: ComponentFixture<Progressbar>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Progressbar,  Bar, Progress ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Progressbar);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
