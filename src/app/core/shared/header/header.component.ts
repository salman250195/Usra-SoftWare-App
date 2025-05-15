import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
declare var bootstrap: any;

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  @ViewChild('navbarCollapse', { static: false }) navbarCollapse!: ElementRef;

  constructor() { }

  ngOnInit(): void {
    console.log('Header component loaded...');
    
  }

closeNavbar() {
    const collapseElement = this.navbarCollapse.nativeElement;
    
    // Check if element has "show" class, meaning it's open
    if (collapseElement.classList.contains('show')) {
      const bsCollapse = bootstrap.Collapse.getInstance(collapseElement) 
        || new bootstrap.Collapse(collapseElement, { toggle: false });

      bsCollapse.hide();
    }
}


}
