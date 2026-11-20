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
        image: "assets/fx-members.png",
        imageAlt: "会員管理画面",
        imageAlt_en: "Member management screen",
      },
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
  {
    "id": "hostess-club-management",
    "title": "接待飲食店 業務管理システム",
    "title_en": "Hospitality Venue Management System",
    "description": "スタッフの出勤、顧客情報、売上、給与を一元管理する業務システムです。指名や同伴の手当を含む給与計算や、売上ランキングの出力を自動化しました。",
    "description_en": "A business application that centralizes staff attendance, customer records, sales, and payroll. It automates payroll calculations, including bonuses for customer requests and accompanied visits, and generates sales rankings.",
    "technologies": "Microsoft Access / Excel VBA / SQL",
    "features": [
      "スタッフ登録・出勤管理",
      "顧客登録・来店履歴と利用状況の分析",
      "スタッフ別・顧客別の売上管理",
      "指名・同伴手当を含む給与計算と給与明細の出力",
      "週間・月間のスタッフ別売上ランキング出力"
    ],
    "features_en": [
      "Staff registration and attendance tracking",
      "Customer records and analysis of visit and spending patterns",
      "Sales tracking by staff member and customer",
      "Payroll calculations including bonuses for customer requests and accompanied visits, plus payslip generation",
      "Weekly and monthly staff sales ranking reports"
    ],
    "role": "業務データベース設計、アプリケーション開発、帳票出力の自動化。",
    "role_en": "Business database design, application development, and report automation.",
    "image": "assets/project-02/main-menu.png",
    "imageAlt": "メインメニュー",
    "imageAlt_en": "Main menu",
    "screenshots": [
      {
        "image": "assets/project-02/main-menu.png",
        "imageAlt": "メインメニュー",
        "imageAlt_en": "Main menu"
      },
      {
        "image": "assets/project-02/customer-staff.png",
        "imageAlt": "顧客・スタッフ登録画面",
        "imageAlt_en": "Customer and staff registration"
      },
      {
        "image": "assets/project-02/staff-sales.png",
        "imageAlt": "スタッフ別売上管理画面",
        "imageAlt_en": "Sales records by staff member"
      },
      {
        "image": "assets/project-02/daily-sales.png",
        "imageAlt": "日別・スタッフ別売上入力画面",
        "imageAlt_en": "Daily sales entry by staff member"
      },
      {
        "image": "assets/project-02/customer-sales.png",
        "imageAlt": "顧客別売上管理画面",
        "imageAlt_en": "Sales records by customer"
      },
      {
        "image": "assets/project-02/monthly-payroll.png",
        "imageAlt": "スタッフ別月次売上・給与管理画面",
        "imageAlt_en": "Monthly sales and payroll by staff member"
      },
      {
        "image": "assets/project-02/monthly-record-edit.png",
        "imageAlt": "スタッフ別月次勤務・給与記録の修正画面",
        "imageAlt_en": "Monthly attendance and payroll record editor"
      }
    ]
  },
  {
    "id": "vehicle-crash-simulation-parameters",
    "title": "車両衝突シミュレーション 試験条件設定システム",
    "title_en": "Test Parameter Configuration System for Vehicle Crash Simulation",
    "description": "車両衝突シミュレーションの試験条件をExcel上で確認・編集し、変更した条件で試験を実行できるようにしたシステムです。XMLの読み込みから試験の起動までを一連の操作にまとめ、試験条件を変更して再実行する際の手作業を減らしました。",
    "description_en": "An Excel VBA application that lets users review and edit vehicle crash simulation parameters and run the simulation with the updated settings. It connects XML import, editing, export, and simulator launch in a single workflow, reducing manual work when changing settings and rerunning tests.",
    "technologies": "Microsoft Excel / VBA / XML",
    "features": [
      "試験条件を記録したXMLファイルをVBAで解析しExcelに読み込み",
      "座標などのパラメータをExcel上に表示し、図を参照しながら確認・編集",
      "変更した条件をVBAでXML内に書き戻し",
      "更新した条件でシミュレーションソフトをVBAで起動"
    ],
    "features_en": [
      "Parse XML files with VBA and load the test parameters into Excel",
      "Review and edit coordinates and other parameters in Excel with reference diagrams",
      "Use VBA to write the updated test parameters back to the XML file",
      "Use VBA to launch the simulator with the updated test parameters"
    ],
    "role": "Excel VBAアプリケーションの新規開発を単独で担当。XMLの入出力、編集画面、シミュレーションソフトの起動連携を実装。",
    "role_en": "Sole developer of the Excel VBA application. Implemented XML import and export, the editing interface, and integration to launch the simulator.",
    "image": "assets/project-03/workflow.png",
    "imageAlt": "試験条件のXML取込から試験実行までの流れ（公開用の模式図）",
    "imageAlt_en": "Workflow from XML test parameter import to simulation execution (illustration for publication)",
    "screenshots": [
      {
        "image": "assets/project-03/workflow.png",
        "imageAlt": "試験条件のXML取込から試験実行までの流れ（公開用の模式図）",
        "imageAlt_en": "Workflow from XML test parameter import to simulation execution (illustration for publication)"
      }
    ]
  },
];
