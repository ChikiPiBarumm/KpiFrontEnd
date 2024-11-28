import React, { useState, useEffect } from "react";

const Content = () => {
  const [clickCount, setClickCount] = useState(0);
  const targetIndex = 8;

  useEffect(() => {
    const elements = document.querySelectorAll("li, p, h2, ol li");

    elements.forEach((element, index) => {
      const handleClick = (event) => {
        const newClickCount = clickCount + 1;
        setClickCount(newClickCount);
        const isEvenClick = newClickCount % 2 === 0;

        if (index + 1 === targetIndex) {
          event.target.style.backgroundColor = isEvenClick ? "white" : "lightblue";
          event.target.style.color = isEvenClick ? "black" : "red";
        }
        else if (index + 1 === targetIndex + 1) {
          event.target.style.backgroundColor = isEvenClick ? "white" : "lightgreen";
          event.target.style.color = isEvenClick ? "black" : "blue";
        }
      };

      element.addEventListener("click", handleClick);

      return () => {
        element.removeEventListener("click", handleClick);
      };
    });
  }, [clickCount]);

  return (
    <div>
      <h2>Черненко Максим Сергійович</h2>
      <p>Місце народження: 13 травня 2005; м. Київ</p>
      <p>
        Освіта: Гімназія №178 м. Київ;<br />
        НТУУ "КПІ", м. Київ
      </p>
      <p>Хоббі: <b>(клікніть Музика і Комп'ютерні ігри для перевірки роботи скрипту)</b></p>
      <ul>
        <li>Музика</li>
        <li>Комп'ютерні ігри</li>
        <li>Автомобілі</li>
        <li>Програмування</li>
      </ul>
      <p>Улюблені фільми:</p>
      <ol>
        <li>Джокер</li>
        <li>Інтерстеллар</li>
        <li>Оппенгеймер</li>
        <li>Месники: Фінал</li>
      </ol>
      <p>
        Рим (італ. Roma, лат. Rome) — столиця Італії з 1870, адміністративний
        центр провінції Рим та області Лаціо. Населення понад 2,76 млн осіб,
        це найбільша за територією і кількістю жителів комуна країни.
      </p>
    </div>
  );
};

export default Content;
