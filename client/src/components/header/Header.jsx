import "./header.css";

export default function Header() {
  return (
    <div className="header">
      <div className="headerTitles">
        <span className="headerTitleSm">Share your views...</span>
        <span className="headerTitleLg">Blog</span>
      </div>
      <img
        className="headerImg"
        src="https://plus.unsplash.com/premium_photo-1684581214880-2043e5bc8b8b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGJsb2clMjBiYWNrZ3JvdW5kfGVufDB8fDB8fHww&w=1000&q=80"
     
        alt=""
      />
    </div>
  );
}
