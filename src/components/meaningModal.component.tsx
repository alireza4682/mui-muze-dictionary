import List from "@mui/material/List";
import Modal from "@mui/material/Modal";
import { TProps } from "./oneWord.component";
import Typography from "@mui/material/Typography";
import "@fontsource/charmonman";
import { Divider } from "@mui/material";
import ListItem from "@mui/material/ListItem";

const regexHandler = (str: string) => {
  // const regex = /^\w+/g;
};

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

const MeaningModal = ({ open, setOpen, defs, wordToPass }: TProps) => {
  const handleClose = () => setOpen(false);
  return (
    <Modal open={open} onClose={handleClose} aria-labelledby="meaning">
      <List sx={style}>
        {Array.isArray(defs)
          ? defs.map((d, idx) => (
              <>
                <ListItem>
                  <Typography key={idx}>{d}</Typography>
                </ListItem>
                <Divider />
              </>
            ))
          : null}
      </List>
    </Modal>
  );
};

export default MeaningModal;
