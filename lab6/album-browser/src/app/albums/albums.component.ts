import { Component, OnInit  } from '@angular/core';
import { Album } from "../album";
import { AlbumService } from "../albums.service";

@Component({
  selector: 'app-albums',
  templateUrl: './albums.component.html',
  styleUrls: ['./albums.component.css']
})
export class AlbumsComponent implements OnInit {
  posts: Album[];
  newPost: Album;
  loaded: boolean;

  constructor(private albumService: AlbumService) {
    this.posts = [];
    this.newPost = {} as Album;
    this.loaded = true;
  }

  ngOnInit(): void {
    this.getPosts();
  }

  getPosts(){
    this.loaded = false;
    this.albumService.getAlbums().subscribe((posts) =>{
      this.posts = posts;
      this.loaded = true;
    })
  }

  addPost(){
    this.loaded = false;
    this.albumService.addPost(this.newPost).subscribe((post) => {
      this.posts.push(post); // Add post to the end of the array
      this.loaded = true;
      this.newPost = {} as Album;
    });
  }


  deleteAlbum(id: number) {
    this.albumService.deleteAlbum(id).subscribe((response : Album) => {
      this.posts = this.posts.filter(a => a.id != id);
    })
  }
}