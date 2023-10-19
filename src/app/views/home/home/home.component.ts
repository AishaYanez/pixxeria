import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  currentIndex = 0;
  nextSlide() {
    this.currentIndex = (this.currentIndex + 1) % 3;
  }

  prevSlide() {
    this.currentIndex = (this.currentIndex - 1 + 3) % 3;
  }
}
