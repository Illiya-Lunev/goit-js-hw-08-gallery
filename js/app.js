const galleryItems = [
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/14/16/43/himilayan-blue-poppy-4202825__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/14/16/43/himilayan-blue-poppy-4202825_1280.jpg',
    description: 'Hokkaido Flower',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/14/22/05/container-4203677__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/14/22/05/container-4203677_1280.jpg',
    description: 'Container Haulage Freight',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/16/09/47/beach-4206785__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/16/09/47/beach-4206785_1280.jpg',
    description: 'Aerial Beach View',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2016/11/18/16/19/flowers-1835619__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2016/11/18/16/19/flowers-1835619_1280.jpg',
    description: 'Flower Blooms',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2018/09/13/10/36/mountains-3674334__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2018/09/13/10/36/mountains-3674334_1280.jpg',
    description: 'Alpine Mountains',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/16/23/04/landscape-4208571__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/16/23/04/landscape-4208571_1280.jpg',
    description: 'Mountain Lake Sailing',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/17/09/27/the-alps-4209272__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/17/09/27/the-alps-4209272_1280.jpg',
    description: 'Alpine Spring Meadows',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/16/21/10/landscape-4208255__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/16/21/10/landscape-4208255_1280.jpg',
    description: 'Nature Landscape',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/17/04/35/lighthouse-4208843__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/17/04/35/lighthouse-4208843_1280.jpg',
    description: 'Lighthouse Coast Sea',
  },
];

const galleryListRef = document.querySelector(`.js-gallery`);
const modalRef = document.querySelector(`.lightbox__content`);
const modalImgRef = document.querySelector('.lightbox__image');
const buttonRef = document.querySelector('[data-action="close-lightbox"]');
const modalLightBox = document.querySelector(`.lightbox`);
const Overlay = document.querySelector(`.lightbox__overlay`);

const createGalleryList = images => {
  const { preview, description, original } = images;
  return `<li class="gallery__item">
<a
  class="gallery__link"
  href= ${original}
>
  <img
    class="gallery__image"
    src=${preview}
    data-source=${original}
    alt=${description}
  />
</a>
</li>`;
};

const galleryMarkup = galleryItems.map(createGalleryList).join('');

galleryListRef.insertAdjacentHTML('beforeend', galleryMarkup);

galleryListRef.addEventListener(`click`, onOpenClickGallery);
buttonRef.addEventListener(`click`, onClickClose);
modalRef.addEventListener(`click`, closeModal);
Overlay.addEventListener(`click`, onOverlayClick);

function onOpenClickGallery(evt) {
  evt.preventDefault();

  if (evt.target.nodeName !== `IMG`) {
    return;
  }
  if (evt.target.nodeName === 'IMG') {
    modalLightBox.classList.add('is-open');
    modalImgRef.src = evt.target.dataset.source;
    modalImgRef.alt = evt.target.alt;
  }
}

const onEscClick = evt => {
  if (evt.key === 'Escape');
  modalLightBox.classList.remove('is-open');
};

window.addEventListener('keydown', onEscClick);

function onClickClose(evt) {
  evt.preventDefault();

  modalLightBox.classList.remove('is-open');
  modalImgRef.src = ``;
  modalImgRef.alt = ``;
}

function closeModal(evt) {
  if (evt.target === evt.currentTarget) {
    onClickClose();
  }
}

function onOverlayClick(evt) {
  if (evt.currentTarget === evt.target) {
    modalLightBox.classList.remove('is-open');
  }
}
