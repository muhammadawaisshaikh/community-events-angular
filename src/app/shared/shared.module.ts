import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModalComponent } from './components/modal/modal.component';
import { EventListingComponent } from './components/event-listing/event-listing.component';

@NgModule({
  declarations: [ModalComponent, EventListingComponent],
  providers: [],
  imports: [CommonModule],
  exports: [ModalComponent],
})
export class SharedModule {}
