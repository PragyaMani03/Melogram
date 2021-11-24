const database = firebase.database();
const usersRef = database.ref('/users');
const normalUsersRef = usersRef.child('normal_users');
const superUsersRef = usersRef.child('super_users');

addBtn.addEventListener('click', e => {
  e.preventDefault();
  usersRef.child(userId.value).set({
    email: email.value,
    first_name: firstName.value,
    last_name: lastName.value,
    user_name: userName.value,
    password: password.value,
    room_id: roomId.value
  });
});

updateBtn.addEventListener('click', e => {
    e.preventDefault();
    const newData = {
        email: email.value,
        first_name: firstName.value,
    last_name: lastName.value,
    user_name: userName.value,
    password: password.value,
    room_id: roomId.value
    };
    usersRef.child(userId.value).update(newData);
  });

usersRef.on('child_added', snapshot => {
    console.log('Child added !');
});
usersRef.on('child_changed', snapshot => {
    console.log('Child updated !');
});
usersRef.on('value', snapshot => {
    console.log('An event occured !');
});
usersRef.on('child_added', snapshot => {
    console.log(snapshot.val());
});

document.getElementById("addBtn").onclick = function(){
    location.href = "homepage.html";
    // document.getElementById("user").innerHTML = snapshot.val()[5];
}

document.getElementById("updateBtn").onclick = function(){
    location.href = "homepage.html";
    // document.getElementById("user").innerHTML = snapshot.val()[5];
}

