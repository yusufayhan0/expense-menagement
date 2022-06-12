import React, { useEffect } from "react";
import { Button } from "react-bootstrap";
import axios from "../Plugins/axios";

export default function Home() {
  useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/users");
  }, []);

  return (
    <div>
      <Button>Yusuf AYHAN</Button>
    </div>
  );
}
