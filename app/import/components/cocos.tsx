"use client";
import React from "react";
import Script from "next/script";
import styles from "./cocos.module.css";

interface CocosProps {
    isShow : boolean
}

export default function Cocos(props : CocosProps) {
    return (
        <div className={styles.game_div}>
        <canvas id="GameCanvas" className={styles.game_canvas}></canvas>
            <Script src="./src/system.bundle.js"></Script>

            <Script
                src="./src/import-map.json"
                type="systemjs-importmap"
            ></Script>
            <Script
                src="cocos_loader.js"
            ></Script>
            </div>
    );
}
