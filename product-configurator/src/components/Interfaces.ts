export type Nullable<T> = T | undefined | null;

export interface Material {
    color: string;
    name: string;
    displayColor?: string;
}

export interface Product {
    image_folder: string;
    layer_names: string[];
    materials: Material[][];
};
