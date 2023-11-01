import { Injectable } from '@angular/core';
import { SoundRecording } from "src/app/models/soundrecording.model";

@Injectable({
  providedIn: 'root'
})
export class SoundRecordingService {

  constructor() { }

  getSoundRecordings(): SoundRecording[] {
    return [{
      id: 1,
      name: 'Rock',
      fileName: 'https://commondatastorage.googleapis.com/codeskulptor-demos/riceracer_assets/music/menu.ogg'
    },
      {
      id: 2,
      name: 'Classic Rock',
      fileName: 'https://commondatastorage.googleapis.com/codeskulptor-demos/riceracer_assets/music/win.ogg'
    }
    ];
  }

}
