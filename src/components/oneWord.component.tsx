import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";

const OneWord = (word: any) => {
  return (
    <Paper sx={{ display: "flex", alignItems: "center", width: "300" }}>
      <Typography variant="h4">{word}</Typography>
      <ArrowRightIcon sx={{ color: "greenyellow" }} />
    </Paper>
  );
};
export default OneWord;
