import React from 'react';
import Navigation from './components/Navigation';
import LectureList from './components/LectureList';

function Renderer() {
  return (
    <div id="wrapper">
      <Navigation />
      <LectureList />
    </div>
  );
}

export default Renderer;
