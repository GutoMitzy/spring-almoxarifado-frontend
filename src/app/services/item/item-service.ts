import { Service, inject, signal } from '@angular/core';
import { environment } from '../../../environments/environment';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { tap } from 'rxjs';

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
    quantidade: number;
    categoriaNome: string;
}

@Service()
export class ItemService {
    private readonly apiUrl = environment.apiUrl;
    private readonly http =  inject(HttpClient);

    readonly pageSize = 8;

    readonly items = signal<IItem[]>([]);
    readonly totalItems = signal(0);
    readonly totalPages = signal(0);

    readonly items$ = this.items.asReadonly();
    readonly totalItems$ = this.totalItems.asReadonly();
    readonly totalPages$ = this.totalPages.asReadonly();

    getAllItems(page: number, size: number): Observable<IPage<IItem>> {
        return this.http.get<IPage<IItem>>(
            `${this.apiUrl}/itens?page=${page}&size=${size}`
        ).pipe(
            tap((data) => {
                this.items.set(data.content);
                this.totalItems.set(data.totalElements);
                this.totalPages.set(data.totalPages);
            })
        );
    }
}
