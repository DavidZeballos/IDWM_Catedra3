import { Component, OnInit } from '@angular/core';
import { VideoGameService, VideoGame } from '../../services/video-game.service';

@Component({
  selector: 'app-video-game-list',
  templateUrl: './video-game-list.component.html',
  styleUrl: './video-game-list.component.css'
})
export class VideoGameListComponent {
  videoGames: VideoGame[] = [];

  constructor(private videoGameService: VideoGameService) {}

  ngOnInit(): void {
    this.videoGameService.getVideogames().subscribe((data: VideoGame[]) => {
      this.videoGames = data;
    });
  }
  deleteVideoGame(id: number): void {
    this.videoGameService.deleteVideogame(id).subscribe(() => {
      this.videoGames = this.videoGames.filter(v => v.id == id);
    });
  }
}
