import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";

interface Props {
  onSelectSortOrder: (sortOrder: string) => void;
  sortOrders : string ;
}
const sortSelector = ({ onSelectSortOrder , sortOrders }: Props) => {
  const sortOrder = [
    { value: "", label: " Relevance" },
    { value: "-added", label: " Date added" },
    { value: "name", label: "Name" },
    { value: "-released", label: "Release Date" },
    { value: "-metacritic", label: "Popularity" },
    { value: "-rating", label: "Average Rating" },
  ];
  const currrentSortOrder = sortOrder.find(order => order.value === sortOrders)
  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<BsChevronDown />}>
        Order By :{currrentSortOrder?.label || 'Relevance'}
      </MenuButton>
      <MenuList>
        {sortOrder.map((order) => (
          <MenuItem
            onClick={() => onSelectSortOrder(order.value)}
            key={order.value}
            value={order.value}
          >
            {order.label}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
};

export default sortSelector;
