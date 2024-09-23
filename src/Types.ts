export type TileDataType = {
  color: string;
  matched: boolean;
  clicked: boolean;
};

export type TileComponentType = {
  tileData: TileDataType;
  tileIndex: number;
  setSelectedTiles: React.Dispatch<React.SetStateAction<number[]>>;
  selectedTiles: number[];
  updateInitialBoard: (
    index: number,
    field: "matched" | "clicked",
    value: boolean
  ) => void;
};
