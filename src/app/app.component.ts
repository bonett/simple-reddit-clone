import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  _onAddArticle(title: HTMLInputElement, link: HTMLInputElement) {
    console.log(`adding article title ${title.value} and link: ${link.value}`);
    return false;
  }
}
