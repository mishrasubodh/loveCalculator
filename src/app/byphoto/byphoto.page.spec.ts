import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ByphotoPage } from './byphoto.page';

describe('ByphotoPage', () => {
  let component: ByphotoPage;
  let fixture: ComponentFixture<ByphotoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ByphotoPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ByphotoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
