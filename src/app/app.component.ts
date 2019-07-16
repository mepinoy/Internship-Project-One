import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent{ 
  title = 'Internship-Project-One';
  public individuals = 2;
  components = [1,2,3,4,5,6,7,8,9,10]
}
