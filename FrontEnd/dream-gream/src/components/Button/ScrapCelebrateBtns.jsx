// export default ScrapCelebrateBtns;
/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/button-has-type */
import { React, useState, useEffect } from 'react';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import axiosInstance from '../../utils/axiosInterceptor';

import 'react-toastify/dist/ReactToastify.css';
import { ReactComponent as CelebrateIcon } from '../../assets/icons/CelebrateIcon.svg';
import { API_URL } from '../../config';

function ScrapCelebrateBtns({ post }) {
  const navigate = useNavigate();
  const [isCelebrated, setIsCelebrated] = useState(
    post.is_celebrateed === null ? false : post.is_celebrated,
  );
  const [celebrateCount, setCelebrateCount] = useState(post.celebrate_cnt);

  useEffect(() => {
    setCelebrateCount(post.celebrate_cnt);
    setIsCelebrated(post.is_celebrateed === null ? false : post.is_celebrated);
  }, [post]);

  const handleCelebrateClick = () => {
    const requestData = {
      post_id: post.post_id,
    };

    if (!isCelebrated) {
      axiosInstance
        .post(`${API_URL}/api/posts/celebrates/add`, requestData)
        .then((response) => {
          setIsCelebrated(true);
          setCelebrateCount(celebrateCount + 1);
        })
        .catch((error) => {
          navigate('/loginerror');
        });
    } else {
      axiosInstance
        .post(`${API_URL}/api/posts/celebrates/remove`, requestData)
        .then((response) => {
          setIsCelebrated(false);
          setCelebrateCount(celebrateCount - 1);
        })
        .catch((error) => {
          navigate('/loginerror');
        });
    }
  };

  const scrap = () => {
    const scrapData = {
      post_id: post.post_id,
    };
    axiosInstance
      .post(`${API_URL}/api/posts/${post.post_id}/scrap`, scrapData)
      .then((response) => {
        toast.success('내 버킷리스트에 등록이 완료되었습니다', {
          position: toast.POSITION.TOP_CENTER,
          autoClose: 2000,
        });
      })
      .catch((error) => {
        navigate('/loginerror');
      });
  };

  return (
    <div className="flex justify-center items-center">
      <div className="w-[317px] h-8 justify-center items-start  inline-flex">
        <button
          type="button"
          onClick={scrap}
          className="w-[152px] h-8 px-[34px] py-1.5 bg-white rounded-[10px] border border-indigo-400 justify-center items-center inline-flex mr-4"
        >
          <div className="text-indigo-400 text-[13px] font-bold leading-[18.20px]">
            나도할래
          </div>
        </button>

        <button
          type="button"
          onClick={handleCelebrateClick}
          className={`w-[152px] h-8 px-[34px] py-1.5 rounded-[10px]  border border-indigo-400 justify-center items-center inline-flex
          ${isCelebrated ? 'bg-indigo-400' : 'bg-white'}
          `}
        >
          <div className="justify-center items-center gap-px flex">
            <CelebrateIcon
              style={{ fill: isCelebrated ? 'white' : '#7887D4' }}
            />

            <div
              className={`text-[13px] font-bold leading-[18.20px] w-[77px] ${
                isCelebrated ? 'text-white' : 'text-indigo-400 '
              }`}
            >
              축하해요
              <span /> <span />
              {celebrateCount}
            </div>
          </div>
        </button>
        <ToastContainer />
      </div>
    </div>
  );
}

export default ScrapCelebrateBtns;
