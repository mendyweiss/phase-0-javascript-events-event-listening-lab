function addingEventListener() {
    const input = document.getElementById('input');
    input.style.background = 'red';
    input.addEventListener('onclick', alert('This is fun!'));
    ;
}
addingEventListener();



/*const input = document.getElementById('input');
input.addEventListener('click', function() {
    alert('I was clicked!');
})*/

