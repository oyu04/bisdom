import React, { useState } from "react";
import "./Delete.css"; // 外部CSSファイルをインポート

  function Delete(){
    const [message, setMessage] = useState("");
/*
    //サーバから投稿タイトルを取得する→URL未定義
    
    const fetchData_detail = async () => {
        try {
          const response = await fetch("http://127.0.0.1:8080/", {
            method: "GET",
          });
          if (!response.ok) {
            throw new Error("Network response was not ok");
          }
    
          const data = await response.text();
          console.log("Deleted data:", data); // コンソールにデータを表示
          setMessage(data ? JSON.stringify(data) : "No data available"); // dataが空の場合、デフォルトメッセージを設定
          setItems(data.items); // サーバーから取得したデータをセット
        } catch (error) {
          console.error("Fetch error: ", error);
          setMessage("Error occurred while deleting");
        }
      };
*/

      const fetchData_delete = async () => {
        try {
          const response = await fetch("http://127.0.0.1:8080/delete", {
            method: "DELETE",
          });
          if (!response.ok) {
            throw new Error("Network response was not ok");
          }
    
          const data = await response.text();
          console.log("Deleted data:", data); // コンソールにデータを表示
          setMessage(data ? JSON.stringify(data) : "No data available"); // dataが空の場合、デフォルトメッセージを設定
        } catch (error) {
          console.error("Delete error: ", error);
          setMessage("Error occurred while deleting");
        }
      }

    const [items] = useState([
        "test1",
        "test2",
        "test3",
        "test4",
        "test5",
        "test6",
        "test7",
        "test8",
        "test9",
        "test10",
      ]);

    return (
        <>
          <div className="narrage-list">ナレッジリスト</div>
          <div className="delete-container">
            {items.map((item, index) => (
              <div key={index} className="item-row">
                <div className="narrage-title">
                  <div>{item}</div>
                </div>
                <div>
                <button 
                  className="detail-button"
                  /*onClick={fetchData_detail}*/
                  >
                  詳細
                </button>
                  <button
                  className="delete-button"
                  onClick={fetchData_delete}
                  >
                    削除
                  </button>
                </div>
              </div>
            ))}
          </div>
        </>
      );
    }

export default Delete;