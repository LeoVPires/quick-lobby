import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {
  IonMenu,
  IonToolbar,
  IonTitle,
  IonHeader,
  IonFooter,
  IonList,
  IonItem,
  IonToggle,
  IonButton,
  IonMenuToggle,
  IonButtons,
  IonIcon,
} from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { moonOutline, close } from 'ionicons/icons';

@Component({
  selector: 'app-side-menu',
  templateUrl: './side-menu.component.html',
  styleUrls: ['./side-menu.component.scss'],
  imports: [
    IonIcon,
    IonButtons,
    IonButton,
    FormsModule,
    IonToggle,
    IonItem,
    IonList,
    IonFooter,
    IonHeader,
    IonTitle,
    IonMenu,
    IonToolbar,
    IonMenuToggle,
  ],
})
export class SideMenuComponent implements OnInit {
  paletteToggle = false;

  constructor() {
    addIcons({
      moonOutline,
      close,
    });
  }

  ngOnInit() {
    // Use matchMedia to check the user preference
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)');

    // Initialize the dark palette based on the initial
    // value of the prefers-color-scheme media query
    this.initializeDarkPalette(prefersDark.matches);

    // Listen for changes to the prefers-color-scheme media query
    prefersDark.addEventListener('change', (mediaQuery) =>
      this.initializeDarkPalette(mediaQuery.matches),
    );
  }
  // Check/uncheck the toggle and update the palette based on isDark
  initializeDarkPalette(isDark: boolean) {
    this.paletteToggle = isDark;
    this.toggleDarkPalette(isDark);
  }

  // Listen for the toggle check/uncheck to toggle the dark palette
  toggleChange(event: CustomEvent) {
    this.toggleDarkPalette(event.detail.checked);
  }

  // Add or remove the "ion-palette-dark" class on the html element
  toggleDarkPalette(shouldAdd: boolean) {
    document.documentElement.classList.toggle('ion-palette-dark', shouldAdd);
  }
}
