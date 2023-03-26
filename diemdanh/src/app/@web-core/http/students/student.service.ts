import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, map } from 'rxjs/operators';
import { APICONFIG } from '../@http-config';

@Injectable()
export class StudentService {
  constructor(
    private http: HttpClient,
  ) { }
  public getListData() {
    console.log('vào', APICONFIG.STUDENTS.GET);

    return this.http.get(`${APICONFIG.STUDENTS.GET}`).pipe(
      map((result) => {
        return result;
      }),
      catchError((error) => { throw error.error }));
  }
  public create(payload: any) {
    return this.http.post<any>(`${APICONFIG.STUDENTS.INSERT}`, payload).pipe(
      map((result) => {
        return result;
      }),
      catchError((errorRes) => { throw errorRes.error; }));
  }
  public update(payload: any) {
    return this.http.post<any>(`${APICONFIG.STUDENTS.UPDATE}`, payload).pipe(
      map((result) => {
        return result;
      }),
      catchError((errorRes) => { throw errorRes.error; }));
  }
  public delete(id: any) {
    return this.http.delete(`${APICONFIG.STUDENTS.DELETE(id)}`).pipe(map((result) => {
      return result;
    }), catchError((erros: any) => {
      throw erros.error;
    }))
  }
  public getbyid(id: any) {
    return this.http.get(`${APICONFIG.STUDENTS.GETBYID(id)}`).pipe(map((result) => {
      return result;
    }), catchError((erros: any) => {
      throw erros.error;
    }))
  }
  public gettime() {
    return this.http.get(`${APICONFIG.STUDENTS.GETTIME}`).pipe(
      map((result) => {
        return result;
      }),
      catchError((error) => { throw error.error }));
  }
}