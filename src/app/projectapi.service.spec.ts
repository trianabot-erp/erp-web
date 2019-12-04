import { TestBed } from '@angular/core/testing';

import { ProjectapiService } from './projectapi.service';

describe('ProjectapiService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ProjectapiService = TestBed.get(ProjectapiService);
    expect(service).toBeTruthy();
  });
});
