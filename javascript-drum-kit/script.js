function playSound(e) {
    const audio = document.querySelector(`audio[data-key="${e.code}"]`);
    const key = document.querySelector(`.key[data-key="${e.code}"]`);

    if(!audio) return; //stop the funtion form running.

    audio.currentTime = 0; //start the audio from the beginning everytime a key is pressed even if current audio is still playing.
    audio.play();

    key.classList.add('playing');
}

function removeTransition (e) {
    if (e.propertyName !== 'transform') return;
    
    this.classList.remove('playing');
}
 
const keys = document.querySelectorAll('.key');
window.addEventListener('keydown', playSound);
keys.forEach(key => key.addEventListener('transitionend', removeTransition));