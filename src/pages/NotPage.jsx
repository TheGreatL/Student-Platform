import { useEffect } from "react";
import { useNavigate } from "react-router";

export default function NotPage() {
  const navgate = useNavigate();
  useEffect(() => {
    console.log("navigate");
    navgate("/", { replace: true });
  }, [navgate]);
  return <div>NotPage</div>;
}
