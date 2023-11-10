// Echo.join("users-list")
//     .here((users) => {
//         var data;
//         for (let index = 0; index < users.length; index++) {
//             if (users[index].id !== sender_id) {
//                 if (!$("#user-list" + users[index].id).length) {
//                     data = `
//                             <li id="user-list${users[index].id}" class="user-list" data-id='${users[index].id}' >
//                                 <div class="pr-1">
//                                     <span class="avatar m-0 avatar-md"><img class="media-object rounded-circle"
//                                             src="../../../app-assets/images/portrait/small/avatar-s-3.jpg" height="42" width="42"
//                                             alt="Generic placeholder image">
//                                         <i></i>
//                                     </span>
//                                 </div>
//                                 <div class="user-chat-info">
//                                     <div class="contact-info">
//                                         <h5 class="font-weight-bold mb-0">${users[index].name}</h5>
//                                         <p class="truncate">Cake pie jelly jelly beans. Marzipan lemon drops halvah cake. Pudding cookie lemon drops
//                                             icing</p>
//                                     </div>
//                                     <div class="contact-meta">
//                                         <span class="float-right mb-25">4:14 PM</span>
//                                         <span class="badge badge-primary badge-pill float-right">3</span>
//                                     </div>
//                                 </div>
//                             </li>
//                             `;
//                     $(".user-list-div").append(data);
//                 }
//             }
//         }
//     })
//     .joining((user) => {
//         var data;
//         if (!$("#user-list" + user.id).length) {
//             if (user.id !== sender_id) {
//                 data = `
//                                 <li id="user-list${user.id}" class="user-list" data-id='${user.id}' >
//                                     <div class="pr-1">
//                                         <span class="avatar m-0 avatar-md"><img class="media-object rounded-circle"
//                                                 src="../../../app-assets/images/portrait/small/avatar-s-3.jpg" height="42" width="42"
//                                                 alt="Generic placeholder image">
//                                             <i></i>
//                                         </span>
//                                     </div>
//                                     <div class="user-chat-info">
//                                         <div class="contact-info">
//                                             <h5 class="font-weight-bold mb-0">${user.name}</h5>
//                                             <p class="truncate">Cake pie jelly jelly beans. Marzipan lemon drops halvah cake. Pudding cookie lemon drops
//                                                 icing</p>
//                                         </div>
//                                         <div class="contact-meta">
//                                             <span class="float-right mb-25">4:14 PM</span>
//                                             <span class="badge badge-primary badge-pill float-right">3</span>
//                                         </div>
//                                     </div>
//                                 </li>
//                                 `;
//                 $(".user-list-div").append(data);
//             }
//             // user-list${users[index].id }
//             // console.log(user);
//         }
//     })
//     .leaving((user) => {
//         // user-list${users[index].id }
//         $("#user-list" + user.id).remove();
//         console.log(user.name + "Leave");
//     })
//     .listen("UsersList", (users) => {
//         // console.log(users);
//     });

function chatUser(users) {
    var data;

    for (let index = 0; index < users.length; index++) {
        if (users[index].id !== sender_id) {
            if (!$("#user-list" + users[index].id).length) {
                data = `
                            <li id="user-list${users[index].id}" class="user-list " data-id='${users[index].id}' >
                                <div class="pr-1">
                                    <span class="avatar m-0 avatar-md"><img class="media-object rounded-circle"
                                            src="../../../app-assets/images/portrait/small/avatar-s-3.jpg" height="42" width="42"
                                            alt="Generic placeholder image">
                                        <i></i>
                                    </span>
                                </div>
                                <div class="user-chat-info">
                                    <div class="contact-info">
                                        <h5 class="font-weight-bold mb-0">${users[index].name}</h5>
                                        <p class="truncate">Cake pie jelly jelly beans. Marzipan lemon drops halvah cake. Pudding cookie lemon drops
                                            icing</p>
                                    </div>
                                    <div class="contact-meta">
                                        <span class="float-right mb-25">4:14 PM</span>
                                        <span class="badge badge-primary badge-pill float-right">3</span>
                                    </div>
                                </div>
                            </li>
                            `;
                $(".user-list-div").append(data);
            }
        }
    }
}

function joinUser(user) {
    var data;
    if (!$("#user-list" + user.id).length) {
        if (user.id !== sender_id) {
            data = `
                                <li id="user-list${user.id}" class="user-list" data-id='${user.id}' >
                                    <div class="pr-1">
                                        <span class="avatar m-0 avatar-md"><img class="media-object rounded-circle"
                                                src="../../../app-assets/images/portrait/small/avatar-s-3.jpg" height="42" width="42"
                                                alt="Generic placeholder image">
                                            <i></i>
                                        </span>
                                    </div>
                                    <div class="user-chat-info">
                                        <div class="contact-info">
                                            <h5 class="font-weight-bold mb-0">${user.name}</h5>
                                            <p class="truncate">Cake pie jelly jelly beans. Marzipan lemon drops halvah cake. Pudding cookie lemon drops
                                                icing</p>
                                        </div>
                                        <div class="contact-meta">
                                            <span class="float-right mb-25">4:14 PM</span>
                                            <span class="badge badge-primary badge-pill float-right">3</span>
                                        </div>
                                    </div>
                                </li>
                                `;
            $(".user-list-div").append(data);
        }
        // user-list${users[index].id }
        // console.log(user);
    }
}

function leaveUser(user) {
    $("#user-list" + user.id).remove();
}


