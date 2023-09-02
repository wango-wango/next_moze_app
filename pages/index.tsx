import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { init } from "src/store/reducer/calendarReducer";
import { DailyData } from "src/store/reducer/calendarReducer";

// 在這裡引入 node.js 的內容 不會被 render 到 client 端
import fs from "fs/promises";
import path from "path";
import { Reducer } from "src/store/store";

export default function Home({ data }: { data: DailyData[] }) {
  const dispatch = useDispatch();
  const calendarStore = useSelector((store: Reducer) => store.calendar);

  // 進入 首頁 就先取得資料並存入 redux 中
  // useEffect(() => {
  //   if (!calendarStore.length) {
  //     dispatch(init(data));
  //   }
  // }, []);

  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-between p-24`}
    >
      This is Home Page.
    </main>
  );
}

export async function getStaticProps() {
  // 使用fs模块读取fakeData.json文件
  const filePath = path.join(
    process.cwd(),
    "public",
    "assets",
    "data",
    "fakeData.json"
  );
  const rawData = await fs.readFile(filePath, "utf-8");
  const data = JSON.parse(rawData);

  // 將資料放入 props:data中
  return {
    props: {
      data,
    },
  };
}
