import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import PropTypes from "prop-types";
export default function PostCard({ cardData }) {
  return (
    <Card className="w-[35rem] break-words">
      <CardHeader>
        <CardTitle>{cardData.title}</CardTitle>
        <CardDescription>
          <p> {cardData.description}</p>
        </CardDescription>
      </CardHeader>
      <CardContent>
        <p>{cardData.content}</p>
      </CardContent>
      <CardFooter>
        <p>{cardData.footer}</p>
      </CardFooter>
    </Card>
  );
}
PostCard.propTypes = {
  cardData: PropTypes.object,
};
