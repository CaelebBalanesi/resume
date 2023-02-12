import { Input, Component } from '@angular/core';

@Component({
  selector: 'app-entry',
  templateUrl: './entry.component.html',
  styleUrls: ['./entry.component.scss']
})
export class EntryComponent {
  @Input() positionDateRange: String;
  @Input() positionName: String;
  @Input() companyName: String;
  @Input() jobDescription: String;
}
