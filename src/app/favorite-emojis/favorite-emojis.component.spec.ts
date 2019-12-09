import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FavoriteEmojisComponent } from './favorite-emojis.component';

describe('FavoriteEmojisComponent', () => {
  let component: FavoriteEmojisComponent;
  let fixture: ComponentFixture<FavoriteEmojisComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [FavoriteEmojisComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FavoriteEmojisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
