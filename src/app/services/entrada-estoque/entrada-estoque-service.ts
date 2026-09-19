import { Service, inject, signal } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs'
import { environment } from '../../../environments/environment';
import { IPage } from '../item/item-service'
import { tap } from 'rxjs';


export interface IEntradaEstoque {
    id: number;
    status: string;
    valorTotal: number;
    fornecedor: string;
    dataPrevisao: string;
}

@Service()
export class EntradaEstoqueService {
    readonly http = inject(HttpClient);
    readonly apiUrl = environment.apiUrl;

    readonly pageSize = 10;

    readonly entradas = signal<IEntradaEstoque[]>([]);
    readonly totalEntradas = signal(0);
    readonly totalPages = signal(0);

    readonly entradas$ = this.entradas.asReadonly();
    readonly totalEntradas$ = this.totalEntradas.asReadonly();
    readonly totalPages$ = this.totalPages.asReadonly();

    getEntradasEstoque(page: number, size: number): Observable<IPage<IEntradaEstoque>> {
        return this.http.get<IPage<IEntradaEstoque>>(
            `${this.apiUrl}/estoque/entradas?page=${page}&size=${size}`
        ).pipe(
            tap((data) => {
                this.entradas.set(data.content)
                this.totalEntradas.set(data.totalElements);
                this.totalPages.set(data.totalPages);
            })
        );
    }

}
