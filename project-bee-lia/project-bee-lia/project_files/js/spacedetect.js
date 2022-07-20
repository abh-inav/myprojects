var query="what is your name ";
var n=[];
var ncount;//to count no of spaces
 function firstSpace(){
     ncount=0;
for(var i=0;i<=query.length;i++){//runs loop until it detect space for first space
    if(query[i]==" "){
        n[ncount]=i;
        sSpaces();
        break;
    }
}
 }
function sSpaces(){
     for(var l=n[ncount]+1;l<=query.length;l++){
         if(query[l]==" "){
             ncount+=1;
             n[ncount]=l;
             sSpaces();
             break;
         }
     }
 }