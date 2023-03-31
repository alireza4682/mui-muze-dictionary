import Skeleton from "@mui/material/Skeleton";
import Box from "@mui/material/Box";

const CardSkeleton = () => {
  return (
    <Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          width: "200px",
          margin: "6px",
        }}
      >
        <Skeleton
          sx={{ minWidth: "200", margin: "6px", marginBottom: "20px" }}
          variant="rounded"
          width={130}
          height={20}
          animation="wave"
        />
        <Skeleton variant="circular" width={30} height={30} />
      </Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          width: "200px",
          margin: "6px",
        }}
      >
        <Skeleton
          sx={{ minWidth: "200", margin: "6px", marginBottom: "20px" }}
          variant="rounded"
          width={130}
          height={20}
          animation="wave"
        />
        <Skeleton variant="circular" width={30} height={30} />
      </Box>{" "}
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          width: "200px",
          margin: "6px",
        }}
      >
        <Skeleton
          sx={{ minWidth: "200", margin: "6px", marginBottom: "20px" }}
          variant="rounded"
          width={130}
          height={20}
          animation="wave"
        />
        <Skeleton variant="circular" width={30} height={30} />
      </Box>{" "}
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          width: "200px",
          margin: "6px",
        }}
      >
        <Skeleton
          sx={{ minWidth: "200", margin: "6px", marginBottom: "20px" }}
          variant="rounded"
          width={130}
          height={20}
          animation="wave"
        />
        <Skeleton variant="circular" width={30} height={30} />
      </Box>{" "}
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          width: "200px",
          margin: "6px",
        }}
      >
        <Skeleton
          sx={{ minWidth: "200", margin: "6px" }}
          variant="rounded"
          width={130}
          height={20}
          animation="wave"
        />
        <Skeleton variant="circular" width={30} height={30} />
      </Box>
    </Box>
  );
};

export default CardSkeleton;
