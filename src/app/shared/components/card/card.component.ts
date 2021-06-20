import { Component, Input, OnInit } from '@angular/core';
import { Playlist } from 'src/app/interfaces/playlist.interface';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {
  @Input() playlist: Playlist;

  constructor() { }

  ngOnInit(): void {}
}
