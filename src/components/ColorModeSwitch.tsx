import { HStack, Switch, Text, useColorMode } from "@chakra-ui/react";

const CoolorModeSwitch = () => {
  const { toggleColorMode, colorMode } = useColorMode();
  return (
    <HStack>
      <Switch isChecked={colorMode === "dark"} onChange={toggleColorMode} />
      <Text>Dark Mode</Text>
    </HStack>
  );
};

export default CoolorModeSwitch;
