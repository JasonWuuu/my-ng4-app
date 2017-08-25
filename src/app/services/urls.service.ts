import { Injectable } from '@angular/core';

@Injectable()
export class UrlsService {
  Urls: any;
  constructor(private env: string) {
    // this.populateUrls();
    const u: IUrlService = new StageUrlService();
    console.log(JSON.stringify(u.Urls));

    const s: ProdUrlService = new ProdUrlService();

  }

  // private populateUrls() {
  //   if (this.env === 'DEV') {
  //     this.getDev();
  //   } else if (this.env === 'STAGE') {
  //     this.getStage();
  //   } else if (this.env === 'PROD') {

  //   } else {

  //   }
  // }

  // private getDev() {
  //   this.Urls = {
  //     getHeros: 'http://localhost:3000/heros'
  //   };
  // }

  // private getStage() {
  //   this.Urls = {
  //     getHeros: 'http://localhost:4000/heros'
  //   };
  // }
}





export interface IUrlService {
  readonly Urls: any;
}

class BaseUrlService implements IUrlService {
  protected _baseUrl: string;
  protected _urls: any;

  constructor() {
    this.setBaseUrl();
    this.setUrls(this._baseUrl);
  }

  protected setBaseUrl() {
    this._baseUrl = 'http:localhost:3000/';
  }

  protected setUrls(baseUrl: string) {
    this._urls = { heros: baseUrl + 'heros' };
  }

  public get Urls() {
    return this._urls;
  }

}

export class DevUrlService extends BaseUrlService implements IUrlService {

}

export class StageUrlService extends BaseUrlService implements IUrlService {
  setBaseUrl() {
    this._baseUrl = 'http:localhost:4000/';
  }

  setUrls(baseUrl: string) {
    this._urls = { heros: baseUrl + 'myHeros' };
  }

}

@MyEnv
class ProdUrlService extends BaseUrlService implements IUrlService {

}

function MyEnv(target: Function) {
  target.prototype.Test = () => {
    console.log('Hello');
  };

}

