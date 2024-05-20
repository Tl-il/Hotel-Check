const createPost = (userId, postTitle, postContent,postRating) => {
    db.collection("posts").add({
      userId: userId,
      title: postTitle,
      content: postContent,
      rating:postRating,
      timestamp: firebase.firestore.FieldValue.serverTimestamp()
    })
    .then(() => {
      console.log("Post created!");
    })
    .catch(error => {
      console.error("Error creating post: ", error);
    });
  };
  
  // שימוש בפונקציה
  auth.onAuthStateChanged(user => {
    if (user) {
      createPost(user.uid, "My First Post", "This is the content of the post.");
    }
  });
  