import { Injectable } from '@angular/core';
import { UserForAuth } from '../types/user';

@Injectable({
    providedIn: 'root'
})
export class UserService {
    USER_KEY = '[user]';
    user: UserForAuth | null = null;

    get isLogged(): boolean {
        return !!this.user;
    }

    constructor() {
        try {
            const localStorageUser = localStorage.getItem(this.USER_KEY) || '';
            this.user = JSON.parse(localStorageUser);
        } catch (error) {
            this.user = null;
        }
    }

    login() {
        this.user = {
            firstName: 'Tsetso',
            email: 'tsetso@abv.bg',
            phoneNumber: '123-123-123',
            password: '123123',
            id: 'asdasdsadsadsa',
        };

        localStorage.setItem(this.USER_KEY, JSON.stringify(this.user));
    };

    getUser(): any {
        const userJson = localStorage.getItem(this.USER_KEY);
        if (userJson) {
            return JSON.parse(userJson); // Превръща JSON в JavaScript обект
        }
        return null; // Ако няма съхранен потребител
    }
    

    logout() {
        this.user = null;
        localStorage.removeItem(this.USER_KEY);
    };
}
