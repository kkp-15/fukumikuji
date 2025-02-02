document.getElementById("omikujiButton").addEventListener("click", function() {
    const sideJobs = [
        { name: "せどり", emoji: "💰", description: "安く仕入れて高く売るビジネス。" },
        { name: "アフィリエイトブログ", emoji: "💻", description: "ブログ運営で広告収入を得る副業。" },
        { name: "Webライター", emoji: "✍️", description: "記事執筆で収益化する仕事。" },
        { name: "オンライン秘書", emoji: "📋", description: "リモートで秘書業務を行う仕事。" },
        { name: "Webデザイン", emoji: "🎨", description: "Webサイトのデザインや構築を行う仕事。" },
        { name: "プログラミング", emoji: "💻", description: "ソフトウェアやアプリの開発で稼ぐ仕事。" },
        { name: "LINE構築", emoji: "📱", description: "LINE公式アカウントの構築・運営代行。" },
        { name: "動画編集", emoji: "🎥", description: "動画のカットや字幕追加などの編集作業。" },
        { name: "YouTube", emoji: "🎬", description: "動画配信で視聴者を獲得し収益化する仕事。" },
        { name: "ライバー", emoji: "🎤", description: "ライブ配信で視聴者と交流し収益化する仕事。" },
        { name: "SNS運用代行", emoji: "📲", description: "SNS投稿や運用代行で収益化する仕事。" },
        { name: "コンテンツ販売", emoji: "📦", description: "デジタル商品の制作・販売で稼ぐ仕事。" },
        { name: "ハンドメイド", emoji: "🧶", description: "手作り品を制作・販売して収益化する仕事。" },
        { name: "スキル販売", emoji: "🤝", description: "家事代行やスポーツ指導などスキルを活かす仕事。" },
        { name: "コンサル", emoji: "📊", description: "専門知識を提供し個人や企業を支援する仕事。" },
        { name: "Webマーケティング", emoji: "📈", description: "集客や販売促進のサポートを行う仕事。" }
    ];

    const randomJob = sideJobs[Math.floor(Math.random() * sideJobs.length)];

    document.getElementById("resultArea").innerHTML = `
        <p>あなたにおすすめの副業は「<strong>${randomJob.name}</strong>」${randomJob.emoji}です！</p>
        <p>${randomJob.description}</p>
    `;
});
