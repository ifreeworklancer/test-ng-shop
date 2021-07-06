import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-fullscreen-loader',
  templateUrl: './fullscreen-loader.component.html',
  styleUrls: ['./fullscreen-loader.component.scss']
})
export class FullscreenLoaderComponent implements OnInit {
  @Input() isLoading: boolean = false;

  constructor() {
  }

  ngOnInit(): void {
  }

}
