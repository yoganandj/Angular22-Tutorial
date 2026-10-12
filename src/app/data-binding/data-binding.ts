import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  imports: [FormsModule],
  selector: 'app-data-binding',
  styleUrl: './data-binding.css',
  templateUrl: './data-binding.html',
})
export class DataBinding {
  name: string = 'Angular Learning';

  topic: string = 'Types of Data Binding';

  image: string = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRGm3-EPGReO14nVGJKy2EWN5Fd1hWhZEQ3TrXjNaXw5A&s=10'


  OnSubmitClick() {
    this.name = 'Angular Learning Updated';
  }

  onCountryChange() {
    alert('Country Changed');
  }
}