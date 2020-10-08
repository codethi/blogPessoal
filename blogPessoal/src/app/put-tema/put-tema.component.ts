import { AlertasService } from './../service/alertas.service';
import { Router, ActivatedRoute } from '@angular/router';
import { TemaService } from './../service/tema.service';
import { Tema } from './../model/Tema';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-put-tema',
  templateUrl: './put-tema.component.html',
  styleUrls: ['./put-tema.component.css']
})
export class PutTemaComponent implements OnInit {

  tema: Tema = new Tema()


  constructor(
    private temaService: TemaService,
    private router: Router,
    private route: ActivatedRoute,
    private alerta: AlertasService
  ) { }

  ngOnInit() {
    window.scroll(0,0)
    let id: number = this.route.snapshot.params["id"];
    this.findByIdTema(id);
  }

  findByIdTema(id: number) {
    this.temaService.getByIdTema(id).subscribe((resp: Tema) => {
      this.tema = resp;
    })
  }

  salvar() {
    if (this.tema.postagem.length != 0) {
      this.alerta.showAlertDanger('Esse tema não pode ser modificado, pois já pertence a uma postagem.')
      this.router.navigate(['/cadastro-tema'])
    } else if (this.tema.descricao == null || this.tema.descricao == ''){
      this.alerta.showAlertDanger('A descrição não pode ficar vazia!')
    } else {
      this.temaService.putTema(this.tema).subscribe((resp: Tema) => {
        this.tema = resp
        this.router.navigate(['/cadastro-tema'])
        this.alerta.showAlertSuccess('Tema atualizado com sucesso!')
      })
    }
  }

}
