import { InjectionToken } from '@angular/core';
import { environment} from 'src/environments/environment.prod';

export const API_URL = new InjectionToken<string>('apiUrl');

export const APICONFIG = {
    BASEPOINT: environment.baseUrl,
    STUDENTS: {
        GET: `http://dieuhau.top/api/get.php`,
    }
}