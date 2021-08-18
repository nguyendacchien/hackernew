import {Component, OnInit} from '@angular/core';
import {Iarticle} from "../iarticle";

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit {

  article: Iarticle = {}
  articles: Iarticle[] = [
    {
      title: 'ngan',
      url: 'https://www.facebook.com/taonganday.cute.babe'
    },
    {
      title: 'khai',
      url: 'https://www.facebook.com/khai.duongdanh.5'
    },
    {
      title: 'cuong',
      url: 'https://www.facebook.com/anhcuong.phamngo'

    }
  ]

  constructor() {
  }

  ngOnInit(): void {
  }

  addArticle() {
    let title = this.article.title;
    let url = this.article.url;
    let article = {title:title,url:url}

    this.articles.push(article);
  }

}
