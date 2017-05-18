import './index.css';

import {getUsers} from './api/userApi';

getUsers().then(result => {
    let usersBody = "";

    result.forEach(user => {
        usersBody+= `<li>${user.firstName}</li>`
    });

    // const deleteLinks = global.document.getElementByClassName('deleteUser');

    // Array.from(deleteLinks, link => {
    //     link.onclick = function(event){
    //         const element = event.target;
    //         event.preventDefualt();
    //         deleteUser(element.attributes["data-id"].value);
    //         const row = element.parentNode.parentNode;
    //         row.parentNode.removeChile(row);

    //     }
    // });
        global.document.getElementById('users').innerHTML = usersBody;

});
