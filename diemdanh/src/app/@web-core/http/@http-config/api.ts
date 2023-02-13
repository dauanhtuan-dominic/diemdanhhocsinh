import { InjectionToken } from '@angular/core';
import { environment} from 'src/environments/environment.prod';

export const API_URL = new InjectionToken<string>('apiUrl');

export const APICONFIG = {
    BASEPOINT: environment.baseUrl,
    STUDENTS: {
        GET: `https://dieuhau.top/api/get.php`,
        INSERT: `https://dieuhau.top/api/insert.php`,
        DELETE: (id:any) =>`https://dieuhau.top/api/delete.php?id=${id}`,
        GETBYID: (id:any)=>`https://dieuhau.top/api/getbyid.php?id=${id}`,
        UPDATE: `https://dieuhau.top/api/update.php`
    }
}