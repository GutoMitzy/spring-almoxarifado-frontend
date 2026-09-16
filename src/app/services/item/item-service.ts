import { Service, inject } from '@angular/core';
import { environment } from '../../../environments/environment';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

export interface IPage<T> {
  content: T[];
  totalElements: number;
  totalPages: number;
  number: number;
  size: number;
  first: boolean;
  last: boolean;
}

export interface IItem {
    itemId: number;
    nome: string;
    descricao: string;
    categoriaNome: string;
}

@Service()
export class ItemService {
    private readonly apiUrl = environment.apiUrl;
    private readonly http =  inject(HttpClient);

    getAllItems(page: number, size: number): Observable<IPage<IItem>> {
        return this.http.get<IPage<IItem>>(`${this.apiUrl}/itens?page=${page}&size=${size}`);
    }
}
