/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { ReactComponent as MoreVert } from '../../assets/icons/MoreVert.svg';
import ModalForShare from './ModalForShare';
import ModalForMine from './ModalForMine';

function Member({ post }) {
  // 모달창 노출 여부 state
  const [shareModalOpen, setShareModalOpen] = useState(false);
  const [mineModalOpen, setMineModalOpen] = useState(false);

  // 모달창 노출
  const showShareModal = () => {
    setShareModalOpen(true);
    setMineModalOpen(false);
  };
  const showMineModal = () => {
    setMineModalOpen(true);
  };

  // //url 이동 관련
  // const navigate = useNavigate();

  // const goUserFeed = () => {
  //   // ++url 수정 필요
  //   navigate('/feedid');
  // };

  return (
    <div className="member-container w-[360px] h-[75px] relative">
      <div className="w-[347px] h-10 pl-[13px] pr-[15px] left-[6px] top-[18px] absolute justify-center items-center gap-[99px] inline-flex">
        <div className="h-10 justify-start items-center gap-[7px] inline-flex">
          <img
            className="w-[39.67px] h-10 rounded-[999px]"
            src="https://via.placeholder.com/40x40"
            alt="프로필 이미지"
          />
          <div className="w-[200px]">
            <span className="text-black text-sm font-normal leading-tight">
              {/* 자카타파하 */}
              {/* ++props에서 넘겨주는건 post 데이터라 닉네임을 post테이블에 추가하던가.. 얘기해봐야함 */}
              {post.nickname}
              <br />
            </span>
            <span className="text-neutral-600 text-xs font-light leading-none">
              {/* 2023.07.20 */}
              {post.createdDate}
            </span>
            <span className="text-indigo-500 text-xs font-medium leading-none">
              {/* ++데드라인 데이터추가 필요 */}
              {/* · 1년 이내 {post.deadline} */}
            </span>
            {/* ##자신의 비공개 게시물만 보이도록 하는건 백쪽에서 그렇게 넘겨줄듯? */}
            {post.isDisplay ? null : (
              <span className="text-indigo-500 text-xs font-medium leading-none">
                · 비공개
              </span>
            )}
          </div>
        </div>
        <button
          type="button"
          onClick={
            post.memberId === 'logInUser' ? showShareModal : showMineModal
          }
        >
          <MoreVert />
        </button>
      </div>
      {/* 로그인한 유저 본인게시물이냐에 따라 shareModal을 바로 렌더링하는건 고민해봐야할듯 */}
      {shareModalOpen && (
        <ModalForShare setShareModalOpen={setShareModalOpen} />
      )}
      {mineModalOpen && (
        <ModalForMine
          setMineModalOpen={setMineModalOpen}
          setShareModalOpen={setShareModalOpen}
        />
      )}
    </div>
  );
}

export default Member;