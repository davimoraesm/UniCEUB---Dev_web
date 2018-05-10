import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JogoInfoComponent } from './jogo-info.component';

describe('JogoInfoComponent', () => {
  let component: JogoInfoComponent;
  let fixture: ComponentFixture<JogoInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JogoInfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JogoInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
