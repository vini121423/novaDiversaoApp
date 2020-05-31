import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { LooneyTunesShowPage } from './looney-tunes-show.page';

describe('LooneyTunesShowPage', () => {
  let component: LooneyTunesShowPage;
  let fixture: ComponentFixture<LooneyTunesShowPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LooneyTunesShowPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(LooneyTunesShowPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
