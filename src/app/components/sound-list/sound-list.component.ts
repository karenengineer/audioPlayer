import { Component, OnInit } from '@angular/core';
import { SoundRecording } from "src/app/models/soundrecording.model";
import { SoundRecordingService } from "src/app/services/sound-recording.service";

@Component({
  selector: 'app-sound-list',
  templateUrl: './sound-list.component.html',
  styleUrls: ['./sound-list.component.css']
})
export class SoundListComponent implements OnInit {
  soundRecordings: SoundRecording[] = [];
  selectedSoundRecording: SoundRecording | null = null;

  constructor(private soundRecordingService: SoundRecordingService) {}

  ngOnInit(): void {
    this.soundRecordings = this.soundRecordingService.getSoundRecordings();
  }

  onSelect(soundRecording: SoundRecording): void {
    this.selectedSoundRecording = soundRecording;
  }
}
