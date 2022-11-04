import * as React from "react";
import { Appbar } from "react-native-paper";

const STHeader = () => {
  return (
    <Appbar.Header style={{ backgroundColor: "white" }}>
      <Appbar.Content
        title="Timer"
        style={{ alignItems: "center" }}
        titleStyle={{
          fontWeight: "bold",
          fontSize: 30,
          padding: 0,
          margin: 0,
        }}
      />
    </Appbar.Header>
  );
};
export default STHeader;
