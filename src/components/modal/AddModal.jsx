import {Button} from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle
} from '@/components/ui/dialog';
import {Input} from '@/components/ui/input';
import {Label} from '@/components/ui/label';
import PropTypes from 'prop-types';
import {Textarea} from '../ui/textarea';
import usePost from '@/hooks/usePost';
import {useForm} from 'react-hook-form';
import {useContext} from 'react';
import {AuthContext} from '@/store/AuthProvider';

export default function AddModal({isShowing, setIsShowing}) {
  const {postData} = usePost('Post');
  const {authData} = useContext(AuthContext);

  const {
    register,
    formState: {errors},
    handleSubmit,
    reset
  } = useForm({
    defaultValues: {
      title: '',
      content: ''
    }
  });
  const onPostData = (data) => {
    postData([
      {
        PostTitle: data.title,
        PostContent: data.content,
        PostAuthor: authData.user?.data?.username
      }
    ]);
    setIsShowing();
    reset();
  };
  return (
    <Dialog
      open={isShowing}
      onOpenChange={setIsShowing}>
      <DialogContent className='max-w-[18rem] lg:max-w-[50rem]'>
        <DialogHeader>
          <DialogTitle>Add Post</DialogTitle>
          <DialogDescription>Add Post</DialogDescription>
        </DialogHeader>
        <form
          onSubmit={handleSubmit(onPostData)}
          className='flex flex-col gap-5 px-5'>
          <div className='flex flex-col gap-5'>
            <Label
              htmlFor='post-title'
              className='w-[10rem]'>
              Post Title
            </Label>
            <Input
              id='post-title'
              placeholder='Post Title'
              {...register('title', {required: 'title is required'})}
            />
            {errors.title && <p>{errors.title.message}</p>}
          </div>
          <div className='flex flex-col gap-5'>
            <Label
              htmlFor='post-content'
              className='flex-1 text-left'>
              Post Content
            </Label>
            <Textarea
              className='resize-none'
              placeholder='Type your post here.'
              id='post-content'
              rows={15}
              {...register('content', {required: 'content is required'})}
            />
            {errors.content && <p>{errors.content.message}</p>}
          </div>
          <DialogFooter>
            <Button type='submit'>Post</Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}
AddModal.propTypes = {
  isShowing: PropTypes.bool,
  setIsShowing: PropTypes.func
};
