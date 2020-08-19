import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { throwError, Observable } from 'rxjs';
import { catchError, tap, map, retry } from 'rxjs/operators';
const apiUrlLogin = "http://localhost/quimtafari/api/product/loginAdmin.php";
const apiUrlAllTransaksi = "http://localhost/quimtafari/api/product/readAllTransaksiAdmin.php";
const apiUrlTransaksiById = "http://localhost/quimtafari/api/product/readTransaksiAdmin.php";

@Injectable({
  providedIn: 'root'
})
export class RestapiService {
  constructor(private http: HttpClient) { }


  signInWithUsername(data: any): Observable<any>{
    return this.http.post(apiUrlLogin, JSON.stringify(data))
    .pipe(
      retry(2),
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
