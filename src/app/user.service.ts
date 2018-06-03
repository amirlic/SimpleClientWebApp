import { Injectable } from '@angular/core';
import { Http, RequestOptions, Headers } from '@angular/http';

@Injectable()
export class UserService {
    constructor(private http:Http){}

    store(user:{id:string, name:string, pass:string, registerUser:true})
    {
        let postMessage = JSON.stringify({
            'user': {
              'Id': user.id,
              'Name': user.name,
              'Pass': user.pass
            }
        });
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });
        return this.http.post("//localhost:3001/user/add", postMessage, options);
    }
}
