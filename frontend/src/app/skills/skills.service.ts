import { Component, Input } from '@angular/core';
import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/toPromise';
import { Skills } from './skills.model';
import { Page } from '../page/page.model';

@Injectable()
export class SkillsService {

  constructor(private http: Http) { }

  getPage(): Observable<Page[]> {
    return this.http.get('../assets/data/skills.json')
    .map(res => res.json()['skills-page'][0])
    .catch(err => Observable.throw(err.message))
  }

  getList(): Observable<Skills[]> {
    return this.http.get('.././assets/data/skills.json')
    .map(res => res.json()['skills-page'][0]['skills-list'])
    .catch(err => Observable.throw(err.message))
  }

  getSkill(skill_id): Observable<Skills[]> {
    return this.http.get('.././assets/data/skills.json')
    .map(response => response.json()['skills-page'][0]['skills-list'][skill_id])
  }
}
