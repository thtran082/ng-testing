import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root",
})
export class ApiService {
  constructor(private http: HttpClient) {
  }

  getUsers() {
    return this._getUsersApi();
  }

  private _getUsersApi() {
    return this.http
      .get<any[]>("https://jsonplaceholder.typicode.com/users");
  }
}
