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
  public showSearch = false;
  public searchQuery = '';

  constructor(private router: Router) {}

  ngOnInit(): void {
    this.initializeMenuItems();
  }

  private initializeMenuItems(): void {
    this.menuItems = [
      {
        label: 'Men',
        icon: 'pi pi-male',
        routerLink: '/men',
      },
      {
        label: 'Women',
        icon: 'pi pi-female',
        routerLink: '/women',
      },
      {
        label: 'Kids',
        icon: 'pi pi-users',
        routerLink: '/kids',
      },
      {
        label: 'Search',
        icon: 'pi pi-search',
        styleClass: 'search-item',
        command: () => this.toggleSearch(),
      },
      {
        label: 'Profile',
        icon: 'pi pi-user',
        routerLink: '/profile',
      },
      {
        label: 'Cart',
        icon: 'pi pi-shopping-cart',
        routerLink: '/cart',
      }
    ];
  }

  toggleSearch(): void {
    this.showSearch = !this.showSearch;
    if (this.showSearch) {
      setTimeout(() => {
        const searchInput = document.querySelector('.search-container input');
        if (searchInput) {
          (searchInput as HTMLElement).focus();
        }
      }, 0);
    }
  }

  onSearch(): void {
    if (this.searchQuery.trim()) {
      this.router.navigate(['/search'], { queryParams: { q: this.searchQuery } });
      this.searchQuery = '';
      this.showSearch = false;
    }
  }
}
