var app = document.getElementById('typing');

var typewriter = new Typewriter(app, {
    loop: true
});

typewriter.typeString('Making online proctoring')
.pauseFor(700)
.deleteChars(25)
.typeString("प्रश्नोत्तर परीक्षा")
.pauseFor(700)
.deleteChars(25)
.typeString("অনলাইনে পরীক্ষা")
.deleteAll()
.start();