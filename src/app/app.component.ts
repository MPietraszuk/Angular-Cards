import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  posts = [
    {
      title: "Rocky",
      imageUrl: "assets/Rocky1.jpg",
      username: "mick",
      content:
        "It is a classic, but beautiful story about the hero who fails but still gets the girl in the end."
    },
    {
      title: "Jaws",
      imageUrl: "assets/Jaws.jpg",
      username: "greatwhite",
      content:
        "40 years and going. One of the truly great and lasting classics of American cinema."
    },
    {
      title: "Star Wars A New Hope",
      imageUrl: "assets/Star-Wars-New-Hope.jpg",
      username: "luke",
      content:
        "It revived science fiction as a viable movie medium, and, most importantly, began a special effects revolution."
    }
  ];
}
