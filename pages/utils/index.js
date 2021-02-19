/* eslint-disable react-hooks/exhaustive-deps */
import dynamic from "next/dynamic";
import { createRef, useEffect, useState } from "react";
import Head from "next/head";
import { useFooter } from "./footer";
import { useHeader } from "./header";
import { useWheel } from "./wheel";
import styles from "./style.module.scss";

let initIndex;
let putIndex;
let initView;
let putView;

const { home } = styles;
const ref = createRef();
export const useLevels = dynamic(() =>
  import("./levels").then((mod) => mod.useLevels)
);
export const useLevel1 = dynamic(() =>
  import("./views/level-1").then((mod) => mod.useLevel1)
);

function useView({ name }) {
  const views = {
    home: useLevels,
    level1: useLevel1,
  };
  return views[name];
}
export function unmount({ set, value }) {
  return set(value);
}
export function initialiseIndex({ index, setIndex }) {
  initIndex = index;
  if (setIndex) {
    putIndex = setIndex;
  }
}
export function initialiseView({ view }) {
  initView = view;
}

export function useStore() {
  const [index, setIndex] = useState(0);
  initialiseIndex({ index, setIndex });
  useEffect(unmount.bind(null, { set: putIndex, value: 0 }), []);
  useEffect(initialiseIndex.bind(null, { index }), [index]);

  const [view, setView] = useState("home");
  initView = view;
  putView = setView;
  useEffect(unmount.bind(null, { set: putView, value: "home" }), []);
  useEffect(initialiseView.bind(null, { view }), [view]);

  return {
    home,
    View: useView({ name: initView }),
  };
}
export function useAppStore() {
  return {
    Head,
    Header: useHeader,
    Footer: useFooter,
    Wheel: useWheel,
    ref,
  };
}
export function useGStore() {
  return {
    unmount,
    initIndex,
    putIndex,
    initView,
    putView,
    ref,
  };
}
