import React from "react";
import * as Style from "./styles";

import { Search, Select, Space, Logo, Divider } from "../../";

function Header({ allArticles, setOption, searchFilter }) {
  return (
    <Style.Container>
      <Style.HeaderControls>
        <Search
          allArticles={Array.isArray(allArticles) ? allArticles : []}
          allArticlesBack={Array.isArray(allArticles) ? allArticles : []}
          setAllArticles={(valueFiltered) => searchFilter(valueFiltered)}
        />
        <Space R={15} />
        <Select setOption={(data) => setOption(data)} />
        <Space R={50} />
      </Style.HeaderControls>
      <Space T={50} />
      <Logo
        width={150}
        height={150}
        src={"https://cdn-icons-png.flaticon.com/512/231/231138.png"}
      />
      <Space T={50} />
      <Divider />
      <Space T={50} />
    </Style.Container>
  );
}

export default Header;
