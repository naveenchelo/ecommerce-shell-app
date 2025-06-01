import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { routes } from './navigation.routing';
import { NavPrimaryComponent } from './components/desktop/nav-primary/nav-primary.component';
import { NavSecondaryComponent } from './components/desktop/nav-secondary/nav-secondary.component';
import { NavigationComponent } from './components/desktop/navigation/navigation.component';
import { SearchComponent } from './components/search/search.component';
import { FooterComponent } from './components/footer/footer.component';

const COMPONENTS = [
  NavPrimaryComponent,
  NavSecondaryComponent,
  NavigationComponent,
  FooterComponent,
  SearchComponent,
];

@NgModule({
  declarations: [...COMPONENTS],
  imports: [RouterModule.forChild(routes), CommonModule],
  providers: [],
})
export class NavigationModule {}
