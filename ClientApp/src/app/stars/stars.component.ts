import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-stars',
  templateUrl: './stars.component.html',
  styleUrls: ['./stars.component.css']
})
export class StarsComponent implements OnInit {

  @Input() rating: number;
  numbersCollection: Array<number>;
  constructor() { }

  ngOnInit() {
    this.numbersCollection = Array(this.rating).fill(this.rating)
  }

}
