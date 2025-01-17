/* eslint-disable jsx-a11y/img-redundant-alt */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable react/prop-types */
import React from 'react';
import { useNavigate } from 'react-router-dom';

import { ReactComponent as CheerUpIcon } from '../../assets/icons/CheerUpIcon.svg';
import { ReactComponent as CelebrateIcon } from '../../assets/icons/CelebrateIcon.svg';

function BestBucketList({ bestBucketItem }) {
  const navigate = useNavigate();

  const goFeedDetail = () => {
    navigate(`/feed/${bestBucketItem.post_id}`);
  };

  return (
    <div className="w-[138.24px] h-[138.24px] relative ">
      <div
        className="w-[138.24px] h-[138.24px] left-0 top-0 absolute bg-black bg-opacity-40 rounded-lg"
        onClick={goFeedDetail}
        style={{ cursor: 'pointer' }}
      >
        {bestBucketItem?.is_achieved !== null && bestBucketItem?.is_achieved ? (
          <img
            src={bestBucketItem?.achievement_img || bestBucketItem?.ai_img}
            alt="Achievement or AI Image"
            style={{ borderRadius: '8px' }}
          />
        ) : (
          <img
            src={bestBucketItem?.ai_img}
            alt="AI Image"
            style={{ borderRadius: '8px' }}
          />
        )}

        <div className="w-[130px] h-[37.55px] left-[5.93px] top-[6.27px] absolute text-white text-base font-bold leading-snug">
          {bestBucketItem?.title}
        </div>

        {bestBucketItem?.is_achieved ? (
          <div className="w-[38.12px] h-[29.26px] left-[97.71px] top-[107px] absolute flex items-center text-white text-xs font-bold leading-none">
            <CelebrateIcon className="mr-1" style={{ fill: 'white' }} />
            {bestBucketItem?.celebrate_cnt}
          </div>
        ) : (
          <div className="w-[38.12px] h-[29.26px] left-[97.71px] top-[107px] absolute flex items-center text-white text-xs font-bold leading-none">
            <CheerUpIcon className="mr-1" style={{ fill: 'white' }} />
            {bestBucketItem?.cheer_cnt}
          </div>
        )}
      </div>
    </div>
  );
}

export default BestBucketList;
