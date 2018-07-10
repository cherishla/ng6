import { Component, OnInit } from '@angular/core';
import { Observable, Observer, of } from 'rxjs';
import { Persons } from '../../models/persons';
import { PersonService } from '../person.service';
import { catchError, map, tap } from 'rxjs/operators';

@Component({
  selector: 'app-service',
  templateUrl: './service.component.html',
  styleUrls: ['./service.component.css']
})
export class ServiceComponent implements OnInit {

  //#region data

  weatherCode = `  <button (click)="getWeather()">取得氣候</button>
  {{weatherStation$ | async }}
  `;

  weatherServiceCode = ` import { Observable, Observer, of } from 'rxjs';
  /**
   * 取得天氣資料
   * @param needError 是否要拋出錯誤
   */
 getWeatherData(needError?: boolean):Observable<string>{
   return Observable.create((observer: Observer<string>) => {
     try {
       // 雷達回波
       observer.next('今日上午天氣晴');

       //假設下午又取資料
       setTimeout(() => {
         if(needError)
           observer.error("Boooooooooom!")
         observer.next('今日下午狂風暴雨');
         observer.complete();

       }, 3000);
     } catch (error) {
       observer.error('雷達壞了');
     }
   });
 }
  `;
  weatherTsCode = ` /**
  * 取得天氣
  */
  getWeather() {
   this.weatherStation$ = this.getWeatherData();
   this.weatherStation$.subscribe(
     data => { },
     err => { console.log(err);},
     () => {
       console.log('done');
     });
  }
  

    /*
    this.weatherStation$.subscribe({
      next(data) { console.log(data); },
      error(err) { console.log(err); },
      complete() { console.log('done'); }
    });
    */
  }
  `;
  weatherMapTsCode = `  import { catchError, map, tap } from 'rxjs/operators';

  /**
   *  weather map
   */
  getWeatherWithMap() {
  const subWithMap = this.getWeatherData().pipe(
     (map((data, index) => { console.log(index + 1. + data); }))
   ).subscribe(data=>{}, err=>{}, ()=>{subWithMap.unsubscribe()});
  }
  `;

  weatherTapTsCode = `/**
  * weather logger
  */
  getWeatherWithTap(){
   const subWithTap = this.getWeatherData().pipe(tap(data=>console.log(data)))
                                           .subscribe();
                                            
  };
`;

  weatherErrTsCode = `/**
* weather catch error
*/
getWeatherWithCatchError(){
 this.getWeatherData(true).pipe(tap(data => console.log(`+ "`get data success:${data}`" + `)),
   catchError(err => of(console.error(`+ "`error:${err}`" + `)))).subscribe();
}`

initServiceCode=`import { HttpClientModule } from '@angular/common/http';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './in-memory-data.service';
import { PersonService } from './person.service';

@NgModule({
  declarations: [
    AppComponent,
    ...],
    imports: [
      BrowserModule,
      HttpClientModule,
      // The HttpClientInMemoryWebApiModule module intercepts HTTP requests
      // and returns simulated server responses.
      // Remove it when a real server is ready to receive requests.
      HttpClientInMemoryWebApiModule.forRoot(
      InMemoryDataService, { dataEncapsulation: false })
    ],
    providers: [PersonService],
  })
  export class AppModule { }
`;

serviceCode=`import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, Observer } from 'rxjs';
import { Persons } from '../models/persons';
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
@Injectable({
  providedIn: 'root'
})



export class PersonService {
  private url = 'api/persons';  // URL to web api

  constructor(  private http: HttpClient) {
  }
  /**
    GET:All persons data
   */
   getPersons(): Observable<Array<Persons>> {
    return this.http.get<Array<Persons>>(this.url);
  }
 
  /** POST: add a new person to the server */
  addPerson (person: Persons): Observable<Persons> {
    return this.http.post<Persons>(this.url, person, httpOptions);
  }
 
  /** DELETE: delete the person from the server */
  deletePerson (person: Persons | number): Observable<Persons> {
    const id = typeof person === 'number' ? person : person.id;
    const url = `+"`${this.url}/${id}`" +`;
 
    return this.http.delete<Persons>(url, httpOptions);
  }
 
  /** PUT: update the person on the server */
  updatePerson (person: Persons): Observable<any> {
    return this.http.put(this.url, person, httpOptions);
  }
}
`;

serviceTSCode=`import { PersonService } from '../person.service';

  personList: Array<Persons> = [];
  person: Persons = new Persons();
  constructor(private personService: PersonService) {

  }

  /**
   * 取得所有人員
   */
  getPersons() {
    this.personService.getPersons().subscribe(data => { this.personList = data; });
  }
  /**
   * 新增人員
   */
  addPerson() {
    this.personService.addPerson(this.person).subscribe((data) => { this.person = data; }, (error) => { console.log(error) }, () => { this.getPersons() });
  }
  /**
   * 刪除人員
   */
  deletePerson() {
    this.personService.deletePerson(this.person).subscribe(() => { this.getPersons(); });
  }
  /**
   * 更新人員
   */
  updatePerson() {
    this.personService.updatePerson(this.person).subscribe((data) => { console.log(data); this.getPersons() });
  }
`;

serviceHtmlCode=`<button (click)="getPersons()">取得所有人員</button>
<button (click)="addPerson()">新增人員</button>
<button (click)="deletePerson()">刪除人員</button>
<button (click)="updatePerson()">更新人員</button>
<p>
  <span *ngIf="personList.length > 0">{{personList| json}}</span>
</p>
<div>
  <p>
    <label>id</label>
    <input type="number" [(ngModel)]="person.id" readOnly>
  </p>
  <p>
    <label>name</label>
    <input type="text" [(ngModel)]="person.name">
  </p>
</div>
`;
  //#endregion


