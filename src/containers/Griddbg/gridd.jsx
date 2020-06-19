import _ from "lodash";
import React, {useState, useEffect} from "react";
import {Grid} from "semantic-ui-react";
import Container from "react-bootstrap/Container";
import "./gridd.css";
var randomColor = require("randomcolor");

var eg = randomColor({
  count: 192,
  luminosity: "light",
  hue: "random",
  // format: "rgba",
});

var oeg = randomColor({
  count: 112,
  luminosity: "light",
  hue: "random",
  // format: "rgba",
});

const ColoredGrid = () => {
  var style = {
    backgroundColor: "black",
    animation: "bg 2s cubic-bezier(1, 0, 0, 1) infinite",
  };

  return (
    console.log("rendered"),
    (
      <Container className="contain">
        <Grid padded className="grid" id="tile-grid">
          {eg.map((colorr, i) => (
            <Grid.Column
              className="tile"
              id={`tile-${i}`}
              style={{backgroundColor: eg[i], opacity: "0.2"}}
              color={eg[i]}
              key={eg[i]}></Grid.Column>
          ))}
        </Grid>
        <Grid padded className="grid" id="overlay-grid">
          {eg.map((colorr, i) =>
            i % Math.floor(Math.random() * 5) === 0 ? (
              <Grid.Column
                className="overlay-tile tile"
                id={`overlay-${i}`}
                style={style}
                color={eg[i]}
                key={eg[i]}>
                <style>
                  {`@keyframes bg{
                  0%   { opacity: ${Math.random() * (0.2 - 0.1) + 0.1} }
                  25%  { opacity: ${Math.random() * (0.2 - 0.1) + 0.1} }
                  50%  { opacity: ${Math.random() * (0.2 - 0.1) + 0.1} }
                  75%  { opacity: ${Math.random() * (0.2 - 0.1) + 0.1} }
                  100% { opacity: ${Math.random() * (0.2 - 0.1) + 0.1} }
                  }`}
                </style>
              </Grid.Column>
            ) : (
              <Grid.Column
                className="overlay-tile tile"
                id={`overlay-${i}`}
                style={{backgroundColor: eg[i], opacity: "0.2"}}
                color={eg[i]}
                key={eg[i]}></Grid.Column>
            )
          )}
        </Grid>
      </Container>
    )
  );
};

export default ColoredGrid;
