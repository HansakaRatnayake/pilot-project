import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PhotoDefaultComponent } from './photo-default.component';

describe('PhotoDefaultComponent', () => {
  let component: PhotoDefaultComponent;
  let fixture: ComponentFixture<PhotoDefaultComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PhotoDefaultComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PhotoDefaultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
