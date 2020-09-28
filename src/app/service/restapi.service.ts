import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { throwError, Observable } from 'rxjs';
import { catchError, tap, map, retry } from 'rxjs/operators';
const apiUrlAllTransaksi = 'http://192.168.1.8/quimtafari/api/product/read_all_transaksi_admin.php';
const apiUrlReadBarangID = 'http://192.168.1.8/quimtafari/api/product/read_barang.php';
const apiUrlReadAllBarang = 'http://192.168.1.8/quimtafari/api/product/read_all_barang_admin.php';
const apiUrlTransaksiById = 'http://192.168.1.8/quimtafari/api/product/read_transaksi_admin.php';
const apiUrlLogin = 'http://192.168.1.8/quimtafari/api/product/login_admin.php';
const apiUrlEditBarang ='http://192.168.1.8/quimtafari/api/product/edit_data_barang_admin.php';
/*
const apiUrlLogin = 'http://adminecommerce.online/api/product/loginAdmin.php';
const apiUrlAllTransaksi = 'http://adminecommerce.online/api/product/readAllTransaksiAdmin.php';
const apiUrlTransaksiById = 'http://adminecommerce.online/api/product/readTransaksiAdmin.php';
const apiUrlReadAllBarang = 'http://adminecommerce.online/api/product/read_all_barang.php';
const apiUrlReadBarangID = 'http://adminecommerce.online/api/product/read_barang.php';*/
@Injectable({
  providedIn: 'root'
})
export class RestapiService {
  constructor(private http: HttpClient) { }
  //public urlPhoto = 'http://adminecommerce.online/public/uploads/';
  public urlPhoto = 'http://192.168.1.8/quimtafari/public/uploads/';
  public urlPlaceholder = '../../../assets/placeholder.jpg';
  signInWithUsername(data: any): Observable<any>{
    return this.http.post(apiUrlLogin, JSON.stringify(data))
    .pipe(
      retry(2),
      map(this.extractData),
      catchError(this.handleError)
    );
  }
  getAllBarang(data : any): Observable<any>{
    return this.http.post(apiUrlReadAllBarang,JSON.stringify(data))
    .pipe(
      map(this.extractData),
      catchError(this.handleError)
    );
  }
  getAllTransaksi(): Observable<any>{
    return this.http.get(apiUrlAllTransaksi)
    .pipe(
      map(this.extractData),
      catchError(this.handleError)
    );
  }
  getTransaksiById(data: any): Observable<any>{
    return this.http.post(apiUrlTransaksiById,JSON.stringify(data))
    .pipe(
      map(this.extractData),
      catchError(this.handleError)
    );
  }
  getBarangById(data : any): Observable<any>{
    return this.http.post(apiUrlReadBarangID,JSON.stringify(data)).pipe(
      map(this.extractData),
      catchError(this.handleError));
  }
  uploadFoto(formData){
    return this.http.post(apiUrlEditBarang, formData).pipe(
      map(this.extractData),
      catchError(this.handleError)
    );
  }
  private extractData(res: Response) {
    let body = res;
    return body || { };
  }
  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error.message);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error}`);
      console.log(error);
    }
    // return an observable with a user-facing error message
    return throwError('Something bad happened; please try again later.');
  }
}
