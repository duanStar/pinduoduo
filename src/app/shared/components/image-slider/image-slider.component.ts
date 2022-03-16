import { Component, Input, OnInit, ViewChild, ElementRef, Renderer2, ViewChildren, QueryList, AfterViewInit, OnDestroy } from '@angular/core';;

export interface ImageSlider {
  imgUrl: string;
  link: string;
  caption: string;
}

@Component({
  selector: 'app-image-slider',
  templateUrl: './image-slider.component.html',
  styleUrls: ['./image-slider.component.less']
})
export class ImageSliderComponent implements OnInit, AfterViewInit, OnDestroy {

  @Input()
  sliders: ImageSlider[] = [];
  @Input()
  sliderHeight = '160px';
  @Input()
  intervalBySeconds = 2;
  @ViewChild('imageSlider', {static: true})
  imageSlider: ElementRef | undefined;
  @ViewChildren('img')
  imgs: QueryList<ElementRef> | undefined;
  private timer = 0;
  selectedIndex = 0;

  handleScroll(e: any) {
    const width = this.imageSlider?.nativeElement.clientWidth
    const ratio = Math.round(e.target.scrollLeft / width)
    //  const ratio = Math.round(e.target.scrollLeft * this.sliders.length / e.target.scrollWidth)
    this.selectedIndex = ratio
  }

  constructor(private rd2: Renderer2) { }
  ngOnInit(): void {
    
  }

  ngAfterViewInit(): void {
    if (this.imageSlider && this.imageSlider.nativeElement) {
      const width = this.imageSlider.nativeElement.clientWidth
      const len = this.sliders.length;
      this.timer = window.setInterval(() => {
        if (this.selectedIndex >= len) this.selectedIndex = -1;
        // this.rd2.setStyle(this.imageSlider?.nativeElement, 'transform', `translateX(-${width * index}px)`);
        this.rd2.setProperty(this.imageSlider?.nativeElement, 'scrollLeft', this.getIndex(++this.selectedIndex) * width);
      }, this.intervalBySeconds * 1000);
    }
  }
  getIndex(index: number): number {
    return index >= 0 ? index % this.sliders.length : this.sliders.length - Math.abs(index)
  }
  ngOnDestroy(): void {
    this.timer && window.clearInterval(this.timer);
  }
}
