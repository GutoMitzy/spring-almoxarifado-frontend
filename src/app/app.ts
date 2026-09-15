import { Component, signal } from '@angular/core';
import { RouterOutlet, RouterLink } from '@angular/router';
import { Header } from './components/header/header';
import { Content } from "./components/content/content";

@Component({
  imports: [RouterOutlet, RouterLink, Content, Header],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
  appTitle = "Teste Input";

  receberValor(texto: string) {
    console.log("Valor recebido do componente Header: ", texto);
  }
}
