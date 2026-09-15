import { Component } from '@angular/core';
import { FormGroup, FormsModule, ReactiveFormsModule, FormControl, Validators } from '@angular/forms';

@Component({
  imports: [FormsModule, ReactiveFormsModule],
  selector: 'app-content',
  styleUrl: './content.css',
  templateUrl: './content.html',
})
export class Content {
  usuarioForm = new FormGroup({
    nome: new FormControl('', [Validators.required]),
  });

  enviarFormulario() {
    console.log('Formulário enviado:', this.usuarioForm);
  }
}
