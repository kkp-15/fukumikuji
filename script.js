function drawFortune() {
    let results = ["アフィリエイトブログ", "Webライター", "プログラミング", "Webデザイン"];
    let randomIndex = Math.floor(Math.random() * results.length);
    let selectedResult = results[randomIndex];

    showResult(selectedResult);
}

function showResult(result) {
    let resultElement = document.getElementById("result");
    let affiliateBanner = document.getElementById("affiliate-banner");

    // 結果を画面に表示
    resultElement.textContent = result;
    resultElement.classList.remove("show"); // アニメーション用
    setTimeout(() => {
        resultElement.classList.add("show"); // アニメーション開始
    }, 100);

    // 「プログラミング」が出たらアフィリエイトを表示、それ以外は非表示
    if (result === "プログラミング") {
        affiliateBanner.style.display = "block";
    } else {
        affiliateBanner.style.display = "none";
    }
}

// 初回ページ読み込み時にアフィリエイトを非表示にする（予防策）
document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("affiliate-banner").style.display = "none";
});
