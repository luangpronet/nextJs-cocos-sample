import Link from "next/link";

import Script from "next/script";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-around p-24">
      {/* <canvas id="GameCanvas" tabIndex={99}></canvas> */}
      <div className="relative flex flex-col place-items-center before:absolute before:h-[300px] before:w-full sm:before:w-[480px] before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-full sm:after:w-[240px] after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40 before:lg:h-[360px] z-[-1]">
        <h1 className="text-3xl">NextJs Cocos Sample</h1>
      </div>

      <div className="flex justify-center items-center">
        <Link
          href="/iframe"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          rel="noopener noreferrer"
        >
          <h2 className={`mb-3 text-2xl font-semibold`}>
            Using Iframe tag{" "}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
            Using iframe tag to load index.html of cocos build
          </p>
        </Link>

        <Link
          href="/import"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          rel="noopener noreferrer"
        >
          <h2 className={`mb-3 text-2xl font-semibold`}>
            Dynamic Import{" "}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
            Using dynamic import to load javascript of cocos build
          </p>
        </Link>
      </div>
    </main>
  );
}

// export default function Home() {
//   const hadnle = () => {};
//   return (
//     <div>
//       <Script
//         id="cocos-nthiendev"
//         src="./src/import-map.json"
//         type="systemjs-importmap"
//       ></Script>
//       <Script id="cocos-nthiendev" src="cocos_loader.js"></Script>
//     </div>
//   );
// }
