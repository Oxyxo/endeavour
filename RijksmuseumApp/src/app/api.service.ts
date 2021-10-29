import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

const url = new URL('https://www.rijksmuseum.nl/api/en/collection?key=mxGCFV7l');

@Injectable({
    providedIn: 'root'
})
export class ApiService {

    constructor(private http: HttpClient) {
    }

    public fetchCollection(search: string): Observable<any> {
        url.searchParams.set("q", search);
        url.searchParams.set("imgonly", "True")
        return this.http.get(url.toString());
    }
}