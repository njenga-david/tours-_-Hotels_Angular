import { Component } from '@angular/core';
import { HomeComponent } from './hotels/home.component';
import { HousingLocationComponent } from './Tours/housing-location.component';
import { RouterModule } from '@angular/router';
@Component({
  standalone: true,
  selector: 'app-root',
  template:`
      <main>
        <header class="brand name">
          <img class="brand-logo" src="/assets/logo.svg">
        </header>
        <section class="content">
            <router-outlet></router-outlet>
        </section>
      </main>`,
  styleUrls: ['./app.component.css'],
  imports:[HomeComponent,RouterModule],
  
})
export class AppComponent {
  title = 'homes';
}
