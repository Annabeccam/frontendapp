import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import {API_URL} from './env';
import { User } from './models/user.model'; // Import User model
import { Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  signup(user: User): Observable<any> {
    console.log("user is", user);
    return this.http.post(`${API_URL}/signup`, user);
  }

  signin(credentials: { email_id: string; password: string }): Observable<any> {
    return this.http.post(`${API_URL}/signin`, credentials);
  }

  logout(): void {
    // Clear any stored authentication data (like tokens)
    localStorage.removeItem('token'); // Assuming token is stored in localStorage
    localStorage.removeItem('user_type'); // Assuming token is stored in localStorage
    sessionStorage.clear(); // Optionally clear session storage
  }

  getProtectedResource() {
    const token = localStorage.getItem('token');
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
    return this.http.get(`${API_URL}/protected`, { headers });
  }
}

