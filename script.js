let comments = [];
let u =  document.getElementById('myusr');

const addcomment = (ev)=>{
    if(u.value == "hacker"){
        window.alert("Username/handle Not accepted!");
        document.getElementById('display').innerHTML='';
    }
        ev.preventDefault();
    let comment = {
        id: Date.now(),
        Username: document.getElementById('myusr').value,
        Comment: document.getElementById('usrcomment').value
    }
    comments.push(comment);
    document.forms[0].reset();

    console.warn('added' , {comments} );
    let pre = document.querySelector('#msg pre');
    pre.textContent = '\n' + JSON.stringify(comments, '\t', 2);

    //saving to localStorage
    localStorage.setItem('Allcomments', JSON.stringify(comments) );
}
document.addEventListener('DOMContentLoaded', ()=>{
    document.getElementById('btn').addEventListener('click', addcomment);
});