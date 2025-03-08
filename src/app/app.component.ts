import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { Title } from '@angular/platform-browser';

interface Config {
  APP_NAME: string;
  CARD_TITLE: string;
  CARD_DESCRIPTION: string;
  INSTAGRAM_URL: string;
  X_URL: string;
  YOUTUBE_URL: string;
}

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  title = '';

  cardTitle: string = '';
  cardDescription: string = '';
  instagramUrl: string = '';
  xUrl: string = '';
  youtubeUrl: string = '';

  constructor(private http: HttpClient, private titleService: Title) { }

  ngOnInit(): void {
    this.loadConfig();
  }

  loadConfig(): void {
    this.http.get<Config>('/config/config.json').subscribe({
      next: (config) => {
        this.title = config.APP_NAME;
        this.cardTitle = config.CARD_TITLE;
        this.cardDescription = config.CARD_DESCRIPTION;
        this.instagramUrl = config.INSTAGRAM_URL;
        this.xUrl = config.X_URL;
        this.youtubeUrl = config.YOUTUBE_URL;

        this.titleService.setTitle(config.APP_NAME);
      },
      error: (error) => {
        console.error('Error loading config:', error);
        this.cardTitle = "Coming Soon";
        this.cardDescription = "Something extraordinary is being worked on.";
        this.instagramUrl = 'https://www.instagram.com/muharsln/';
        this.xUrl = 'https://www.x.com/muharsln/';
        this.youtubeUrl = 'https://www.youtube.com/muharsln/';
      }
    });
  }
}