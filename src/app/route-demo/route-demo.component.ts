import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-route-demo',
  templateUrl: './route-demo.component.html',
  styleUrls: ['./route-demo.component.css']
})
export class RouteDemoComponent implements OnInit {

  userName = 'congcong';
  constructor(private router: Router) { }

  ngOnInit() {
  }

  redirectToProfilePage1() {
    setTimeout(() => {
      this.router.navigate(['setting', 'profile', 'wucong']);
    }, 1000);
  }
  redirectToProfilePage2() {
    setTimeout(() => {
      // this.router.navigate(['setting', 'profile', 'wucong']);
      this.router.navigateByUrl('/setting/profile/wucong');
    }, 1000);
  }

}
