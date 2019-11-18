import { HttpHeaders } from '@angular/common/http';

export const httpOptions = {
    headers: new HttpHeaders({
        'Content-Type':  'application/json',
        'Access-Control-Allow-Origin':'*',
        'Access-Control-Allow-Methods':'DELETE, POST, GET, OPTIONS',
        'Access-Control-Allow-Headers': 'Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With'
    })
    };
