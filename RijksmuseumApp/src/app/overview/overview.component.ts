import { Component } from '@angular/core';
import { ApiService } from '../api/api.service';

@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.scss']
})
export class OverviewComponent {
  title = 'RijksmuseumApp';
  artObjects: any;
  userSearch = "Russia";
  results = 0;
  pageSize = 10;
  pageNumber = 1;
  totalPages = 0;
  constructor(private service: ApiService) {
    this.fetchUserSearch();
  }
  update(value: string) {
    this.resetPage()
    this.userSearch = value
    this.fetchUserSearch();
  }
  fetchUserSearch() {
    this.service.fetchCollection(this.pageSize, this.pageNumber, this.userSearch).subscribe((data) => {
      console.log(data)
      this.results = data.count;
      this.totalPages = Math.ceil(data.count / this.pageSize);
      this.artObjects = data.artObjects;
    })
  }
  resetPage() {
    this.pageNumber = 1;
  }

  nextPage() {
    if (this.pageNumber * this.pageSize >= this.results) {
      return
    }
    this.pageNumber++
    this.fetchUserSearch()
  }
  previousPage() {
    if (this.pageNumber == 1) {
      return
    }
    this.pageNumber--
    this.fetchUserSearch()
  }

  goToTop() {
    window.scrollTo(0, 0);
  }

}
