import { Component } from '@angular/core';

@Component({
    selector: 'app-table',
    templateUrl: './table.component.html',
    styleUrls: ['./table.component.css']
})
export class TableComponent {
    Table: string = 'TABLE';
    id ='';
    firstName: string = '';
    lastName: string = '';
    username: string = '';
    email = '';
    address: string = '';
    country: string = '';
    zip = '';
    plan = '';
    message: string = '';
    metOn: string = '';
}

