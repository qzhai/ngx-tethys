import { Component, OnInit, HostBinding, Input } from '@angular/core';

@Component({
    selector: 'thy-menu-item,[thy-menu-item],[thyMenuItem]',
    templateUrl: './menu-item.component.html'
})
export class ThyMenuItemComponent implements OnInit {
    @HostBinding('class.thy-menu-item') isThyMenuItem = true;

    ngOnInit(): void {}
}
