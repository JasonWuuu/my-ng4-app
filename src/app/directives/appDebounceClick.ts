import { Directive, EventEmitter, HostListener, OnInit, OnDestroy, Input, Output } from '@angular/core';
import { Subject, Subscription } from 'rxjs/Rx';

@Directive({
  selector: '[appDebounceClick]'
})
export class DebounceClickDirective implements OnInit, OnDestroy {
  subject$: Subject<MouseEvent> = new Subject<MouseEvent>();
  subscripton$: Subscription;
  @Input() debounceTime = 3000;
  @Output() debounceClick: EventEmitter<MouseEvent> = new EventEmitter<MouseEvent>();

  ngOnInit() {

    this.subscripton$ = this.subject$.debounceTime(this.debounceTime).subscribe(event => {
      this.debounceClick.emit(event);
    });
  }

  @HostListener('click', ['$event']) clickEvent(event: MouseEvent) {
    event.preventDefault();
    event.stopPropagation();
    this.subject$.next(event);
  }

  ngOnDestroy() {
    this.subscripton$.unsubscribe();
  }
}
