import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AllEmojisComponent } from './all-emojis.component';

describe('AllEmojisComponent', () => {
  let component: AllEmojisComponent;
  let fixture: ComponentFixture<AllEmojisComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AllEmojisComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AllEmojisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
