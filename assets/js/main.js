import generateScenes from "./scenes.js";

// initialize kaboom context
kaboom({
  background: [255, 0, 0],
  width: 800,
  height: 600,
  canvas: document.getElementById("game-canvas"),
  scale: 1,
});

/* Kyle added sprite import */

loadRoot("../../public/sprites/");
loadSprite("background_tile", "background_main_tile.png");

loadRoot("../../public/sounds/");
loadSound("death_sound", "death.wav");
loadSound("hurt_sound", "hit_hurt.wav");
loadSound("life_pickup", "life_pickup.wav");
loadSound("powerup_sound", "powerup.wav");
loadSound("intro_music", "intro.wav");
loadSound("main_music", "main.wav");
loadSound("menu_select", "menu_select.wav");

loadRoot("../../public/scene_background_images/");
loadSprite("game_over", "game_over_background.png");
loadSprite("welcome_page", "welcome_img.png");

loadRoot("../../public/scene_background_images/");
loadSprite("instructions_page", "instructions.png");
loadSprite("game_over_background","game_over_background.png");
loadSprite("welcome_page", "welcome_img.png")


generateScenes();

go("welcome");

// canvas focus enables user keyboard input register
canvas.focus();
