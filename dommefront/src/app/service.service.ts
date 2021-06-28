import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpRequest, HttpHandler, HttpEvent} from '@angular/common/http'; 
import { Observable } from 'rxjs';
import { Forum } from './data';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {
  
  constructor(private http: HttpClient) { }
  
  private apiURL = "https://djangodemodomme.herokuapp.com/" 

  getForums(int:number):Observable<Forum>{
    return this.http.get<Forum>(`${this.apiURL}domme/forums/${int}`);
  }
}
