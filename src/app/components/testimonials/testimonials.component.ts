import { Component, inject } from '@angular/core';
import { ConfigItem } from '../../services/config-item';
import { ConfigService } from '../../services/config.service';
@Component({
  selector: 'app-testimonials',
  standalone: true,
  imports: [],
  templateUrl: './testimonials.component.html',
  styleUrl: './testimonials.component.css'
})
export class TestimonialsComponent {
  testimonial: ConfigItem |  undefined;
  configService: ConfigService = inject(ConfigService);

  constructor(){
    this.testimonial = this.configService.getPageByName('testimonial');
  }

  // testimonial =  {
  //   top: "FEEDBACK",
  //   title: "What our customers are saying",
  //   feedback: [
  //     {id: 1, name: "John Doe - Happy Customer", img: "images/user-images/user-1.jpg", comments: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed doeiusmod tempor incididunt ut labore et dolore magna aliqua"},
  //     {id: 2, name: "Roslyn Doe - Happy Customer", img: "images/user-images/user-2.jpg", comments: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed doeiusmod tempor incididunt ut labore et dolore magna aliqua"},
  //     {id: 3, name: "Thomas Doe - Happy Customer", img: "images/user-images/user-3.jpg", comments: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed doeiusmod tempor incididunt ut labore et dolore magna aliqua"},
  //   ]
  // }
}
