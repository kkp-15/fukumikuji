document.getElementById("omikujiButton").addEventListener("click", function() {
    // 副業リストと説明
    const sideJobs = [
        { name: "せどり", description: "安く仕入れて高く売るビジネス。" },
        { name: "アフィリエイトブログ", description: "ブログ運営で広告収入を得る副業。" },
        { name: "Webライター", description: "記事執筆で収益化する仕事。" },
        { name: "オンライン秘書", description: "リモートで秘書業務を行う仕事。" },
        { name: "Webデザイン", description: "Webサイトのデザインや構築を行う仕事。" },
        { name: "プログラミング", description: "ソフトウェアやアプリの開発で稼ぐ仕事。" },
        { name: "LINE構築", description: "LINE公式アカウントの構築・運営代行。" },
        { name: "動画編集", description: "動画のカットや字幕追加などの編集作業。" },
        { name: "YouTube", description: "動画配信で視聴者を獲得し収益化する仕事。" },
        { name: "ライバー", description: "ライブ配信で視聴者と交流し収益化する仕事。" },
        { name: "SNS/SNS運用代行", description: "SNS投稿や運用代行で収益化する仕事。" },
        { name: "コンテンツ販売", description: "デジタル商品の制作・販売で稼ぐ仕事。" },
        { name: "ハンドメイド", description: "手作り品を制作・販売して収益化する仕事。" },
        { name: "スキル販売", description: "家事代行やスポーツ指導などスキルを活かす仕事。" },
        { name: "コンサル", description: "専門知識を提供し個人や企業を支援する仕事。" },
        { name: "Webマーケティング", description: "集客や販売促進のサポートを行う仕事。" }
    ];

    // ランダムに副業を選択
    const randomJob = sideJobs[Math.floor(Math.random() * sideJobs.length)];

    // 結果表示
    document.getElementById("resultArea").innerHTML = `
        <p>あなたにおすすめの副業は「<strong>${randomJob.name}</strong>」です！</p>
        <p>${randomJob.description}</p>
    `;
});
