import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyquoteFormComponent } from './myquote-form.component';

describe('MyquoteFormComponent', () => {
  let component: MyquoteFormComponent;
  let fixture: ComponentFixture<MyquoteFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyquoteFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyquoteFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
