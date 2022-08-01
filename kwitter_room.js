// Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  var firebaseConfig = {
    apiKey: "AIzaSyA5T4Ewu4NunGx-xcaZDuwWiK7BKgRoazE",
    authDomain: "thing-80c69.firebaseapp.com",
    projectId: "thing-80c69",
    storageBucket: "thing-80c69.appspot.com",
    messagingSenderId: "142239757817",
    appId: "1:142239757817:web:2cd725e77201e15c233928",
    measurementId: "G-WY0R5BYT5F"
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
