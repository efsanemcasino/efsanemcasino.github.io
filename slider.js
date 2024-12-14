document.addEventListener("DOMContentLoaded", () => {
    const bannerSection = document.querySelector(".banner-section");
    const images = [
        { src: "img/banner/banner1.png", link: "https://betebak.ws/OrTCy" },
        { src: "img/banner/banner2.png", link: "https://betebak.ws/OrTCy" },
        { src: "img/banner/banner3.png", link: "https://betebak.ws/OrTCy" },
        { src: "img/banner/banner4.png", link: "https://betebak.ws/OrTCy" },
        { src: "img/banner/banner5.png", link: "https://betebak.ws/OrTCy" },
        { src: "img/banner/banner6.png", link: "https://betebak.ws/OrTCy" },
        { src: "img/banner/banner7.png", link: "https://betebak.ws/OrTCy" },
        { src: "img/banner/banner8.png", link: "https://betebak.ws/OrTCy" },
        { src: "img/banner/banner9.png", link: "https://betebak.ws/OrTCy" },
        { src: "img/banner/banner10.png", link: "https://betebak.ws/OrTCy" }
    ];
    let currentIndex = 0;
    
    function setInitialBannerBackground() {
        bannerSection.style.backgroundImage = `url('${images[0].src}')`;
        // İlk resim için tıklama işlevini ayarla
        bannerSection.onclick = () => {
            window.open(images[0].link, '_blank');
        };
    }
    
    setInitialBannerBackground();
    
    if (images.length > 1) {
        setInterval(() => {
            currentIndex = (currentIndex + 1) % images.length;
            bannerSection.style.backgroundImage = `url('${images[currentIndex].src}')`;
            bannerSection.onclick = () => {
                window.open(images[currentIndex].link, '_blank');
            };
        }, 7000);
    }
});