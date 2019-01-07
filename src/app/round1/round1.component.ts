import { Component } from '@angular/core';
import { ApiService } from '../httprequests/httprequests.service';

@Component({
  selector: 'app-round1-root',
  templateUrl: './round1.component.html',
  styleUrls: ['./round1.component.css'],
  providers: [ApiService]
})
export class Round1 {}
