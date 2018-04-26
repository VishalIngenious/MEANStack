import { JsonService } from './../services/app.service';
import { Component,OnInit } from '@angular/core';
import { Router} from '@angular/router';
import {FormGroup, FormBuilder, Validators } from '@angular/forms'; 

@Component({
    selector: 'registration-page',
    templateUrl: './Registration.html'
})
export class RegistrationComponent implements OnInit {
    registrationForm: FormGroup;
    roleList = ['Admin', 'Merchant', 'Customer'];
    constructor(private _router: Router, private  _formBuilder: FormBuilder,private _jsonService: JsonService) {}
    ngOnInit() {
            this.registrationForm = this._formBuilder.group({
                userName: [],
                password: [],
                role: []
            });
    }
    registerUser()
    {
        this._jsonService.registerUser(this.registrationForm.value.userName,
            this.registrationForm.value.password, this.registrationForm.value.role)
            .subscribe(response =>{
                if(response === 'ok')
                {
                    this._router.navigate(['/login']);
                    alert('User Registered Succesfully');
                }
                else {
                    alert('User Registration Falied');
                }
            });
    }
    cancel()
    {
        this._router.navigate(['']);
    }
}