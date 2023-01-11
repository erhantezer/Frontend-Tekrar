import { 
    getDatabase, 
    ref, 
    set, 
    onValue, 
    // child, 
    // push, 
    // update  
} from "firebase/database";
import { initializeApp } from "firebase/app";
import { useEffect, useState } from "react";

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

export const writeUserData = (info) => {
  const db = getDatabase(app);
  set(ref(db, 'users/'), {
    username: info.username,
    phoneNumber: info.phoneNumber,
    gender : info.gender
  });
}


//! Read data
//! costom hook içinde state tanımlayabilirsin o yüzden use ile başlayan fonk. adı bulduk
// export const useFetch = () => {
//     const [isLoading, setIsLoading] = useState(true);
//     const [contactList,setContactList]= useState();

//     useEffect(() => {
//         const db = getDatabase(app);
//         const starCountRef = ref(db, 'users/');
//         onValue(starCountRef, (snapshot) => {
//         const data = snapshot.val();
//         const userArray=[];

//         for(let id in data) {
//             userArray.push({id, ...data[id]})
//         }
//         setContactList(userArray)
//         setIsLoading(false)
//     });
//     }, []);

//     return {isLoading, contactList}

// }
export const useFetch=()=>{
    const [isLoading,setIsLoading]=useState(true);
    const [contactList,setContactList]= useState();

    useEffect(() => {
        const db=getDatabase(app)
        const userRef=ref(db,"users/")

        onValue(userRef,(snapshot)=>{
            const data = snapshot.val();
            const userArray=[]

            for(let id in data){
                userArray.push({id,...data[id]})
            }
            setContactList(userArray)
            setIsLoading(false)
        })
       
    },[])
    return {isLoading,contactList}

}



//! Update

// function writeNewPost(uid, username, picture, title, body) {
//   const db = getDatabase();

//   // A post entry.
//   const postData = {
//     author: username,
//     uid: uid,
//     body: body,
//     title: title,
//     starCount: 0,
//     authorPic: picture
//   };

//   // Get a key for a new Post.
//   const newPostKey = push(child(ref(db), 'posts')).key;

//   // Write the new post's data simultaneously in the posts list and the user's post list.
//   const updates = {};
//   updates['/posts/' + newPostKey] = postData;
//   updates['/user-posts/' + uid + '/' + newPostKey] = postData;

//   return update(ref(db), updates);
// }