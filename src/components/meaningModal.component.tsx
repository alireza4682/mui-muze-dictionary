import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import { TProps } from "./oneWord.component";
import Typography from "@mui/material/Typography";
import "@fontsource/charmonman";

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  maxHeight: 600,
  bgcolor: "background.paper",
  borderRadius: "5px",
  boxShadow: 24,
  p: 4,
  overflow: "auto",
};

const MeaningModal = ({ open, setOpen, defs }: TProps) => {
  const handleClose = () => setOpen(false);
  return (
    <Modal open={open} onClose={handleClose} aria-labelledby="meaning">
      <Box sx={style}>
        {Array.isArray(defs)
          ? defs.map((d, idx) => <Typography key={idx}>{d}</Typography>)
          : null}
      </Box>
    </Modal>
  );
};

export default MeaningModal;
