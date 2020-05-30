import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { DbzKaiPage } from './dbz-kai.page';

describe('DbzKaiPage', () => {
  let component: DbzKaiPage;
  let fixture: ComponentFixture<DbzKaiPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DbzKaiPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(DbzKaiPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
