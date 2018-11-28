import { Component, OnInit } from '@angular/core';
import {MenuItem} from 'primeng/api';

@Component({
  selector: 'jhi-sidenavmenu',
  templateUrl: './sidenavmenu.component.html',
  styles: []
})
export class SidenavmenuComponent implements OnInit {

  items: MenuItem[];

  constructor() { }

    ngOnInit() {
        this.items = [
            {
                label: 'File',
                items: [{
                        label: 'New',
                        items: [
                            {label: 'User'},
                            {label: 'Filter'}
                        ]
                    },
                    {label: 'Open'},
                    {separator: true},
                    {label: 'Quit'}
                ]
            },
            {
                label: 'Edit',
                items: [
                    {label: 'Delete'},
                    {label: 'Refresh'}
                ]
            },
            {
                label: 'Help',
                items: [
                    {
                        label: 'Contents',
                    },
                ]
            },
        ];
    }

}
