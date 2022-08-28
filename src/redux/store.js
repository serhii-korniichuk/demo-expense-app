import { configureStore } from "@reduxjs/toolkit";

import auth from "./auth/slice";

export const store = configureStore({
    reducer: {
        auth,
    },
});
