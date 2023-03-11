import { useState, useContext } from 'react';
import { AuthContext } from '../../../context/context';
import likeAPI from '../../../api/likeAPI';
import HeartOff from '../../../assets/images/icon-heart.svg';
import HeartOn from '../../../assets/images/heart.svg';

const LikeButton = ({ heartCount, hearted, postId }) => {
  const [isLike, setIsLike] = useState(hearted);
  const [likeCount, setLikeCount] = useState(heartCount);
  const { user } = useContext(AuthContext);

  const handleLikeChange = () => {
    if (isLike === false) {
      const getHeart = async () => {
        const data = await likeAPI.getHeart(user.token, postId);
        setIsLike(data.post.hearted);
        setLikeCount(data.post.heartCount);
      };
      getHeart();
    } else if (isLike === true) {
      const cancelHeart = async () => {
        const data = await likeAPI.cancelHeart(user.token, postId);
        setIsLike(data.post.hearted);
        setLikeCount(data.post.heartCount);
      };
      cancelHeart();
    }
  };
  return (
    <button type='button' onClick={handleLikeChange}>
      <img src={isLike ? HeartOn : HeartOff} alt='좋아요 버튼' />
      <span>{likeCount}</span>
    </button>
  );
};

export default LikeButton;
