import { Component, OnInit, OnChanges } from '@angular/core';

@Component({
  selector: 'video-detail',
  templateUrl: './video-detail.component.html',
  styleUrls: ['./video-detail.component.css'],
  inputs: ['video']
})
export class VideoDetailComponent implements OnInit {

  public editTitle : boolean = false;
  public editUrl : boolean = false;
  public editDesc : boolean = false;

  constructor() { }

  ngOnInit() {
  }

  ngOnChanges() {
    this.editTitle = false;
    this.editUrl = false;
    this.editDesc = false;
  }

  onTitleClick() {
    this.editTitle = true;
  }

  onUrlClick() {
    this.editUrl = true;
  }

  onDescClick() {
    this.editDesc = true;
  }

}
