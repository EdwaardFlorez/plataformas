import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'my-app';
  people = [
    {
      id:1,
      name:"Mark",
      last_name:"Otto",
      sn: "mdo",
      check:true
    },
    {
      id:2,
      name:"Jacob",
      last_name:"Thornton",
      sn: "fat",
      check:false
    },
    {
      id:3,
      name: "Larry",
      last_name: "the brid",
      sn : "ftwitter",
      check: false
    },
  ]
}
