import * as React from "react";
import ReactDOM from "react-dom/client";
import { StyledEngineProvider } from "@mui/material/styles";
import { Container, Stack } from "@mui/material";
import JpTable from "./JPTable";
// import MuiBaseTable from './MuiBaseTable';
// import CustomDemo from './CustomDemo';

ReactDOM.createRoot(document.querySelector("#root")).render(
  <React.StrictMode>
    <StyledEngineProvider injectFirst>
      <Container sx={{ padding: 8 }}>
        <Stack spacing={2}>
          <JpTable />
          {/* <MuiBaseTable />
          <CustomDemo /> */}
        </Stack>
      </Container>
    </StyledEngineProvider>
  </React.StrictMode>
);
