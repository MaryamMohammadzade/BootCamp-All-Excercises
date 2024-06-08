var fetchData= async function(){
    var url= 'https://jsonplaceholder.typicode.com/posts';
    var response= await fetch(url, {method: 'GET'});
    var data = await response.json();
printPosts(data);
}

function printPosts(posts){
    console.log(posts);
    var listItems='';
posts.forEach(post => {
    listItems+=`
     <li>Title-${post.id}
       <ul>
         <li>${post.title}</li>
         <li>${post.body}</li>
       </ul>
     </li>
    `
});
document.getElementById("ol-1").innerHTML=listItems;
console.log(listItems);
}