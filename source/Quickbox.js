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
 * @params theme		The theme to set. This argument is passed to
 * 								changeBackgroundColor.
 *
 * @see [changeBackgroundColor]
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
 
Scene.validCommands.theme = 1;
Scene.validCommands.animate = 1;
Scene.validCommands.bigger_text = 1;
Scene.validCommands.smaller_text = 1;

/** OVERRIDES FOR STANDARD CHOICESCRIPT FUNCTIONS **/

/** 
 * Override replaceBbCode to allow for a working [u] and [s] tag.
 *
 * @see ui#replaceBbCode
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