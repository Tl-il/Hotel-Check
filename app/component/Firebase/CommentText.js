const addComment = (userId, commentText) => {
    db.collection("comments").add({
      userId: userId,
      comment: commentText,
      timestamp: firebase.firestore.FieldValue.serverTimestamp()
    })
    .then(() => {
      console.log("Comment added!");
    })
    .catch(error => {
      console.error("Error adding comment: ", error);
    });
  };
  
  // שימוש בפונקציה
  auth.onAuthStateChanged(user => {
    if (user) {
      addComment(user.uid, "This is a test comment.");
    }
  });
  