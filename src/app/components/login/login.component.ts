import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ConnectionService } from 'src/app/services/connection/connection.service';
import { ToasterService } from '../toaster/toaster.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(
    private connection: ConnectionService,
    private toasterService: ToasterService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {

    // Try to connect straight away (cached provider)
    this.connect();
  }

  async connect(providerName?) {
    try {
      await this.connection.connect(providerName);
    }
    catch (err) {
      if (err !== "Provider name not found.") {
        this.toasterService.addToaster({ color: "danger", message: err });
      }
      return;
    }
    this.toasterService.addToaster({ color: "success", message: "Connected successfully!" });
    setTimeout(() => {
      let returnUrl = this.route.snapshot.queryParamMap.get("returnUrl");
      this.router.navigateByUrl(returnUrl || "/main");
    }, 450);
  }

}
