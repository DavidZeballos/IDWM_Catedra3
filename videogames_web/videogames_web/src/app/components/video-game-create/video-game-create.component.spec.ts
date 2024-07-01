import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VideoGameCreateComponent } from './video-game-create.component';

describe('VideoGameCreateComponent', () => {
  let component: VideoGameCreateComponent;
  let fixture: ComponentFixture<VideoGameCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [VideoGameCreateComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VideoGameCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
