import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule, Routes } from "@angular/router";
import { GlobalFeedComponent } from "./components/global-feed/global-feed.component";
import { FeedModule } from "src/app/shared/modules/feed/feed.module";
import { BannerModule } from "src/app/shared/modules/banner/banner.module";
import { PopularTagsModule } from "src/app/shared/modules/popular-tags/popular-tags.module";

const routes: Routes = [
  {
    path: "",
    component: GlobalFeedComponent,
  },
];

@NgModule({
  declarations: [GlobalFeedComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    FeedModule,
    BannerModule,
    PopularTagsModule,
  ],
  providers: [FeedModule],
})
export class GlobalFeedModule {}
