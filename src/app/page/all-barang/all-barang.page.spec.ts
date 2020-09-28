import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AllBarangPage } from './all-barang.page';

describe('AllBarangPage', () => {
  let component: AllBarangPage;
  let fixture: ComponentFixture<AllBarangPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AllBarangPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AllBarangPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
