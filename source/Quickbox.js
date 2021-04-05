/**
 * Set whether the scene should be animated or not.
 * This setter acts like the settings page, therefore
 * it is best to test compatibility through the settings page itself.
 *
 * @params  shouldAnimate	Should we animate?
 **/
Scene.prototype.animate = function animate(shouldAnimate) {
  //FIXME: I don't know why we can't just use booleans like booleans.
  if (shouldAnimate == "true") {
    self.window.animateEnabled = true;
  } else if (shouldAnimate == "false") {
    self.window.animateEnabled = false;
  }
}

/**
 * Changes the theme of the page.
 *
 * @params theme	The theme to set. This argument is passed to
 *			changeBackgroundColor. Valid options are
 *			"sepia", "white" (same as sepia), "black"
 *
 * @see [ui#changeBackgroundColor]
 **/
Scene.prototype.theme = function theme(theme) {
  self.changeBackgroundColor(theme);
}

/**
 * Increases font size.
 *
 * FIXME: This is just really awkward to control, but it's ChoiceScript's convention.
 **/
Scene.prototype.bigger_text = function bigger_text() {
  self.changeFontSize(true);
}

/**
 * Reduces font size.
 *
 * FIXME: Ditto with bigger_text.
 **/
Scene.prototype.smaller_text = function smaller_text() {
  self.changeFontSize(false);
}

/**
 * Hides buttons, preventing interaction.
 *
 * Warning!
 * Make sure your players are aware of this,
 * and that you are not hiding the buttons
 * in situations wherein the user can't progress
 * the game.
 *
 * @params args		Buttons to show, this can be any of
 *			"settings", "menu", and "stats", or
 *			all of them.
 **/
Scene.prototype.hide_buttons = function hide_buttons(arg) {
  var args = arg.splitToArray(",");
  
  if (args.includes("menu") || args.includes("settings")) {
    self.document.getElementById("menuButton").style.display = "none";
  }
  
  if (args.includes("stats")) {
    self.document.getElementById("statsButton").style.display = "none";
  }
}

/**
 * Pops back buttons to visibility.
 *
 * @params args		Buttons to show, this can be any of
 *			"settings", "menu", and "stats", or
 *			all of them.
 **/
Scene.prototype.show_buttons = function show_buttons(arg) {
  var args = arg.splitToArray(",");
 
  if (args.includes("menu") || args.includes("settings")) {
    self.document.getElementById("menuButton").style.display = "block";
  }
  
  if (args.includes("stats")) {
    self.document.getElementById("statsButton").style.display = "block";
  }
}

// Add our list of commands to the Scene itself.
var commands = [ "theme", "animate", "bigger_text", "smaller_text", "hide_buttons", "show_buttons" ];
for (i = 0; i < commands.length; i++) {
  Scene.validCommands[commands[i]] = 1;
}

/** OVERRIDES FOR STANDARD CHOICESCRIPT FUNCTIONS **/

/** 
 * Override replaceBbCode to allow for a working [u] and [s] tag.
 *
 * @see [ui#replaceBbCode]
 **/
var _bbCode = replaceBbCode;
replaceBbCode = function(msg) {
  var pass = _bbCode(msg);
  return msg = String(pass)
      .replace(/\[u\]/g, '<u>')
      .replace(/\[\/u\]/g, '</u>')
      .replace(/\[s\]/g, '<s>')
      .replace(/\[\/s\]/g, '</s>');
}

/** Helper functions. **/

/**
 * Splits a string with a delimiter and
 * creates an array from it.
 *
 * @param delimiter	The delimiter character.
 **/
String.prototype.splitToArray = function(delimiter) {
  return this.split(delimiter).map(item => item.trim());
}