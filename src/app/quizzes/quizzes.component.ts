import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Quiz } from '../quiz';

@Component({
  selector: 'app-quizzes',
  templateUrl: './quizzes.component.html',
  styleUrls: ['./quizzes.component.css'],
})
export class QuizzesComponent implements OnInit {
  constructor(private _router: Router) {}

  quizzes: Quiz[] = [
    {
      id: 1,
      title: 'Java Basics',
      desc: 'An ultimate quiz to check your Java Knowldege',
      questions: [
        {
          sno: 1,
          question: ' What is the default encoding for an OutputStreamWriter?',
          options: [
            { sno: 1, value: 'UTF-8' },
            { sno: 2, value: 'Default encoding of host' },
            { sno: 3, value: 'UTF-12' },
            { sno: 4, value: 'None of the above' },
          ],
        },
        {
          sno: 2,
          question:
            ' Which of the following modifiers can be used for a variable so that it can be accessed by any thread or a part of a program?',
          options: [
            { sno: 1, value: 'global' },
            { sno: 2, value: 'transient' },
            { sno: 3, value: 'volatile' },
            { sno: 4, value: 'default' },
          ],
        },
        {
          sno: 3,
          question:
            'If three threads trying to share a single object at the same time, which condition will arise in this scenario?',
          options: [
            { sno: 1, value: 'Time-lapse' },
            { sno: 2, value: 'Critical Situation' },
            { sno: 3, value: 'Race Condition' },
            { sno: 4, value: 'Recursion' },
          ],
        },
        {
          sno: 4,
          question:
            'What is meant by the classes and objects that dependents on each other?',
          options: [
            { sno: 1, value: 'Tight coupling' },
            { sno: 2, value: 'Loose coupling' },
            { sno: 3, value: 'Cohesion' },
            { sno: 4, value: 'None of the above' },
          ],
        },
        {
          sno: 5,
          question: 'Which of the following is a mutable class in java?',
          options: [
            { sno: 1, value: 'java.lang.Short' },
            { sno: 2, value: 'java.lang.Byte' },
            { sno: 3, value: 'java.lang.String' },
            { sno: 4, value: 'java.lang.StrinBuilder' },
          ],
        },
      ],
      answers: [2, 3, 3, 1, 4],
    },
    // QUIZ 2
    {
      id: 1,
      title: 'JavaScript Basics',
      desc: 'An ultimate quiz to check your JavaScript Knowldege',
      questions: [
        {
          sno: 1,
          question: 'Inside which HTML element do we put the JavaScript?',
          options: [
            { sno: 1, value: '<javascript>' },
            { sno: 2, value: '<js>' },
            { sno: 3, value: '<scripting>' },
            { sno: 4, value: '<script>' },
          ],
        },
        {
          sno: 2,
          question:
            'What is the correct syntax for referring to an external script called "xxx.js"?',
          options: [
            { sno: 1, value: '<script name= xxx.js>' },
            { sno: 2, value: '<script src= xxx.js>' },
            { sno: 3, value: '<script href= xxx.js>' },
            { sno: 4, value: '<script link= xxx.js>' },
          ],
        },
        {
          sno: 3,
          question: 'How to write an IF statement in JavaScript?',
          options: [
            { sno: 1, value: 'if i = 5 then' },
            { sno: 2, value: 'if i = 5' },
            { sno: 3, value: 'if i == 5' },
            { sno: 4, value: 'if (i == 5)' },
          ],
        },
        {
          sno: 4,
          question: 'How do you round the number 7.25, to the nearest integer?',
          options: [
            { sno: 1, value: 'round(7.25)' },
            { sno: 2, value: 'r(7.25)' },
            { sno: 3, value: 'Math.round(7.25)' },
            { sno: 4, value: 'Math.rnd(7.25)' },
          ],
        },
        {
          sno: 5,
          question:
            'Which event occurs when the user clicks on an HTML element?',
          options: [
            { sno: 1, value: 'onmouseove' },
            { sno: 2, value: 'onclick' },
            { sno: 3, value: 'onmouseclick' },
            { sno: 4, value: 'onchange' },
          ],
        },
        {
          sno: 6,
          question: 'How do you declare a JavaScript variable for car?',
          options: [
            { sno: 1, value: 'var car' },
            { sno: 2, value: 'v car' },
            { sno: 3, value: 'variable car' },
            { sno: 4, value: 'const car' },
          ],
        },
      ],
      answers: [4, 2, 4, 3, 2, 1],
    },
  ];

  ngOnInit(): void {}

  onClick(q: Quiz) {
    localStorage.setItem('quiz', JSON.stringify(q));
    console.log(q);
    this._router.navigate(['/register']);
  }
}
