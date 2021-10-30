import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../api/api.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {
  id = "";
  title = ""
  art: any = {}
  constructor(private route: ActivatedRoute, private service: ApiService) {
    console.log("Hi, are you checking my code?")
  }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.id = params["id"]
    })
    this.service.fetchObject(this.id).subscribe((data) => {
      console.log(data);
      this.title = data.artObject.title
      this.art = data.artObject

    })
  }

}
