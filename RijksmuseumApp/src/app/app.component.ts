import { Component } from '@angular/core';
import { ApiService } from './api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']

})
export class AppComponent {
  title = 'RijksmuseumApp';
  artObjects: any;
  userSearch = "poop"
  constructor(private service: ApiService) {
    this.fetchUserSearch();
  }
  update(value: string) {
    this.userSearch = value
    this.fetchUserSearch();
  }
  fetchUserSearch() {
    this.service.fetchCollection(this.userSearch).subscribe((data) => {
      console.log(data)
      this.artObjects = data.artObjects
    })
  }

}
