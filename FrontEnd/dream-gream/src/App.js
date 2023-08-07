import './App.css';
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import LogIn from './pages/members/Login';
import OAuth2RedirectHandler from './pages/members/OAuth2RedirectHandler';
import ProfileEdit from './pages/members/ProfileEdit';
import SignupGenderBirth from './pages/members/SiguUp';
import MyFeed from './pages/MyFeed/MyFeed';
import Posting from './pages/Posting/Posting';
import CheerUpFeed from './pages/Feed/cheerUpFeed';
import ShareImage from './components/Share/ShareImage';
import Follow from './pages/MyFeed/Follow';
import FindMember from './pages/members/FindMember';
import FeedDetail from './pages/Feed/feedDetail';
import ViewAbout from './pages/ViewMore/ViewAbout';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/logIn" element={<LogIn />} />
        <Route path="/oauth2/redirect" element={<OAuth2RedirectHandler />} />
        <Route path="/Siginupgenderbirth" element={<SignupGenderBirth />} />
        <Route path="/profileedit" element={<ProfileEdit />} />
        <Route path="/follow" element={<Follow />} />
        <Route path="/following" element={<followingUser />} />
        <Route path="/findmember" element={<FindMember />} />
        <Route path="/cheerUpFeed" element={<CheerUpFeed />} />
        <Route path="/acheivefeed" element={<acheiveFeed />} />
        <Route path="/feedid" element={<FeedDetail />} />
        <Route path="/post" element={<Posting />} />
        <Route path="/share" element={<ShareImage/>}/>
        <Route path="/myfeed" element={<MyFeed />} />
        <Route path="/about" element={<ViewAbout />} />
        <Route path="/updatepost" element={<updatePost />} />
        <Route path="/acheivementupdate" element={<acheivementUpdate />} />
        <Route path="/test111" element={<Test111 />} />
        <Route path="/test222" element={<Test222 />} />
        <Route path="/test333" element={<Test333 />} />
      </Routes>
    </div>
  );
}

export default App;
