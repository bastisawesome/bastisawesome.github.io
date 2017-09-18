// ------------------------------------------------

InputManager = new function()
{
	this.reset = function()
	{
		this.currentlyPressedKeys = {};
		this.lastKeyPressed = null;
		this.mouseDown = false;
		this.mouseClick = false;
		this.deltaX = 0;
		this.deltaY = 0;
		
		this.padState = 0;
		this.padPressed = -1;
		this.padReleased = 0;
	}
	
    this.reset();
	this.lastMouseX = 0;
	this.lastMouseY = 0;
	
	this.handleKeyDown = function (event)
	{
		this.currentlyPressedKeys[event.keyCode] = true;
		this.lastKeyPressed = event.keyCode;
		if (event.keyCode != 116 && event.keyCode != 122) // F5 and F11
		{
			event.stopPropagation();
			event.preventDefault();
		}
	}

	this.handleKeyUp = function (event)
	{
		this.currentlyPressedKeys[event.keyCode] = false;
		if (event.keyCode != 116 && event.keyCode != 122) // F5 and F11
		{
			event.stopPropagation();
			event.preventDefault();
		}
	}

	// -------------------------------------------------------
	/* Human readable keyCode index */
	// Lifted from: https://github.com/daleharvey/pacmanhttps://github.com/daleharvey/pacman
	this.KEY = KEYS;

	/* 0 - 9 */
	for (var i = 48; i <= 57; i++) {
		this.KEY['' + (i - 48)] = i;
	}
	/* A - Z */
	for (i = 65; i <= 90; i++) {
		this.KEY['' + String.fromCharCode(i)] = i;
	}
	/* NUM_PAD_0 - NUM_PAD_9 */
	for (i = 96; i <= 105; i++) {
		this.KEY['NUM_PAD_' + (i - 96)] = i;
	}
	/* F1 - F12 */
	for (i = 112; i <= 123; i++) {
		this.KEY['F' + (i - 112 + 1)] = i;
	}

	// ------------------------------------------------

	this.handleMouseDown = function (event)
	{
		this.mouseDown = true;
		var newPos = GetRelativePosition(canvas, event.pageX, event.pageY);
		this.lastMouseX = newPos.x;
		this.lastMouseY = newPos.y;
	}

	this.handleMouseUp = function (event)
	{
		this.mouseDown = false;
	}

	this.handleMouseMove = function (event)
	{
		var newPos = GetRelativePosition(canvas, event.pageX, event.pageY);

		this.deltaX = newPos.x - this.lastMouseX;
		this.deltaY = newPos.y - this.lastMouseY;

		this.lastMouseX = newPos.x;
		this.lastMouseY = newPos.y;
	}

	this.handleMouseClick = function (event)
	{
		// Only used for pad emulation on iOS. TODO: Support touch events 
		// iOS emulates taps by sending mousedown then mouseup immediately.
		this.mouseClick = true;
	}

	this.connect = function(document, canvas)
	{
		var bindThis = this;
		$(document).keydown  (function(event) { bindThis.handleKeyDown.call(bindThis, event); });
		$(document).keyup    (function(event) { bindThis.handleKeyUp.call(bindThis, event); });
		$(canvas).mousedown  (function(event) { bindThis.handleMouseDown.call(bindThis, event); });
		$(canvas).click      (function(event) { bindThis.handleMouseClick.call(bindThis, event); });
		$(document).mouseup  (function(event) { bindThis.handleMouseUp.call(bindThis, event); });
		$(document).mousemove(function(event) { bindThis.handleMouseMove.call(bindThis, event); });
	}
	
	// Useful abstraction:
	
	this.PAD = { 'UP': 1, 'DOWN': 2, 'LEFT': 4, 'RIGHT': 8, 'OK': 16, 'CANCEL': 32 };
	
	this.padUpdate = function()
	{
		var state = 0;
		if (this.currentlyPressedKeys[this.KEY.ARROW_UP])  	 state = state | this.PAD.UP;
		if (this.currentlyPressedKeys[this.KEY.ARROW_DOWN])  state = state | this.PAD.DOWN;
		if (this.currentlyPressedKeys[this.KEY.ARROW_LEFT])  state = state | this.PAD.LEFT;
		if (this.currentlyPressedKeys[this.KEY.ARROW_RIGHT]) state = state | this.PAD.RIGHT;
		if (this.currentlyPressedKeys[this.KEY.SPACEBAR]) 	state = state | this.PAD.OK;
		if (this.currentlyPressedKeys[this.KEY.ENTER]) 		state = state | this.PAD.OK;
		if (this.mouseDown || this.mouseClick) 		        state = state | this.PAD.OK;
		if (this.currentlyPressedKeys[this.KEY.ESCAPE]) 	state = state | this.PAD.CANCEL;
		
		this.padPressed = state & (~this.padState);
		this.padReleased = (~state) & this.padState;
		this.padState = state;
		this.mouseClick = false;
	}
}
