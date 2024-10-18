import React, { useRef, useEffect, useState } from "react";
import { CANVAS_SIZE, CELL_SIZE } from "./constansts";
import type { Character, CharacterInputs } from "./types";
import { makeCharacter } from "./character/make";
import { handleInputs } from "./handlers/inputs";
import { handleKeyDown } from "./handlers/keydown";
import { makeImageSet } from "./character/image.set";
import { LogIn } from "../wailsjs/go/main/App";

export const inputs: CharacterInputs = new Map();
const characters: Character[] = [];

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userId, setUserId] = useState("");
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const ctxRef = useRef<CanvasRenderingContext2D | null>(null);
  const fireball = new Image();

  fireball.src = "/src/sprites/fireball/fireball.png";
  fireball.width = 30;
  fireball.height = 20;

  useEffect(() => {
    if (canvasRef.current) {
      ctxRef.current = canvasRef.current.getContext("2d");
    }
  });
  ``;

  useEffect(() => {
    if (ctxRef.current && canvasRef.current) {
      handleInputs(
        ctxRef.current!,
        CANVAS_SIZE,
        inputs,
        characters,
        [],
        fireball
      );
    }
  }, [isLoggedIn]);

  const handleLogin = async () => {
    if (userId) {
      if (await LogIn(userId)) {
        const pink = makeCharacter(
          userId,
          makeImageSet(
            {
              walk: "/walk.png",
              attack: "/attack.png",
              climb: "/climb.png",
              idle: "/idle.png",
              hit: "/hit.png",
            },
            "/src/sprites/pink"
          )
        );
        inputs.set(userId, { character: pink, inputs: [] });
        characters.push(pink);
        window.addEventListener("keydown", handleKeyDown(pink));
        setIsLoggedIn(true);
      }
    } else {
      alert("이름을 입력해주세요");
    }
  };

  return (
    <div>
      {!isLoggedIn ? (
        <div>
          <input
            type="text"
            value={userId}
            onChange={(e) => setUserId(e.target.value)}
            placeholder="이름을 입력해주세요"
          />
          <button onClick={handleLogin}>Login</button>
        </div>
      ) : (
        <canvas
          id="canvas"
          width={CANVAS_SIZE}
          height={CANVAS_SIZE}
          ref={canvasRef}
        ></canvas>
      )}
    </div>
  );
}

export default App;
