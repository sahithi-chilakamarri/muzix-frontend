import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { HttpClientModule } from "@angular/common/http";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { SearchComponent } from "./components/search/search.component";
import { NavigationbarComponent } from "./components/navigationbar/navigationbar.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { MaterialModule } from "./material.module";
import { FlexLayoutModule } from "@angular/flex-layout";
import { TrackcardComponent } from "./components/trackcard/trackcard.component";
import {
  Trackcard2Component,
  Trackcard2ComponentDialogue
} from "./components/trackcard2/trackcard2.component";
import { TrackService } from "./service/track.service";
import { FormsModule } from "@angular/forms";
import { PlayistComponent } from "./components/playlist/playist.component";
import { FooterComponent } from "./components/footer/footer.component";
import { MatDialogModule } from "@angular/material/dialog";
@NgModule({
  declarations: [
    AppComponent,
    SearchComponent,
    NavigationbarComponent,
    TrackcardComponent,
    Trackcard2Component,
    PlayistComponent,
    FooterComponent,
    Trackcard2ComponentDialogue
  ],
  imports: [
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    FlexLayoutModule,
    HttpClientModule,
    MatDialogModule
  ],
  entryComponents: [Trackcard2Component, Trackcard2ComponentDialogue],
  providers: [TrackService],
  bootstrap: [AppComponent]
})
export class AppModule {}
