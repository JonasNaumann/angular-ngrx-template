import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

export interface ThrownError {
  code: number;
  message: string;
}

@Injectable({ providedIn: 'root' })
export class ErrorService {
  private errorMessage$ = new BehaviorSubject<string | null>(null);

  handleError(catchedError: unknown): void {
    const thrownError: ThrownError = this.mapCatchedError(
      (catchedError as ThrownError).code
    );
    this.errorMessage$.next(thrownError.message);
  }

  private mapCatchedError(code: number): ThrownError {
    switch (code) {
      case 500:
        return { code: 500, message: 'Something went wrong.' };
      case 401:
        return { code: 401, message: 'User is not logged in.' };
      case 403:
        return { code: 403, message: 'User is unauthorized for this action.' };
      case 404:
        return { code: 404, message: 'Resource not found.' };
      case 408:
        return { code: 408, message: 'Request timeout' };
      default:
        return { code: 0, message: 'An unknown error occurred.' };
    }
  }
}
