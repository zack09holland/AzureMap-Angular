/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { AzureMapComponent } from './azureMap.component';

describe('AzureMapComponent', () => {
  let component: AzureMapComponent;
  let fixture: ComponentFixture<AzureMapComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AzureMapComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AzureMapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
