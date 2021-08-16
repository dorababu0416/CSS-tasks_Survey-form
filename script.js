//function for star rating
function replace(num){
    for(var i=1;i<=5;i++){
        let nos = "star"+i;
        let image=document.getElementById(nos);
        let att=document.createAttribute("src");
        att.value="star1.png";
        image.removeAttribute("src");
        image.setAttributeNode(att);
    }
    
    for(var i=1;i<=num;i++){
        let nos="star"+i;
        let image=document.getElementById(nos);
        let att=document.createAttribute("src");
        att.value="star3.png";
        image.removeAttribute("src");
        image.setAttributeNode(att);
    }
}