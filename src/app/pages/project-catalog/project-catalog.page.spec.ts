import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ProjectCatalogPage } from './project-catalog.page';

describe('ProjectCatalogPage', () => {
  let component: ProjectCatalogPage;
  let fixture: ComponentFixture<ProjectCatalogPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ProjectCatalogPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
