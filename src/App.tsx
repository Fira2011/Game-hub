import { Grid, GridItem, Show } from "@chakra-ui/react";
import NavBar from "./components/NavBar";
import GamesGrid from "./components/GamesGrid";
import GenreList from "./components/GenreList";
import { useState } from "react";
import { Genre } from "./Hook/useGenre";
import PlatformSelector from "./components/PlatformSelector";
import { Platform } from "./Hook/useGame";

function App() {
  const [selectGenre, setselectGenre] = useState<Genre | null>(null);
  const [selectPlatform, setSelectPlatform] = useState<Platform | null>(null);
  return (
    <Grid
      templateAreas={{
        base: `"nav" "main"`,
        lg: `"nav nav " "aside main"`,
      }}
      templateColumns={{
        base: "1fr",
        lg: "200px 1fr",
      }}
    >
      <GridItem area="nav">
        <NavBar />
      </GridItem>
      <Show above="lg">
        <GridItem area="aside" paddingX={5}>
          <GenreList
            selectedGenre={selectGenre}
            onSelectGenre={(genre) => setselectGenre(genre)}
          />
        </GridItem>
      </Show>
      <GridItem area="main">
        <PlatformSelector
          selectedPlatform={selectPlatform}
          onSelectPlatform={(platform) => setSelectPlatform(platform)}
        />
        <GamesGrid
          selectedPlatform={selectPlatform}
          selectedGenre={selectGenre}
        />
      </GridItem>
    </Grid>
  );
}
export default App;
