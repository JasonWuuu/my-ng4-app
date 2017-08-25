import { Injectable, Inject } from '@angular/core';

@Injectable()
export class LogService {

  constructor(private enable: boolean
    // , private consoleService: ConsoleService
  ) {

  }

  public log(message: string): void {
    if (this.enable) {
      console.log(`Enable Log Service:${message}`);
    } else {
      console.log(`Disable Log Service:${message}`);
    }
  }
}

@Injectable()
export class ConsoleService {
  log(message) {
    console.log(message);
  }
}

@Injectable()
export class ValueDemoService {
  constructor( @Inject('appName') private appName) {

  }

  showAppName(): string {
    return this.appName;
  }
}
