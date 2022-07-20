var query,count,prequery,msgIdin,msgIdot,IcMsgId,OcMsgId,HtmlAdIn,HtmlAdOt,outputmessage;
var n=[];//store positon of spaces
var ncount;//keeps track of how many words are detected;
var nwod;//keeps track of how words are in string
var m=[];
var l=[];
var meaning,ncy,gstwrD=0,prequery,b=0,wCount=0,i=0;
count =0;
ncy=[];//store discreted wods as strings
prequery = [];//stores previouslyentered query
var htmlAdPr='<div  class="insMsgBx"><span id="';
var htmlAdPo='"  class="histMsg"></span></div>';
var outHtmlAdPr='<div class="oTsMsgBx"><span id="';
var ha='#';
var turn,wcCount=0;
var scountq=0,scountq2=1;
var lcount=1;
function submit(){
  addNwMsgIn();
  strInVal();
  quryValAddIn();
  count++;
  msgIdin='nMsg0' + count;
  clearMsg();
    msgIdot='nMsg1' + count;
    addNwMsgOt();
    quryValAddOt();
    spaceDetect();
    getStringWord();

    if(query=="hi"){
        quryValAddOt("hello");
    }
    if(query=="hello"){
        quryValAddOt("howdy");
        addNwMsgOt();
        quryValAddOt("my name is bee"); 
    }
    if(query=="what is your name"){
        quryValAddOt("my name is bee"); 
    }
    if(query=="what can you do for me"||query=="what you do"){
        quryValAddOt("I can do many different things like talikng with you and playing music etc");  
    }
    if(query=="play"||query=="play music"||query=="music"){
        audio_play();
        quryValAddOt("playing music"); 
    }
    if(query=="pause"||query=="pause music"||query=="music pause"){
        audio_pause();
        quryValAddOt("pausing music"); 
    }    
    if(query=="list of songs"){

    }
    if(query=="date"){
        const a=date();
        quryValAddOt(a);
    }
    if(query=="fuck you"){
        quryValAddOt("i am an machine i can only fuck you via cord");
    }
    if(query=="goodmorning"||query=="good morning"){
        quryValAddOt("morning");
    }

    if(query=="what are you"||query=="who are you"||query=="you are?"){
        quryValAddOt("I am a chatbot");
    }

    if(query=="can you answer any question"||query=="answer my question"||query=="answer question"){
    quryValAddOt("I will try my best");
        }
    if(query=="play dualipa"){
    document.querySelector("#music_player_Bx > audio").src='project_files/media/audio/y2mate.com - Dua Lipa  Break My Heart Official Video.mp3';
    quryValAddOt("playing dualipa");
        }
        if(query=="play milli"){
            window.open("https://www.youtube.com/results?search_query=milli");}
    if(query=="who created you"){
        quryValAddOt("abhinav and abhishek");
    }
        if(query=="open google"){
            window.open('https://www.google.com/');
        }
        if(query=="open youtube"){
            window.open('https://www.youtube.com/');
        }
        if(query=="open facebook"){
            window.open('https://www.facebook.com/');
        }

    
}

function addNwMsgOt(){
    HtmlAdOt=outHtmlAdPr+msgIdot+htmlAdPo;
    document.querySelector("div#messagearea").insertAdjacentHTML("afterbegin",HtmlAdOt);//add new message html code output
}
function addNwMsgIn(){
    HtmlAdIn=htmlAdPr+msgIdin+htmlAdPo;
    document.querySelector("div#messagearea").insertAdjacentHTML("afterbegin",HtmlAdIn);//add new message html code input
}
function strInVal(){
    query=document.querySelector("#input").value;//storing value of input
}
function quryValAddIn(){
    IcMsgId=ha+msgIdin;
    document.querySelector(IcMsgId).innerText=query;//select added message and add string to it
}
function quryValAddOt(outputmessage){
    OcMsgId=ha+msgIdot;
    document.querySelector(OcMsgId).innerText=outputmessage;//query answer output
}
function clearMsg(){
    document.querySelector("#input").value="";// clear input message
}
function audio_play()
{
    document.querySelector("#music_player_Bx > audio").play();
}

function audio_pause()
{
    document.querySelector("#music_player_Bx > audio").pause()
}
function spaceDetect(){
    firstSpace();
}
function firstSpace(){
     ncount=0;
for(var i=0;i<=query.length;i++){//runs loop until it detect space for first space
    if(query[i]==" "){
        n[ncount]=i;
        sSpaces();//call function to detect further spaces
        break;
    }
}

 }
function sSpaces(){//function to detect further spaces
     for(var l=n[ncount]+1;l<=query.length;l++){
         if(query[l]==" "){
             ncount+=1;
             n[ncount]=l;
             sSpaces();
             break;
         }
     }
 }
function getWordString(){// to get middle string
    m=[]; //to empty array
    wCount+=1;
    for(var j=0, i=n[scountq]+1;i<n[wCount];j++,i++){
        m[j]=query[i];
    }
    scountq+=1;
    l[lcount]=m
    lcount++;
}
function firstWord(){// to get first word
m=[];//to empty array
    for(var j=0;j<=query.length;){
    if(query[j]!=' '){
          m[j]=query[j];
        j++;
    }
    else break;
}
l[0]=m;
noFwod();
}

function noFwod(){//function to detedt how many words are in string
if(n.length<=1){
    if(n.length==1){
        nwod=2;
    }else{nwod=1;}
}else{
    nwod=n.length+1;}
}
function lastword(){
     b=n[wCount-1]
    for(a=0;a<=query.length;a++){
        m[a]=query[b];
        b++;
        if(b>=query.length){
            break;
        }
    }
 }
 function middleWord(){
     for(var l=0;l<=nwod-2;l++){
         getWordString();
     }
 }

 function getStringWord(){
     firstWord();
     middleWord();
     lastword();
     for( var v=0;v<nwod;v++){
        ncy[v]=l[v].join("");
    }
    m=[];
    prequery[gstwrD]=ncy;
    gstwrD++;
    understandQuery();
 }
 
function understandQuery(){
    if(ncy[0]=="why"||"what"){
console.log("question");
    }
    else{
        console.log("command");
    }
}
