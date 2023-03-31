import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import { useState } from "react";

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

const MeaningModal = (
  open: boolean,
  setOpen: React.Dispatch<React.SetStateAction<boolean>>
) => {
  const handleClose = () => setOpen(false);

  return (
    <Modal open={open} onClose={handleClose} aria-labelledby="meaning">
      <Box sx={style}>jsdsjmskfmodiff</Box>
    </Modal>
  );
};

export default MeaningModal;
