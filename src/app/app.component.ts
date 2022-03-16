import { Component } from '@angular/core';
import { ImageSlider, TopMenu } from './shared/components';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent {
  menus: TopMenu[] = [
    {
      title: '热门',
      link: ''
    },
    {
      title: '手机',
      link: ''
    },
    {
      title: '百货',
      link: ''
    },
    {
      title: '母婴',
      link: ''
    },
    {
      title: '男装',
      link: ''
    },
    {
      title: '女装',
      link: ''
    },
    {
      title: '食品',
      link: ''
    },
    {
      title: '电器',
      link: ''
    },
    {
      title: '鞋包',
      link: ''
    },
    {
      title: '内衣',
      link: ''
    },
    {
      title: '美妆',
      link: ''
    },
    {
      title: '水果',
      link: ''
    },
    {
      title: '家纺',
      link: ''
    },
    {
      title: '文具',
      link: ''
    },
    {
      title: '运动',
      link: ''
    },
  ];
  imageSliders: ImageSlider[] = [
    {
      imgUrl: '//img.alicdn.com/imgextra/i1/6000000002495/O1CN01cTpFGm1UIkvRUVP43_!!6000000002495-0-lubanimage.jpg',
      link: '',
      caption: ''
    },
    {
      imgUrl: 'https://gtms04.alicdn.com/tps/i4/TB1pgxYJXXXXXcAXpXXrVZt0FXX-640-200.jpg',
      link: '',
      caption: ''
    },
    {
      imgUrl: 'https://img.alicdn.com/simba/img/TB15tIjGVXXXXcoapXXSutbFXXX.jpg',
      link: '',
      caption: ''
    },
    {
      imgUrl: '//img.alicdn.com/imgextra/i1/6000000000174/O1CN01d8kRei1D9jetQCajs_!!6000000000174-0-lubanimage.jpg',
      link: '',
      caption: ''
    },
    {
      imgUrl: '//img.alicdn.com/imgextra/i1/6000000002495/O1CN01cTpFGm1UIkvRUVP43_!!6000000002495-0-lubanimage.jpg',
      link: '',
      caption: ''
    },
    {
      imgUrl: '//img.alicdn.com/imgextra/i2/1/O1CN01olCjyV1BsV8hIDlx7_!!1-0-luban.jpg',
      link: '',
      caption: ''
    },
    {
      imgUrl: '//img.alicdn.com/imgextra/i1/6000000006263/O1CN018Tenif1w8VIpe9huI_!!6000000006263-0-lubanimage.jpg',
      link: '',
      caption: ''
    }
  ]
  handleTabSelected(index: TopMenu){
    console.log(index);
  }
}
