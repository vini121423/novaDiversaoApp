import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ChernobylPage } from './chernobyl.page';

describe('ChernobylPage', () => {
  let component: ChernobylPage;
  let fixture: ComponentFixture<ChernobylPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChernobylPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ChernobylPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
