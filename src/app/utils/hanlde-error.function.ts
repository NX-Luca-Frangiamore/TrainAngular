import { HttpErrorResponse } from '@angular/common/http';
import { Observable, catchError, of } from 'rxjs';

export function handleError<T>(httpCall$: Observable<T>): Observable<T | null> {
  return httpCall$.pipe(
    catchError((e) => {
      if (e instanceof HttpErrorResponse) alert(e.message);
      else alert("qualcosa e' andato storto");

      return of();
    }),
  );
}
