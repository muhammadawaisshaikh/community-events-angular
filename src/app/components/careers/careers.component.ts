import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-careers',
  templateUrl: './careers.component.html',
  styleUrls: ['./careers.component.scss']
})
export class CareersComponent implements OnInit {

  jobs: any = [
    {
      id: 1,
      jobTitle: "Customer Experience"
    },
    {
      id: 2,
      jobTitle: "Data and Machine Learning"
    },
    {
      id: 3,
      jobTitle: "Graphic Design"
    },
    {
      id: 4,
      jobTitle: "Engineering"
    },
    {
      id: 5,
      jobTitle: "Enterprise"
    },
    {
      id: 6,
      jobTitle: "Marketing"
    },
    {
      id: 7,
      jobTitle: "People / Office"
    },
    {
      id: 8,
      jobTitle: "Product / Brand"
    },
    {
      id: 9,
      jobTitle: "Software Development"
    },
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
