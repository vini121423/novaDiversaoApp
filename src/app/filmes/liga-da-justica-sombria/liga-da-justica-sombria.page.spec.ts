import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { LigaDaJusticaSombriaPage } from './liga-da-justica-sombria.page';

describe('LigaDaJusticaSombriaPage', () => {
  let component: LigaDaJusticaSombriaPage;
  let fixture: ComponentFixture<LigaDaJusticaSombriaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LigaDaJusticaSombriaPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(LigaDaJusticaSombriaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
