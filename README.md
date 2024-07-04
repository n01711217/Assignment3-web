**Features**
There is a simple click button to start the quiz.
Interactive Quiz: Seven multiple-choice questions with immediate feedback.
Navigation: "Previous" and "Next" buttons to navigate between questions.
Submit Button: Displays only on the last question to calculate and display the final score.
Feedback: Visual indication of correct and incorrect answers.
Final Score: A summary of the user's performance at the end of the quiz.

**USE OF HTML**
The HTML file (quiz.html) sets up the basic structure of the quiz, including sections for start, questions, navigation buttons, and the final score display.

**USE CSS**
The CSS file (style.css) ensures consistent styling across the quiz interface, including button styles, feedback colors for correct and incorrect answers, and layout adjustments.

**Use of JavaScript**
The JavaScript file (script.js) contains the logic for the quiz:

**Questions Part:** This Stores the questions, options, and correct answers.
**Start Button**: A function to hide the authentication screen and display the quiz.
**Question Display:** This Functions shows the current question and update the navigation buttons.
**Answer Selection:** A functions handle user selections and provide feedback.
**Navigation: ** Functions for the "Previous" and "Next" buttons.
**Submit:** A function to calculate and display the final score when the quiz is submitted.

Challenges Faced

**Submit Button:** Implementing the submit button to appear only on the last question and correctly calculate the final score was little hard as i had to read more on how to implement this. 
Initially when i had completed the project, the submit button wouldn't come up until i click on previous question and this actually reduces the styling of the page and makes it difficult to submit your answers 
