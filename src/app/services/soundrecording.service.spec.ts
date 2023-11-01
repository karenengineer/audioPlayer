import { TestBed } from '@angular/core/testing';

import { SoundRecordingService } from 'src/app/services/sound-recording.service';

describe('SoundrecordingService', () => {
  let service: SoundRecordingService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SoundRecordingService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
