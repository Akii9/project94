
const firebaseConfig = {
      apiKey: "AIzaSyAjo18ZRDoNZkxJlYtGGssMsfSoJ4kIfF4",
      authDomain: "kwitterdatabase-f00b8.firebaseapp.com",
      databaseURL: "https://kwitterdatabase-f00b8-default-rtdb.firebaseio.com",
      projectId: "kwitterdatabase-f00b8",
      storageBucket: "kwitterdatabase-f00b8.appspot.com",
      messagingSenderId: "849199353731",
      appId: "1:849199353731:web:fe056462b1f805682eb0b6"
    };
    
    // Initialize Firebase
    const app = initializeApp(firebaseConfig);
    user_name=localStorage.getItem("user_name");
    room_name=localStorage.getItem("room_name");
    document.getElementById("user_name").innerHTML = "Welcome " + user_name + "!"; function addRoom() { room_name = document.getElementById("room_name").value; firebase.database().ref("/").child(room_name).update({ purpose : "adding room name" }); localStorage.setItem("room_name", room_name); window.location = "kwitter_page.html"; }
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();
