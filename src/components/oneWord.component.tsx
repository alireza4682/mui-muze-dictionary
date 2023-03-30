import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";

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
      <ArrowRightIcon sx={{ color: "greenyellow" }} />
    </Box>
  );
};
export default OneWord;
