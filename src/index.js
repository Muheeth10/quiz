import React,{Component } from 'react';
import ReactDom from 'react-dom';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import QuestionBox from './components/QuestionBox';
import quizService from './quizService';
import Result from "./components/Response";

class QuizBee extends Component{
    state = {
        questionBank :[],
        score:0,
        responses:0
    };

    getQuestions =() =>{
        quizService().then(question =>{
            this.setState({
                questionBank:question
            });
        });
    };

    computeAnswer = (answer, correctAnswer) => {
        if(answer === correctAnswer){
            this.setState({
                score:this.state.score+1
            });
        }
        this.setState({
            responses:this.state.responses < 5 ? this.state.responses+1 : 5,
        })
    }

    playAgain = () => {
        this.getQuestions();
        this.setState({
            score:0,
            responses:0
        })

    }

    componentDidMount()
    {
        this.getQuestions();
    }


    render(){
        return(
            <div className="container text-light bg-dark mx-auto my-5 p-0">
                <h2 className="bg-dark">Quizbee</h2>
                
                    { this.state.questionBank.length > 0 && 
                      this.state.responses<5 && //this helps to not to display anything when the responses excceed 5 responses
                      this.state.questionBank.map(
                        ({question,answers,correct,questionId}) => 
                        
                        <QuestionBox q={question} options={answers} keys={questionId} selected={answer => this.computeAnswer(answer,correct)}/>
                        
                        )}

                        {/* {this.state.responses === 5 ? (<h2>{this.state.score}</h2>) : null} */}

                        {this.state.responses ===5 ? (<Result score={this.state.score} playAgain={this.playAgain} />) : null }
                
            </div>
        );
    }
}

ReactDom.render(<QuizBee/>,document.getElementById("root"));