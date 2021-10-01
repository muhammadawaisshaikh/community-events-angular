import { Component } from '@angular/core';
import { ModalService } from './shared/services/modal.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'community-events-angular';

  constructor(private modalService: ModalService) {}

  //  call this function to open modal by passing modal id
  openModal(id: string) {
    this.modalService.open(id);
  }

  // just call this function to close modal by passing modal id
  closeModal(id: string) {
    this.modalService.close(id);
  }
}
