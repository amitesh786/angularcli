import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class VideoService {

  private _getUrl = "/api/videos";
  private _postUrl = "/api/video";
  constructor(private _http: Http) { }

  getVideos() {
    return this._http.get(this._getUrl)
      .map((response: Response) => response.json());
  }
    
}
