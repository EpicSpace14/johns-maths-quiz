import { Component }     from '@angular/core';
import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'John\'s Student Maths Quiz';
  //question1 = {num1:Math.floor((Math.random() * 10) + 1), num2:Math.floor((Math.random() * 10) + 1)}
  //question2 = {num1:Math.floor((Math.random() * 10) + 1), num2:Math.floor((Math.random() * 10) + 1)}
  //questionlist = [this.question1, this.question2];
  num1;
  num2;
  nameinput=true;
  vis="View Scoreboard"
  div="/"
  mult="*"
  y=0;
  t=120;
  score=0;
  symbol=["+","-"]
  studAnslist=[]
  questionlist=[]
  answerlist=[]
  name=""
  scorelist=[]
  img=[]
  alltimes=[]
  question;
  ans;
  r;
  total;
  start=false;
  clickdivide=false;
  clickmultiply=false;
  disable=false;
  done=true;
  scoreboardview=true;

  restart() {
    this.symbol=["+","-"]
    if (this.clickdivide == true) {
      this.symbol.push("/")
    }
    if (this.clickmultiply == true) {
      this.symbol.push("*")
    }
    this.clickdivide=false
    this.clickmultiply=false
    this.start=true
    this.done=false
    this.score=0
    this.nameinput=true
    this.t=120
    for (var i = 0; i < 20; i++) {
      this.num1 = Math.floor((Math.random()*10)+1)
      this.num2 = Math.floor((Math.random()*10)+1)
      this.questionlist[i]=this.num1 + this.symbol[Math.floor(Math.random()*(this.symbol.length))] + this.num2
      this.answerlist[i]=eval(this.questionlist[i])
      this.studAnslist[i]=undefined
    }
  }

  visible() {
    if (this.vis == "View Scoreboard") {
      this.vis = "Hide Scoreboard"
    } else if (this.vis == "Hide Scoreboard") {
      this.vis = "View Scoreboard"
      this.scoreboardview = true
    }
  }

  tick() {
    for (var i = 0; i < 20; i++) {
      if (this.studAnslist[i] == this.answerlist[i]) {
        this.img[i] = "https://openclipart.org/image/2400px/svg_to_png/167549/Kliponious-green-tick.png"
      }
      else {
        this.img[i] = "https://openclipart.org/image/2400px/svg_to_png/26556/raemi-Cross-Out.png"
      }
    }
  }

  scoreboard() {
    this.scoreboardview=false
  }

  division() {
    this.symbol.push(this.div)
    this.y=this.y+1
    this.clickdivide=true
  }

  multiply() {
    this.symbol.push(this.mult)
    this.y=this.y+1
    this.clickmultiply=true
  }

  questions() {
    this.start=true
    this.done=false
    for (var i = 0; i < 20; i++) {
      this.num1 = Math.floor((Math.random()*10)+1)
      this.num2 = Math.floor((Math.random()*10)+1)
      this.question = this.num1 + this.symbol[Math.floor(Math.random()*this.symbol.length)] + this.num2
      this.questionlist.push(this.question)
      this.answerlist[i]=eval(this.question)
    }
  }

  marks() {
    this.start=false
    console.log(this.studAnslist)
    console.log(this.answerlist)
    for (var i = 0; i < 20; i++) {
      if (this.studAnslist[i] == this.answerlist[i]) {
        this.score = this.score + 1
      }
    }
    console.log(this.score)
    this.scorelist.push({name:this.name,score:this.score,time:this.t-1})
    console.log(this.scorelist)
    this.nameinput=false
    this.clickdivide=false
    this.clickmultiply=false
    this.done=true
  }

  timer() {
    var a2 = this;
    var myVar = setInterval(function(){ myTimer() }, 1000);
    function myTimer() {
      var d = new Date();
      a2.t = a2.t-1;
      if (a2.nameinput == false) {
        clearInterval(myVar)
      }
      if (a2.t == 0) {
        clearInterval(myVar)
        alert("Time up!")
        a2.disable=true
      }
    }
  }
}
