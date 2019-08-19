import { Component, OnInit, Inject } from "@angular/core";
import { TrackService } from "../../service/track.service";
import { Track } from "../../models/Track";
import { Router } from "@angular/router";
import {
  MatDialog,
  MatDialogRef,
  MAT_DIALOG_DATA
} from "@angular/material/dialog";

@Component({
  selector: "app-trackcard2",
  templateUrl: "./trackcard2.component.html",
  styleUrls: ["./trackcard2.component.css"]
})
export class Trackcard2Component implements OnInit {
  public tracks: Track[];
  updatedComment: string;
  updateTrack: Track;
  constructor(
    private trackService: TrackService,
    private router: Router,
    private dialog: MatDialog
  ) {}
  ngOnInit() {
    this.trackService.getSavedTracks().subscribe(data => {
      this.tracks = data;
      console.log(this.tracks);
      this.router.navigateByUrl("/playList");
    });
  }
  removeTrack(track: Track) {
    this.trackService.removeTrack(track.id).subscribe();
    console.log(track);
  }
  openDialog(track: Track) {
    this.updateTrack = track;
    const dialogRef = this.dialog.open(Trackcard2ComponentDialogue, {
      width: "250px",
      data: {}
    });
    dialogRef.afterClosed().subscribe(result => {
      this.updatedComment = result;
      console.log(`Dialog result: ${result}`);
      console.log(`updated comment:`, this.updatedComment);
      this.updatetrack();
    });
  }
  updatetrack() {
    this.updateTrack.name = this.updatedComment;
    this.trackService
      .updateTrack(this.updateTrack.id, this.updateTrack)
      .subscribe(data => {
        console.log("updated Track ", data);
        this.trackService.getSavedTracks().subscribe(data => {
          this.tracks = data;
        });
      });
  }
}
@Component({
  selector: "play-list-comment-dialogue",
  templateUrl: "trackcard2-component-dialog-component.html"
})
export class Trackcard2ComponentDialogue {
  constructor(
    public dialogRef: MatDialogRef<Trackcard2ComponentDialogue>,
    @Inject(MAT_DIALOG_DATA) public data: Track
  ) {}
  onNoClick(): void {
    this.dialogRef.close();
  }
}
