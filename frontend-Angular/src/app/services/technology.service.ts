import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { Technology } from '../models/technology.model';


@Injectable({
  providedIn: 'root'
})
export class TechnologyService {
  private baseUrl: string = environment.BASE_API_URL;
  constructor(private readonly httpClient: HttpClient) { }

  public getTechnologies() {
    return this.httpClient.get<Technology[]>(this.baseUrl + '/technologies');
  }
  public getTechnology(id: string) {
    return this.httpClient.get<Technology>(`${this.baseUrl}/technologies/${id}`);
  }
  public search(query: string) {
    return this.httpClient.get<Technology[]>(`${this.baseUrl}/technologies/search/${query}`);
  }
}
