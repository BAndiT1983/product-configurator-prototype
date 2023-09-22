import { nodeResolve } from "@rollup/plugin-node-resolve";

export default {
    base: "product-configurator-prototype/",
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
