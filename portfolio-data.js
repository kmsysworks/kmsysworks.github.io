// 1案件につき1ブロック。追加時はブロックを複製し、idを変更してください。
// title / description / features / role は日本語版、_en 付きは英語版です。
// 画像を掲載する場合は image にサイトのルートからの相対パスを指定します。
window.KM_PORTFOLIO = [
  {
    id: "fx-member-agency-management",
    title: "外国為替投資ビジネス 会員・代理店管理システム",
    title_en: "Member and Agency Management System for an FX Investment Business",
    description: "外国為替投資ビジネスにおける会員情報、紹介者との関係、代理店資格、投資口座の入出金履歴などを一元管理する業務システムです。",
    description_en: "A business application that centralizes member records, referral relationships, agency eligibility, and deposit and withdrawal histories for investment accounts.",
    technologies: "Microsoft Access / VBA / SQL",
    features: [
      "会員管理",
      "会員紹介者管理",
      "代理店管理",
      "入出金管理",
      "ユーザー管理",
      "代理店報酬の計算（別システム）",
    ],
    features_en: [
      "Member management",
      "Member referrer management",
      "Agency management",
      "Deposit and withdrawal management",
      "User management",
      "Agency commission calculation (handled by a separate system)",
    ],
    role: "システム設計、データベース設計、アプリケーション開発、テスト。",
    role_en: "System design, database design, application development, and testing.",
    image: "assets/fx-members.png",
    imageAlt: "会員管理画面",
    imageAlt_en: "Member management screen",
    screenshots: [
      {
        image: "assets/fx-agencies.png",
        imageAlt: "代理店管理画面",
        imageAlt_en: "Agency management screen",
      },
      {
        image: "assets/fx-transactions.png",
        imageAlt: "入出金管理画面",
        imageAlt_en: "Deposit and withdrawal management screen",
      },
      {
        image: "assets/fx-users.png",
        imageAlt: "ユーザー管理画面",
        imageAlt_en: "User management screen",
      },
    ],
  },
];
