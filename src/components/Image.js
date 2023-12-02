import React, { useState } from 'react';

// Image component as a function
function Image() {
    const [imageUrl, setImageUrl] = useState('https://upload.wikimedia.org/wikipedia/commons/thumb/7/73/%D0%9D%D1%96%D1%87%D0%BD%D0%B8%D0%B9_%D0%BF%D1%80%D0%BE%D1%81%D0%BF%D0%B5%D0%BA%D1%82.jpg/1280px-%D0%9D%D1%96%D1%87%D0%BD%D0%B8%D0%99_%D0%BF%D1%80%D0%BE%D1%81%D0%BF%D0%B5%D0%9A%D1%82.jpg');
    const [width, setWidth] = useState(1000);
  
    const addImage = () => {
      const newImageUrl = prompt('Введіть URL зображення:');
      if (newImageUrl) {
        setImageUrl(newImageUrl);
      }
    };
  
    const zoomIn = () => {
      setWidth(width * 1.2);
    };
  
    const zoomOut = () => {
      setWidth(width / 1.2);
    };
  
    const deleteImage = () => {
      const confirmation = window.confirm('Ви впевнені, що хочете видалити зображення?');
      if (confirmation) {
        setImageUrl('');
      }
    };
  
    return (
      <div class="image-content">
        <p>
          <a href="https://zp.gov.ua/uk">
            <img
              id="main-image"
              src={imageUrl}
              alt="Україна, Запоріжжя"
              style={{ width: `${width}px`}} />
          </a>
        </p>
        <button class="action-button" onClick={addImage}>Додати</button>
        <button class="action-button" onClick={zoomIn}>Збільшити</button>
        <button class="action-button" onClick={zoomOut}>Зменшити</button>
        <button class="action-button" onClick={deleteImage}>Видалити</button>
      </div>
    );
}

export default Image
