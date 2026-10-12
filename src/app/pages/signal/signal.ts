import { Component, signal } from '@angular/core';
import { withIncrementalHydration } from '@angular/platform-browser';

@Component({
  imports: [],
  selector: 'app-signal',
  styleUrl: './signal.css',
  templateUrl: './signal.html',
})
export class Signal {
  count = signal(0)

  incrementCount(){
    this.count.update(value=>value+1)
  }

  decrementCount(){
    this.count.update(value=>value-1)
  }

  resetCount(){
    this.count.set(0)
  }

}