  weatherStation$: Observable<string>;
  personList: Array<Persons> = [];
  person: Persons = new Persons();
  constructor(private personService: PersonService) {

  }


  ngOnInit() {
  }

  /**
   * 取得天氣
   */
  getWeather() {
    this.weatherStation$ = this.getWeatherData();
    const sub = this.weatherStation$.subscribe(
      data => { console.log(data); },
      err => { console.log(err); },
      () => {
        console.log('done');
        sub.unsubscribe();
      });
  }

  /**
   * 取得天氣資料
   * @param needError 是否要拋出錯誤
   */
  getWeatherData(needError?: boolean): Observable<string> {
    return Observable.create((observer: Observer<string>) => {
      try {
        // 雷達回波
        observer.next('今日上午天氣晴');

        //假設下午又取資料
        setTimeout(() => {
          if (needError)
            observer.error("Boooooooooom!")
          observer.next('今日下午狂風暴雨');
          observer.complete();

        }, 3000);
      } catch (error) {
        observer.error('雷達壞了');
      }
    });
  }

  /**
   *  weather map
   */
  getWeatherWithMap() {
    const subWithMap = this.getWeatherData().pipe(
      (map((data, index) => { console.log(`${index + 1}. ${data}`); }))
    ).subscribe(data => { }, err => { }, () => { subWithMap.unsubscribe() });
  }

  /**
   * weather logger
   */
  getWeatherWithTap() {
    const subWithTap = this.getWeatherData().pipe(tap(data => console.log("Get Data:" + data)))
      .subscribe(data => { }, err => { }, () => { subWithTap.unsubscribe() });
  }

  /**
   * weather catch error
   */
  getWeatherWithCatchError() {
    this.getWeatherData(true).pipe(tap(data => console.log(`get data success:${data}`)),
      catchError(err => of(console.error(`error:${err}`)))).subscribe();
  }

  /**
   * 取得所有人員
   */
  getPersons() {
    this.personService.getPersons().subscribe(data => { this.personList = data; });
  }
  /**
   * 新增人員
   */
  addPerson() {
    this.personService.addPerson(this.person).subscribe((data) => { this.person = data; }, (error) => { console.log(error) }, () => { this.getPersons() });
  }
  /**
   * 刪除人員
   */
  deletePerson() {
    this.personService.deletePerson(this.person).subscribe(() => { this.getPersons(); });
  }
  /**
   * 更新人員
   */
  updatePerson() {
    this.personService.updatePerson(this.person).subscribe((data) => { console.log(data); this.getPersons() });
  }


}
