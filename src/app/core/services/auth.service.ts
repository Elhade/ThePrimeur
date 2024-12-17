import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private currentUserSubject = new BehaviorSubject<User | null>(null);
  currentUser$ = this.currentUserSubject.asObservable();

  isAuthenticated(): boolean {
    return !!this.currentUserSubject.value;
  }

  isAdmin(): boolean {
    return this.currentUserSubject.value?.role === 'ADMIN';
  }

  // TODO: Implement actual authentication logic
  login(email: string, password: string): Observable<User> {
    // Mock implementation
    return new Observable(subscriber => {
      const mockUser: User = {
        id: 1,
        email,
        firstName: 'John',
        lastName: 'Doe',
        role: 'CLIENT'
      };
      this.currentUserSubject.next(mockUser);
      subscriber.next(mockUser);
      subscriber.complete();
    });
  }

  logout(): void {
    this.currentUserSubject.next(null);
  }
}