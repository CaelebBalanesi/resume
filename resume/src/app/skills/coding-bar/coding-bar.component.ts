import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-coding-bar',
  templateUrl: './coding-bar.component.html',
  styleUrls: ['./coding-bar.component.scss']
})
export class CodingBarComponent {
  @Input() languageName: string;
  @Input() confidence: number;
}
