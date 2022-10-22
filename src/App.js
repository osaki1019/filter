import "./styles.css";

export default function App() {
  /*
  filter
  与えられた配列のうち、条件に合致する要素を取り出し新しい配列を生成する
  =条件に合致しない要素は削除する
  */
  const words = [
    "spray",
    "limit",
    "elite",
    "exuberant",
    "destruction",
    "present"
  ];

  // 文字の長さが6より小さいものは削除する
  const result = words.filter((word) => word.length < 6);
  console.log(result);

  return (
    <div className="App">
      <h1>filter関数</h1>
      {result.map((val) => (
        <div>{val}</div>
      ))}
    </div>
  );
}
