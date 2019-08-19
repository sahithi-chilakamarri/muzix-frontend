import { Component, OnInit } from "@angular/core";
import { Result } from "../../models/Result";
import { TrackService } from "../../service/track.service";
import { Router } from "@angular/router";

@Component({
  selector: "app-search",
  templateUrl: "./search.component.html",
  styleUrls: ["./search.component.css"]
})
export class SearchComponent implements OnInit {
  private tracks: Result;
  constructor(private searchservice: TrackService, private router: Router) {}
  ngOnInit() {}
  getopTracks(searchString) {
    this.searchservice.getTracks(searchString).subscribe(data => {
      this.router.navigate(["/track", searchString]);
    });
  }
}
