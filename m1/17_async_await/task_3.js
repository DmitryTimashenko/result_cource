const ALBUMS_URL = 'https://jsonplaceholder.typicode.com/albums';
const container = document.getElementById('data-container');
const loadingSpan = document.getElementById('loader');

const toggleHidden = (element) => {
    const isHidden = element.hasAttribute('hidden');
    if (isHidden) {
        element.removeAttribute('hidden');
    } else {
        element.setAttribute('hidden', '');
    }
}

const buildAlbumsElement = (albums) => {
    const listElement = document.createElement('ol');
    albums.forEach(album => {
      const albumItem = document.createElement('li');
      albumItem.textContent = album.title;
      listElement.appendChild(albumItem);
    });
    
    container.innerHTML = '';
    container.appendChild(listElement);
}

const renderAlbums =async () => {
   
  toggleHidden(loadingSpan);

  try {
    const response = await fetch(ALBUMS_URL);
    if (!response.ok) {
      throw new Error('Failed to fetch albums');
    }
    const albums = await response.json();
    buildAlbumsElement(albums)
    
  } catch (error) {
    container.innerHTML = 'Произошла ошибка в получении данных об альбомах...';
    
  } finally {
    toggleHidden(loadingSpan);
  }
}

renderAlbums();