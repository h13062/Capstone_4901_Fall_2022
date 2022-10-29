import * as React from "react";
import { Appbar } from "react-native-paper";

const STHeader = () => {
  return (
    <Appbar.Header style={{ backgroundColor: "white" }}>
      <Appbar.Content title="Stopwatch" style={{ alignItems: "center" }} />
    </Appbar.Header>
  );
};
export default STHeader;
