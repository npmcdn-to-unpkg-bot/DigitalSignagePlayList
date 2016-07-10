/**
 * Created by Dmitriy Prilutsky on 05.07.2016.
 */
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
const core_1 = require('@angular/core');
const http_1 = require('@angular/http');
const Observable_1 = require('rxjs/Observable');
class Asset {
}
exports.Asset = Asset;
let AssetsService = class AssetsService {
    constructor(http) {
        this.http = http;
        this.dataUrl = 'images/images.json';
    }
    getData() {
        return this.http.get(this.dataUrl)
            .map((data) => this.parse(data))
            .catch(this.handleError);
    }
    addItem(name) {
        let body = JSON.stringify({ name: name });
        let headers = new http_1.Headers({ 'Content-Type': 'application/json' });
        let options = new http_1.RequestOptions({ headers: headers });
        return this.http.post(this.dataUrl, body, options)
            .map(this.parseOne)
            .catch(this.handleError);
    }
    parse(res) {
        let body = res.json();
        //console.log(body)
        body.forEach(function (item) {
            item.img = item.large;
        });
        return body || {};
    }
    parseOne(res) {
        let body = res.json();
        return body.data || {};
    }
    handleError(error) {
        let errMsg = (error.message) ? error.message :
            error.status ? `${error.status} - ${error.statusText}` : 'Server error';
        console.error(errMsg);
        return Observable_1.Observable.throw(errMsg);
    }
};
AssetsService = __decorate([
    core_1.Injectable(), 
    __metadata('design:paramtypes', [http_1.Http])
], AssetsService);
exports.AssetsService = AssetsService;
//# sourceMappingURL=assets-service.js.map