document.getElementById("omikujiButton").addEventListener("click", function() {
    // 副業リストとリンク
    const sideJobs = [
        { 
            name: "せどり", 
            emoji: "💰", 
            description: "安く仕入れて高く売るビジネス。",
            linkText: "せどり関連のおすすめ動画はこちら！",
            linkURL: "https://youtube.com/playlist?list=PLpwLNivKud-gkR8BXDy9_EgKfOB7E0XAw&si=Fz-snqdvZjPvCl-Q"
        },
        { 
            name: "アフィリエイトブログ", 
            emoji: "💻", 
            description: "ブログ運営で広告収入を得る副業。",
            linkText: "ブログのおすすめ動画はこちら！",
            linkURL: "https://youtube.com/playlist?list=PLpwLNivKud-gAJAgveJjARv5M4uAVrQHK&si=DZVOdRb7xJ0zJ1Vc"
        },
        { 
            name: "Webライター", 
            emoji: "✍️", 
            description: "記事執筆で収益化する仕事。",
            linkText: "ライティングスキルを学ぶならこちら！",
            linkURL: "#"
        },
        { 
            name: "プログラミング", 
            emoji: "💻", 
            description: "ソフトウェアやアプリの開発で稼ぐ仕事。",
            linkText: "プログラミング学習ならこちら！",
            linkURL: "#"
        },
        // 他の副業も同様に追加...
    ];

    // ランダムに副業を選択
    const randomJob = sideJobs[Math.floor(Math.random() * sideJobs.length)];

    // 結果表示用HTML
    let resultHTML = `
        <p>あなたにおすすめの副業は「<strong>${randomJob.name}</strong>」${randomJob.emoji}です！</p>
        <p>${randomJob.description}</p>
    `;

    // アフィリエイトリンクまたは関連リンクを追加
    resultHTML += `
        <div class="link-container">
            <a href="${randomJob.linkURL}" target="_blank">${randomJob.linkText}</a>
        </div>
    `;

    // 結果エリアに表示
    document.getElementById("resultArea").innerHTML = resultHTML;
});
