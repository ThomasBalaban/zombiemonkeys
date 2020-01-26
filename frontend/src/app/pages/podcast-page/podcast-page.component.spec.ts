import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PodcastPageComponent } from './podcast-page.component';

describe('PodcastPageComponent', () => {
  let component: PodcastPageComponent;
  let fixture: ComponentFixture<PodcastPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PodcastPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PodcastPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
