import { Component, inject, OnInit } from '@angular/core';
import { Router, NavigationEnd, RouterOutlet } from '@angular/router';
import { filter } from 'rxjs/operators';
import { Title } from '@angular/platform-browser';
import { MatIconRegistry, MatIcon } from '@angular/material/icon';
import { MatIconModule } from '@angular/material/icon';

@Component({
  imports: [RouterOutlet, MatIcon, MatIconModule],
  selector: 'app-root',
  styleUrl: './app.scss',
  templateUrl: './app.html',
})
export class App implements OnInit {
  private router = inject(Router);
  private titleService = inject(Title);
  private matIconRegistry = inject(MatIconRegistry);
  public readonly currentYear = new Date().getFullYear();

  constructor() {
    // Registry para Font Awesome e Material Icon
    this.matIconRegistry.registerFontClassAlias('fontawesome', 'fa-solid');
    this.matIconRegistry.registerFontClassAlias('fa-regular', 'fa-regular');
    this.matIconRegistry.registerFontClassAlias('fa-brands', 'fa-brands');
  }

  ngOnInit() {
    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd)
    ).subscribe(() => {
      let activeRouteChild = this.router.routerState.root;
      while (activeRouteChild.firstChild) {
        activeRouteChild = activeRouteChild.firstChild;
      }

      let title = 'Minha Agenda';
      const routeTitle = activeRouteChild.snapshot.data['title'];
      if (routeTitle) {
        title = `Minha Agenda - ${routeTitle}`;
      }

      this.titleService.setTitle(title);
    });
  }
}
