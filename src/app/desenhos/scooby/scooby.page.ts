import { Component, OnInit, ViewChild } from '@angular/core';
import { IonSlides } from '@ionic/angular';

@Component({
  selector: 'app-scooby',
  templateUrl: './scooby.page.html',
  styleUrls: ['./scooby.page.scss'],
})
export class ScoobyPage implements OnInit {
  @ViewChild(IonSlides, { static: true }) slides: IonSlides;
  
  constructor() { }


  ngOnInit() {
  }

  /* Mudança de Slides */
  segmentChanged(event: any) {

    if (event.detail.value === "detalhes") {
      this.slides.slideTo(0);
    }
    if (event.detail.value === "sinopse") {
      this.slides.slideTo(1);
    }
    if (event.detail.value === "avaliar") {
      this.slides.slideTo(2);


    }
  }
}
