import { Component, Input } from '@angular/core';
import { SoundRecording } from "src/app/models/soundrecording.model";

@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.css']
})
export class PlayerComponent {
  @Input() soundRecording: SoundRecording | null = null;

}
