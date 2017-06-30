Work Experience Review.

On my work experience I have learnt the basics of how to use html and javascript, and used them to create a fully functional maths quiz.
I have never used javascript and barely touched html, so it was fun to learn and I am happy with the result of my work.
I wasn't able to create a database to store the scores of my users onto, however everything else works fine, so I am not disappointed.
I have deployed my website using Firebase (Link: https://johns-maths-quiz.firebaseapp.com), and the code is accessible to anybody via GitHub.
I can show future employers my project as proof that I have had experience with html and javascript.

----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

Problems I had when making my program

There were numerous problems, both small and big, throughout the creation of the maths quiz. For example, there were lots of problems when I was making
functions and assigning them to buttons, and there were smaller problems such as something not appearing on the page because I got one word wrong.
Problems where you get one word wrong don't sound too bad, but they're much harder to find, and may not even fix it when you correct them. One example of a 
small problem being bad is where I accidentally forgot to delete one closing square bracket. This sounds like something that wouldn't make a difference,
but in fact it made a random input box appear, and made a lot of things disappear - even the text on my begin button disappeared!
Bigger problems are much easier to spot, but they can be very tricky to figure out. For example, functions being assigned to the wrong places
(hard to find where it's meant to go and what is meant to go where it is) and javascript problems such as "this." being missed out in massive chunks
(you don't know what variables need it) or in a timer function you forget to use the special case alternative for "this." - usually "a2".

----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

Improvements I wish I could make.

I want to perfect the minor problems in my project, such as faults with the division and multiplication options when you restart the quiz.
I think I could improve on the way it looks (e.g changing colours, adding pictures, and having backgrounds with gradients).
I wish I could find a way to order the scoreboard, so people would be ranked in terms of the highest score, and also the longest time remaining.
Also, I would like to add a No-SQL database to my project so everybody's scores could be saved on it, but learning how to use databases would take
quite a bit of practice, considering my only database experience is the basics of SQLite3 on Python, which is SQL.

----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

How to change my app at home.

1. Getting the code on my computer
There are 2 different ways to get the code onto my computer:

-Clone Method
To clone my app I can copy the file from GitHub and then use GitBash - I clone it by writing "git clone *paste here - not ctrl+v*"

-Pulling it from GitHub
In GitBash I can use "git pull" to bring the code onto my computer


2. Making changes to the app
On GitBash I need to do ng serve, so I can monitor my changes. I can change the .html, .ts and .css files to alter my website, and I could possibly
do the improvements mentioned in the section above.

 
3. Re-deploying the improved app
I need to re-deploy the app using Firebase and also push the updated code onto GitHub.

-Firebase re-deployment 
To re-deploy my app online with Firebase, I need to go on GitBash and use "firebase login" to log in to my project, then use "ng build" to compile the files,
which creates the "dist" folder, and then use "firebase deploy" to release it

-Pushing code onto GitHub
To update the visible code on GitHub, I need to go onto GitBash and type "git add .", which tells it to add to the existing maths quiz code. Then I need to
use "git commit -m "*name I want on GitHub*"" (use the double quotes inside this). This gives the name of the new commitment, like the original
"first commit" which I used. Finally, to push it onto GitHub I need to do "git push origin master".

Also read the "README.md" summary below

----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

# JohnsMathsQuiz


This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.1.3.



##Development server


Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. 
The app will automatically reload if you change any of the source files.



## Code scaffolding


Run `ng generate component component-name` to generate a new component. 
You can also use `ng generate directive|pipe|service|class|module`.



## Build


Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. 
Use the `-prod` flag for a production build.



## Running unit tests


Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).



## Running end-to-end tests


Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

Before running the tests make sure you are serving the app via `ng serve`.



## Further help


To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).


----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

My opinion on this work experience

Overall I really enjoyed my work experience! I have learned new skills which I can use next time I need to use html or javascript, and I have also improved
my overall knowledge of programming. It has been a lot of fun!
