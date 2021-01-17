import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PaymentServiceService {

  constructor(private http: HttpClient) { }

  updatePaymentRequest(postData) {
    return;
    // return this.http.post('url', postData);
  }
}
