/* eslint-disable */
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import axiosInstance from '../../utils/axiosInterceptor';
function MemberItem({ memberId, nickname, isFollowed, profileImg }) {
  const defaultProfileImg = 'https://via.placeholder.com/48x48';
  const [followed, setFollowed] = useState(isFollowed);

  const handleRequest = async () => {
    try {
      const response = await axiosInstance.post(
        `http://i9a609.p.ssafy.io:8800/api/members/follow/${memberId}`, // 일단 데이터가 없어서
      );

      if (response.status === 200 && response.data.success) {
        setFollowed(true);
        console.log('성공');
      }
    } catch (error) {
      console.error(error);
      console.log('실패');
    }
  };

  const handleClick = () => {
    if (followed) {
      return;
    }
    handleRequest();
  };

  const buttonLabel = followed ? '팔로잉' : '팔로우';

  return (
    <div className="w-[360px] h-[69px] top-[10px] relative">
      <img
        className="w-[47.87px] h-12 left-[14.96px] top-[6px] absolute rounded-full"
        src={profileImg || defaultProfileImg}
        alt={profileImg ? `사용자 ${nickname}의 프로필 이미지` : 'Profile'}
      />
      <div className="w-[177px] left-[85px] top-[18px] absolute text-neutral-700 text-base font-medium leading-snug">
        {nickname}
      </div>
      <div
        className="w-[84.76px] h-[27px] left-[262px] top-[17px] absolute bg-zinc-300 rounded-lg"
        onClick={handleClick}
      >
        <div className="left-[25px] top-[4px] absolute text-center text-neutral-700 text-[13px] font-bold leading-snug">
          {buttonLabel}
        </div>
      </div>
    </div>
  );
}

MemberItem.propTypes = {
  memberId: PropTypes.string.isRequired,
  nickname: PropTypes.string.isRequired,
  profileImg: PropTypes.string,
  isFollowed: PropTypes.bool.isRequired,
};

export default MemberItem;