
		const firebaseConfig = {
            apiKey: "AIzaSyDQB2apQDnZea8vymX-ZZANR-h4WYmiUuE",
            authDomain: "resume1-c4a3b.firebaseapp.com",
            projectId: "resume1-c4a3b",
            storageBucket: "resume1-c4a3b.appspot.com",
            messagingSenderId: "807151058550",
            appId: "1:807151058550:web:6b5db6a5357fd20e7f6957",
            measurementId: "G-F6SX18F4BG"
          };
        
          // Initialize Firebase
          const app = initializeApp(firebaseConfig);
          const analytics = getAnalytics(app);


let contactInfo = firebase.database().ref("reviews");


document.getElementById("contactform").addEventListener('submit',submitform);
function submitform(e){
    e.preventDefault();
    console.log(123);
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var mobile = document.getElementById("mobile").value;
    var msg = document.getElementById("msg").value;

    console.log(name,email,mobile,msg)
    
    let contactInfo = contactInfo.push();
    newContactInfo.set({
        name: name,
        email: email,
        mobile: mobile,
        msg: msg,
    })

}