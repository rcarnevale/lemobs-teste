import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PartyResignationDateService {

  private apiUrlHost = environment.apiTabelas.host;
  private methods = environment.apiTabelas.methods.resignationDate;

  constructor(
    private http: HttpClient
  ) { }

  private getHeaders(){
    return new HttpHeaders({
      'Content-Type': 'application/json; charset=UTF-8',
    })
  }

  getMethodPlaceholder(receivedParams) {
    let params = new HttpParams()
      params.set('nome_parametro_1', receivedParams);

    return this.http.get(`${this.apiUrlHost + this.methods}`, 
      {headers:this.getHeaders(), params:params})
  }
}
