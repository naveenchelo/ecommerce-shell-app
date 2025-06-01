import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-nav-primary',
  standalone: false,
  templateUrl: './nav-primary.component.html',
  styleUrl: './nav-primary.component.scss',
})
export class NavPrimaryComponent implements OnInit {
  public menuItems: MenuItem[] = [];

  ngOnInit(): void {
    this.initializeMenuItems();
  }

  private initializeMenuItems(): void {
    this.menuItems = [
      {
        label: 'Home',
        icon: 'pi pi-home',
        routerLink: '/',
      },
      {
        label: 'Products',
        icon: 'pi pi-box',
        routerLink: '/products',
      },
      {
        label: 'Cart',
        icon: 'pi pi-shopping-cart',
        routerLink: '/cart',
      },
      {
        label: 'Contact',
        icon: 'pi pi-envelope',
        routerLink: '/contact',
      },
    ];
  }
}
