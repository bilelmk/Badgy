import {Component, ViewChild} from '@angular/core';
import htmlToImage from 'html-to-image';


export class Element {
  id : number ;
  type : string ;
  style : any ;
}


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  container :Element[] = [] ;

  @ViewChild('content' ,null) content;

  url ;
  selectedElement : number ;
  element : Element ;

  // element2 = {
  //   'width': '50px' ,
  //   'height': '50px',
  //   'border': 'solid 1px #ccc',
  //   'color': "rgba(0, 0, 0, 0.87)" ,
  //   'cursor': 'move' ,
  //   'display': 'flex' ,
  //   'justify-content': 'center' ,
  //   'align-items': 'center' ,
  //   'text-align':'center' ,
  //   'background': '#fff' ,
  //   'position': 'relative' ,
  //   'z-index': '2' ,
  //   'transition': 'box-shadow 200ms cubic-bezier(0, 0, 0.2, 1)'
  // };

  try(){
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


  modifyStyle( attribute: string, direction: boolean) {
    if(this.selectedElement){
      let value = (Number)(this.element.style[attribute].substring( 0 ,this.element.style[attribute].length-2)) ;
      if (direction){
        value ++ ;
      }
      else {
        value -- ;
      }
      this.element.style[attribute] = value.toString()+"px"
    }

  }

  addElement() {
    let id = this.container.length +1  ;
    let style = {
      'width': '50px' ,
      'height': '50px',
      'font-size' : '20px' ,
      'background': '#fff' ,
      'color': "rgba(0, 0, 0, 0.87)" ,
      // 'border': 'solid 1px #ccc',

      'cursor': 'move' ,
      'display': 'flex' ,
      'justify-content': 'center' ,
      'align-items': 'center' ,
      'text-align':'center' ,
      'position': 'relative' ,
      'z-index': '3' ,
      'transition': 'box-shadow 200ms cubic-bezier(0, 0, 0.2, 1)'
    };
    let element : Element = {
      id : id ,
      type : "shape" ,
      style : style
    };
    this.container.push(element)
  }


  selectElement(id : number , e : Element) {
    this.element = e ;
    this.selectedElement = id ;
  }
}
