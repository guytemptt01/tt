import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Playlist } from 'src/app/interfaces/playlist.interface';
import { PlaylistService } from 'src/app/services/playlist/playlist.service';

@Injectable({
  providedIn: 'root'
})
export class PlaylistResolver {

  constructor(private playlistService: PlaylistService) {}

  resolve(): Observable<Array<Playlist>> {
    return this.playlistService.getPlaylists();
  }
}
