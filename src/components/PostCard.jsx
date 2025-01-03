import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import PropTypes from "prop-types";
export default function PostCard({ cardData }) {
  return (
    <Card className="w-[35rem] break-words">
      <CardHeader>
        <CardTitle>{cardData.PostTitle}</CardTitle>
        <CardDescription>
          <p> {cardData.PostAuthor}</p>
        </CardDescription>
      </CardHeader>
      <CardContent>
        <p>{cardData.PostContent}</p>
      </CardContent>
    </Card>
  );
}
PostCard.propTypes = {
  cardData: PropTypes.object,
};
