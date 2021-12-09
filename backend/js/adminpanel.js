function upload(){
    //get your image
    var image = document.getElementById('image').files[0];
    //get your blog title
    var title = document.getElementById('title').value;
    //get your blog text
    var post = document.getElementById('post').value;
    //get your name
    var name = document.getElementById('name').value;
    //get image name
    var imageName = image.name;
    //firebase storage reference
    //it is the path where your image will be stored
    var storageRef=firebase.storage().ref('images/'+imageName);
    //upload image to selected storage reference
    //make sure you pass image here
    var uploadTask=storageRef.put(image);
    //to get the state of image uploading....
    uploadTask.on('state_changed',function(snapshot){
         //get task progress by following code
         var progress=(snapshot.bytesTransferred/snapshot.totalBytes)*100;
         console.log("upload is "+progress+" done");
    },function(error){
      //handle error here
      console.log(error.message);
    },function(){
        //handle successfull upload here..
        uploadTask.snapshot.ref.getDownloadURL().then(function(downloadURL){
           //get your image download url here and upload it to databse
           //our path where data is stored ...push is used so that every post have unique id
           firebase.database().ref('blogs/').push().set({
                tlt: title,
                text:post,
                autor: name,
                imageURL:downloadURL
           },function(error){
               if(error){
                   alert("Erro ao postar!");
               }else{
                   alert("Sucesso ao postar!");
                   //now reset your form
                   document.getElementById('post-form').reset();
                   getdata();
               }
           });
        });
    });

}

window.onload=function(){
    this.getdata();
}


function getdata(){
    firebase.database().ref('blogs/').once('value').then(function(snapshot){
      //get your posts div
      var posts_div=document.getElementById('posts');
      //remove all remaining data in that div
      posts.innerHTML="";
      //get data from firebase
      var data=snapshot.val();
      console.log(data);
      //now pass this data to our posts div
      //we have to pass our data to for loop to get one by one
      //we are passing the key of that post to delete it from database
      for(let[key,value] of Object.entries(data)){
        posts_div.innerHTML="<center><div class='container-blog'>"+
        "<div class='blog-section'>"+
        "<h4 id='blog-title' style='font-weight: 600;'>"+value.tlt+"</h4>"+
        "<img src='"+value.imageURL+"' id='img-post'>"+
        "<p id='blog-text'>"+value.text+"</p>"+
        "<h3 id='blog-autor'>Autor: "+value.autor+"</h3>"+
        "<button class='btn btn-danger' id='"+key+"' onclick='delete_post(this.id)'>Delete</button>"+
        "<hr size='1'>"+
        "</div></div></center>"+posts_div.innerHTML;
      }
    
    });
}

function delete_post(key){
    firebase.database().ref('blogs/'+key).remove();
    getdata();

};
