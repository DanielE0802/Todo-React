import { Input, Container , InputLeftElement, InputGroup } from "@chakra-ui/react";
import { SearchIcon } from "@chakra-ui/icons";

function TodoSearchInput({ search, setSearch }) {
  const searchValueChange = (event) => {
    setSearch(event.target.value);
  };

  return (
    <Container maxW='container.md'>
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
