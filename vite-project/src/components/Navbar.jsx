import { Box, Button } from "@chakra-ui/react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <>
      <Box
        style={{
          // border: "1px solid red",
          margin: "auto",
          display: "flex",
          justifyContent: "center",
          gap: 20,
          marginTop: "1rem"
        }}
      >
        <Link to="/login">
          {" "}
          <Button>Login</Button>{" "}
        </Link>
        <Link to="/signup">
          {" "}
          <Button>Signup</Button>{" "}
        </Link>
        <Link to="/home">
          <Button>Home</Button>{" "}
        </Link>
      </Box>
    </>
  );
}
