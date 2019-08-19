import { Component, OnInit, Inject } from "@angular/core";
import { TrackService } from "../../service/track.service";
import { Router } from "@angular/router";
import { Track } from "../../models/Track";

@Component({
  selector: "app-playist",
  templateUrl: "./playist.component.html",
  styleUrls: ["./playist.component.css"]
})
export class PlayistComponent implements OnInit {
  ngOnInit() {}
  constructor(private trackService: TrackService, private router: Router) {}

  public tracklist: Track[];
  getPlayList() {
    this.trackService.getSavedTracks().subscribe(data => {
      this.tracklist = data;
      console.log(this.tracklist);
      this.trackService.trackList = data;
      this.router.navigateByUrl("/playList");
    });
  }
}
