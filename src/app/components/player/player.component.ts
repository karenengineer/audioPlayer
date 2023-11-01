import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { SoundRecording } from "src/app/models/soundrecording.model";

@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.css']
})
export class PlayerComponent implements OnInit, OnDestroy {
  private _soundRecording: SoundRecording | null = null;
  audioElement: HTMLAudioElement | null = null;
  isPlaying = false;

  @Input()
  set soundRecording(value: SoundRecording | null) {
    this._soundRecording = value;
    if (this._soundRecording) {
      this.audioElement = new Audio(this._soundRecording.fileName);
    } else {
      if (this.audioElement) {
        this.audioElement.pause();
        this.audioElement = null;
      }
    }
  }

  get soundRecording(): SoundRecording | null {
    return this._soundRecording;
  }

  ngOnInit(): void {
    if (this.soundRecording) {
      this.audioElement = new Audio();
      this.audioElement.src = <string>this.soundRecording?.fileName
    }
  }

  playPause(): void {
    if (this.audioElement) {
      if (this.audioElement.paused) {
        this.audioElement.play();
        this.isPlaying = true;
      } else {
        this.audioElement.pause();
        this.isPlaying = false;
      }
    }
  }

  ngOnDestroy(): void {
    if (this.audioElement) {
      this.audioElement.pause();
      this.audioElement = null;
    }
  }
}
