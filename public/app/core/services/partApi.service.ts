import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

import { Part } from '../models/Part';

@Injectable()
export class PartApiService {
    private partsApiUrl = 'api/parts';

    constructor(private http: Http) {
    }

    getParts(): Observable<Part[]> {
        return this.http.get(this.partsApiUrl)
            .map(this.extractData)
            .catch(this.handleError);
    }

    getPart(partNumber: String) {
        return this.http.get(`${this.partsApiUrl}/${partNumber}`)
            .map(this.extractData)
            .catch(this.handleError);
    }

    createPart(part: Part) {
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });

        return this.http.post(this.partsApiUrl, { part }, options)
            .map(this.extractData)
            .catch(this.handleError);
    }

    updatePart(part: Part) {
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });

        console.log('part to update: ', JSON.stringify(part, null, 2));

        return this.http.put(`${this.partsApiUrl}/${part.partNumber}`, { part }, options)
            .map(this.extractData)
            .catch(this.handleError);
    }

    deletePart(partNumber: String) {
        return this.http.delete(`${this.partsApiUrl}/${partNumber}`)
            .map(this.extractData)
            .catch(this.handleError);
    }

    private extractData(res: Response) {
        // console.log('Extracting data: ' + JSON.stringify(res.json()));
        return res.json().data || {};
    }

    private handleError(error: Response | any) {
        let errMsg: string;

        if (error instanceof Response) {
            const body = error.json() || '';
            const err = body.error || JSON.stringify(body);
            errMsg = `${error.status} - ${error.statusText || ''}: ${body.message} - ${err}`;
        } else {
            errMsg = error.message ? error.message : error.toString();
        }
        console.error(errMsg);
        return Observable.throw(errMsg);
    }
}