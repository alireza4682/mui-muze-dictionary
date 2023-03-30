import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";
import IconButton from "@mui/material/IconButton";

const OneWord = (word: any) => {
  return (
    <Box
      component="div"
      sx={{
        display: "flex",
        justifyContent: "space-between",
        width: "200px",
        margin: "6px",
      }}
    >
      <Typography>{`${word.word}`}</Typography>
      <IconButton>
        <ArrowRightIcon sx={{ color: "blue" }} />
      </IconButton>
    </Box>
  );
};
export default OneWord;
