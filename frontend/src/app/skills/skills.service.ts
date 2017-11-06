import { Component, Input } from '@angular/core';
import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/toPromise';
import { Skills } from './skills.model';

@Injectable()
export class SkillsService {

  constructor(private http: Http) { }

  getList(): Promise<Skills[]> {
    return this.http.get('.././assets/data/skills.json')
      .toPromise()
      .then(response => response.json().skills)
  }
}
