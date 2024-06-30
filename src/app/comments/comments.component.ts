import { NgOptimizedImage } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-comments',
  standalone: true,
  imports: [NgOptimizedImage],
  template: `
    <h3>Comments</h3>
    <img src="https://img2.rtve.es/i/?w=1200&i=https://img.rtve.es/imagenes/this-is-fine-meme-forma-parte-webcomic-2013/1614352806474.png"/>
    <p>Lorem impsum</p>
  `,
  styles: `
  img{
    width: 100%;
    height: auto;
  }`
})
export class CommentsComponent {

}
