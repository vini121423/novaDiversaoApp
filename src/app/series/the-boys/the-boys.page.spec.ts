import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { TheBoysPage } from './the-boys.page';

describe('TheBoysPage', () => {
  let component: TheBoysPage;
  let fixture: ComponentFixture<TheBoysPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TheBoysPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(TheBoysPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
