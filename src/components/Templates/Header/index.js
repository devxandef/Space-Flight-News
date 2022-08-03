import React from "react";
import * as Style from "./styles";

import { Search, Select, Space, Logo, Divider } from "../../";

function Header() {
  return (
    <Style.Container>
      <Style.HeaderControls>
        <Search
          allArticles={[]}
          allArticlesBack={[]}
          setAllArticles={() => true}
        />
        <Space R={15} />
        <Select allArticles={[]} setAllArticles={() => true} />
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
