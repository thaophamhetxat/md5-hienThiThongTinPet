import {Component, OnInit} from '@angular/core';
import {Pet} from "./pet";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  pet: Pet = {
    name: 'puppie',
    image: 'http://yourdost-blog-images.s3-ap-southeast-1.amazonaws.com/wp-content/uploads/2016/01/03165939/Dogs.jpg'
  };
  // title = 'md5-HienThiThongTinPer';


  constructor() {
  }

  ngOnInit(): void {
  }
}
