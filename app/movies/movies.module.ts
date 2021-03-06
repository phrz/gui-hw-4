import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';

import { MovieEditorComponent } from './movie-editor/movie-editor.component';
import { MovieListComponent } from './movie-list/movie-list.component';
import { MovieRepository } from './api/movie-repository.service';

var routes = [
  {
    path: '',
    component: MovieListComponent
  },
  {
    path: 'add',
    component: MovieEditorComponent
  },
  {
    path: 'edit/:id',
    component: MovieEditorComponent
  }
];

@NgModule({
  imports:      [ 
    BrowserModule,
    RouterModule.forRoot(routes),
  ],
  declarations: [
    MovieListComponent,
    MovieEditorComponent
  ],
  exports: [
      MovieListComponent
  ],
  providers: [
      MovieRepository
  ]
})

export class MoviesModule {}