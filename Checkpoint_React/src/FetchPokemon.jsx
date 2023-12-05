import { useEffect, useState } from "react";

export const FetchPokemon = () => {
  const [inpValue, setInpValue] = useState("");

  useEffect(() => {
    fetch(`https://pokeapi.co/api/v2/pokemon/${inpValue}`).then((res) => {
      if (!res.ok) {
        console.log("no data");
      } else {
        console.log(res.json());

        return res.json();
      }
    });
  });

  const handlerBtn = () => {};

  const handlerInpt = (evt) => {
    const value = evt.target.value;
    setInpValue(value);
  };

  return (
    <div>
      <button onClick={handlerBtn}>Fetch Pokemon</button>
      <input onInput={handlerInpt} type="text" />
    </div>
  );
};
