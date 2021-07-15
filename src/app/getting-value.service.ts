import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class GettingValueService {
  url = "https://mysterious-castle-20545.herokuapp.com/";

  constructor(private http: HttpClient) { }

  getValue(){
    return this.http.get(`https://mysterious-castle-20545.herokuapp.com/users`).pipe(map(res => res))
  }
}
