import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Playlist } from 'src/app/interfaces/playlist.interface';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  playlists: Array<Playlist> = null;

  constructor(private route: ActivatedRoute) {
    this.playlists = this.route.snapshot.data.playlists.featuredPlaylists.content as Array<Playlist>;
  }

  ngOnInit(): void {}
}
