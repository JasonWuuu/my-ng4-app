import { Component, OnInit } from '@angular/core';
import { LogService, ValueDemoService } from '../services/log.service';
import { UrlsService } from '../services/urls.service';

@Component({
  selector: 'app-inject-demo',
  templateUrl: './inject-demo.component.html',
  styleUrls: ['./inject-demo.component.css']
})
export class InjectDemoComponent implements OnInit {

  constructor(private logService: LogService, private valueDemoService: ValueDemoService,
    private urlsService: UrlsService) { }

  ngOnInit() {
    this.logService.log('Fetching Heros...');
    console.log(this.valueDemoService.showAppName());
    console.log(this.urlsService.Urls);
  }

}
