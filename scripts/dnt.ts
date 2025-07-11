import { copy } from "jsr:@std/fs@1.0.19";
import { build } from "jsr:@deno/dnt@0.42.1";

await build({
    entryPoints: ["./mod.ts"],
    outDir: "./npm/",
    compilerOptions: {
        lib: ["ES2021", "DOM"],
    },
    skipSourceOutput: true,
    shims: {},
    package: {
        name: "roblox-bat",
        description: "A Deno/NodeJS module to generate Roblox BAT tokens for extensions",
        version: "0.6.0",
        homepage: "https://github.com/RoSeal-Extension/Roblox-BAT",
        author: "juliaoverflow",
        bugs: {
            url: "https://github.com/RoSeal-Extension/Roblox-BAT/issues",
        },
        repository: {
            type: "git",
            url: "git@github.com:RoSeal-Extension/Roblox-BAT.git",
        },
        keywords: [
            "roblox",
            "api",
        ],
        license: "MIT",
    },
    typeCheck: false,
});

await copy("./README.md", "./npm/README.md").catch(() => {});
await copy("./LICENSE", "./npm/LICENSE").catch(() => {});
