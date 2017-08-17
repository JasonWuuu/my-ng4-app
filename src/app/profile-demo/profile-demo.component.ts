import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-profile-demo',
  templateUrl: './profile-demo.component.html',
  styleUrls: ['./profile-demo.component.css']
})
export class ProfileDemoComponent implements OnInit {
  userName: string;
  constructor(private router: ActivatedRoute) { }

  ngOnInit() {

    this.router.params.subscribe(params => {
      this.userName = params.username;
    });
  }

}
