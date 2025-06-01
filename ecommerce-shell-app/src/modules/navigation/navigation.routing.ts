import { Routes } from '@angular/router';
import { NavigationComponent } from './components/desktop/navigation/navigation.component';
import { NavPrimaryComponent } from './components/desktop/nav-primary/nav-primary.component';
import { NavSecondaryComponent } from './components/desktop/nav-secondary/nav-secondary.component';
import { SearchComponent } from './components/search/search.component';
import { FooterComponent } from './components/footer/footer.component';

export const routes: Routes = [
  {
    path: '',
    component: NavigationComponent,
    children: [
      {
        path: 'primary',
        component: NavPrimaryComponent,
      },
      {
        path: 'secondary',
        component: NavSecondaryComponent,
      },
      {
        path: 'search',
        component: SearchComponent,
      },
      {
        path: 'footer',
        component: FooterComponent,
      },
    ],
  },
];
