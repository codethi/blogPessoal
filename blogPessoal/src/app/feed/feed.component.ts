import { environment } from './../../environments/environment.prod';
import { Router } from '@angular/router';
import { AlertasService } from './../service/alertas.service';
import { TemaService } from './../service/tema.service';
import { PostagemService } from './../service/postagem.service';
import { Postagem } from './../model/Postagem';
import { Component, OnInit } from '@angular/core';
import { Tema } from '../model/Tema';

@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.css']
})
export class FeedComponent implements OnInit {

  key = 'data'
  reverse = true

  postagem: Postagem = new Postagem()
  listaPostagens: Postagem[]
  titulo: string

  tema: Tema = new Tema()
  listaTemas: Tema[]
  idTema: number
  nomeTema: string



  constructor(
    private postagemService: PostagemService,
    private temaService: TemaService,
    private alerta: AlertasService,
    private router: Router
  ) { }

  ngOnInit(){

    let token = environment.token

    if(token == '') {
      this.router.navigate(['/login'])
      this.alerta.showAlertInfo('Faça o login antes de entrar no feed...')
    }

    window.scroll(0, 0)

    this.findAllPostagens()
    this.findAllTemas()
  }

  findAllPostagens() {
    this.postagemService.getAllPostagens().subscribe((resp: Postagem[]) => {
      this.listaPostagens = resp
    })
  }

  publicar() {
    this.tema.id = this.idTema
    this.postagem.tema = this.tema

    if (this.postagem.titulo == null || this.postagem.texto == null || this.postagem.tema == null) {
      this.alerta.showAlertDanger('Preencha todos os campos antes de publicar!')
    } else if (this.postagem.texto.length < 10) {
      this.alerta.showAlertDanger('Digite no minimo 10 caracteres no campo texto!')
    } else{
      this.postagemService.postPostagem(this.postagem).subscribe((resp: Postagem) => {
        this.postagem = resp
        this.postagem = new Postagem()
        this.alerta.showAlertSuccess('Postagem realizada com sucesso!')
        this.findAllPostagens()
      })
    }
  }


  findAllTemas() {
    this.temaService.getAllTemas().subscribe((resp: Tema[]) => {
      this.listaTemas = resp
    })
  }

 findByIdTema() {
   this.temaService.getByIdTema(this.idTema).subscribe((resp: Tema) => {
     this.tema = resp;
   })
 }

 findByTituloPostagem() {
   if (this.titulo === ''){
     this.findAllPostagens()
   } else {
     this.postagemService.getByTituloPostagem(this.titulo).subscribe((resp: Postagem[]) => {
       this.listaPostagens = resp
     })
   }
 }

 findByNomeTema() {
   if (this.nomeTema === ''){
     this.findAllTemas()
   } else {
     this.temaService.getByNomeTema(this.nomeTema).subscribe((resp: Tema[]) => {
       this.listaTemas = resp
     })
   }
 }

}
