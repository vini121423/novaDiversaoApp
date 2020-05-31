import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { Trolls2Page } from './trolls2.page';

describe('Trolls2Page', () => {
  let component: Trolls2Page;
  let fixture: ComponentFixture<Trolls2Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Trolls2Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(Trolls2Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
