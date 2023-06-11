import { Component } from '@angular/core';

@Component({
  selector: 'app-cadastrar-conta',
  templateUrl: './cadastrar-conta.component.html',
  styleUrls: ['./cadastrar-conta.component.scss']
})
export class CadastrarContaComponent {

  isEnabled = false;

  toggleEnabled(){
    this.isEnabled = !this.isEnabled;
  }
}
