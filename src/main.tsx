import { createRoot } from 'react-dom/client';

import React from "react";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import { CssBaseline } from '@mui/material';

createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter>
      <CssBaseline></CssBaseline>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);