import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import { useState } from "react";
import { TProps } from "./oneWord.component";

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  boxShadow: 24,
  borderRadius: 2,
  p: 4,
};

const MeaningModal = (props: TProps) => {
  const { open, setOpen } = props;
  const handleClose = () => setOpen(false);

  return (
    <Modal open={open} onClose={handleClose} aria-labelledby="meaning">
      <Box sx={style}>jsdsjmskfmodiff</Box>
    </Modal>
  );
};

export default MeaningModal;
