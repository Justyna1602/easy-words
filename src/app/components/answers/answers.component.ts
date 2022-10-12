import {Component, Input} from '@angular/core';
import {WordType} from '../../data/models';

@Component({
    selector: 'app-answers',
    templateUrl: './answers.component.html',
    styleUrls: ['./answers.component.css']
})
export class AnswersComponent {
    @Input() title: string;
    words: WordType[] = [];


    @Input() set word(word: WordType) {
        if(word) {
            this.words.push(word);
        }
    }
}
