import { useEffect } from "react";
import { useNavigate } from "react-router";

export default function NotPage() {
  const navgate = useNavigate();
  useEffect(() => {
    const timeout = setTimeout(() => {
      navgate("/", { replace: true });
    }, 1500);

    return {
      timeout,
    };
  }, [navgate]);
  return <div>NotPage</div>;
}
