import { Component, OnInit } from "@angular/core";
import { Track } from "../../models/Track";
import { TrackService } from "../../service/track.service";
import { ActivatedRoute, ParamMap } from "@angular/router";

@Component({
  selector: "app-trackcard",
  templateUrl: "./trackcard.component.html",
  styleUrls: ["./trackcard.component.css"]
})
export class TrackcardComponent implements OnInit {
  public track: Track;

  constructor(
    private trackService: TrackService,
    private route: ActivatedRoute
  ) {}

  public tracks: any;

  ngOnInit() {
    this.route.paramMap.subscribe((params: ParamMap) => {
      let searchString = params.get("searchString");
      this.trackService.getTracks(searchString).subscribe(data => {
        console.log(data);
        this.tracks = data.results.trackmatches.track;
        console.log("result is ", this.tracks);
      });
    });
  }
  saveTrack(track: Track) {
    this.trackService.saveTrack(track).subscribe(data => {
      this.track = data;
      console.log("result is ", track);
    });
  }
}
