import { Service, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError, map, of } from 'rxjs';
import { environment } from '../../../environments/environment';

@Service()
export class HealthService {
    private readonly http = inject(HttpClient);
    private readonly apiUrl = environment.apiUrl;

    getHealth(): Observable<boolean> {
    return this.http.get(this.apiUrl + '/health').pipe(
        map(() => true),
        catchError(() => of(false))
    );
    }
}
