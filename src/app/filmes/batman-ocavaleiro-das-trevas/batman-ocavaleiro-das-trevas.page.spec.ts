import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { BatmanOCavaleiroDasTrevasPage } from './batman-ocavaleiro-das-trevas.page';

describe('BatmanOCavaleiroDasTrevasPage', () => {
  let component: BatmanOCavaleiroDasTrevasPage;
  let fixture: ComponentFixture<BatmanOCavaleiroDasTrevasPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BatmanOCavaleiroDasTrevasPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(BatmanOCavaleiroDasTrevasPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
