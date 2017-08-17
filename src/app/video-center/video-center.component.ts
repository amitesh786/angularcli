import { Component, OnInit } from '@angular/core';
import { Video } from './../video';
import { VideoService } from './../video.service';

@Component({
  selector: 'app-video-center',
  templateUrl: './video-center.component.html',
  styleUrls: ['./video-center.component.css'],
  providers: [VideoService]
})
export class VideoCenterComponent implements OnInit {

  // videos: Video[] = [
  //   {"_id": "1", "title": "Title 1", "url": "Url 1", "description": "Description 1"},
  //   {"_id": "2", "title": "Title 2", "url": "Url 2", "description": "Description 2"},
  //   {"_id": "3", "title": "Title 3", "url": "Url 3", "description": "Description 3"},
  //   {"_id": "4", "title": "Title 4", "url": "Url 4", "description": "Description 4"}
  // ];
  videos: Array<Video>;

  selectedVideo: Video;

  constructor(private _videoService: VideoService) { }

  ngOnInit() {
    this._videoService.getVideos()
    .subscribe(resVideoData => this.videos = resVideoData);
  }

  onSelectVideo(video:any) {
    this.selectedVideo = video;
    console.log(this.selectedVideo);
  }

}
