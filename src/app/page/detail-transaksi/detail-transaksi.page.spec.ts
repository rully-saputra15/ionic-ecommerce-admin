import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { DetailTransaksiPage } from './detail-transaksi.page';

describe('DetailTransaksiPage', () => {
  let component: DetailTransaksiPage;
  let fixture: ComponentFixture<DetailTransaksiPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailTransaksiPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(DetailTransaksiPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
