import { Service, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface IPost {
    "userId": number;
    "id": number;
    "title": string;
    "body": string;
}

@Service()
export class ApiSpringAlmoxarifado {
    private readonly _httpClient = inject(HttpClient);

    getItems(): Observable<IPost[]> {
        return this._httpClient.get<IPost[]>('https://jsonplaceholder.typicode.com/posts');
    }
}
