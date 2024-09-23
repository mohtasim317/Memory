import { useState } from "react";

export default function Tile({
  color,
  tileIndex,
  setSelectedTiles,
}: {
  color: string;
  tileIndex: number;
  setSelectedTiles: React.Dispatch<React.SetStateAction<number[]>>;
}) {
  const [tileClicked, setTileClicked] = useState(false);

  const onTileClick = () => {
    setTileClicked(true);
  };
  // Write your code here.

  return (
    <>
      <div
        onClick={onTileClick}
        className={tileClicked ? `tile ${color}` : "tile"}
      ></div>
    </>
  );
}
