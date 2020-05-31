import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AIlhaDaFantasiaPage } from './a-ilha-da-fantasia.page';

describe('AIlhaDaFantasiaPage', () => {
  let component: AIlhaDaFantasiaPage;
  let fixture: ComponentFixture<AIlhaDaFantasiaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AIlhaDaFantasiaPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AIlhaDaFantasiaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
