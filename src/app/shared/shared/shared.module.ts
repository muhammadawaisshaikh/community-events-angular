import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComponentsComponent } from './components/components.component';
import { EventCardComponent } from './components/event-card/event-card.component';



@NgModule({
  declarations: [
    ComponentsComponent,
    EventCardComponent
  ],
  imports: [
    CommonModule
  ]
})
export class SharedModule { }
