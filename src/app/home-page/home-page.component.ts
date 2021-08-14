import {Component, HostListener, OnInit} from '@angular/core';

declare var $: any;

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {

  isHomeActive: boolean = false;
  isServicesActive: boolean = false;
  isOurTeamActive: boolean = false;
  isContactUsActive: boolean = false;

  constructor() {
  }

  ngOnInit(): void {
    this.isHomeActive = true;
  }

  @HostListener('document:scroll', ['$event'])
  pageScrolled() {
    if (window.pageYOffset < 500) {
      this.isHomeActive = true;
      this.isServicesActive = false;
      this.isOurTeamActive = false;
      this.isContactUsActive = false;
    }
    if (window.innerWidth > 1376) {
      if (window.pageYOffset > 500 && window.pageYOffset < 1700) {
        this.isHomeActive = false;
        this.isServicesActive = true;
        this.isOurTeamActive = false;
        this.isContactUsActive = false;
      }
      if (window.pageYOffset >= 1700 && window.pageYOffset < 2600) {
        this.isHomeActive = false;
        this.isServicesActive = false;
        this.isOurTeamActive = true;
        this.isContactUsActive = false;
      }
      if (window.pageYOffset >= 2600) {
        this.isHomeActive = false;
        this.isServicesActive = false;
        this.isOurTeamActive = false;
        this.isContactUsActive = true;
      }
    } else if (window.innerWidth <= 1376 && window.innerWidth > 1009) {
      if (window.pageYOffset > 500 && window.pageYOffset < 2070) {
        this.isHomeActive = false;
        this.isServicesActive = true;
        this.isOurTeamActive = false;
        this.isContactUsActive = false;
      }
      if (window.pageYOffset >= 2070 && window.pageYOffset < 3400) {
        this.isHomeActive = false;
        this.isServicesActive = false;
        this.isOurTeamActive = true;
        this.isContactUsActive = false;
      }
      if (window.pageYOffset >= 3400) {
        this.isHomeActive = false;
        this.isServicesActive = false;
        this.isOurTeamActive = false;
        this.isContactUsActive = true;
      }
    } else if (window.innerWidth >= 509 && window.innerWidth < 1009) {
      if (window.pageYOffset > 500 && window.pageYOffset < 2070) {
        this.isHomeActive = false;
        this.isServicesActive = true;
        this.isOurTeamActive = false;
        this.isContactUsActive = false;
      }
      if (window.pageYOffset >= 2070 && window.pageYOffset < 4300) {
        this.isHomeActive = false;
        this.isServicesActive = false;
        this.isOurTeamActive = true;
        this.isContactUsActive = false;
      }
      if (window.pageYOffset >= 4300) {
        this.isHomeActive = false;
        this.isServicesActive = false;
        this.isOurTeamActive = false;
        this.isContactUsActive = true;
      }
    } else if (window.innerWidth <= 510) {
      if (window.pageYOffset > 500 && window.pageYOffset < 2070) {
        this.isHomeActive = false;
        this.isServicesActive = true;
        this.isOurTeamActive = false;
        this.isContactUsActive = false;
      }
      if (window.pageYOffset >= 3350 && window.pageYOffset < 5000) {
        this.isHomeActive = false;
        this.isServicesActive = false;
        this.isOurTeamActive = true;
        this.isContactUsActive = false;
      }
      if (window.pageYOffset >= 5000) {
        this.isHomeActive = false;
        this.isServicesActive = false;
        this.isOurTeamActive = false;
        this.isContactUsActive = true;
      }
    }
  }

  homeClick() {

    window.scrollTo(0, 0);
  }

  servicesClick() {
    window.scrollTo(0, 950);
  }

  ourTeamClick() {
    if (window.innerWidth > 1376) {
      window.scrollTo(0, 2050);
    } else if (window.innerWidth <= 510) {
      window.scrollTo(0, 3700);
    } else if (window.innerWidth <= 1376) {
      window.scrollTo(0, 2420);
    }
  }

  contactUsClick() {
    if (window.innerWidth > 1505) {
      window.scrollTo(0, 3000);
    } else if (window.innerWidth <= 460) {
      window.scrollTo(0, 5600);
    } else if (window.innerWidth <= 1009) {
      window.scrollTo(0, 4500);
    } else if (window.innerWidth <= 1377) {
      window.scrollTo(0, 3900);
    } else if (window.innerWidth <= 1505) {
      window.scrollTo(0, 3500);
    }
  }

}
