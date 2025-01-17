import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HighlightModule } from 'ngx-highlightjs';

import { HighlightjsWrapperComponent } from './highlightjs-wrapper.component';
import { highlightOptions } from '@keira-config/highlight.config';

describe('HighlightjsWrapperComponent', () => {
  let component: HighlightjsWrapperComponent;
  let fixture: ComponentFixture<HighlightjsWrapperComponent>;

  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        declarations: [HighlightjsWrapperComponent],
        imports: [BrowserModule, FormsModule, HighlightModule.forRoot(highlightOptions)],
      }).compileComponents();
    }),
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(HighlightjsWrapperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
