/* eslint-disable react/prop-types */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/alt-text */
// EditCheerImg.jsx
import React, { useState, useRef, useEffect } from 'react';

import { ReactComponent as ClearBtn } from '../../assets/icons/ClearBtn.svg';
import { ReactComponent as AddImgIcon } from '../../assets/AddImgIcon.svg';

function EditImg({ post, isAiImg, imgFile, updateImgFile }) {
  const [mainImg, setMainImg] = useState('');

  const fileInputRef = useRef(null);

  const setPreviewImg = (event) => {
    console.log(11111);
    const selectedFile = event.target.files[0];
    if (selectedFile) {
      const reader = new FileReader();
      reader.onload = function (e) {
        setMainImg(e.target.result);
        updateImgFile(selectedFile);
      };
      reader.readAsDataURL(selectedFile);
    }
    console.log(`선택된파일: ${selectedFile}`);
  };

  const addImg = () => {
    fileInputRef.current.click();
  };

  const clearImg = () => {
    setMainImg('');
  };

  return (
    <div>
      <div className="addImg w-[147px] h-[147px] relative">
        <div
          className="w-[147px] h-[147px] left-0 top-0 absolute rounded-[13px] border border-zinc-800"
          style={{
            borderStyle: 'dotted',
            borderColor: '#c4c4c4',
            borderWidth: '3px',
          }}
        />
        <input
          ref={fileInputRef}
          type="file"
          id="image"
          accept="image/*"
          className="hidden"
          style={{
            borderStyle: 'dotted',
            borderColor: '#c4c4c4',
            borderWidth: '3px',
          }}
          onChange={setPreviewImg}
        />
        {mainImg ? (
          <>
            <img
              className="w-[147px] h-[147px] left-0 top-0 absolute rounded-[13px]"
              src={mainImg}
              alt="썸네일"
            />
            {isAiImg ? null : (
              <ClearBtn
                className="absolute right-2 top-2 cursor-pointer"
                onClick={clearImg}
              />
            )}
          </>
        ) : (
          <AddImgIcon
            className="w-[70px] h-[70px] left-[37px] top-[39px] absolute cursor-pointer Z-[999]"
            onClick={addImg}
          />
        )}
      </div>
    </div>
  );
}

export default EditImg;