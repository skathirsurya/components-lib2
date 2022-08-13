import { Component, Input } from '@angular/core';

@Component({
  selector: 'components-lib2-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  @Input() title = 'storybook-poc';
  @Input() classNames;
}
