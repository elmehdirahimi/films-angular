import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppGameTabsComponent } from './app-game-tabs.component';

describe('AppGameTabsComponent', () => {
  let component: AppGameTabsComponent;
  let fixture: ComponentFixture<AppGameTabsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AppGameTabsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AppGameTabsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
