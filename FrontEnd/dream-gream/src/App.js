import './App.css';
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import PostSubject from './pages/Posting/postSubject';
import PostViewImage from './pages/Posting/postViewImage';
import PostDetail from './pages/Posting/postDetail';
import LogIn from './pages/members/Logintest';
import OAuth2RedirectHandler from './pages/members/OAuth2RedirectHandler';
import ProfileEdit from './pages/members/ProfileEdit';
import SignupGenderBirth from './pages/members/SiguUp';

function App() {
  return (
    <div className='App'>
    <Routes>
      <Route path="/logIn" element={<LogIn />} />
      <Route path="/oauth2/redirect" element={<OAuth2RedirectHandler />} />
      <Route path="/Siginupgenderbirth" element={<SignupGenderBirth />} />
      <Route path="/profileedit" element={<ProfileEdit />} />
      <Route path="/follow" element={<followUser />} />
      <Route path="/following" element={<followingUser />} />
      <Route path="/findmember" element={<findMember />} />
      <Route path="/cheerupfeed" element={<cheerUpFeed />} />
      <Route path="/acheivefeed" element={<acheiveFeed />} />
      <Route path="/feed/:id" element={<feedDetail />} />
      <Route path="/post" element={<PostSubject />} />
      <Route path="/postdetail" element={<PostDetail />} />
      <Route path="/image" element={<PostViewImage />} />
      <Route path="/myfeed" element={<myFeed />} />
      <Route path="/about" element={<viewAbout />} />

    </Routes>
  </div>
  );
}

export default App;
