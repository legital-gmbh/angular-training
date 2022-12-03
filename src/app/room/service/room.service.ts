import { Injectable } from '@angular/core';
import { Room } from '../room';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RoomService {
  readonly ROOMS_REST_API = 'https://retoolapi.dev/A73rnb/rooms'

  constructor(private http: HttpClient) { }

  save(room: Room): Observable<Room> {
    if (room.id) {
      return this.http.put<Room>(this.ROOMS_REST_API+'/'+room.id, room);
    }
    return this.http.post<Room>(this.ROOMS_REST_API, room);
  }

  loadAll(): Observable<Room[]> {
    return this.http.get<Room[]>(this.ROOMS_REST_API);
  }

  load(id: string): Observable<Room> {
    return this.http.get<Room>(this.ROOMS_REST_API+'/'+id);
  }
}
