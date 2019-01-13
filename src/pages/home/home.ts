import { Component, ViewChild } from '@angular/core';
import { NavController } from 'ionic-angular';
import { DataProvider } from '../../providers/data/data';
import { AppRate } from '@ionic-native/app-rate';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  @ViewChild('slides') slides: any;

  hasAnswered: boolean = false;
  level: number = 1;
  totalLevels: number;

  slideOptions: any;
  questions: any;

  answer: string = '';

  constructor(public navCtrl: NavController, public dataService: DataProvider, private appRate: AppRate) {

  }

  ionViewDidLoad() {

    this.slides.lockSwipes(true);

    this.dataService.load().then((data) => {
      this.questions = data;
      this.totalLevels = this.questions.length;
    });

  }

  nextSlide() {
    this.slides.lockSwipes(false);
    this.slides.slideNext();
    this.slides.lockSwipes(true);
  }

  nextLevel() {
    this.answer = '';
    this.level++;
    this.nextSlide();

    // Last Slide
    if (this.slides.isEnd())
      setTimeout(() => {
        this.appRate.promptForRating(true);
      }, 2000);
  }

  submitAnswer(answer, question) {
    if (answer == question.answer.toUpperCase( )) {
      this.nextLevel();
    }

    // Major hack to re-render input and apply autofocus.
    this.hasAnswered = true;
    setTimeout(() => {
      this.hasAnswered = false;
      this.answer = '';
      return;
    },1);
  }

  restartQuiz() {
    this.level = 1;
    this.slides.lockSwipes(false);
    this.slides.slideTo(0, 1000);
    this.slides.lockSwipes(true);
  }

}