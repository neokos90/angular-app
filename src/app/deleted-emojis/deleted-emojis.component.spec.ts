import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeletedEmojisComponent } from './deleted-emojis.component';

describe('DeletedEmojisComponent', () => {
  let component: DeletedEmojisComponent;
  let fixture: ComponentFixture<DeletedEmojisComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeletedEmojisComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeletedEmojisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
