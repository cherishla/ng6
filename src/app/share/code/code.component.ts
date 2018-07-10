import { Component, OnInit, Input, ViewChild, ElementRef, AfterViewInit} from '@angular/core';
declare var Prism;

@Component({
  selector: 'app-code',
  templateUrl: './code.component.html',
  styleUrls: ['./code.component.css']
})
export class CodeComponent implements OnInit, AfterViewInit {

  constructor() {

  }
  isHightlight = false;
  @Input() code = '';
  @Input() codeType = '';
  @Input() title = '';
  @Input() dataLine = 0;
  @ViewChild('preCode') preCode: ElementRef;
  langType = '';
  ngOnInit() {
    switch (this.codeType) {
      case 'markup':
        this.langType = 'language-markup';
        break;
      case 'markdown':
        this.langType = 'language-markdown';
        break;
      case 'css':
        this.langType = 'language-css';
        break;
      case 'js':
        this.langType = 'language-javascript';
        break;
      case 'json':
        this.langType = 'language-json';
        break;
      case 'http':
        this.langType = 'language-http';
        break;
      case 'ts':
        this.langType = 'language-typescript';
        break;
    }
    if (this.dataLine) {
      this.preCode.nativeElement.setAttribute('data-line', this.dataLine);
    }
  }

  ngAfterViewInit() {
    if (!this.isHightlight) {
      Prism.highlightAll();
    }
   this.isHightlight = true;

  }
}

