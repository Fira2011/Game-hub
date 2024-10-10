import { HStack, Image, List, ListIcon, ListItem, Text } from "@chakra-ui/react";
import useGenres from "../Hook/useGenre";
import getCropedImageUrl from "../Services/image-url";


const GenreList = () => {
  const { data } = useGenres();
  return (
    <List>
      {data.map((genre) => (
        <ListItem key={genre.id} paddingY={'5px'}>
          <HStack>
            <Image
              boxSize={"32px"}
              src={getCropedImageUrl(genre.image_background)}
              borderRadius={8}
            />
            <Text fontSize={'lg'}>{genre.name}</Text>
          </HStack>
        </ListItem>
      ))}
    </List>
  );
};

export default GenreList;
