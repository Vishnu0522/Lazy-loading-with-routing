import { Injectable } from '@angular/core';

@Injectable()
export class ComponentInteractionService {
  private _isAuthenticated: boolean = false;
  constructor() { }
  get isAuthenticated(): boolean {
    return this._isAuthenticated;
  }
  set isAuthenticated(value) {
    this._isAuthenticated = value;
  }
}
