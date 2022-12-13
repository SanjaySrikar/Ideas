import { TestBed } from '@angular/core/testing';
import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';
import { IdeaService } from './idea.service';
import { environment } from 'src/environments/environment';
import idea from '../models/idea';

describe('IdeaService', () => {
  let service: IdeaService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [IdeaService],
    });

    service = TestBed.inject(IdeaService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should create an idea', () => {
    const idea: idea = {
      id: 1,
      name: 'Test Idea',
      idea: 'This is a test idea.',
      topic: 'Test Topic',
      title: '',
    };

    service.createIdea(idea).subscribe((res) => {
      expect(res).toEqual(idea);
    });

    const req = httpMock.expectOne(`${environment.BASE_URL}idea/add/1`);
    expect(req.request.method).toEqual('POST');
    expect(req.request.body).toEqual(idea);
    req.flush(idea);
  });
  it('should update an idea', () => {
    const idea: idea = {
      id: 1,
      name: 'Test Idea Updated',
      idea: 'This is a test idea updated.',
      topic: 'Test Topic Updated',
      title : 'test'
    };

    service.updateIdea(idea, 1).subscribe((res) => {
      expect(res).toEqual(idea);
    });

    const req = httpMock.expectOne(`${environment.BASE_URL}idea/update/1`);
    expect(req.request.method).toBe('PUT');
    req.flush(idea);
  });

  it('should delete an idea', () => {
    service.deleteIdea(1).subscribe((res) => {
      expect(res).toEqual({} as idea);
    });

    const req = httpMock.expectOne(`${environment.BASE_URL}idea/delete/1`);
    expect(req.request.method).toBe('DELETE');
    req.flush({});
  });
});
