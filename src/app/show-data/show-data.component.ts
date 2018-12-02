import { Input, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-show-data',
  templateUrl: './show-data.component.html',
  styleUrls: ['./show-data.component.css']
})
export class ShowDataComponent implements OnInit {

  @Input() xyz: string;
  @Input() ph: string;
  
  constructor() { }

  ngOnInit() {

    console.log(this.xyz);
  }

}
