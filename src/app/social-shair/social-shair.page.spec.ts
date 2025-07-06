import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SocialShairPage } from './social-shair.page';

describe('SocialShairPage', () => {
  let component: SocialShairPage;
  let fixture: ComponentFixture<SocialShairPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SocialShairPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SocialShairPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
