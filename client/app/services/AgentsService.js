"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
/**
 * Created by Vlad on 7/6/2016.
 */
const core_1 = require('@angular/core');
const http_1 = require("@angular/http");
const Observable_1 = require('rxjs/Observable');
let HeroService = class HeroService {
    constructor(http) {
        this.http = http;
        this.url = 'http://front-desk.ca/tableblue/agents/getagents.php';
    }
    parse(res) {
        return res.json().list;
    }
    onError(error) {
        let errMsg = (error.message) ? error.message :
            error.status ? `${error.status} - ${error.statusText}` : 'Server error';
        console.error(errMsg); // log to console instead
        return Observable_1.Observable.throw(errMsg);
    }
    getHeroes() {
        return this.http.get(this.url).map(this.parse); //.catch(this.onError);
    }
};
HeroService = __decorate([
    core_1.Injectable(), 
    __metadata('design:paramtypes', [http_1.Http])
], HeroService);
exports.HeroService = HeroService;
//# sourceMappingURL=AgentsService.js.map