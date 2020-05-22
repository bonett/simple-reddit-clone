import { Component, OnInit, Input, HostBinding } from '@angular/core';
import { Article } from './article.model';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.scss']
})
export class ArticleComponent implements OnInit {

  @HostBinding('attr.class') cssClass = 'row';
  article: Article;

  votes: number;
  title: string;
  link: string;

  constructor() {
    this.article = new Article(
      'Angular 2',
      'http://angular.io',
      10);
  }

  ngOnInit(): void { }

  onVoteUp(): boolean {
    this.article.voteUp();
    return false;
  }

  onVoteDown(): boolean {
    this.article.voteDown();
    return false;
  }
}
