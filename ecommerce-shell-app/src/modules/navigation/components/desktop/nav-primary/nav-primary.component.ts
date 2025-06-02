import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-nav-primary',
  standalone: false,
  templateUrl: './nav-primary.component.html',
  styleUrl: './nav-primary.component.scss',
})
export class NavPrimaryComponent implements OnInit {
  public menuItems: MenuItem[] = [];
  public endMenuItems: MenuItem[] = [];

  constructor(private router: Router) {}

  ngOnInit(): void {
    this.initializeMenuItems();
  }

  private initializeMenuItems(): void {
    this.menuItems = [
      {
        label: 'Men',
        routerLink: '/men',
      },
      {
        label: 'Women',
        routerLink: '/women',
      },
      {
        label: 'Kids',
        routerLink: '/kids',
      }
    ];

    this.endMenuItems = [
      {
        label: 'Cart',
        icon: 'pi pi-shopping-cart',
        routerLink: '/cart',
      },
      {
        label: 'Profile',
        icon: 'pi pi-user',
        routerLink: '/profile',
      },
    ];
  }
} 
