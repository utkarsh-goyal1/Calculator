const buttons =document.querySelectorAll('button');
const screen=document.querySelector('#screen');
for(let button of buttons)
{
    button.addEventListener('click',(e)=>{
        const buttonText=e.target.innerText;
        if(buttonText==='C')
        {
            screen.value="";
        }
        else if(buttonText==='X')
        {
            screen.value+='*';
        }
        else if(buttonText==='=')
        {
            try{
                screen.value=eval(screen.value);
            }
            catch{
                screen.value="Invalid Operation";
            }
        }
        else
        {
        screen.value+=buttonText;
        }
    })
}