/*
 * \\\ Example: Play a Sound
 *
 * Supports wav, mp3, and ogg (recommended) files
 */

ui.addTitle(app.name)

ui.addButton('Play a Meow', 0.1, 0.15, 0.8, -1).onClick(function() {
  media.playSound('meow.ogg')
})
