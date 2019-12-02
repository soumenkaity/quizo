
export class Attempt
{
    questionId:String;
     question:String ;
     response:String;
     answer:String;
     choices:String[];

     constructor(questionID, question, response, answer, choices)
     {
       this.questionId=questionID;
       this.question=question;
       this.response=response;
       this.answer=answer;
       this.choices=choices;
     }

}