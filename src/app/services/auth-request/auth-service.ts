import { Service, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';
import { HttpClient } from '@angular/common/http';

export interface ILoginResponse {
    "token": string;
    "expiresIn": number;
}

@Service()
export class AuthService {
    private readonly http = inject(HttpClient);
    private readonly apiUrl = environment.apiUrl;

    postLogin(nome: string, senha: string): Observable<ILoginResponse> {
        const url = `${this.apiUrl}/auth/login`;
        const body = { nome, senha };

        return this.http.post<ILoginResponse>(url, body)};

    private readonly TOKEN_KEY = 'token';

    setToken(token: string): void {
        localStorage.setItem(this.TOKEN_KEY, token);
    }

    getToken(): string | null {
        return localStorage.getItem(this.TOKEN_KEY);
    }

    removeToken(): void {
        localStorage.removeItem(this.TOKEN_KEY);
    }

    isAuthenticated(): boolean {
        return this.getToken() !== null;
    }

    logout(): void {
        localStorage.removeItem('token');
    }
}
