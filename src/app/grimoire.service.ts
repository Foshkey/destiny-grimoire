import { Injectable } from '@angular/core';
import { Http, Headers, Response, RequestOptionsArgs } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import { BungieApiResponse } from './models/bungie-api-response';
import { Grimoire } from './models/grimoire'

@Injectable()
export class GrimoireService {
  
  grimoire: Grimoire;
  
  private grimoireUrl = "grimoire.json";
  //private grimoireUrl = "http://bungie-proxy.herokuapp.com/Platform/Destiny/Vanguard/Grimoire/Definition/";

  constructor(private http: Http) {
    let options: RequestOptionsArgs = {
      headers: new Headers({
        "X-API-Key": "dd7ab8a7f5434d148d389a49623271b4"
      })
    } 
    
    http.get(this.grimoireUrl, options)
        .map(response => response.json())
        .subscribe((apiResponse: BungieApiResponse<Grimoire>) => this.grimoire = apiResponse.Response);
  }

}
