import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { CarouselComponent } from '../../shared/components/carousel/carousel.component';
import { FeatureCardComponent } from '../../shared/components/feature-card/feature-card.component';
import { FooterComponent } from '../../shared/components/footer/footer.component';
import { carouselSlides, features, advantages } from './data/home.data';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    CarouselComponent,
    FeatureCardComponent,
    FooterComponent
  ],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  carouselSlides = carouselSlides;
  features = features;
  advantages = advantages;
}