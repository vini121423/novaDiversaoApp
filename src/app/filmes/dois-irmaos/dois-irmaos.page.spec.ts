import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { DoisIrmaosPage } from './dois-irmaos.page';

describe('DoisIrmaosPage', () => {
  let component: DoisIrmaosPage;
  let fixture: ComponentFixture<DoisIrmaosPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DoisIrmaosPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(DoisIrmaosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
