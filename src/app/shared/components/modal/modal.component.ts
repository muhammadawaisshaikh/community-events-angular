import { Component, OnInit, OnDestroy, ElementRef, Input } from '@angular/core';
import { ModalService } from '../../services/modal.service';

@Component({
  selector: 'custom-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss'],
})
export class ModalComponent implements OnInit, OnDestroy {
  @Input() id: string;
  private element: any;

  constructor(private modalService: ModalService, private el: ElementRef) {
    this.element = el.nativeElement;
  }

  ngOnInit(): void {
    let modal = this;

    // ensure id attribute exists
    if (!this.id) {
      console.error('modal must have an id');
      return;
    }

    // move element to bottom of page (just before </body>) so it can be displayed above everything else
    document.body.appendChild(this.element);

    // close modal on background click
    this.element.addEventListener('click', function (e: any) {
      if (e.target.className === 'modal__overlay modal__overlay--toggle') {
        modal.close();
      }
    });

    this.element.addEventListener('click', function (e: any) {
      if (
        e.target.className === 'model-close-btn' ||
        e.target.className === 'close-image'
      ) {
        modal.close();
      }
    });

    // add self (this modal instance) to the modal service so it's accessible from controllers
    this.modalService.add(this);
  }

  // remove self from modal service when directive is destroyed
  ngOnDestroy(): void {
    this.modalService.remove(this.id);
    this.element.remove();
  }

  // open modal
  open(): void {
    //console.log(this.element);
    this.element.style.display = 'block';
  }

  // close modal
  close(): void {
    this.element.style.display = 'none';
  }
}
