import React from "react";
import Button from "@mui/material/Button";

function CardR({ item, key, openModalItem }) {
  return (
    <div key={key}>
      <div style={{ display: "flex", flexDirection: "row", marginBottom: 70 }}>
        <div className="description">
          <label className="title">{item.title}</label>
          <div>
            <label className="date-ar">
              {new Date(item.publishedAt).toLocaleDateString()}
            </label>
            <label className="date-ar-2">{item.newsSite}</label>
          </div>
          <label className="summary">{item.summary}</label>
          <div style={{ marginTop: 5 }}>
            <Button
              onClick={() => openModalItem(item)}
              variant="contained"
              size="small"
              style={{ backgroundColor: "#302e53" }}
            >
              Mostrar mais
            </Button>
          </div>
        </div>
        <div style={{ width: 300 }}>
          <img alt="" style={{ width: 280, height: 180 }} src={item.imageUrl} />
        </div>
      </div>
    </div>
  );
}

export default CardR;
