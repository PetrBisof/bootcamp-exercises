const div = document.querySelector('#odstavec');
/* const pic= document.querySelector('#padlock'); */

const showMessage = () => {
       odstavec.className = 'hidden';
       /* console.log(sdfsdf); */
    }

/* myBtn.addEventListener('click', changeClass); */


document.addEventListener('DOMContentLoaded', () => {
    const pic= document.querySelector('#padlock');
    pic.addEventListener('mouseenter', showMessage);
});   