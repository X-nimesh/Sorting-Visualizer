import React from "react";

let sleep = (ms: any) => {
  return new Promise((resolve) => setTimeout(resolve, ms));
};

export const BubbleSort = async (
  arr: Number[],
  setArray: any,
  setanimations: any,
  speed: Number,
  setloading: any
) => {
  let newarr = [...arr];
  let swap = (i: number, j: number) => {
    [newarr[i], newarr[j]] = [newarr[j], newarr[i]];
    // animation = { i: true, j: true };
    setanimations([i, j]);
  };
  for (let i = 0; i < newarr.length; i++) {
    for (let j = 0; j < newarr.length; j++) {
      if (newarr[j] > newarr[j + 1]) {
        swap(j, j + 1);
        // setArray(newarr);
        setArray(() => [...newarr]);

        console.log(newarr);
        await sleep(speed);
      }
    }
  }
  setloading(false);
  setanimations([]);
};
