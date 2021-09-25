import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular';

  getRandomInt(max: number) {
    return Math.floor(Math.random() * max)
  }
  pastelColor = Array.from("abcdef".repeat(8), (ch, i) =>
    (([a,...r]) => a+a+ch+ch+r[~~(i/6)%4].repeat(2))(i<24 ? "fcdef" : "cfedc")
  );

  randomColor = `#${this.pastelColor[this.getRandomInt(47)]}`;
}
