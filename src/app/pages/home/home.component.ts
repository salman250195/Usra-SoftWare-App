import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private titleService: Title, private metaService: Meta) { }

  ngOnInit(): void {
    this.titleService.setTitle('Usra Software | Ethical Software Development in India');
    this.metaService.updateTag({
      name: 'description',
    content: 'Usra Software offers ethical and innovative IT solutions in web development, mobile apps, UI/UX design, digital marketing, and more — with values rooted in faith and excellence.'
    });
    this.metaService.updateTag({
      name: 'keywords',
    content: 'Usra Software, software development India, ethical tech, web development, mobile app, UI UX design, digital marketing'
    })
  }

}
