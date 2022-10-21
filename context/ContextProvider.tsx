import React, { createContext, useReducer } from "react";

interface context {
  Toast: any;
  BackdropLoader: any;
  Breadcrumbs: any;
}

interface contextProviderProp {
  children: any;
}

import {
  initialState as toastInitialState,
  reducer as toastReducer,
} from "./reducers/toastReducer";

import {
  initialState as backdropLoaderInitialState,
  reducer as backdropLoaderReducer,
} from "./reducers/backdropLoaderReducer";

import {
  initialState as breadcrumbsInitialState,
  reducer as breadcrumbsReducer,
} from "./reducers/breadcrumbsReducer";

import {
  initialState as profileInitialState,
  reducer as profileReducer,
} from "./reducers/profileReducer";
import ToastMessage from "../components/common/toast/toast-message";

export const Context = createContext<context | null>(null);

const ContextProvider = Context.Provider;

const ContextProviderWrapper: React.FunctionComponent<contextProviderProp> = ({
  children,
}) => {
  const [toastData, toastDispatch] = useReducer(
    toastReducer,
    toastInitialState
  );

  const [backdropLoaderData, backdropLoaderDispatch] = useReducer(
    backdropLoaderReducer,
    backdropLoaderInitialState
  );

  const [breadcrumbsData, breadcrumbsDispatch] = useReducer(
    breadcrumbsReducer,
    breadcrumbsInitialState
  );
  const [profileData, profileDispatch] = useReducer(
    profileReducer,
    profileInitialState
  );

  const store: any = {
    Toast: { state: toastData, dispatch: toastDispatch },
    BackdropLoader: {
      state: backdropLoaderData,
      dispatch: backdropLoaderDispatch,
    },
    BreadCrumbs: {
      state: breadcrumbsData,
      dispatch: breadcrumbsDispatch,
    },
    Profile: {
      state: profileData,
      dispatch: profileDispatch,
    },
  };

  return (
    <ContextProvider value={store}>
      {children}
      <ToastMessage
        open={toastData.open}
        message={toastData.message}
        severity={toastData.severity}
        seconds={toastData.seconds}
        messages={toastData.messages}
        handleClose={() => toastDispatch({ type: "close", value: "" })}
      />
    </ContextProvider>
  );
};

export default ContextProviderWrapper;
