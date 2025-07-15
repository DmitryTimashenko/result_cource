const API_URL = 'https://api.slingacademy.com/v1/sample-data/photos/';
const dataContainer = document.getElementById('data-container');
const loadingSpan = document.getElementById('loader');

const toggleHidden = (element) => {
    const isHidden = element.hasAttribute('hidden');
    if (isHidden) {
        element.removeAttribute('hidden');
    } else {
        element.setAttribute('hidden', '');
    }
}

const createPhotoItem = (photoData) => {
    const photoItem = document.createElement('li');
    photoItem.className = 'photo-item';

    const image = document.createElement('img');
    image.className = 'photo-item__image';
    image.src = photoData.url;
    image.alt = photoData.title;

    const title = document.createElement('h3');
    title.className = 'photo-item__title';
    title.textContent = photoData.title;

    photoItem.append(image, title);
    return photoItem;
}

const getFastestLoadedPhoto = (ids) => {
    toggleHidden(loadingSpan);

    const photoPromises = ids.map(id => {
      return fetch(`${API_URL}${id}`)
        .then(response => {
          if (!response.ok) {
            throw new Error(`Фото ${id} не загружается: ${response.status}`);
          }
          return response.json();
        })
        .then(data => {
          if (!data?.photo?.url || !data?.photo?.title) {
            throw new Error(`Неверные данные для фото ${id}`);
          }
          return data.photo;
        })
        .catch(error => {
          console.error(`Ошибка загрузки фото ${id}:`, error);
          return Promise.reject(error);
        });
    });

    Promise.race(photoPromises)
      .then(fastestPhoto => {
        dataContainer.appendChild(createPhotoItem(fastestPhoto));
      })
      .catch(error => {
        console.error('Ошибка загрузки фото:', error);
        loadingSpan.textContent = 'Ошибка загрузки фото';
      })
      .finally(() => {
        toggleHidden(loadingSpan);
      });

}


getFastestLoadedPhoto([60,12,55]);