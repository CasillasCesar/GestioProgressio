import { ComponentFixture, TestBed, async } from '@angular/core/testing';
import { FormsProyectosPage } from './forms-proyectos.page';

describe('FormsProyectosPage', () => {
  let component: FormsProyectosPage;
  let fixture: ComponentFixture<FormsProyectosPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(FormsProyectosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
