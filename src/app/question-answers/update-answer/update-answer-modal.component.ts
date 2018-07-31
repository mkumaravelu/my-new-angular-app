import { Component, OnInit, Inject } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Validators, FormGroup, FormControl} from '@angular/forms';
import { AnswersService } from '../../services/answers.service';
import { Answer } from '../../../../sdk';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
//import { modelGroupProvider } from '@angular/forms/src/directives/ng_model_group

@Component({
    selector: 'update-answer-modal',
    templateUrl: './update-answer-modal.component.html',
    exportAs: 'updateAnswerModal',
    styleUrls: ['../../styles/modals.scss']
  })


  export class UpdateAnswerModalComponent implements OnInit{

    answerForm: FormGroup;

    constructor(
        private router: Router,
        private route: ActivatedRoute,
        public answersService: AnswersService,
        public thisDialogRef: MatDialogRef<UpdateAnswerModalComponent>,
        @Inject(MAT_DIALOG_DATA) public modalData: any
    ){}

    ngOnInit():void
    {
        console.log(this.modalData.answer);
        this.answerForm = new FormGroup({
            answer: new FormControl(this.modalData.answer.answer,
                Validators.required)
        })
    }

    onCloseCancel()
    {
        this.thisDialogRef.close();
    }


    onSubmit(values)
    {
        let newAnswer = this.modalData.answer;
        newAnswer.answer = values.answer;
        this.answersService.updateAnswer(newAnswer)
        .then (answer =>{
            this.thisDialogRef.close(answer);
            this.answerForm.reset();

        } )
    }
}