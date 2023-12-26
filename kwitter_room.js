var firebaseConfig = {
      apiKey: "AIzaSyBK3PetaLMIq7mne3Ur0MhIf0NL-owyil8",
      authDomain: "kwitter-test-a4dfe.firebaseapp.com",
      databaseURL: "https://kwitter-test-a4dfe-default-rtdb.firebaseio.com",
      projectId: "kwitter-test-a4dfe",
      storageBucket: "kwitter-test-a4dfe.appspot.com",
      messagingSenderId: "111818505968",
      appId: "1:111818505968:web:6f62b28e18aeb3e50ecc35"
    };
    
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
//ADD YOUR FIREBASE LINKS HERE

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      console.log("Room Name - " + Room_names);
      row = "<div class='room_name' id=" + Room_names+" onclick='redirectToRoomName(this.id)' >#" + Room_names + "</div><hr>";
      document.getElementById("output").innerHTML += row;
      //End code
      });});}
getData();

function addRoom()
{
      room_name = document.getElementById("room_name").value;

      firebase.database().ref("/").child(room_name).update({
            purpose: "adding room name"
      })

      localStorage.setItem("room_name", room_name);

      window.location = "kwitter_page.html";
}

function redirectToRoomName(name)
{
      console.log(name);
      localStorage,setItem("room_name", name);
      window.location = "kwitter_page.html";
}