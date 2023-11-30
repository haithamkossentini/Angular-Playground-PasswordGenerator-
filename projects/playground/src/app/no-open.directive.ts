import { Directive, HostListener } from '@angular/core';

@Directive( {
selector: 'a[no-open]',
})
export class NoOpenDirective {
    @HostListener('click')
    onClickLink(){
       
        console.log('impo');
        return false;
    }
}