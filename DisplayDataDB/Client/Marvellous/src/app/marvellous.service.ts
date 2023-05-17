import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MarvellousService {

  constructor(private http:HttpClient) 
  { 
      
  }

  
  getBatches()
  {

   //Connect to the Node + Express Server

    return this.http.get("http://localhost:5100/getBatches");
  }
}
