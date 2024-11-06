import { Node } from "reactflow";
import { CustomProps } from "../../../../types";

export type Props = {
  node: Omit<Node, "id"> & { id?: string };
  handleTabChange?: (nwTab: number) => void;
};

export type ColorPickerType = "color" | "bgColor";

export type FormData = CustomProps & { xPos: string; yPos: string };
