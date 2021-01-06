import '../scss/main.scss';

// uncomment the lines below to enable PWA
// import {registerSW} from './pwa.js';
// registerSW();

/* place your code below */

console.log('HELLO 🚀');

document.cookie='name = gabi'



const project ={
    name: 'Simple Editor',
    include: 'textarea and buttons',
    createTo: 'save changes'

}
console.log(project);

const box = 'open !'
console.log(`${box}`);

let isDark = false;

const switchModes = document.querySelector('.backgroundColor');
switchModes.addEventListener('click',() => {
    if(isDark){
        document.documentElement.style.setProperty('--background-color', 'rgb(181, 131, 141)')
        isDark=false;
    }
    else{
        document.documentElement.style.setProperty('--background-color', 'rgb(109, 104, 117)')
        isDark=true;
    }
});  
//     localStorage.setItem('entry',entryTextarea.value);
// });
