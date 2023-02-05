

const curs=document.querySelector(".cursor");

var timeout;

document.addEventListener("mousemove", (e) => {
    let x=e.pageX;
    let y=e.pageY;

    curs.style.top=y + "px";
    curs.style.left=x + "px";
    curs.style.display="block";

    function mouseStopped(){
        curs.style.display="none";
    }

    clearTimeout(timeout);
    timeout = setTimeout(mouseStopped,3000);
})




const hello=document.querySelectorAll(".press");

for(let i=0;i<hello.length;i++)
{
        hello[i].addEventListener("click",perform)
}

function perform()
{
    var ch=this.textContent;
    const display1=document.getElementById("small-display");
    const display2=document.getElementById("big-display");
    if(display2.textContent=="MATH ERROR")
        display2.textContent=0;
    var operand1=0;
    var operand2=0;
    var operator;
    switch(ch)
    {
        case 'AC' : display1.textContent="";
                    display2.textContent="0";
                    break;

        case 'DEL': display2.textContent=display2.textContent.substring(0,display2.textContent.length - 1);
                    if(display2.textContent.length == 0)
                    display2.textContent=0;
                    break;
        case '1':
        case '2':
        case '3':
        case '4':
        case '5':
        case '6':
        case '7':
        case '8':
        case '9':
        case '0':   if(display2.textContent=="0")
                    display2.textContent=ch;
                    else
                    display2.textContent=display2.textContent+ch;
                    break;
        case '.':   if(display2.textContent.indexOf('.')==-1)
                    display2.textContent=display2.textContent+ch;
                    break;

        case '+':   
        case '-':
        case '*':
        case '÷':   if(display1.textContent!='')
                    display1.textContent=display1.textContent.substring(0,display1.textContent.length - 1) + ch;
                    else if(display2.textContent=="0")
                    {
                        break;
                    }
                    else {
                        display1.textContent=display2.textContent + " " +ch;
                        display2.textContent='0';
                    }
                    break;

        case '=' : if(display1.textContent!='')
                   {
                        operand1=parseFloat(display1.textContent.substring(0,display1.textContent.length - 2));                 
                        operator=display1.textContent[display1.textContent.length -1];
                        operand2=parseFloat(display2.textContent);
                    
                    if(operator =='+')
                        display2.textContent = operand1 + operand2;
                    else if(operator =='-')
                        display2.textContent = operand1 - operand2;
                        
                    else if(operator =='*')
                        display2.textContent = operand1 * operand2;

                    else if(operator == '÷')
                        {
                            if(operand2 == '0')
                                display2.textContent="MATH ERROR";
                            else
                                display2.textContent = operand1 / operand2;
                        }
                    }
                    display1.textContent='';
                    break;
    }
}