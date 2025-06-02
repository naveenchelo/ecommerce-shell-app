import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { routes } from './navigation.routing';
import { NavPrimaryComponent } from './components/desktop/nav-primary/nav-primary.component';
import { NavigationComponent } from './components/desktop/navigation/navigation.component';
import { SearchComponent } from './components/search/search.component';
import { FooterComponent } from './components/footer/footer.component';
import { MenubarModule } from 'primeng/menubar';
import { TabMenuModule } from 'primeng/tabmenu';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { FormsModule } from '@angular/forms';

const COMPONENTS = [
  NavPrimaryComponent,
  NavigationComponent,
  FooterComponent,
  SearchComponent,
];

@NgModule({
  declarations: [...COMPONENTS],
  imports: [
    RouterModule.forChild(routes),
    CommonModule,
    FormsModule,
    MenubarModule,
    TabMenuModule,
    InputTextModule,
    ButtonModule,
  ],
  providers: [],
})
export class NavigationModule {}
