import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ExamSchedulePage } from './exam-schedule';

@NgModule({
  declarations: [
    ExamSchedulePage,
  ],
  imports: [
    IonicPageModule.forChild(ExamSchedulePage),
  ],
  entryComponents: [
    ExamSchedulePage
  ]
})
export class ExamSchedulePageModule {}
