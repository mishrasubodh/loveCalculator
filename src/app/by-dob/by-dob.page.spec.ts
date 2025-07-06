import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ByDobPage } from './by-dob.page';

describe('ByDobPage', () => {
  let component: ByDobPage;
  let fixture: ComponentFixture<ByDobPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ByDobPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ByDobPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
