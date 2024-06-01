var result='Your input does not contain duplicate characters!';
var input=document.querySelector("#myInput");

input.addEventListener("keypress", function(e){
    if(e.key=='Enter'&& input.value.trim() !== ''){
        var text = e.target.value;
    for(let i=0; i< text.length; i++){
        for(let j=i+1; j< text.length; j++){
            if(text[i]==text[j]){
                result='Your input contains duplicate characters!';
            }
        }
    }
    console.log(result);
    alert(result);
    result='Your input does not contain duplicate characters!';
    }
    
})
