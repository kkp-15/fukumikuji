function drawFortune() {
    let results = ["アフィリエイトブログ", "Webライター", "プログラミング", "Webデザイン"];
    let randomIndex = Math.floor(Math.random() * results.length);
    let selectedResult = results[randomIndex];

    showResult(selectedResult);
}

function showResult(result) {
    document.getElementById("result").textContent = result;

    // 「プログラミング」の場合だけアフィリエイトを表示
    if (result === "プログラミング") {
        document.getElementById("affiliate-banner").style.display = "block";
    } else {
        document.getElementById("affiliate-banner").style.display = "none";
    }
}
