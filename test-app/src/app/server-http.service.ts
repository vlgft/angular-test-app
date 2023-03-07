import { HttpClient, HttpErrorResponse, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { catchError, Observable, throwError } from "rxjs";

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
    // 'Authorization': 'Bearer eyJhbGciOiJ'
  })
}


@Injectable({
  providedIn: 'root',
})

export class ServerHttpService {
  private REST_API_SERVER = 'http://localhost:3000';
  constructor(private httpClient: HttpClient) { }

  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      console.error('An error occurred:', error.error.message);
    } else {
      console.error(`Backend returned code ${error.status}, ` + `body was: ${error.error}`)
    }
    return throwError('Something bad happend; please try again later.');
  }

  public getMitreTatics(): Observable<any> {
    const url = `${this.REST_API_SERVER}/mitre-tatics`;
    return this.httpClient.get<any>(url, httpOptions).pipe(catchError(this.handleError))
  }

  public getMitreTechnique(tatic_id: number): Observable<any> {
    const url = `${this.REST_API_SERVER}/mitre-techniques?tatic_id=` + tatic_id;
    return this.httpClient.get<any>(url, httpOptions).pipe(catchError(this.handleError))
  }

  public getMitreSubTechnique(tech_ids: Array<number>): Observable<any> {
    let tmp = '';
    for (const k in tech_ids) {
      tmp+='id='+tech_ids[k]+'&'
    }
    const url = `${this.REST_API_SERVER}/mitre-subtechniques?`+tmp.slice(0, -1);
    return this.httpClient.get<any>(url, httpOptions).pipe(catchError(this.handleError))
  }

  public getLogs(): Observable<any> {
    const url = `${this.REST_API_SERVER}/logs`;
    return this.httpClient.get<any>(url, httpOptions).pipe(catchError(this.handleError))
  }

  public getAgents(): Observable<any> {
    const url = `${this.REST_API_SERVER}/list-agent`;
    return this.httpClient.get<any>(url, httpOptions).pipe(catchError(this.handleError))
  }

}


