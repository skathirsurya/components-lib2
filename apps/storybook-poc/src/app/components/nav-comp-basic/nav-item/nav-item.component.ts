import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
// import { Subject } from 'rxjs';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'hash8-platform-nav-item',
  templateUrl: './nav-item.component.html',
  styleUrls: ['./nav-item.component.scss'],
})
export class NavItemComponent implements OnInit {
  // @Input()
  // nav: any = [];

  @Input()
  theme: 'basic' | 'csbs' = 'basic';

  /**
   * How large should the Navigation Item be?
   */
  @Input()
  size: 'small' | 'medium' = 'medium';

  @Input()
  label = 'Nav Item';

  @Input()
  icon: string;

  @Input()
  showIcon = true;

  @Input()
  targetUrl: string;

  @Input()
  apiUrl: string;

  @Output()
  navClicked = new EventEmitter();

  // @Output()
  // emitEvent = new EventEmitter<any>();

  public get classNames(): string[] {
    return [`nav-item--${this.theme}`, `nav-item--${this.size}`];
  }

  // checkEvent(event: any) {
  //   this.emitEvent.emit(event);
  //   console.log('Event', event);
  // }

  // eslint-disable-next-line @typescript-eslint/no-empty-function
  constructor(private _snackBar: MatSnackBar) {}

  // eslint-disable-next-line @angular-eslint/no-empty-lifecycle-method, @typescript-eslint/no-empty-function
  ngOnInit(): void {}

  showToastMessage() {
    this.navClicked.emit(this.label + ' is clicked');
    this._snackBar.open(
      this.label + ' is clicked and routes to ' + this.targetUrl,
      '',
      { duration: 3000 }
    );
  }
}
