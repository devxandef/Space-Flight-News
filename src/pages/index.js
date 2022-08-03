import React from "react";
import { Container, Header, ListArticles } from "../components";
import { useFetchActicles } from "../hooks/useFetchArticles";
import LoadingButton from "@mui/lab/LoadingButton";

function Layout() {
  const [{ data, isLoading, isError }, Pagination, Filter] = useFetchActicles();

  return (
    <Container>
      <Header allArticles={data} setData={(filtered) => Filter(filtered)} />
      <ListArticles allArticles={data} openModalItem={() => true} />
      <LoadingButton
        onClick={() => Pagination(`/articles?_start=${data.length}`)}
        loading={isLoading}
        loadingIndicator="Carregando..."
        variant="outlined"
      >
        Carregar mais
      </LoadingButton>
    </Container>
  );
}

export default Layout;
