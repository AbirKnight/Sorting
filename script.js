let Questions=[
    {
        que:"Which of the following is not a stable sorting algorithm?",
        opt1:"Insertion sort",
        opt2:"Selection sort",
        opt3:"Bubble sort",
        opt4:"Merge sort",
        crt:"b"
    },
    {
        que:"Running merge sort on an array of size n which is already sorted is",
        opt1:"O(n)",
        opt2:" O(nlogn)",
        opt3:"O(n2)",
        opt4:"None",
        crt:"b"
    },
    {
        que:"If the given input array is sorted or nearly sorted, which of the following algorithm gives the best performance?",
        opt1:"Insertion sort",
        opt2:"Quick sort",
        opt3:"Selection sort",
        opt4:"Merge sort",
        crt:"a"
    },
    {
        que:"Time complexity of bubble sort in best case is",
        opt1:"θ (n)",
        opt2:"θ (nlogn)",
        opt3:"θ (n(logn) 2)",
        opt4:"θ (n2)",
        crt:"a"
    },
    {
        que:"Which of the following sorting algorithm has the running time that is least dependant on the initial ordering of the input?",
        opt1:"Insertion sort",
        opt2:"Quick sort",
        opt3:"Merge sort",
        opt4:"Selection sort",
        crt:"d"
    }

]
let total =Questions.length
let idof=null;
options=document.querySelectorAll(".optinput")
const id =()=>
{
    options.forEach(
        (input)=>{if(input.value===Questions[index].crt)
            {
                idof =input.id
            }
        }
    )
    return idof;
}
console.log(typeof options)
console.log(options)
let index=0;
let score=0;
const remove_checked=()=>
{
    options.forEach(
        (input)=>
        {
            input.checked=false;
        }
    )
}

const LoadQuestion=()=>
{
    if(index===total)
    {
        endquiz();
    }
    document.getElementById("score").innerHTML=`<h3>Your Score :${score}</h3>`
    remove_checked();
    document.getElementById("ques").innerText=Questions[index].que
    document.getElementById("option-1").nextElementSibling.innerText=Questions[index].opt1
    document.getElementById("option-2").nextElementSibling.innerText=Questions[index].opt2
    document.getElementById("option-3").nextElementSibling.innerText=Questions[index].opt3
    document.getElementById("option-4").nextElementSibling.innerText=Questions[index].opt4
    
}
LoadQuestion()
const SubmitQuiz=()=>
{
    const ansch=getans();
    console.log(ansch,Questions[index].crt)
    if (ansch === Questions[index].crt)
    {
        score++;
        
    }
    index++;
    
    LoadQuestion();
}
const endquiz=()=>
{
    document.getElementById("idmain").innerHTML=``
}

