import { Component, OnInit,Input,Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent implements OnInit {
  @Input() text: string; 
  // like catching probls passed from parents where the component is empeded
  @Input() color:string;
  @Output() btnClick = new EventEmitter();
  // like passing actions to parents

  constructor() { }

  ngOnInit(): void {
    // like use effect in react ,,,happens when page loads

  }
  onClick(){
    this.btnClick.emit();
  }
}
