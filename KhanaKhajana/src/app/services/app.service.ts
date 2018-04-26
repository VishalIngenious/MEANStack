import { ActivatedRouteSnapshot, RouterStateSnapshot, Router, CanActivate } from '@angular/router';
import { Injectable } from '@angular/core';
import { Http, Response,RequestOptions,Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

@Injectable()
export class JsonService /* implements CanActivate */ {
    

    private _header = new Headers({ 'Content-Type': 'application/json' });
    private _requestOption =  new RequestOptions({ headers: this._header });

    obser: any;
    constructor(private  _http: Http, private _router: Router ) {}
   login(uName: string, passw: string) {
    var url: string = 'http://localhost:9090/user';
    var body = {
        userName: uName,
        password: passw
    };
    return this._http
            .post(url, body, this._requestOption)
            .map(response => response.json())
            .catch(this._handleError);
 }

 
 registerUser(uname: string, passw: string, roleSelected: string){
    var url: string = 'http://localhost:9090/userRegister';
     var body = {
        userName: uname,
        password: passw,
        role: roleSelected
     };

    return this._http.post(url, body, this._requestOption)
    .map(response => response.json())
    .catch(this._handleError);
   }
_handleError(error: Response) {
    return Observable.throw (error || 'Something went wrong! Please contact support team...');
}
    /* canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        if (localStorage['isLogin'] === 'true') {
            return true;
        }
        this._router.navigate(['/login']);
        return false;
    } */
};
