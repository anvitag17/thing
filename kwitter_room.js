// Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  var firebaseConfig = {
    apiKey: "AIzaSyDq9b8KDw7fZZWfTavlFojUQcOAka15eL8",
    authDomain: "social-app-afbc8.firebaseapp.com",
    databaseURL: "https://social-app-afbc8-default-rtdb.firebaseio.com",
    projectId: "social-app-afbc8",
    storageBucket: "social-app-afbc8.appspot.com",
    messagingSenderId: "229887609752",
    appId: "1:229887609752:web:fa23d2be954041a94c39ed",
    measurementId: "G-Y2ERH4FYE0"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);


user_name = localStorage.getItem("user_name");
document.getElementById("user_name").innerHTML =  "Welcome, " + user_name;

function getData() {
    firebase.database().ref("/").on('value', function(snapshot) {
    document.getElementById("output").innerHTML = "";
        snapshot.forEach(function(childSnapshot) {
        childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
            console.log("Room Name - " + Room_names);
            row= "<div class='room_name' id="+Room_names+" onclick= 'redirectToRoomName(this.id)'>#" + Room_names+"</div><hr>";
            document.getElementById("output").innerHTML+= row;
      //End code
      });});}
getData();

function addRoom(){
    room_name = document.getElementById("room_name").value;
    firebase.database().ref("/").child(room_name).update({
        purpose: "adding room name"
    })
    localStorage.setItem("room_name", room_name);
    window.location = "kwitter_page.html";
}

function redirectToRoomName(name){
    console.log(name);
    localStorage.setItem("room_name", name);
    window.location = "kwitter_page.html"
}

function logout(){
    localStorage.removeItem("user_name");
    localStorage.removeItem("room_name");
    window.location = "kwitter.html";
}