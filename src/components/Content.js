import React, { useState } from 'react';

const MyReactComponent = () => {
  const [n, setN] = useState(22);
  const [elementStates, setElementStates] = useState({});

  const handleElementClick = (id) => {
    const currentState = elementStates[id] || { backgroundColor: '', color: '' };

    if ((n % 10) + 1 === id) {
      changeColors(id, 'red', 'white', currentState);
    } else if ((n % 10) + 2 === id) {
      changeColors(id, 'green', 'white', currentState);
    }
  };

  const changeColors = (id, backgroundColor, textColor, currentState) => {
    const element = document.getElementById(`element-${id}`);

    if (element) {
      const currentBackgroundColor = currentState.backgroundColor || getComputedStyle(element).backgroundColor;
      const currentTextColor = currentState.color || getComputedStyle(element).color;

      if (
        currentBackgroundColor !== backgroundColor ||
        currentTextColor !== textColor
      ) {
        element.style.cssText = `background-color: ${backgroundColor}; color: ${textColor};`;
        setElementStates({
          ...elementStates,
          [id]: { backgroundColor, color: textColor },
        });
      } else {
        element.style.cssText = '';
        const newElementStates = { ...elementStates };
        delete newElementStates[id];
        setElementStates(newElementStates);
      }
    }
  };
  return (
    <div>
      <h2 id="element-1" onClick={() => handleElementClick(1)}>
        Жадько Данило Романвич
      </h2>
      <p id="element-2" onClick={() => handleElementClick(2)}>
        Місце народження: 17 березня, 2004 року, м.Запоріжжя
      </p>
      <p id="element-3" onClick={() => handleElementClick(3)}>
        Освіта: Гімназія 28, м.Запоріжжя;<br />НТУУ "КПІ", м.Київ
      </p>
      <p id="element-4" onClick={() => handleElementClick(4)}>
        Хобі
      </p>
      <ul>
        <li id="element-5" onClick={() => handleElementClick(5)}>
          Ігри
        </li>
        <li id="element-6" onClick={() => handleElementClick(6)}>
          Плавання
        </li>
        <li id="element-7" onClick={() => handleElementClick(7)}>
          Волейбол
        </li>
      </ul>

      <p id="element-8" onClick={() => handleElementClick(8)}>
        Три улюблені фільми
      </p>
      <ol>
        <li id="element-9" onClick={() => handleElementClick(9)}>
          Інтерсте́ллар(2014)
        </li>
        <li id="element-10" onClick={() => handleElementClick(10)}>
          Тhe Dark Knight(2008)
        </li>
        <li id="element-11" onClick={() => handleElementClick(11)}>
          Джанґо вільний(2012)
        </li>
      </ol>

      <p id="element-12" onClick={() => handleElementClick(12)}>
        Запоріжжя, розташоване в Україні, є адміністративним центром Запорізької області та шостим за кількістю населення
        містом у країні. Воно розташоване на річці Дніпро, на перетині важливих транспортних коридорів, і виступає як
        індустріальний і культурний центр південної України з розвиненими галузями промисловості та важливими транспортними
        вузлами. Місто впливає на велику територію, включаючи сусідні райони та сільські населені пункти. Також важливо
        відзначити, що Запоріжжя стало мішенню обстрілів під час російського вторгнення в Україну, і вже зареєстрована
        петиція на присвоєння йому почесної відзнаки "Місто-герой України".
      </p>
    </div>
  );
};

export default MyReactComponent;
