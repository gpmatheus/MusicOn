import { Injectable } from '@angular/core';

export interface Song {
  id: string;
  name: string;
  // duration por enquanto é string mesmo
  duration: string;
}

export interface Album {
  id: string;
  artist: string;
  name: string;
  photo: string;
  creationYear: number;
  songs: Song[];
}

export interface Playlist {
  id: string;
  name: string;
  photo: string;
  public: boolean;
  songs: Song[];
}

export interface Artist {
  id: string;
  name: string;
  photo: string;
  albums: Album[];
}

@Injectable({
  providedIn: 'root'
})
export class PlayableProviderService {

  getAlbuns(): Album[] {
    return [
      {id: '0001', artist: 'Angra', name: 'Rebirth', photo: '../assets/rebirth.jfif', creationYear: 2001, songs: []},
      {id: '0002', artist: 'Angra', name: 'Angels Cry', photo: '../assets/angels_cry.jfif', creationYear: 1993, songs: []}
    ]
  }

  getPlaylists(): Playlist[] {
    return [
      {id: '0001', name: 'Primeira playlist', photo: '', public: false, songs: [
        {id: '0001', name: 'Land of broken dream', duration: '5.45'}
      ]},
      {id: '0002', name: 'Segunda playlist', photo: '', public: false, songs: [
        {id: '0001', name: 'Land of broken', duration: '5.45'}
      ]}
    ]
  }

  getArtists(): Artist[] {
    return [
      {id: '0001', name: 'Sonata Arctica', photo: '../assets/sonata-arctica.jfif', albums: []},
      {id: '0002', name: 'Nightwish', photo: '../assets/nightwish.jfif', albums: []}
    ]
  }

  getPlaylistById(id: string | null): Playlist {
    for (let playlist of this.getPlaylists()) {
      if (playlist.id === id) {
        return playlist;
      }
    }
    return {id: '0003', name: 'playlist maldita', photo: '', public: false, songs: [
      {id: '0001', name: 'Land', duration: '5.45'}
    ]}
  }

  constructor() { }
}
