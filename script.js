document.getElementById("omikuji-button").addEventListener("click", function() {
    let fortunes = ["アフィリエイトブログ", "Webライター", "オンライン秘書", "Webデザイン", "プログラミング", "LINE構築"];
    let randomIndex = Math.floor(Math.random() * fortunes.length);
    let result = fortunes[randomIndex];
    showResult(result);
});

function showResult(result) {
    let resultElement = document.getElementById("result");
    let affiliateBanner = document.getElementById("affiliate-banner");

    resultElement.textContent = result;
    resultElement.classList.remove("show");
    setTimeout(() => {
        resultElement.classList.add("show");
    }, 100);

    if (result === "プログラミング") {
        affiliateBanner.innerHTML = `
            <p>🎉 おめでとう！あなたにピッタリの副業は「プログラミング」！</p>
            <a href="https://px.a8.net/svt/ejp?a8mat=44YP7J+ESUZ76+5IZ2+5YRHE" rel="nofollow" target="_blank" class="affiliate-btn">
                👉 いますぐスキルを身につける！
            </a>
            <img border="0" width="1" height="1" src="https://www11.a8.net/0.gif?a8mat=44YP7J+ESUZ76+5IZ2+5YRHE" alt="">
        `;
        affiliateBanner.style.display = "block";
    } else {
        affiliateBanner.style.display = "none";
    }
}
