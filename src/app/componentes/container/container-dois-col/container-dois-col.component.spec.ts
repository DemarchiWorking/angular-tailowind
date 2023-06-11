import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContainerDoisColComponent } from './container-dois-col.component';

describe('ContainerDoisColComponent', () => {
  let component: ContainerDoisColComponent;
  let fixture: ComponentFixture<ContainerDoisColComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContainerDoisColComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContainerDoisColComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
