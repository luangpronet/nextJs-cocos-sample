"use client";
import React from "react";
import Script from "next/script";
import styles from "./cocos.module.css";

interface CocosProps {
  isShow: boolean;
}

export default function Cocos(props: CocosProps) {
  const CanVasStyles = props.isShow
    ? styles.game_div
    : `${styles.game_div} ${styles.inactive}`;

  return (
    <div id="nthiendev" className={CanVasStyles}>
      {/* <canvas id="GameCanvas" className={styles.game_canvas}></canvas> */}
      <Script id="cocos-nthiendev" src="./src/system.bundle.js"></Script>

      <Script
        id="cocos-nthiendev"
        src="./src/import-map.json"
        type="systemjs-importmap"
      ></Script>
      <Script id="cocos-nthiendev" src="cocos_loader.js"></Script>
    </div>
  );
}
