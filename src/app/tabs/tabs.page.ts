import { Component, OnInit, viewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {
  IonTabs,
  IonTabBar,
  IonTabButton,
  IonIcon,
  IonLabel,
} from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import {
  home,
  homeOutline,
  calendarNumber,
  calendarNumberOutline,
  documentText,
  documentTextOutline,
  clipboard,
  clipboardOutline,
  rainy,
  rainyOutline,
} from 'ionicons/icons';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.page.html',
  styleUrls: ['./tabs.page.scss'],
  standalone: true,
  imports: [
    IonLabel,
    IonIcon,
    IonTabButton,
    IonTabBar,
    IonTabs,
    CommonModule,
    FormsModule,
  ],
})
export class TabsPage implements OnInit {
  selectedTab: string = 'home';
  constructor() {
    addIcons({
      home,
      homeOutline,
      calendarNumber,
      calendarNumberOutline,
      documentText,
      documentTextOutline,
      clipboard,
      clipboardOutline,
      rainy,
      rainyOutline,
    });
  }
  setCurrentTab(event: any) {
    this.selectedTab = event.tab;
  }

  ngOnInit() {}
}
