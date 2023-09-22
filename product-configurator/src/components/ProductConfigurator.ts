import { LitElement, html } from "lit";
import { customElement, property } from "lit/decorators.js";
import material_data from "./product_data.json";
import { Product, Material, Nullable } from "./Interfaces";

@customElement("product-configurator")
export class ProductConfigurator extends LitElement {
    // @property()
    // availableColors: Array<Array<string>>;

    @property()
    productName: string;

    @property()
    activeColors: Array<number>;

    @property()
    imageFolder: String;

    @property()
    materialData: Nullable<Product>;

    @property() colors = ["red", "green", "blue"];

    @property()
    size = 1.5;

    @property()
    currentColor: string = "#ff0000";

    // @property({ type: String })
    // public imageFolder: string = "";
    // const response = await fetch("product_data.json");

    // validateAllProps() {
    //     var result = true;
    //     if (this.productName === "") {
    //         console.error("Product name not supplied");
    //         result = false;
    //     }

    //     return result;
    // }

    constructor() {
        super();

        this.productName = "";
        this.imageFolder = "";

        // const materialData = await response.json();

        this.materialData = null;
        console.log("MAT: ", material_data);
        this.activeColors = [0, 0, 0];
    }

    setActiveColor(layerIndex: number, index: number) {
        this.activeColors[layerIndex] = index;
    }

    isActiveColor(layerIndex: number, index: number) {
        const active = this.activeColors[layerIndex] === index;
        console.log("AC: ", active);
        return active;
    }

    getActiveColorByLayer(layerIndex: number): string {
        if (!this.materialData) {
            return "";
        }

        const layerData = this.materialData.materials[layerIndex];

        const colorIndex = this.activeColors[layerIndex];
        var color: string = layerData[colorIndex].color;

        if (layerData[colorIndex].displayColor) {
            color = layerData[colorIndex].displayColor || "";
        }

        console.log("ACT_COLOR: ", color);
        return color;
    }

    _handleClick(e: Event) {
        if (!e.target) {
            return;
        }

        const colorIndex = (e.target as HTMLElement).getAttribute("colorIndex");
        const layerIndex = (e.target as HTMLElement).getAttribute("layerIndex");
        console.log("HC: ", layerIndex, " / ", colorIndex);

        if (!colorIndex || !layerIndex) {
            console.log("Can't set color: ", layerIndex, " / ", colorIndex);
            return;
        }

        this.setActiveColor(parseInt(layerIndex), parseInt(colorIndex));
        console.log("AC: ", this.activeColors);
        console.log("GAC: ", this.getActiveColorByLayer(0));
        this.currentColor = this.getActiveColorByLayer(0);
        this.requestUpdate();
    }

    colorButtonTemplate(layerIndex: number, index: number, color: string) {
        // console.log("BUTTON: ", layerIndex, index, color);
        return html`<div
            @click="${this._handleClick}"
            class="color-selector ${this.activeColors[layerIndex] === index
                ? "active"
                : ""}"
            colorIndex="${index}"
            layerIndex="${layerIndex}"
            style="background: ${color}; border: 2px solid ${color};"
        ></div>`;
    }

    colorRowTemplate(layerIndex: number, layerData: Material[]) {
        if (!this.materialData) {
            console.error("Product data is not available");
            return;
        }

        return html`<div
            style="display:flex;flex-wrap: wrap;justify-content: center;"
        >
            <div
                style="color: gray; font-size: 0.8rem; display: flex; align-self: center;"
            >
                ${this.materialData.layer_names[layerIndex]}
            </div>
            ${layerData.map((entry, index) =>
                this.colorButtonTemplate(layerIndex, index, entry.color)
            )}
        </div>`;
    }

    // Reference: https://awik.io/determine-color-bright-dark-using-javascript/
    // Determine if color is dark or bright and return suitable mix mode
    getMixMode(color: string) {
        var c = color.substring(1); // strip #
        var rgb = parseInt(c, 16); // convert rrggbb to decimal
        var r = (rgb >> 16) & 0xff; // extract red
        var g = (rgb >> 8) & 0xff; // extract green
        var b = (rgb >> 0) & 0xff; // extract blue

        var luma = 0.2126 * r + 0.7152 * g + 0.0722 * b; // per ITU-R BT.709

        if (luma < 40) {
            return "hard-light";
        }

        return "multiply";
    }

    render() {
        const data: Map<string, Product> = new Map(
            Object.entries(material_data)
        );
        this.materialData = data.get(this.productName);
        if (!this.materialData) {
            console.error("Product data is not available");
            return;
        }

        this.imageFolder = this.materialData.image_folder;

        return html`
            <style>
                .configurator {
                    padding: 0.5rem;
                    border: 1px solid lightgray;
                    width: 100%,
                    height: 100%,
                    /* min-width: 10rem;
                    min-height: 20rem; */
                    /* width: 100vw; */
                    /* height: 100vh; */
                    display: flex;
                    flex-direction: column;>
                    align-items: center;
                }

                .color-selector {
                    width: ${this.size}rem;
                    height: ${this.size}rem;
                    border-radius: ${this.size}rem;
                    margin: 0.5rem;
                    box-shadow: inset 0 0 10px #000000;
                    transition: box-shadow 0.25s;
                }

                .color-selector:hover {
                    box-shadow: inset 0 0 5px #ffffff;
                }

                .active {
                    box-shadow: inset 0 0 10px #ffffff;
                }

                .image-container {
                    position: relative;
                    /* width: 40rem; */
                    height: 40rem;
                    background-image: url("${this.imageFolder}/Background.png");
                    background-repeat: no-repeat;
                    background-position: center;
                    background-size: contain;
                }

                .background-image {
                    position: absolute;
                    width: 100%;
                    height: auto;
                    object-fit: contain;
                    /* mix-blend-mode: multiply; */
                }

                .layer {
                    position: absolute;
                    width: 100%;
                    height: 100%;
                    /* mix-blend-mode: color-burn; */
                    /* mix-blend-mode: hard-light; */
                    mask-repeat: no-repeat;
                    mask-position: center;
                    -webkit-mask-position: center;
                    mask-size: contain;
                    -webkit-mask-size: contain;
                    /* transition: background-color 0.5s; */
                    /* mask-type: luminance; */
                    /* mask-mode: luminance; */
                    mask-repeat: no-repeat;
                    -webkit-mask-repeat: no-repeat;
                }

                .layer1-image {
                    z-index: 10;
                    background-color: ${this.getActiveColorByLayer(0)};
                    mask-image: url("${this.imageFolder}/Layer1.png");
                    -webkit-mask-image: url("${this.imageFolder}/Layer1.png");
                    mix-blend-mode: ${this.getMixMode(
                    this.getActiveColorByLayer(0)
                )};
                }

                .layer2-image {
                    z-index: 20;
                    background-color: ${this.getActiveColorByLayer(1)};
                    mask-image: url("${this.imageFolder}/Layer2.png");
                    -webkit-mask-image: url("${this.imageFolder}/Layer2.png");
                    mix-blend-mode: ${this.getMixMode(
                    this.getActiveColorByLayer(1)
                )};
                }
            </style>

            <div class="configurator">
                <div class="image-container">
                    <div class="layer layer1-image"></div>
                    <div class="layer layer2-image"></div>
                </div>
                <div
                    style="display:flex; flex-direction: column; align-items: center;"
                >
                    ${this.materialData.materials.map(
                        (entry: Material[], layerIndex: number) =>
                            this.colorRowTemplate(layerIndex, entry)
                        // console.log("ROW");
                    )}
                </div>
            </div>
        `;
    }
}
