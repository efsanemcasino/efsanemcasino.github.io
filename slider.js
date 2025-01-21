document.addEventListener("DOMContentLoaded", () => {
    const bannerSection = document.querySelector(".banner-section");
    const images = [
        { src: "img/banner/banner1.png", link: "http://grbetsaffiliate1.com/links/?btag=1659706" },
        { src: "img/banner/banner2.png", link: "http://grbetsaffiliate1.com/links/?btag=1659706" },
        { src: "img/banner/banner3.png", link: "http://grbetsaffiliate1.com/links/?btag=1659706" }
    ];
    let currentIndex = 0;
    
    function setInitialBannerBackground() {
        bannerSection.style.backgroundImage = `url('${images[0].src}')`;
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
