import { Injectable } from "@angular/core";
import { HttpClient, HttpParams, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";
import { Result } from "src/app/models/Result";
import { Track } from "../models/Track";
import { Guid } from "guid-typescript";
const httpOptions = {
  headers: new HttpHeaders({
    "Content-Type": "application/json",
    Authorization: "my-auth-token"
  })
};

@Injectable({
  providedIn: "root"
})
export class TrackService {
  url =
    "http://ws.audioscrobbler.com/2.0/?method=track.search&api_key=47f81c40cf8d8c31295d864414978071&format=json";
  apiUrl = "http://localhost:8090/track";
  public results: Result;
  public trackList: Track[];
  constructor(private httpClient: HttpClient) {}

  ngOnInit() {}
  public getTracks(searchString: string): Observable<Result> {
    let params = new HttpParams();
    params = params.append("track", searchString);
    var result = this.httpClient.get<Result>(this.url, { params: params });
    return result;
  }
  saveTrack(track: Track): Observable<Track> {
    track.id = Guid.create().toString();
    return this.httpClient.post<Track>(this.apiUrl, track, httpOptions);
  }
  getSavedTracks(): Observable<Track[]> {
    return this.httpClient.get<Track[]>(this.apiUrl);
  }
  removeTrack(id: string): Observable<{}> {
    const url = `${this.apiUrl}/${id}`;
    return this.httpClient.delete(url, httpOptions);
  }
  updateTrack(id: string, track: Track) {
    const url = `${this.apiUrl}/${id}`;
    return this.httpClient.put<Track>(url, track, httpOptions);
  }
}
