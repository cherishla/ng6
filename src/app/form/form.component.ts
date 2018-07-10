import { Component, OnInit } from '@angular/core';
import { Persons } from '../../models/persons';
import { PersonService } from '../person.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  //#region
  formCode=` <form #personForm="ngForm" (ngSubmit)="onSubmit(personForm)">
  <div class="form-group">
    <label>Name</label>
    <input type="text" class="form-control" minlength = "4" maxlength = "10" required 
        [(ngModel)]="person.name" name="name" #name="ngModel" />
  </div>
  <div [hidden]="name.valid || name.pristine" class="alert alert-danger">
    Name is required</div>
    <div *ngIf="name.errors?.minlength && name.touched" class="alert alert-danger">
        Minimum of 4 characters
    </div>
  <button type="submit" class="btn btn-success" 
    [disabled]="!personForm.form.valid">Submit</button>
</form>

<table  class="table-datatable table table-striped table-hover mv-lg">
  <thead>
    <tr>
      <th>id</th>
      <th>name</th>
    </tr>
  </thead>
  <tbody>
    <tr class="gradeX" *ngFor="let item of personsList">
      <td>{{item.id}}</td>
      <td>{{item.name}}</td>
    </tr>
  </tbody>
</table>
  `;

  formTSCode=`  import { Persons } from '../../models/persons';
  import { PersonService } from '../person.service';

  person: Persons = new Persons();
  personsList : Array<Persons>=[];
  constructor(private personService: PersonService) { }
  ngOnInit() {
    this.getPersons();
  }
  onSubmit(form){
    this.personService.addPerson(this.person).subscribe(() => this.getPersons());
  }

  getPersons(){
    this.personService.getPersons().subscribe(data => {
      data.sort((a,b)=>{
        if(a.id > b.id) return -1;
        else return 1;
      });
      this.personsList = data;
    });
  }
  `;
  //#endregion
  person: Persons = new Persons();
  personsList : Array<Persons>=[];
  constructor(private personService: PersonService) { }
  ngOnInit() {
    this.getPersons();
  }
  onSubmit(form){
    this.personService.addPerson(this.person).subscribe(() => this.getPersons());
  }

  getPersons(){
    this.personService.getPersons().subscribe(data => {
      data.sort((a,b)=>{
        if(a.id > b.id) return -1;
        else return 1;
      });
      this.personsList = data;
    });
  }
}
