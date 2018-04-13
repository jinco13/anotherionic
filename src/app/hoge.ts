import {Component, Input, ViewChild, OnInit, ElementRef} from '@angular/core';
import {Chart} from 'chart.js';

@Component ({
    selector: 'hoge',
    template: `<div>
        <canvas #graph></canvas>
    </div>`
})
export class Hoge implements OnInit {
    @ViewChild('graph') graph: ElementRef;
    @Input('data') data: any;

    constrcutor() {
    }

    ngOnInit() {
        console.log("component hoge");
        console.log('start chart');
        console.log(this.data);
        new Chart(this.graph.nativeElement, {
            type: 'bar',
            data: this.data, 
        })
    }
}
