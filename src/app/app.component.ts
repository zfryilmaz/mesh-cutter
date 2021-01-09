import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  user = 'Zafer';
  items = [
    { description: "Kahvaltı", action:"No" },
    { description: "Sinema", action:"Yes" },
    { description: "Spor", action:"No" },
    { description: "Ders Çalış", action:"No" },

  ];
}
