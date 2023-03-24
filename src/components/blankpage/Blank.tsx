import * as React from "react";
import { useState } from "react";

import "./Blank.scss";

interface Pin {
  name: string;
  url: string;
}

interface Props {
  pins: Pin[];
}

const Blank = (props: Props) => {
  const listItems = props.pins.map((e) => (
    <div className="cards">
      <img src={e.url}></img>
      <div className="card-text">{e.name}</div>
    </div>
  ));

  async function getData() {
    //axios data call
    //const res = await axios.get("/route")
    //const dummyData = res.data -> will look like that:
    const dummyData: Pin[] = [
      {
        name: "example1",
        url: "URLEXAMPLE1",
      },
      {
        name: "example2",
        url: "URLEXAMPLE1",
      },
      {
        name: "example3",
        url: "URLEXAMPLE1",
      },
      {
        name: "example4",
        url: "URLEXAMPLE1",
      },
      {
        name: "example5",
        url: "URLEXAMPLE1",
      },
    ];
  }

  return (
    <div className="Blank snap">
      {listItems}

      <button onClick={getData}>API CALL</button>
    </div>
  );
};
export { Blank };
export type { Pin };
