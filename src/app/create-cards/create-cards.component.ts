import { Route } from '@angular/compiler/src/core';
import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-create-cards',
  templateUrl: './create-cards.component.html',
  styleUrls: ['./create-cards.component.css']
})
export class CreateCardsComponent implements OnInit {
  @Input()
  title: string;
  desc: string;
  constructor(private router: Router) {
    this.title = "";
    this.desc = "";
  }

  ngOnInit(): void {

  }

}