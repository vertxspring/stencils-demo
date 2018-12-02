import { Input, Component, OnInit } from '@angular/core';

@Component({
  selector: 'box',
  templateUrl: './my-box.component.html',
  styleUrls: ['./my-box.component.css']
})
export class MyBoxComponent implements OnInit {

  constructor() { }

  @Input() desc;
  @Input() name; 
  ngOnInit() {
    
  }

}
