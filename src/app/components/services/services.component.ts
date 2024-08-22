import { Component, inject } from '@angular/core';
import { ConfigItem } from '../../services/config-item';
import { ConfigService } from '../../services/config.service';

@Component({
  selector: 'app-services',
  standalone: true,
  imports: [],
  templateUrl: './services.component.html',
  styleUrl: './services.component.css'
})
export class ServicesComponent {

  service: ConfigItem |  undefined;
  configService: ConfigService = inject(ConfigService);

  constructor(){
    this.service = this.configService.getPageByName('service');
  }

}
