import { getDatabase, ref, set, onValue, child, push, update  } from "firebase/database";
import { initializeApp } from "firebase/app";

// TODO: Add SDKs for Firebase products that you want to use

const firebaseConfig = {
  apiKey: "AIzaSyAxSAx2KOtN-rbI7LTNqgEEsjh40dVQEvQ",
  authDomain: "fire-contact-81880.firebaseapp.com",
  databaseURL: "https://fire-contact-81880-default-rtdb.firebaseio.com",
  projectId: "fire-contact-81880",
  storageBucket: "fire-contact-81880.appspot.com",
  messagingSenderId: "701398004557",
  appId: "1:701398004557:web:92dc692f3e83863be7fd04"
};


const app = initializeApp(firebaseConfig);



//! Write data

function writeUserData(userId, name, email, imageUrl) {
  const db = getDatabase();
  set(ref(db, 'users/' + userId), {
    username: name,
    email: email,
    profile_picture : imageUrl
  });
}


//! Read data

const db = getDatabase();
const starCountRef = ref(db, 'posts/' + postId + '/starCount');
onValue(starCountRef, (snapshot) => {
  const data = snapshot.val();
  updateStarCount(postElement, data);
});




//! Update

function writeNewPost(uid, username, picture, title, body) {
  const db = getDatabase();

  // A post entry.
  const postData = {
    author: username,
    uid: uid,
    body: body,
    title: title,
    starCount: 0,
    authorPic: picture
  };

  // Get a key for a new Post.
  const newPostKey = push(child(ref(db), 'posts')).key;

  // Write the new post's data simultaneously in the posts list and the user's post list.
  const updates = {};
  updates['/posts/' + newPostKey] = postData;
  updates['/user-posts/' + uid + '/' + newPostKey] = postData;

  return update(ref(db), updates);
}