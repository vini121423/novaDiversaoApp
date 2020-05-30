import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { LaCasaDePapelPage } from './la-casa-de-papel.page';

describe('LaCasaDePapelPage', () => {
  let component: LaCasaDePapelPage;
  let fixture: ComponentFixture<LaCasaDePapelPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LaCasaDePapelPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(LaCasaDePapelPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
