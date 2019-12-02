
export class Attempt
{
    questionId:String;
     question:String ;
     response:Number;
     answer:Number;
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