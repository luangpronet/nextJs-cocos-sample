"use client";
import React, { useState, useEffect } from "react";
import PopupModal from "@/components/PopupModal";

export default function Cocos() {
  const loadScripts = () => {
    // Create script elements dynamically
    const cavasTag = document.createElement("canvas");
    cavasTag.id = "GameCanvas";
    cavasTag.tabIndex = 99;

    document.body.appendChild(cavasTag);

    const systemBundleScript = document.createElement("script");
    systemBundleScript.src = "src/system.bundle.js";
    systemBundleScript.charset = "utf-8";

    const importMapScript = document.createElement("script");
    importMapScript.src = "src/import-map.json";
    importMapScript.type = "systemjs-importmap";
    importMapScript.charset = "utf-8";

    const indexScript = document.createElement("script");
    indexScript.src = "./index.js";
    indexScript.type = "systemjs-importmap";

    // Append script elements to the document body
    document.body.appendChild(systemBundleScript);
    document.body.appendChild(importMapScript);
    document.body.appendChild(indexScript);
  };

  useEffect(() => {
    // loadScripts();
  }, []);

  return (
    <div className="flex items-center justify-center h-screen">
      <canvas id="GameCanvas" tabIndex={99}></canvas>
      <script src="src/system.bundle.js" charSet="utf-8"></script>

      <script
        src="src/import-map.json"
        type="systemjs-importmap"
        charSet="utf-8"
      ></script>

      <script src="./index.js"></script>
    </div>
  );
}
