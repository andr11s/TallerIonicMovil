import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { DetailstraksPage } from './detailstraks.page';

describe('DetailstraksPage', () => {
  let component: DetailstraksPage;
  let fixture: ComponentFixture<DetailstraksPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailstraksPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(DetailstraksPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
