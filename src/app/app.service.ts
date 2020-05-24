import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class AppService {
  constructor(private http: HttpClient) {}

  fetchRingStyleData() {
    return this.http.get('../assets/JSON/ring-style-list.json');
  }

  fetchColorTypeData() {
    return this.http.get('../assets/JSON/color-type-list.json');
  }

  fetchProductList() {
    return this.http.get('../assets/JSON/product-list.json');
  }

  setValueExceptSelectedItemInArray(
    array: any[],
    key: string,
    value: boolean,
    idKey: string,
    item: any
  ) {
    array.forEach((element: any) => {
      if (element[idKey] !== item[idKey]) {
        element[key] = value;
      }
    });
  }
}
