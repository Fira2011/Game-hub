import { HStack, Image, List, ListIcon, ListItem, Spinner, Text } from "@chakra-ui/react";
import useGenres from "../Hook/useGenre";
import getCropedImageUrl from "../Services/image-url";


const GenreList = () => {
  const { data , isLoading , error} = useGenres();

  if (isLoading) return <Spinner />;
  if (error) return null;

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
