import { Injectable, signal, WritableSignal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SharedService {
cursorType: WritableSignal<string> = signal('auto');
}
