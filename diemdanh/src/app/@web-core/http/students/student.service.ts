import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, map } from 'rxjs/operators';
import { APICONFIG } from '../@http-config';

@Injectable()
export class StudentService  {
    constructor(
        private http: HttpClient,
      ) { }
    public getListData( ){
        console.log('vào', APICONFIG.STUDENTS.GET);
        
        return this.http.get(`${APICONFIG.STUDENTS.GET}`).pipe(
            map((result)=>{
                return result;
            }),
            catchError((error)=> { throw error.error}));
    }
    public create(payload: any) {
        return this.http.post<any>(`${APICONFIG.STUDENTS.INSERT}`, payload).pipe(
          map((result) => {
            return result;
          }),
          catchError((errorRes) => { throw errorRes.error; }));
      }
}