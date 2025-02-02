document.getElementById("omikujiButton").addEventListener("click", function() {
    // 副業リストとアフィリエイトリンク
    const sideJobs = [
        { 
            name: "せどり", 
            description: "商品を安く仕入れて高く売るビジネス。", 
            link: "https://affiliate.rakuten.co.jp/example-sedori" 
        },
        { 
            name: "アフィリエイトブログ", 
            description: "ブログで収益化を目指すストック型副業。", 
            link: "https://affiliate.rakuten.co.jp/example-blog" 
        },
        { 
            name: "Webライター", 
            description: "文章力を活かして記事作成で稼ぐ仕事。", 
            link: "https://affiliate.rakuten.co.jp/example-writer" 
        },
        { 
            name: "オンライン秘書", 
            description: "リモートで事務作業やスケジュール管理を行う仕事。", 
            link: "https://affiliate.rakuten.co.jp/example-secretary" 
        },
        { 
            name: "Webデザイン", 
            description: "ホームページやバナーのデザイン制作。", 
            link: "https://affiliate.rakuten.co.jp/example-design" 
        },
        { 
            name: "プログラミング", 
            description: "アプリやシステム開発で高収入を狙えるスキル。", 
            link: "https://affiliate.rakuten.co.jp/example-programming" 
        },
        { 
            name: "LINE構築", 
            description: "LINE公式アカウントの運用やシステム構築。", 
            link: "https://affiliate.rakuten.co.jp/example-line" 
        },
        { 
            name: "動画編集", 
            description: "YouTubeや広告動画の編集で稼ぐ仕事。", 
            link: "https://affiliate.rakuten.co.jp/example-video" 
        },
        { 
            name: "YouTube", 
            description: "動画配信で広告収入を得る副業。趣味を活かせます。", 
            link: "https://affiliate.rakuten.co.jp/example-youtube" 
        },
        { 
            name: "ライバー", 
            description: "ライブ配信で視聴者から投げ銭をもらう仕事。", 
            link: "https://affiliate.rakuten.co.jp/example-liver" 
        },
        { 
            name: "Instagram運用", 
            description: "SNSマーケティングやアカウント運用代行。", 
            link: "https://affiliate.rakuten.co.jp/example-instagram" 
        },
        { 
            name: "コンテンツ販売", 
            description: "デジタル商品やノウハウを販売する仕事。", 
            link: "https://affiliate.rakuten.co.jp/example-content" 
        },
        { 
            name: "ハンドメイド", 
            description: "手作りアイテムを販売して収益化する副業。", 
            link: "https://affiliate.rakuten.co.jp/example-handmade" 
        },
        { 
            name: "コンサルタント",  
            description: "専門知識を活かしてアドバイスを提供する仕事。",  
            link: "https://affiliate.rakuten.co.jp/example-consultant"  
        },
        {  
            name: "転職サポート",  
            description: "求職者と企業をつなぐサポート業務。",  
            link: "https://affiliate.rakuten.co.jp/example-career"  
        }
    ];

    // ランダムに副業を選択
    const randomJob = sideJobs[Math.floor(Math.random() * sideJobs.length)];

    // 結果表示
    document.getElementById("resultArea").innerHTML = `
        <p>あなたにおすすめの副業は「<strong>${randomJob.name}</strong>」です！</p>
        <p>${randomJob.description}</p>
        <a href="${randomJob.link}" target="_blank">詳細はこちら</a>
    `;
});
