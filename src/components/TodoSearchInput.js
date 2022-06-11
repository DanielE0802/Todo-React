import {
  Input,
  Container,
  InputLeftElement,
  InputGroup,
} from "@chakra-ui/react";
import { SearchIcon } from "@chakra-ui/icons";
import { TaskContext } from "../context/TaskContext";
import React from "react";

function TodoSearchInput() {
  const { search, setSearch } = React.useContext(TaskContext);
  const searchValueChange = (event) => {
    setSearch(event.target.value);
  };

  return (
    <Container maxW="container.md">
      <InputGroup mb="12" mt="4">
        <InputLeftElement
          pointerEvents="none"
          children={<SearchIcon color="gray.300" />}
        />
        <Input
          className="searchInput"
          value={search}
          onChange={searchValueChange}
          type="text"
          variant="filled"
          placeholder="Busca tus tareas"
        />
      </InputGroup>
    </Container>
  );
}

export { TodoSearchInput };
