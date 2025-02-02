document.getElementById("omikujiButton").addEventListener("click", function() {
    // おすすめの副業リストと関連動画リンク
    const sideJobs = [
        {
            name: "せどり",
            description: "商品を安く仕入れて高く売る商売の基本です。",
            link: "https://www.youtube.com/watch?v=epsGsinWEGI"
        },
        {
            name: "動画編集",
            description: "需要が高いスキルで、初心者でも始めやすい！",
            link: "https://www.youtube.com/watch?v=_hoMbjn8eM4"
        },
        {
            name: "プログラミング",
            description: "高単価案件が多く、学べば稼げるスキル。",
            link: "https://www.youtube.com/watch?v=OsruPIfHa6U"
        },
        {
            name: "ブログ・アフィリエイト",
            description: "ストック収入を目指せる初心者向けの副業。",
            link: "https://www.youtube.com/watch?v=hQWyEacqfyU"
        },
        {
            name: "ウェブデザイン",
            description: "クリエイティブな仕事で在宅でも可能。",
            link: "https://www.youtube.com/watch?v=epsGsinWEGI"
        }
    ];
    
    // ランダムで副業を選択
    const randomJob = sideJobs[Math.floor(Math.random() * sideJobs.length)];
    
    // 結果を表示
    document.getElementById("resultArea").innerHTML = `
        <p>あなたにおすすめの副業は「<strong>${randomJob.name}</strong>」です！</p>
        <p>${randomJob.description}</p>
        <a href="${randomJob.link}" target="_blank">関連動画を見る</a>
    `;
});
