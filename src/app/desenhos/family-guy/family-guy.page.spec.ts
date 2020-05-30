import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { FamilyGuyPage } from './family-guy.page';

describe('FamilyGuyPage', () => {
  let component: FamilyGuyPage;
  let fixture: ComponentFixture<FamilyGuyPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FamilyGuyPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(FamilyGuyPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
