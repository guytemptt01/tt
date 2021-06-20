import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';
import { Playlist } from 'src/app/interfaces/playlist.interface';

@Injectable({
  providedIn: 'root'
})
export class PlaylistService {
  baseUrl = 'https://portal.organicfruitapps.com/programming-guides/v2/us_en-us';

  constructor(private http: HttpClient) { }

  getPlaylists(): Observable<Array<Playlist>> {
    return this.http.get<Array<Playlist>>(`${this.baseUrl}/featured-playlists.json`);
  }
}
