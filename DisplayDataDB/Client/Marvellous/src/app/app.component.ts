import { Component } from '@angular/core';
import { MarvellousService } from './marvellous.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  message:any;
  
 // The constructor initializes the MarvellousService dependency injection.
 constructor(private service:MarvellousService)
 {

 }

  ngOnInit() 
  {
   this.service.getBatches().subscribe(data => { this.message=data;
  })
  }
}
