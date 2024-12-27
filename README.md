<p align="center">
  <img src="animalized.png" />
</p>

# Introduction

This is Animalized-client. Animalized is multi-player realtime battle simulation game.
You can play this client with [animalized-server](https://github.com/BJS-kr/animalized-server)

# Game Rules

1. You can fire a fireball with key "a"
2. You can move characters using arrow keys
3. Fireball can hit a character or a wall
4. Wall will be weakened as fireball hit the wall
5. If wall state reached "vulnerable", fireball can destroy the wall
6. If a user hit player with fireball 10 times, game will be end

# Implementation

1. This project uses [Wails](https://wails.io/)
2. This project uses [React](https://react.dev/), [Canvas](https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API)

### Known issue

After game played, keydown event still remains, so keydown intercepted by that event.
You can still write the room name but have to type multiple times.
