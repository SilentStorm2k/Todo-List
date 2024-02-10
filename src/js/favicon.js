import favicon from '../images/logo.svg';

export default function addFavicon() {
    const head = document.querySelector("head");
    const linkToFavicon = document.createElement('link');
    linkToFavicon.href = favicon;
    linkToFavicon.rel = 'icon';
    linkToFavicon.type = 'image/x-icon';
    head.appendChild(linkToFavicon);
}