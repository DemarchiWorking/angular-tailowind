import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EntrarContaComponent } from './entrar-conta.component';

describe('EntrarContaComponent', () => {
  let component: EntrarContaComponent;
  let fixture: ComponentFixture<EntrarContaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EntrarContaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EntrarContaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
