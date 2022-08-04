import React from "react";
import { Description } from "../..";
import Button from "@mui/material/Button";

import * as Style from "./styles";

function DescriptionContent({ itemSelected }) {
  return (
    <Description>
      <Style.Container>
        <label className="title">{itemSelected.title}</label>
        <div>
          <label className="date-ar">
            {new Date(itemSelected.publishedAt).toLocaleDateString()}
          </label>
          <label className="date-ar-2">{itemSelected.newsSite}</label>
        </div>
        <label className="summary">{itemSelected.summary}</label>
        <div style={{ marginTop: 5 }}>
          <Button
            onClick={() => (window.location.href = `${itemSelected.url}`)}
            variant="contained"
            size="small"
            style={{ backgroundColor: "#302e53" }}
          >
            ir para o site
          </Button>
        </div>
      </Style.Container>
    </Description>
  );
}

export default DescriptionContent;
