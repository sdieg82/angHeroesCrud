import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, map, Observable, of } from 'rxjs';
import { Hero } from '../interfaces/hero.interface';
import { environments } from 'src/environments/environments';
import { MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';

@Injectable({providedIn: 'root'})
export class ServiceHeroes {
    
    
    private baseUrl:string=environments.baseUrl
    constructor(private http: HttpClient) { }
    getHeroes():Observable<Hero[]>{
        return this.http.get<Hero[]>(`${this.baseUrl}/heroes`);
    }
    getHeroById(id:string):Observable<Hero | undefined>{
        return this.http.get<Hero>(`${this.baseUrl}/heroes/${id}`)
        .pipe(
            catchError(error=>of(undefined))
        )
    }
    getSuggestions(query:string):Observable<Hero[]>{
        return this.http.get<Hero[]>(`${this.baseUrl}/heroes?q=${query}&_limit=5`)
    }

    addHero(hero:Hero):Observable<Hero>{
        return this.http.post<Hero>(`${this.baseUrl}/heroes`,hero)
    }

    updateHero(hero:Hero):Observable<Hero>{
        if(! hero) throw Error('El heroe a actualizar no existe')
        return this.http.patch<Hero>(`${this.baseUrl}/heroes/${hero.id}`,hero)
    }

    deleteHeroById(id:string):Observable<boolean>{
        if(! id) throw Error('El heroe a eliminar no existe')
        return this.http.delete(`${this.baseUrl}/heroes/${id}`)
    .pipe(
        catchError(error=>of(false)),
        map(res=>true)
    );
    }

    
}