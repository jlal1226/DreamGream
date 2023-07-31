import { React, useState, useEffect } from 'react';
// import './Main.scss';
import Topbar from '../../components/Common/Topbar';
import CategoryButtons from '../../components/Button/CategoryButtons';
import BestBucketList from '../../components/Feed/BestBucketList';
import Feed from '../../components/Feed/Feed';
import Navbar from '../../components/Common/Navbar';
// import Rightbar from '../components/Rightbar';

export default function Main() {
  const [feeddata, setFeedData] = useState([]);

  useEffect(() => {
    //++여기서 넘겨주는 데이터 형식이 어떤건지 확인이 필요하다
    fetch('/posts?category_name={categroy_name}', { method: 'GET' })
      .then((res) => res.json())
      .then((data) => {
        setFeedData(data);
      });
  }, []);

  return (
    <div className="body">
      <Topbar />
      <div className="header">
        <CategoryButtons />
        <BestBucketList />
      </div>
      <div className="main">
        {/* props로 전달하는 부분! */}
        <Feed feeddata={feeddata} />
      </div>
      <div className="footer">
        <Navbar />
      </div>
    </div>
  );
}
