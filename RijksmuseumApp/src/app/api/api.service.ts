import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
const key = "mxGCFV7l"
const collectionUrl = new URL('https://www.rijksmuseum.nl/api/en/collection');
const detailsUrl = 'https://www.rijksmuseum.nl/api/en/collection/';

@Injectable({
    providedIn: 'root'
})
export class ApiService {

    constructor(private http: HttpClient) {
    }

    public fetchCollection(pageSize: number, pageNumber: number, search: string): Observable<any> {
        collectionUrl.searchParams.set("q", search);
        collectionUrl.searchParams.set("imgonly", "True");
        collectionUrl.searchParams.set("ps", pageSize.toString());
        collectionUrl.searchParams.set("p", pageNumber.toString());
        collectionUrl.searchParams.set("key", key);
        return this.http.get(collectionUrl.toString());
    }
    public fetchObject(id: string): Observable<any> {
        let objDetailsUrl = new URL(id, detailsUrl)
        objDetailsUrl.searchParams.set("key", key);
        return this.http.get(objDetailsUrl.toString());
    }
}