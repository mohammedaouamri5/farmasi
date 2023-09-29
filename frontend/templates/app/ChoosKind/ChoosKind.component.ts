import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ChoosKind',
  templateUrl: './ChoosKind.component.html',
  styleUrls: ['./ChoosKind.component.css']
})
export class ChoosKindComponent   {

  constructor() { }

  onDivClick(Kind: string) {
    console.log(Kind);
  }

}
