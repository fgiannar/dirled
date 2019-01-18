import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { DataProvider } from '../../providers/data/data';
import { AppRate } from '@ionic-native/app-rate';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  level: number;
  totalLevels: number;

  questions: any;
  currentQuestion: any;
  end: boolean = false;

  answer: string = '';

  constructor(public navCtrl: NavController, public dataService: DataProvider, private appRate: AppRate, private storage: Storage) {

  }

  ionViewDidLoad() {

    this.dataService.load().then((data) => {
      this.questions = data;
      this.totalLevels = this.questions.length;
      console.log('Total levels', this.totalLevels);
      this.storage.get('level').then((level) => {
        console.log('Your level is', level);
        this.setLevel(level || 1);
      });

    });
  }

  setLevel(l) {
    this.answer = '';
    this.level = l;
    this.storage.set('level', this.level);

    if (this.totalLevels == this.level - 1)
      return this.endGame();

    this.currentQuestion = this.questions[this.level-1]
  }

  submitAnswer(answer) {
    if (answer == this.currentQuestion.answer.toUpperCase( )) {
      return this.setLevel(this.level + 1);
    }

    this.answer = '';
  }

  endGame() {
    this.end = true;

    setTimeout(() => {
      this.appRate.promptForRating(true);
    }, 2000);
  }

  restartQuiz() {
    this.end = false;
    this.setLevel(1);
  }

}