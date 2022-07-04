import { TestBed } from '@angular/core/testing';

import { PlayableProviderService } from './playable-provider.service';

describe('PlayableProviderService', () => {
  let service: PlayableProviderService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PlayableProviderService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
