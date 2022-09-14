import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditorBlocksComponent } from './editor-blocks.component';

describe('EditorBlocksComponent', () => {
  let component: EditorBlocksComponent;
  let fixture: ComponentFixture<EditorBlocksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditorBlocksComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditorBlocksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
