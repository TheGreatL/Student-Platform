import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import PropTypes from "prop-types";
import { motion } from "framer-motion";
export default function PostCard({ cardData }) {
  return (
    <motion.div
      className="w-[15rem] break-words lg:w-[35rem]" // Card's classes stay the same
      initial={{ opacity: 0, y: -50 }} // Start above the screen with 0 opacity
      animate={{ opacity: 1, y: 0 }} // Fall to its final position
      exit={{ opacity: 0, y: 50 }} // Fall out to the bottom
    >
      <Card>
        <CardHeader>
          <CardTitle>{cardData.PostTitle}</CardTitle>
          <CardDescription>
            <p>{cardData.PostAuthor}</p>
          </CardDescription>
        </CardHeader>
        <CardContent>
          <p>{cardData.PostContent}</p>
        </CardContent>
      </Card>
    </motion.div>
  );
}
PostCard.propTypes = {
  cardData: PropTypes.object,
};
