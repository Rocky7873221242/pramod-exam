import { Component } from '@angular/core';
import { ContactComponent } from '../contact/contact.component';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css']
})
export class ServicesComponent extends ContactComponent {
  public value = true;

  public color = "green";

  public colors = ["red", "green", "purple", "orange", "black", "yellow", "pink"]
}
