import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { RemnantPage } from './remnant.page';

describe('RemnantPage', () => {
  let component: RemnantPage;
  let fixture: ComponentFixture<RemnantPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RemnantPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(RemnantPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
