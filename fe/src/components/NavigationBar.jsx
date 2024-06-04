import { Link } from "react-router-dom";

export default function NavigationBar() {
  return (
    <div className="w-full h-[8vh] flex justify-between items-center bg-gray-200">
      <div className=" w-1/6 text-center">
        <Link to="/">
          <p>로고</p>
        </Link>
      </div>
      <div className=" w-4/6 flex justify-around">
        <Link to="/one1">
          <button>메뉴1</button>
        </Link>
        <Link to="/two">
          <button>메뉴2</button>
        </Link>
        <Link to="/three">
          <button>메뉴3</button>
        </Link>
      </div>
      <div className=" w-1/6 text-center">
        <button>로그인</button>
      </div>
    </div>
  );
}
