import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import { TProps } from "./oneWord.component";

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

const MeaningModal = ({ open, setOpen, defs }: TProps) => {
  const handleClose = () => setOpen(false);

  return (
    <Modal open={open} onClose={handleClose} aria-labelledby="meaning">
      <Box sx={style}>{defs}</Box>
    </Modal>
  );
};

export default MeaningModal;
