import React, { useState } from "react"
import ReactDOM from "react-dom";
import Panel from "./panel"


function Header() {
  const [background, setBackground] = useState("#635FC7");

  const handleClick = (e: any) => {
    fetch('/src/data.json')
      .then((text) => text.json())
      .then((data) => {
        let division = e.target.innerText;
        let index: any;
        let indexJSON = data.boards.find(function(item: any, i:number){
          if (item.name === division) {
            index = i;
          }
        });

        let isActive = !(data.boards[index].columns.length > 0);
        if (isActive) {
            setBackground("#A8A4FF");
        }

        const menu: any = document.querySelector('nav')
        const downchevron: any = document.querySelector('.downchevron');


        if (menu.style.display === "none") {
          document.body.style.overflow = "hidden";
          menu.style.display = "flex";
          downchevron.style.transform = "rotate(180deg)";
        } else {
          document.body.style.overflow = "auto"
          menu.style.display = "none";
          downchevron.style.transform = "rotate(0deg)";
        }
      })
  }

    return (
      <header>
        <div className="header"></div>
        <div className="left-info"> 
          <div className="box1">
            <img src="/logo-mobile.svg" alt="The logo of the brand." className="logo" />
          </div>
          <div className="box2">
            <img src="/logo-dark.svg" alt="" className="logotype" />
          </div>
          <Panel />
        </div>
        <div className="right-info">
          <div className="container">
            <div className="board-name" onClick={handleClick}>
              <h1>Platform Launch</h1>
              <img src="/icon-chevron-down.svg" alt="The down chevron." className="downchevron"/>
            </div>
            <div className="rightright-info">
              <button className="addTask" style={{backgroundColor: background}}>
                <img src="/icon-add-task-mobile.svg" alt="Plus" className="plus" />
                <p className="addNewTask">+ Add New Task</p>
              </button>
              <img src="/icon-vertical-ellipsis.svg" alt="Drop down menu." />
            </div>
          </div>
        </div>
      </header>
    )
}

export default Header