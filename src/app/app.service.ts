import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { Character } from "./models/character.model";

@Injectable()
export class AppService {
    constructor(private http: HttpClient) {}
    private readonly URL_BASE = "https://naruto-api.fly.dev/api/v1/characters";

    listar() {
        return this.http.get<Character[]>(`${this.URL_BASE}`);
    }
}