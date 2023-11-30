import { Directive, ElementRef,HostBinding,HostListener, Input} from '@angular/core';
@Directive({
    selector: 'p[highlight]'
})
export class HighlightDirective {
@HostBinding('style.backgroundColor')
color= 'transparent';

ngOnInit() {
    this.color = this.baseColor
}
@Input('base-color')
baseColor = 'transparent'

@Input('background-color')
backgroundColor = 'yellow'


@HostListener('mouseenter')
onMouseEnter(){
    this.color=this.backgroundColor;
}
@HostListener('mouseout')
onMouseOut(){
    this.color=this.baseColor;
}
}