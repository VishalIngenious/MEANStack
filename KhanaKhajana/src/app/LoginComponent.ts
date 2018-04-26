import { Component, OnInit } from '@angular/core';
import { Router, CanActivate } from '@angular/router';
import { JsonService } from './services/app.service';
import { FormControl, FormGroup, Validators, FormBuilder  } from '@angular/forms';

@Component({
    selector: 'login-page',
    // templateUrl: './Login.html',
    templateUrl: './LoginMDF.html',
    providers: [ JsonService ], // we are registering our service with angular's injector
    styles: [
        `input.ng-invalid{border-left:5px solid red;}
         input.ng-valid{border-left:5px solid green;}`
    ]
})
export class LoginComponent implements OnInit {
    /* uName: string;
    password: any;
    role: string = 'Merchant'; */
    errorMessage: String[] = [];
    roleList =   ['Admin', 'Merchant', 'Customer'];

    /* userForm = new FormGroup({
        uName : new FormControl('vishu@gmail.com', [Validators.required, Validators.minLength(5), Validators.maxLength(20)]),
        password : new FormControl(),
        role : new FormControl('Merchant')
    }); */

    userForm: FormGroup;

    constructor(private _router: Router, private _jsonService: JsonService, private _formBuilder: FormBuilder)
    {     }

ngOnInit() {
this.userForm = this._formBuilder.group({
uName: ['SnehalArthamwar', [Validators.required, Validators.minLength(5), Validators.maxLength(20)]],
password: [],
role: ['Merchant']
});

}
    checkRole(role: string): string
    {
        switch (role){
            case 'Merchant': return '/dashboard';
            case 'Customer': return '/userDashboard';
            case 'Admin': return '/adminDashboard';
            default: return '';
        }
    }
    checkCredentials() {
        this._jsonService.login(this.userForm.value.uName,this.userForm.value.password)
        .subscribe(userData => {
            if (userData.status === 'ok')
            {
                localStorage['isLogin'] = 'true';
                console.log ('check ls', localStorage['isLogin']);
                this._router.navigate([this.checkRole(this.userForm.value.role)]);
            }else {
                     //localStorage['isLogin'] = 'false';
                    alert('Wrong Credentials');
            }},
                error => {this.errorMessage.push(error); });

        /* if (this.uName === this.user.userName && this.password === this.user.password && this.user.role === this.role)
        {
            this._router.navigate([this.checkRole(this.role)]);
        }else {
            alert('Wrong Credentials');
        } */
    }

    resetForm() {
        this.userForm.reset();
    }
}