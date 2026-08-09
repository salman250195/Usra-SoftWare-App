import { Component, OnInit } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';

declare var gtag: Function;

@Component({
  selector: 'app-thank-you',
  templateUrl: './thank-you.component.html',
  styleUrls: ['./thank-you.component.css']
})
export class ThankYouComponent implements OnInit {

  constructor(private title: Title, private meta: Meta) { }

  ngOnInit(): void {

    this.title.setTitle('Thank You | Usra Software');
    this.meta.updateTag({
      name: 'description',
      content: 'Thank you for contacting Usra Software. Our team will get back to you shortly.'
    });

    if(typeof gtag === 'function') {
      gtag('event', 'conversion', {
        'send_to': 'AW-XXXXXXXXXX/XXXXXXXXXX' // Google Ads Conversion ID
      });
    }

  };

}
