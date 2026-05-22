import { Component, OnInit, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App implements OnInit{
  protected readonly title = signal('app');
  notes: any[] = [];

  async ngOnInit() {
    try {
      const response = await fetch('/api/notes');

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      this.notes = await response.json();

      console.log(this.notes);
    } catch (error) {
      console.error('Failed to fetch notes:', error);
    }
  }
}
