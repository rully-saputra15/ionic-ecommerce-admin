import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { DetailBarangPage } from './detail-barang.page';

describe('DetailBarangPage', () => {
  let component: DetailBarangPage;
  let fixture: ComponentFixture<DetailBarangPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailBarangPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(DetailBarangPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
