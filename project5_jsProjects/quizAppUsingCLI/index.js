let readlineSync = new require("readline-sync");
let score = 0 ;
let userName = readlineSync.question("enter your name : ");
let kuler = new require("kuler");
console.log(kuler(`Hello ${userName}, Welcome to Quiz\n`,"#0ea5e9"));

const database = {
    data : [
        {
            question : `let a={}, b={}
console.log(a==b)
console.log(a===b)`,
            options:{
                a:"false false",
                b:"true false",
                c:"false true",
                d:"true true"
            },
            correctOption:"a"
        },
        {
            question:`Object.assign(target, source)
creates which type of  copy`,
            options:{
                a:"shallow"
                ,b:"deepCopy",
                c:"None of Above",
                d:"All of Above"
            },
            correctOption:"a",
        },
        {
            question:`when arrow function is used in object, 
this keyword in arrow function refers to :`,
            options:{
                a:"window object",
                b:"function present object",
                c:"none of above",
                d:"all of above"
            }
            ,correctOption:"a"
        },
        {
            question:`when function is placed in object, 
this keyword in function refers to :`,
            options:{
                a:"window object",
                b:"object which holds the function",
                c:"none of above",
                d:"all of above"
            }
            ,correctOption:"a"
        },
        {
            question:`which of the following keyword has functional scope:`,
            options:{
                a:"let",
                b:"var",
                c:"const",
                d:"all of above"
            }
            ,correctOption:"b"
        }
    ]
}

let leaderBoard ={
    data : [
        {name : "john",
        score : 5 ,
    },
    {
        name:"cena",
        score:4
    },
    {
        name:"reena",
        score:3
    },
    {
        name:"teena",
        score:0
    },
    {
        name:"rona",
        score:2
    }
    ]
}




function playGame(userAnswer, correctAnswer)
{

    if(userAnswer === correctAnswer)
    {
        console.log(kuler("correct answer", "#16a34a"));
        score+=1;
    }
    else{
        console.log(kuler("incorrect answer","#dc2626"));
        console.log(`Correct answer is : ${correctAnswer}`);
    }
}

function showQuestionAndOptions(database)
{
    for(let i = 0 ; i< database.data.length ; i++)
    {
        console.log(`Q${i+1} - ${database.data[i].question}\n`);
        for(let key in database.data[i].options)
        {
            console.log(`${key} - ${database.data[i].options[key]}`);
        }
        let userAnswer = readlineSync.question("enter your option : ");
        userAnswer.toLowerCase();
        playGame(userAnswer,database.data[i].correctOption);
        console.log(`\n`);
    }
}

function highScorer(leaderBoard)
{
    leaderBoard.data.push({name:userName , score:score});
    let sortedScoreList = leaderBoard.data.sort((a,b)=>b.score - a.score);
    console.log(kuler("ScoreBoard 🎉🎉🎉: --","#fbbf24"))
    for(let leader of sortedScoreList)
    {
        console.log(kuler(`${leader.name} - ${leader.score}`,"#6366f1"));
    }
}


showQuestionAndOptions(database);
highScorer(leaderBoard);
console.log(kuler(`your score is : ${score}`,"#06b6d4"));














