import { Component } from '@angular/core';

@Component({
    selector: 'dashboad-page',
    templateUrl: './Dashboard.html'
})
export class DashboardComponent {
constructor() {}
    handleData(name: any) {
    console.log('Data received from Parent', name);
    }
}