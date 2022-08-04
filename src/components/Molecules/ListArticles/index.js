import React from "react";
import { CardL, CardR } from "../../";
import * as Style from "./styles";

function ListArticles({ allArticles, openModalItem, error }) {
  return (
    <Style.Container>
      {Array.isArray(allArticles) &&
        allArticles.map((item, key) =>
          key % 2 === 0 ? (
            <CardL
              item={item}
              key={key}
              openModalItem={(item) => openModalItem(item)}
            />
          ) : (
            <CardR
              item={item}
              key={key}
              openModalItem={(item) => openModalItem(item)}
            />
          )
        )}

      {error && (
        <div style={{ fontWeight: "bold", fontSize: 20, textAlign: "center" }}>
          Erro ao carregar notícias!
        </div>
      )}
    </Style.Container>
  );
}

export default ListArticles;
