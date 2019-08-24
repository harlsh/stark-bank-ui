import { Injectable } from '@angular/core';
import { BankUser } from './BankUser';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BankuserService {

  private BANKUSER_API_URL = "http://localhost:8080/api/v1/branches/1/bankusers/"
  bankusers: any[] = [];
  constructor(private httpClient:HttpClient) { }
  saveBankUser(bankUser: BankUser):Observable<any>{
    return this.httpClient.post(this.BANKUSER_API_URL, JSON.stringify(bankUser))
  }

}


  

