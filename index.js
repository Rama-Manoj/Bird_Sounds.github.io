// Initialize audio context only when needed
let audioContext = null;

function loading()
{
    alert("You Are Entered Into An Birds Web Page")
    confirm('Click On The Bird Names To Get More Information')
}

let currentSound = null;
let timeoutId = null;

function playSound(soundId) {
    try {
        if (currentSound) {
            currentSound.pause();
            currentSound.currentTime = 0;
            clearTimeout(timeoutId);
        }

        const aud = document.getElementById(soundId);
        if (!aud) {
            console.error(`Audio element with id ${soundId} not found`);
            return;
        }

        // Initialize audio context on first play
        if (!audioContext) {
            audioContext = new (window.AudioContext || window.webkitAudioContext)();
        }

        aud.play().catch(error => {
            console.error('Error playing audio:', error);
        });

        currentSound = aud;
        timeoutId = setTimeout(() => {
            aud.pause();
            aud.currentTime = 0;
        }, 9000);
    } catch (error) {
        console.error('Error in playSound:', error);
    }
}

// Initialize click handlers when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    // Add click handler to stop sounds when clicking outside images
    document.addEventListener('click', function(event) {
        const clickedElement = event.target;
        if (!clickedElement.matches('img')) {
            stopSound();
        }
    });
});

function stopSound() {
    if (currentSound) {
        currentSound.pause();
        currentSound.currentTime = 0;
        clearTimeout(timeoutId);
        currentSound = null;
    }
}

// Your other functions remain the same



function indianskimmer() {
    playSound("indianskimmeraud");
}

function forestOwlet() {
    playSound("forestOwletaud");
}

function Spoonbilled() {
    playSound("spoonaud");
}

function bengal() {
    playSound("bengal");
}

function social() {
    playSound("soc");
}

function owl() {
    playSound("owl2");
}

function whiter() {
    playSound("white");
}

function indianpitta() {
    playSound("indpitta");
}

function lesser() {
    playSound("less");
}

function yellowed() {
    playSound("yellow");
}

function nilgiri() {
    playSound("nilg");
}

function waggtile() {
    playSound("wagtt");
}

function sindwood() {
    playSound("sin");
}

function whooppi() {
    playSound("whoo");
}

function kirtler() {
    playSound("kirt");
}

function spotteds() {
    playSound("spot");
}

function redwood() {
    playSound("rcwp");
}

function hcrow() {
    playSound("crw");
}

function pipper() {
    playSound("pip");
}

function marble() {
    playSound("marb");
}

function yellobill() {
    playSound("yelw");
}

function Californi() {
    playSound("cali");
}

function blackcrpd() {
    playSound("bcv")
}

function loggerd() {
    playSound("ldsh")
}

function hawali() {
    playSound("hawa")
}

function ridRail() {
    playSound("rail")
}

function thrush() {
    playSound("thr")
}

function sepernt(){
    playSound("seper")
}

function harrieer(){
    playSound("harri")
}

function kingfish(){
    playSound("kingf")
}

function grebee(){
    playSound("grebe")
}


function fluff(){
    playSound("fluf")
}

function cucko(){
    playSound("cuck")
}

function bpgi(){
    playSound("bpg")
}

function wril(){
    playSound("wrl")
}

function hawkierr(){
    playSound("hawkier")
}

function mowll(){
    playSound("mowl")
}

function mraill(){
    playSound("mrail")
}

function mnightt(){
    playSound("mnight")
}

function prati(){
    playSound("prat")
}


function playBR() {
    playSound("brAudio");
}

function playKK() {
    playSound("kkAudio");
}

function playWB() {
    playSound("wbAudio");
}

function playNIK() {
    playSound("nikAudio");
}

function playNZF() {
    playSound("nzfAudio");
}

function playNIS() {
    playSound("nisAudio");
}

function playSIS() {
    playSound("sisAudio");
}

function playYEP() {
    playSound("yepAudio");
}

function playBBG() {
    playSound("bbgAudio");
}

function playLTC() {
    playSound("ltcAudio");
}

function playNZRW() {
    playSound("nzrwAudio");
}

function playWeka() {
    playSound("wekaAudio");
}

function playYCP() {
    playSound("ycpAudio");
}

function playBT() {
    playSound("btAudio");
}

function playMP() {
    playSound("mpAudio");
}