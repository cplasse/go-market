import { TestBed } from '@angular/core/testing';

import { ShoppingListsApiService } from './shopping-lists-api.service';

describe('ShoppingListsApiService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ShoppingListsApiService = TestBed.get(ShoppingListsApiService);
    expect(service).toBeTruthy();
  });
});
