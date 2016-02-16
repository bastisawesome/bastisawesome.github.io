var KEYS = {
    BACKSPACE: 8,
    TAB: 9,
    CONTROL: 17,
    S: 83,
    E: 82
    
};
document.addEventListener('keydown', function(event) {
    if(event.ctrlKey && event.keyCode == KEYS.S) {
        event.preventDefault();
        console.log('Saved');
    }
});