import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PlaylistResolver } from './resolvers/playlist/playlist.resolver';
import { VIEWS } from './views/views.module';

const routes: Routes = [
  {
    path: '',
    component: VIEWS.HomeComponent,
    resolve: {
      playlists: PlaylistResolver,
    },
    data: {
      meta: {
        title: 'Playlists',
      },
    },
  },
  {
    path: '**',
    redirectTo: '/',
  },
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes),
  ],
  exports: [
    RouterModule,
  ],
})
export class AppRoutingModule { }
