import {
  Typography,
  Dialog as MuiDialog,
  DialogTitle,
  Box,
  DialogContent,
} from "@material-ui/core";
import { CustomDialogProps } from "../../types";
import { capitalizeFirstLetter } from "../../utils/capitalizeFirstLetter";
import "./style.css";

const Dialog: React.FC<CustomDialogProps> = ({
  open,
  handleClose,
  countryDetails,
}) => {
  return (
    <MuiDialog open={open} onClose={handleClose}>
      {countryDetails && (
        <Box className="dialog">
          <DialogTitle className="dialog-header">
            {countryDetails?.name}
          </DialogTitle>
          <DialogContent className="dialog-content-cell">
            {Object.entries(countryDetails).map(
              ([key, value]: [string, any]) => (
                <Typography key={key} variant="h6">
                  {capitalizeFirstLetter(key)}: {value}
                </Typography>
              )
            )}
          </DialogContent>
        </Box>
      )}
    </MuiDialog>
  );
};

export default Dialog;
