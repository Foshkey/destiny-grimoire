import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import { BungieApiResponse } from './models/bungie-api-response';
import { Grimoire } from './models/grimoire'

@Injectable()
export class GrimoireService {
  
  grimoire: Grimoire;
  
  private grimoireUrl = 'grimoire.json'; // TODO: Create Proxy Server

  constructor(private http: Http) {
    http.get(this.grimoireUrl)
        .map(response => response.json())
        .subscribe((apiResponse: BungieApiResponse<Grimoire>) => this.grimoire = apiResponse.Response);
  }

}
