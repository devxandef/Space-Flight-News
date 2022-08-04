import React from "react";

import {
  Container,
  Header,
  ListArticles,
  ModalContent,
  Logo,
  DescriptionContent,
} from "../components";
import { useLocation } from "react-router-dom";
import { useFetchActicles } from "../hooks/useFetchArticles";
import LoadingButton from "@mui/lab/LoadingButton";

function Layout() {
  const [{ data, isLoading, isError }, Pagination, Filter] = useFetchActicles();
  const [openModal, setOpenModal] = React.useState(false);
  const [currentItem, setCurrentItem] = React.useState(null);
  const [searchFilter, setSearchFilter] = React.useState(null);
  const sr = useLocation().search;
  const search = new URLSearchParams(sr).get("search");
  const filter = new URLSearchParams(sr).get("filter");

  return (
    <Container>
      <Header
        allArticles={data}
        searchFilter={(newValues) => setSearchFilter(newValues)}
        setOption={(filtered) => Filter(filtered)}
      />
      <ListArticles
        allArticles={searchFilter === null ? data : searchFilter}
        error={isError}
        openModalItem={(item) => {
          setCurrentItem(item);
          setOpenModal(true);
        }}
        setCurrentItem={(item) => setCurrentItem(item)}
      />
      <LoadingButton
        onClick={() => Pagination(`/articles?_start=${data.length}`)}
        loading={isLoading}
        loadingIndicator="Carregando..."
        variant="outlined"
      >
        Carregar mais
      </LoadingButton>
      <ModalContent
        openModal={openModal}
        close={(state) => setOpenModal(state)}
      >
        <Logo
          width={280}
          height={180}
          src={currentItem && currentItem.imageUrl}
        />
        <DescriptionContent itemSelected={currentItem}></DescriptionContent>
      </ModalContent>
    </Container>
  );
}

export default Layout;
