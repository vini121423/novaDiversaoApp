import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SeizedPage } from './seized.page';

describe('SeizedPage', () => {
  let component: SeizedPage;
  let fixture: ComponentFixture<SeizedPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SeizedPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SeizedPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
