import { TileComponentType } from "./Types";

export default function Tile({
  tileData: { color, matched, clicked },
  tileIndex,
  setSelectedTiles,
  selectedTiles,
  updateInitialBoard,
}: TileComponentType) {
  const onTileClick = () => {
    if (
      selectedTiles.length === 2 ||
      selectedTiles.includes(tileIndex) ||
      matched === true
    )
      return;
    setSelectedTiles((prev) => {
      if (!prev.includes(tileIndex)) {
        return [...prev, tileIndex];
      }
      return prev;
    });
    updateInitialBoard(tileIndex, "clicked", true);
  };

  return (
    <>
      <div
        onClick={onTileClick}
        className={
          (clicked ? `tile ${color}` : "tile") ||
          (matched ? `tile ${color}` : "tile")
        }
      ></div>
    </>
  );
}
