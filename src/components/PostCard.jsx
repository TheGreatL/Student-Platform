import {Card, CardContent, CardDescription, CardHeader, CardTitle} from '@/components/ui/card';
import PropTypes from 'prop-types';
import {motion} from 'framer-motion';
import {formatDate} from '@/utils/Date';

export default function PostCard({cardData}) {
  return (
    <motion.div
      className='w-[15rem] break-words lg:w-[35rem]' // Card's classes stay the same
      initial={{opacity: 0, y: -50}} // Start above the screen with 0 opacity
      animate={{opacity: 1, y: 0}} // Fall to its final position
      exit={{opacity: 0, y: 50}} // Fall out to the bottom
    >
      <Card>
        <CardHeader>
          <CardTitle>{cardData.PostAuthor}</CardTitle>
          <CardTitle></CardTitle>
          <CardDescription>
            <p>{formatDate(cardData.created_at)}</p>
          </CardDescription>
        </CardHeader>
        <CardContent>
          <h1 className='text-xl font-semibold text-black'>{cardData.PostTitle}</h1>
          <div className='flex bg-gray-50 p-2'>
            <p>{cardData.PostContent}</p>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
}
PostCard.propTypes = {
  cardData: PropTypes.object
};
