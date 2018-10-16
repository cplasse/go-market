import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShoppingListsEditorComponent } from './shopping-lists-editor.component';

describe('ShoppingListsEditorComponent', () => {
  let component: ShoppingListsEditorComponent;
  let fixture: ComponentFixture<ShoppingListsEditorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShoppingListsEditorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShoppingListsEditorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
