import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContainerTresColComponent } from './container-tres-col.component';

describe('ContainerTresColComponent', () => {
  let component: ContainerTresColComponent;
  let fixture: ComponentFixture<ContainerTresColComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContainerTresColComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContainerTresColComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
