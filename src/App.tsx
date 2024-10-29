import DeleteIcon from "@mui/icons-material/Delete";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import DeleteForeverOutlinedIcon from "@mui/icons-material/DeleteForeverOutlined";
import DeleteOutlinedIcon from "@mui/icons-material/DeleteOutlined";
import FourKIcon from "@mui/icons-material/FourK";
import ThreeDRotationIcon from "@mui/icons-material/ThreeDRotation";
import ThreeSixtyIcon from "@mui/icons-material/ThreeSixty";
import { styled, Switch, TextField } from "@mui/material";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";

const label = { inputProps: { "aria-label": "Switch demo" } };
export default function App() {
  return (
    <Container maxWidth="sm">
      <Box
        component="form"
        sx={{ "& .MuiTextField-root": { m: 1, width: "25ch" } }}
        noValidate
        autoComplete="off"
      >
        <div>
          <TextField
            required
            id="outlined-required"
            label="Required"
            defaultValue="Hello World"
          />
          <TextField
            disabled
            id="outlined-disabled"
            label="Disabled"
            defaultValue="Hello World"
          />
          <TextField
            id="outlined-password-input"
            label="Password"
            type="password"
            autoComplete="current-password"
          />
          <TextField
            id="outlined-read-only-input"
            label="Read Only"
            defaultValue="Hello World"
            slotProps={{
              input: {
                readOnly: true,
              },
            }}
          />
          <TextField
            id="outlined-number"
            label="Number"
            type="number"
            slotProps={{
              inputLabel: {
                shrink: true,
              },
            }}
          />
          <TextField id="outlined-search" label="Search field" type="search" />
          <TextField
            id="outlined-helperText"
            label="Helper text"
            defaultValue="Default Value"
            helperText="Some important text"
          />
        </div>

        <div>
          <Switch {...label} defaultChecked />
          <Switch {...label} />
          <Switch {...label} disabled defaultChecked />
          <Switch {...label} disabled />
        </div>
        <StyledIconDiv sx={{ color: "text.primary" }}>
          <DeleteIcon />
          <DeleteForeverIcon />

          <DeleteOutlinedIcon />
          <DeleteForeverOutlinedIcon />

          <ThreeDRotationIcon />
          <FourKIcon />
          <ThreeSixtyIcon />
        </StyledIconDiv>
      </Box>
    </Container>
  );
}

const StyledIconDiv = styled("div")(({ theme }) => {
  console.log("theme.palette.primary.main :>> ", theme.palette);
  return {
    "& .MuiTypography-root": {
      color: theme.palette.primary.main,
    },
    "& .MuiSvgIcon-root": {
      color: theme.palette.primary.main,
    },
    "&:hover": {
      background: theme.palette.background.default,
      "& .MuiTypography-root": {
        color: theme.palette.secondary.main,
      },
      "& .MuiSvgIcon-root": {
        color: theme.palette.secondary.main,
      },
    },
  };
});
