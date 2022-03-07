import {
  Container,
  createTheme,
  Pagination,
  Stack,
  ThemeProvider,
} from "@mui/material";
import { blue, red } from "@mui/material/colors";
import { useSelector } from "react-redux";
import MultipleSelectCheckmarks from "../../components/Checkbox";
import FullDark from "../../components/FullDark/FullDark";
import HigLig from "../../components/HigLig/HigLig";
import { MainCard } from "../../components/mainCard";

const Jobs = () => {
  const data = useSelector((state) => state.homeCards);

  const theme = createTheme({
    palette: {
      pink: {
        main: "#FFEBED",
        contrastText: "FC4B45",
        light: "FC4B45",
      },
    },
    components: {
      MuiButton: {
        variants: [
          {
            props: { variant: "dashed" },
            style: {
              textTransform: "none",
              border: `2px dashed ${blue[500]}`,
            },
          },
          {
            props: { variant: "dashed", color: "secondary" },
            style: {
              border: `4px dashed ${red[500]}`,
            },
          },
        ],
      },
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <div className="pt-28">
        <Container sx={{ transform: "scaleX(103.5%)" }}>
          <div className="flex pl-2 pr-8 items-center mb-5">
            <div className="w-1/3 px-2.5 flex items-center">
              <button className="w-12 h-[54px] flex -mr-[10px] bg-[#F6F7F8] mt-[8px]  items-center justify-center rounded-lg">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  xlink="http://www.w3.org/1999/xlink"
                  aria-hidden="true"
                  role="img"
                  className="MuiBox-root css-gvh5lz text-gray-700  w-6 h-6"
                  preserveAspectRatio="xMidYMid meet"
                  viewBox="0 0 32 32"
                >
                  <path
                    d="M29 27.586l-7.552-7.552a11.018 11.018 0 1 0-1.414 1.414L27.586 29zM4 13a9 9 0 1 1 9 9a9.01 9.01 0 0 1-9-9z"
                    fill="currentColor"
                  ></path>
                </svg>
              </button>
              <HigLig
                placeholder="placeholder"
                obj={{ "& TextField": { backgroundColor: "#F6F7F8", py: 5 } }}
              />
            </div>
            <div className="w-1/3 px-2.5 flex items-center">
              <button className="w-12 h-[54px] flex -mr-[10px] bg-[#F6F7F8] mt-[8px]  items-center justify-center rounded-lg">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  xlink="http://www.w3.org/1999/xlink"
                  aria-hidden="true"
                  role="img"
                  className="MuiBox-root css-gvh5lz text-gray-700  w-6 h-6"
                  preserveAspectRatio="xMidYMid meet"
                  viewBox="0 0 32 32"
                >
                  <path
                    d="M29 27.586l-7.552-7.552a11.018 11.018 0 1 0-1.414 1.414L27.586 29zM4 13a9 9 0 1 1 9 9a9.01 9.01 0 0 1-9-9z"
                    fill="currentColor"
                  ></path>
                </svg>
              </button>
              <HigLig
                placeholder="placeholder"
                obj={{ "& TextField": { backgroundColor: "#F6F7F8", py: 5 } }}
              />
            </div>
            <div className="w-1/3 px-2.5 flex items-center">
              <button className="w-12 h-[54px] flex -mr-[10px] bg-[#F6F7F8] mt-[8px]  items-center justify-center rounded-lg">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  xlink="http://www.w3.org/1999/xlink"
                  aria-hidden="true"
                  role="img"
                  className="MuiBox-root css-gvh5lz text-gray-700  w-6 h-6"
                  preserveAspectRatio="xMidYMid meet"
                  viewBox="0 0 32 32"
                >
                  <path
                    d="M29 27.586l-7.552-7.552a11.018 11.018 0 1 0-1.414 1.414L27.586 29zM4 13a9 9 0 1 1 9 9a9.01 9.01 0 0 1-9-9z"
                    fill="currentColor"
                  ></path>
                </svg>
              </button>
              <HigLig
                placeholder="placeholder"
                obj={{ "& TextField": { backgroundColor: "#F6F7F8", py: 5 } }}
              />
            </div>
            <button className="bg-orange h-[54px] w-[54px] flex -mr-[10px] mt-[8px]  items-center justify-center rounded-lg">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                xlink="http://www.w3.org/1999/xlink"
                aria-hidden="true"
                role="img"
                className="MuiBox-root css-gvh5lz text-white  w-6 h-6"
                preserveAspectRatio="xMidYMid meet"
                viewBox="0 0 32 32"
              >
                <path
                  d="M29 27.586l-7.552-7.552a11.018 11.018 0 1 0-1.414 1.414L27.586 29zM4 13a9 9 0 1 1 9 9a9.01 9.01 0 0 1-9-9z"
                  fill="currentColor"
                ></path>
              </svg>
            </button>
          </div>
          <MainCard data={data} />
          <MainCard data={data} />
          <Stack
            spacing={2}
            sx={{
              mx: "auto",
              mb: 10,
              width: "100%",
              "& ul": { justifyContent: "center" },
            }}
          >
            <Pagination
              //   variant="dashed"
              size="large"
              color="pink"
              count={10}
              sx={{ "& Mui-selected": { color: "#FC4B45" } }}
            />
          </Stack>
          {/* <MultipleSelectCheckmarks></MultipleSelectCheckmarks> */}
        </Container>
        <FullDark />
      </div>
    </ThemeProvider>
  );
};

export default Jobs;
