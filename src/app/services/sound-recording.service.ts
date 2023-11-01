import { Injectable } from '@angular/core';
import { SoundRecording } from "src/app/models/soundrecording.model";

@Injectable({
  providedIn: 'root'
})
export class SoundRecordingService {
  private nextId = 985;

  constructor() { }

  getSoundRecordings(): SoundRecording[] {
    return [
      {
        id: this.nextId++,
        name: 'Random Rock Music',
        fileName: 'https://commondatastorage.googleapis.com/codeskulptor-demos/riceracer_assets/music/menu.ogg'
      },
      {
        id: this.nextId++,
        name: 'Classic Rock',
        fileName: 'https://commondatastorage.googleapis.com/codeskulptor-demos/riceracer_assets/music/win.ogg'
      },
      {
        id: this.nextId++,
        name: 'Another Rock Ballad',
        fileName: 'https://commondatastorage.googleapis.com/codeskulptor-demos/riceracer_assets/music/race1.ogg'
      }
    ];
  }

}
