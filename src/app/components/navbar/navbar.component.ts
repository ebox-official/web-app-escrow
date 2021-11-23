import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { ConnectionService } from 'src/app/services/connection/connection.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html'
})
export class NavbarComponent implements OnInit, AfterViewInit {

  @ViewChild("darkModeCheck") darkModeCheck;

  constructor(
    public connection: ConnectionService,
    private router: Router
  ) { }

  ngOnInit(): void {
    
  }

  ngAfterViewInit() {
    let check = this.darkModeCheck.nativeElement;
    let prefersColorScheme = localStorage.getItem("bs.prefers-color-scheme");
    if (prefersColorScheme === "dark") {
      check.checked = true;
    }
    else {
      check.checked = false;
    }
  }

  setDarkmode() {
    window["darkmode"].toggleDarkMode();
  }

  disconnect() {
    this.connection.disconnect();
    this.router.navigate([""], { queryParams: { returnUrl: this.router.url } });
  }

}
