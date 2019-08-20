import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
  attributess=["id","name"];
   @Input('attributes') attributes:String[];
   @Input('items') items:any[];
  itemss=[{
      id:1,
      name:"a"
  },
  {
      id:2,
      name:"b"
  },
  {
      id:3,
      name:"c"
  }]
  constructor() { }

  ngOnInit() {
  }

}
