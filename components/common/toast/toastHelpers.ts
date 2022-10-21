export const SuccessToast = (message: any, toastContext: any) => {
  toastContext?.dispatch({
    type: "new-toast",
    value: {
      open: true,
      severity: "success",
      message: message,
      seconds: 1900,
    },
  });
};

export const ErrorToast = (errorObj: any, toastContext: any) => {
  if (errorObj.status === 401) {
    localStorage.clear();
    window.location.href = "/";
  } else {
    if (errorObj?.body?.length > 0) {
      let message: string = "";
      errorObj.body.forEach((error: any) => {
        message += error.message + "\n";
      });
      toastContext?.dispatch({
        type: "new-toast",
        value: {
          open: true,
          severity: "error",
          message: message,
          seconds: 1900,
        },
      });
    } else {
      toastContext?.dispatch({
        type: "new-toast",
        value: {
          open: true,
          severity: "error",
          message: errorObj.message,
          seconds: 1900,
        },
      });
    }
  }
};
