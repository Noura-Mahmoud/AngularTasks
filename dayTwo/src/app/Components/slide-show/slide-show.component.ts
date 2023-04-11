import { Component } from '@angular/core';

@Component({
  selector: 'app-slide-show',
  templateUrl: './slide-show.component.html',
  styleUrls: ['./slide-show.component.css']
})
export class SlideShowComponent {
  imgSrc = '';
  imageUrls: string[] = [];
  currentIndex = 0;
  intervalSlide:any ;
  onSlide = false;

  ngOnInit() {
    const dirPath = 'assets/Images/'; 
    for(let i=1; i<9; i++)
    {
      this.imageUrls.push(dirPath+i+".jpg");
    }
    this.imgSrc = this.imageUrls[0];
  }

  // imgSrc="assets/Images/1.jpg";
  next(){
    this.currentIndex++;
    if(this.currentIndex >= this.imageUrls.length){
      this.currentIndex = this.imageUrls.length-1;
    }
    this.imgSrc = this.imageUrls[this.currentIndex];
  }
  prev(){
    this.currentIndex--;
    if(this.currentIndex <= 0){
      this.currentIndex = 0;
    }
    this.imgSrc = this.imageUrls[this.currentIndex];
  }
  slide(){
    if (!this.onSlide){
        this.onSlide = true;
        this.intervalSlide = setInterval(()=>{
          this.sliding();
      }, 200);
    }
  }
  stop(){
    clearInterval(this.intervalSlide);
    this.onSlide = false;
  }

  sliding(){
    this.currentIndex++;
    if(this.currentIndex == this.imageUrls.length){
      this.currentIndex = 0;
    }
    this.imgSrc = this.imageUrls[this.currentIndex];
  }
}

