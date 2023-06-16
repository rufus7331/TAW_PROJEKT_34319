import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class DataService {
    private url = 'http://localhost:3001';

  constructor(private http: HttpClient) { }

  getAll() {
	  return this.http.get(this.url + '/api/logbook');
  }

  getById(id: string) {
	  return this.http.get(this.url + '/api/logbook/' + id);
  }

  deleteById(id: string) {
    return this.http.delete(this.url + '/api/logbook/' + id);
  }

  createLogBook(index: string) {
    return this.http.post(this.url + '/api/logbook', index);
  }

  changeAssoc(index: any) {
    const updateData = { association: !index.association };
    return this.http.put(this.url + '/api/logbook/' + index.id, updateData);
  }

  editLogBook(index: any) {
    return this.http.put(this.url + '/api/logbook/edit/' + index.id, index);
  }
}
