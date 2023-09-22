import { nodeResolve } from "@rollup/plugin-node-resolve";

export default {
    // config options
    build: {
        minify: true,
    },
    plugins: [
        nodeResolve({
            exportConditions: ["development"],
        }),
    ],
};
