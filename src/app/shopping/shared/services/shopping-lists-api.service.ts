import { Injectable } from '@angular/core';
import { of, Observable } from 'rxjs';
import { ShoppingList } from '../models/shopping-list.model';
import { HttpClient, HttpHeaders } from '@angular/common/http';

// TODO cfg file
const ShoppingListEndpoint = 'https://api.jsonbin.io/b/5bc5f76bbaccb064c0b4dc4f';
const token = '$2a$10$6u341QejLzqlQXasM6H4rOZ1GkT.S5YdhKtsKi98Pb58n9wFfHJ0q';

@Injectable({
  providedIn: 'root'
})
export class ShoppingListsApiService {

  private options: Object;

  constructor(private http: HttpClient) {
    this.options = {
      headers: new HttpHeaders(
        {
          "Content-Type": "application/json",
          "secret-key": token,
          "versioning": "false"
        }
      )
    }
  }

  get(): Observable<ShoppingList[]> {
    return this.http.get<ShoppingList[]>(ShoppingListEndpoint, this.options);
  }

  put(lists: ShoppingList[]) {
    return this.http.put<ShoppingList[]>(ShoppingListEndpoint, lists, this.options);
  }
}
