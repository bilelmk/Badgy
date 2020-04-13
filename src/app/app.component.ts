import {Component, ViewChild} from '@angular/core';
import htmlToImage from 'html-to-image';
import { TextStyle , ShapeStyle , ImageStyle } from './Default'
import {MatSliderChange} from '@angular/material';

export class Element {
  id : number ;
  type : string ;
  content : string ;
  style : any ;
}


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  users = [ 'bilel' , 'skander' , 'nouha' , 'oussema'] ;

  container :Element[] = [] ;

  @ViewChild('content' ,null) content;

  url ;
  selectedElement : number ;
  element : Element ;

  main_style = {
    'background-color': 'transparent' ,
    'margin': '0  0 100px',
    'display' : 'inline-block',
    'height': '200px' ,
    'width': '200px',
    'border': '2px solid black' ,
  };
  def: 'any';


  try(){
    this.selectedElement =null ;
    this.transform().then(res => this.url= res)

  }

  transform(){
    return htmlToImage.toPng(this.content.nativeElement)
      .then(function (dataUrl) {
        var img = new Image();
        img.src = dataUrl;
        return dataUrl ;
      })
      .catch(function (error) {
        return null ;
      });
  }


  modifySize( attribute: string, value : number ) {
    if(this.selectedElement){
      this.element.style[attribute] = value.toString()+"px"
    }
  }

  formatLabel(value: number) {
    return value + 'px';
  }

  getValue(attribute: string) {
    if(attribute){
      return (Number)(attribute.substring( 0 ,attribute.length-2)) ;
    }
  }


  addElement(type : string) {
    let id = this.container.length +1  ;
    let style ;
    let content  ;
    if(type == 'text') {
      style = Object.assign({}, TextStyle);
      content = 'Some text'
    }
    else if(type == 'shape'){
      style = Object.assign({}, ShapeStyle);
      content = '' ;
    }
    else if(type == 'image'){
      style = Object.assign({}, ImageStyle);
      content = ''
    }

    let element : Element = {
      id : id ,
      type : type ,
      style : style ,
      content : content
    };
    this.container.push(element)
  }


  selectElement(id : number , e : Element) {
    this.element = e ;
    this.selectedElement = id ;
  }

  deselectElement(){
    this.selectedElement = null ;
    this.element = null ;
  }

  selectBadge(h: number, w : number) {
    this.main_style = {
      'background-color': 'transparent' ,
      'margin': '0  0 100px',
      'display' : 'inline-block',
      'height': h+'px' ,
      'width': w+'px',
      'border': '2px solid black' ,
    };
  }





}
