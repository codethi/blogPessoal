import { Component, OnInit } from '@angular/core';
import { environment } from './../../environments/environment.prod';

@Component({
  selector: 'app-perfil-lateral',
  templateUrl: './perfil-lateral.component.html',
  styleUrls: ['./perfil-lateral.component.css']
})
export class PerfilLateralComponent implements OnInit {


  nomeUser = environment.nome
  fotoUser = environment.foto
  bioUser = environment.bio
  linkedin = environment.linkedin
  github = environment.gitHub
  
  constructor() { }

  ngOnInit() {

  }

}
