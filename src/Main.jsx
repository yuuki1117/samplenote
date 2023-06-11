import React from "react";

const Main = () => {
  return (
    <div className="main">
      Main
      <div className="note-edit">
        <input type="text"></input>
        <textarea id="" placeholder="ノート内容"></textarea>
      </div>
      <div className="note-preview">
        <h1 className="preview-title">タイトル</h1>
        <div className="markdown-preview">ノート内容</div>
      </div>
    </div>
  );
};

export default Main;
