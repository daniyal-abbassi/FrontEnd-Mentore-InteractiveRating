const submitBtn=document.getElementById('submit-btn');
const container = document.querySelector('.container');
const rateDivs = document.querySelectorAll('.rate');

const rateNumbersColor = 'hsl(217, 12%, 63%)';
const rateHoverColor = 'hsl(213, 19%, 8%)';
const rateBackgroundHoverColor = 'hsl(25, 97%, 53%)';

let isClicked = null;

rateDivs.forEach((div)=>{
    div.addEventListener('click',()=>{
        if (isClicked) {
            isClicked.style.backgroundColor = rateHoverColor;
        }
        div.style.backgroundColor='white';
        isClicked=div;
    })
    div.addEventListener('mouseover',()=>{
        if (div!==isClicked) {
            div.style.backgroundColor=rateBackgroundHoverColor;
        };
    div.addEventListener('mouseout',()=>{
        if (div!==isClicked) {
            div.style.backgroundColor=rateHoverColor;
        }
    })
        
    })
    
});
const containerTwo=document.querySelector('.container-two');
const rateNumber=document.getElementById('rate-number');
submitBtn.addEventListener('click',()=>{
    if (isClicked===null) {
        alert('You must select a rating')
        return;
    } else {
        const rating = isClicked.textContent;
        console.log('rating: ',rating)
        rateNumber.innerText=rating;
        console.log('rateNumber: ',rateNumber);
        container.style.display='none';
        containerTwo.style.display='block';
        containerTwo.style.display = 'block';
    }


})


        

console.log('hi')