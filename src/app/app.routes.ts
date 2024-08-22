import { Routes } from '@angular/router';
import {HeaderComponent} from "./components/header/header.component"
import { AboutComponent } from './components/about/about.component';
import { ClientsComponent } from './components/clients/clients.component';
import { GalleryComponent } from './components/gallery/gallery.component';
import { ServicesComponent } from './components/services/services.component';
import { TestimonialsComponent } from './components/testimonials/testimonials.component';
import { NotFoundComponent } from './components/not-found/not-found.component';


export const routes: Routes = [
    {title: "MFACTORY | home",  path: '', component: HeaderComponent},
    {title: "MFACTORY | about",  path: 'about', component: AboutComponent},
    {title: "MFACTORY | testimony",  path: 'testimonials', component: TestimonialsComponent},
    {title: "MFACTORY | gallery",  path: 'gallery', component: GalleryComponent},
    {title: "MFACTORY | service",  path: 'services', component: ServicesComponent},
    {title: "MFACTORY | client",  path: 'clients', component: ClientsComponent},
    {title: "MFACTORY | home",  path: 'home', component: HeaderComponent},
    {title: "MFACTORY | Not Found",  path: "**", component: NotFoundComponent}
];
