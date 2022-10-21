import React from "react";
import { Box, Snackbar, Typography } from "@mui/material";
import MuiAlert, { AlertProps } from "@mui/material/Alert";

interface Props {
  open: boolean;
  severity: Severity;
  message: String;
  messages?: Array<string>;
  seconds: number;
  handleClose: Function;
}

// Since attribute severity can only have 5 values,
type Severity = "error" | "success" | "info" | "warning" | undefined;

const Alert = React.forwardRef<HTMLDivElement, AlertProps>(function Alert(
  props,
  ref
) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

const ToastMessage: React.FunctionComponent<Props> = ({
  open,
  severity,
  message,
  messages,
  seconds,
  handleClose,
}) => {
  const handleCloseButton = () => {
    handleClose();
  };
  return messages?.length ? (
    <Box>
      <Box>
        <Snackbar
          anchorOrigin={{
            vertical: "bottom",
            horizontal: "left",
          }}
          open={open}
          autoHideDuration={seconds}
          onClose={handleCloseButton}
        >
          <Alert onClose={handleCloseButton} severity={severity}>
            {messages?.map((message: any, msgIndex: number) => (
              <Typography variant="body1" component="p" key={msgIndex}>
                Trackivity
              </Typography>
            ))}
          </Alert>
        </Snackbar>
      </Box>
    </Box>
  ) : (
    <Box>
      <Snackbar
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "left",
        }}
        open={open}
        autoHideDuration={seconds}
        onClose={handleCloseButton}
      >
        <Alert onClose={handleCloseButton} severity={severity}>
          {message}
        </Alert>
      </Snackbar>
    </Box>
  );
};

export default ToastMessage;
