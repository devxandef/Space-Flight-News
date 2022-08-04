import React from "react";
import { CardL, CardR } from "../../";
import * as Style from "./styles";

function ListArticles({ allArticles, openModalItem, setCurrentItem }) {
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
    </Style.Container>
  );
}

export default ListArticles;
