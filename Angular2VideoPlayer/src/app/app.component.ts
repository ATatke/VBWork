import {Component, OnInit} from '@angular/core';
import {ProgressComponent} from './progress.component';
import {ToolbarComponent} from './toolbar.component';
import {VideoService} from './video.service';
import {OptionsComponent} from './options.component';

@Component({
    selector: 'video-app',
    template: `
            <div class="row">
                <div class="col-sm-12">            
                    <div id="fullPlayer" (mouseup)="videoService.dragStop($event)" (mousemove)="videoService.dragMove($event)" (mouseleave)="videoService.dragStop($event)">
                        <div class="embed-responsive embed-responsive-16by9">
                            <video id="videoDisplay" (click)="videoService.playVideo()" width="100%" height="100%"  class="embed-responsive-item"></video>
                            <div id="bigPlayButton" [ngClass]="{'fade-out':videoService.isPlaying}" class="fader" (click)="videoService.playVideo()"><i class="fa fa-play"></i></div>
                            <div id="videoTitle" [ngClass]="{'fade-out':videoService.isPlaying}" class="fader">{{videoService.currentTitle}}</div>
                            <video-options [ngClass]="{'fade-out':! videoService.showDetails}" class="fader"></video-options>
                        </div>
                        <video-progress></video-progress>
                        <video-toolbar></video-toolbar>
                        <video-caption class="text-center">Tags will go here</video-caption>                        
                    </div>
                </div>
            </div> 
            <div class="row">
                <div class="col-sm-12">    
                    <video-analysis class="pull-right"><button type="button" class="btn btn-info">Analyze</button></video-analysis>
                </div>
            </div>       
            `,
            directives: [ProgressComponent, ToolbarComponent, OptionsComponent],
            providers: [VideoService]
})
export class AppComponent implements OnInit {
    constructor(public videoService:VideoService) {}
    ngOnInit() {
        this.videoService.appSetup("videoDisplay");
        this.videoService.gatherJSON();
    }
}
