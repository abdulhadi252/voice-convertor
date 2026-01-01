let speech= new SpeechSynthesisUtterance();

let voices=[];

let voiceSelect=document.querySelector("select");

document.querySelector("button").addEventListener("click",()=>{ 
    speech.text=document.querySelector("textarea").value;
    window.speechSynthesis.speak (speech);
});
    // window aik predefined object hai us kay anda aik predefined method speechSynthesis hain aur speak aik function hai speak karo kis ko jo hum nay speech variable let kia hai us ko ;

    window.speechSynthesis.onvoiceschanged = ()=>{
        voices=window.speechSynthesis.getVoices();
    

    // ab main chahta hun kay select kay andar saray option aayay dynamically ab main us ko keh raha hun kay bhai window kay andar aik dynamically method hai speechsynthesis us kay andar functin hai onvoies changed jo voice ko change karay ga aur function call karo kay jo voices variable hai na us ky andar dynamically voices aa jayay jo speechsynthesis kay function getvoices main store hain voh sab aajayay

    speech.voice=voices[0]
    // ab hum kia karain kay by default aik voice select karain konsa 1st number voice js ka index hai zero bydefsult pehla wala voice set ho jayay //

    voices.forEach((voice,i)=>(voiceSelect.options[i]=new Option(voice.name,i)))
    };
    // voice ab main aik for each ka loop chalaunga kay bhai voices say loop chalao kiu jo option hain woh dikhanay bhi hain aur aik loop chalao kay voice ka index i say matlab kay us ka index koi bhi ho sakta hai 012345 kuch bhi toh us kay baad function chalao kay voice select kara aur us ko option bana do aur phir aik new option ka use kar kay voice ka name day do aur us ka index//

    voiceSelect.addEventListener("change",()=>{
        speech.voice=voices[voiceSelect.value];
});
        // AB YAHAN JAB VOICE SELECT KARAIN TOH VOH CHANGE HO JAYAY KONSA JIS VOICE PAR CLICK KARAIN WOH CHANGE HO JAYAY AUR SpeechRecognitionAlternative.VOICE KAY ANDAR JO VOICES KA BLANK ARRAY HAI US KAY ANDAR AA JAYAY
