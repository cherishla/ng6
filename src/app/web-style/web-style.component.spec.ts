import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WebStyleComponent } from './web-style.component';

describe('WebStyleComponent', () => {
  let component: WebStyleComponent;
  let fixture: ComponentFixture<WebStyleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WebStyleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WebStyleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
