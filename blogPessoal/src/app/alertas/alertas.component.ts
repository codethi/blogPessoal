import { BsModalRef } from 'ngx-bootstrap/modal';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-alertas',
  templateUrl: './alertas.component.html',
  styleUrls: ['./alertas.component.css']
})
export class AlertasComponent implements OnInit {

  @Input() message: string
  @Input() type = 'success'

  constructor(public modal: BsModalRef) { }

  ngOnInit(): void {
  }

  onClose() {
    this.modal.hide()
  }

}
