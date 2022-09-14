import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BettercoBlocksComponent } from './betterco-blocks.component';

describe('BettercoBlocksComponent', () => {
  let component: BettercoBlocksComponent;
  let fixture: ComponentFixture<BettercoBlocksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BettercoBlocksComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BettercoBlocksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
