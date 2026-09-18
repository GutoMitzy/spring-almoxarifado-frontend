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
    nome: string;
    descricao: string;
    quantidade: number;
    categoria: string;
    status: string;
    precoUnitario: number;
}

export interface IStatistics {
    itensEmBaixa: number;
    entradasRecentes: number;
    saidasRecentes: number;
}

@Service()
export class ItemService {
    private readonly apiUrl = environment.apiUrl;
    private readonly http =  inject(HttpClient);

    readonly pageSize = 8;

    readonly items = signal<IItem[]>([]);
    readonly totalItems = signal(0);
    readonly totalPages = signal(0);
    readonly itensEmBaixa = signal(0);
    readonly entradasRecentes = signal(0);
    readonly saidasRecentes = signal(0);

    readonly items$ = this.items.asReadonly();
    readonly totalItems$ = this.totalItems.asReadonly();
    readonly totalPages$ = this.totalPages.asReadonly();
    readonly itensEmBaixa$ = this.itensEmBaixa.asReadonly();
    readonly entradasRecentes$ = this.entradasRecentes.asReadonly();
    readonly saidasRecentes$ = this.saidasRecentes.asReadonly();

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

    getStatistics(): Observable<IStatistics> {
        return this.http.get<IStatistics>(this.apiUrl + "/estoque")
            .pipe(
                tap((data) => {
                    this.itensEmBaixa.set(data.itensEmBaixa);
                    this.entradasRecentes.set(data.entradasRecentes);
                    this.saidasRecentes.set(data.saidasRecentes);
                })
            );
    }
}
