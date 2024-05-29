<script setup>
import { ref, onMounted } from 'vue'

const currentSection = ref('')

onMounted(() => {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.intersectionRatio > 0) {
        currentSection.value = entry.target.getAttribute('id')
      }
    })
  })
  document.querySelectorAll('article h2').forEach((section) => {
    observer.observe(section)
  })
})
</script>

<template>
  <div class="whitepaper">
    <div class="bg"></div>
    <div class="whitepaper-container">
      <article>
        <h1 class="page-heading">EasyGetCoin Whitepaper</h1>
        <section class="section">
          <h2 id="summary" class="section-header">Summary</h2>
          <p class="section-content">
            Easy Get Coin It is a decentralized gaming platform . On this platform, users can
            experience interactive experiences and values, such as true digital asset ownership and
            asset transferability, through blockchain games in the Web3.0 environment. This platform
            implements a transparent and decentralized game data storage mechanism to ensure the
            true ownership and control of player assets.
          </p>
          <p class="section-content">
            The blockchain gaming industry is currently growing rapidly and has received widespread
            attention from investors and players. This growth is driven by new possibilities and
            experiences enabled by blockchain technology. And there are many types of blockchain
            games on the market, ranging from simple collection games to complex strategy games.
            Various games are trying to take advantage of the unique characteristics of blockchain
            technology. Therefore, blockchain games are regarded as an important part of Web3.0
            because they embody the concept and technology of decentralization.
          </p>
          <p class="section-content">
            Easy Get Coin DAO is a decentralized organization and will not be controlled by any
            centralized organization. No single agent has control over its community rules, game
            content, and tokens, nor does it have the power to prevent others from entering the game
            world.
          </p>
          <p class="section-content">
            This white paper sets out the philosophy, technical foundation and economic system of
            Easy Get Coin.
          </p>
          <p class="section-content underline">Important content is underlined.</p>
        </section>
        <section class="section">
          <h2 id="introduction" class="section-header">1. Introduction</h2>
          <p class="section-content">
            Easy Get Coin is a gaming platform based on blockchain technology combined with
            cryptocurrency. Easy Get Coin includes decentralized game storage data , decentralized
            economic system, and every blockchain game.
          </p>
        </section>
        <section class="section">
          <h2 id="project-background" class="section-header section-subheader">
            1.1. Project Background
          </h2>
          <p class="section-content-header">Blockchain Games and Web3.0</p>
          <ol class="section-content ordered-list">
            <li class="ordered-list-header">Market Status:</li>
            <ul class="unordered-list">
              <li class="unordered-list-item">
                Fast-growing industry: The blockchain gaming industry is growing rapidly and has
                received widespread attention from investors and players. This growth is driven by
                new possibilities and experiences enabled by blockchain technology.
              </li>
              <li class="unordered-list-item">
                Diversified game products: There are many types of blockchain games on the market,
                ranging from simple collection games to complex strategy games. Various games are
                trying to take advantage of the unique characteristics of blockchain technology.
              </li>
              <li class="unordered-list-item">
                Rising investor interest: As the industry develops, more and more investors are
                paying attention to blockchain games and seeking investment opportunities in this
                field.
              </li>
            </ul>
            <li class="ordered-list-header">Web3.0 correlation:</li>
            <ul class="unordered-list">
              <li class="unordered-list-item">
                Web3.0 : As a representative of the next generation of the Internet, Web3.0
                emphasizes decentralization, blockchain technology and users’ rights to own data.
              </li>
              <li class="unordered-list-item">
                Games and Web3.0 : Blockchain games are regarded as an important part of Web3.0
                because they embody the concept and technology of decentralization.
              </li>
              <li class="unordered-list-item">
                New user experience: Blockchain games in the Web3.0 environment provide users with
                new interactive experiences and values, such as true digital ownership and asset
                transferability.
              </li>
            </ul>
            <li class="ordered-list-header">Market trends:</li>
            <ul class="unordered-list">
              <li class="unordered-list-item">
                Increased user engagement: Players are increasingly interested in owning and
                controlling their own in-game assets, and blockchain games offer unique advantages
                in this regard.
              </li>
              <li class="unordered-list-item">
                Technology Development: As blockchain technology continues to advance, more
                efficient and secure gaming solutions are expected to emerge.
              </li>
              <li class="unordered-list-item">
                Market Expansion: Blockchain games have the potential to attract non-traditional
                gamers, especially user groups interested in cryptocurrencies and digital assets.
              </li>
            </ul>
          </ol>
        </section>
        <section class="section">
          <h2 id="development-background" class="section-header section-subheader">
            1.2. Development Background
          </h2>
          <p class="section-content">
            Easy Get Coin started planning in 2022 . It will be launched in the near future in 2024.
            The original intention of the platform was to create a new gaming experience based on
            blockchain technology and integrate players into a virtual world full of innovation,
            transparency, fairness and decentralization.
          </p>
          <p class="section-content">
            <span class="underline"
              >The business philosophy of Easy Get Coin is to realize the true ownership of in-game
              assets through blockchain technology, as well as the transparency and fairness of game
              rules.
            </span>
            The blockchain games launched on the platform incorporate innovative virtual reality
            elements to provide players with a unique digital experience.
          </p>
          <p class="section-content">
            In order to promote the global development of the platform, the platform adopts a
            distributed office system and gives full play to the decentralized characteristics of
            blockchain technology. Platform companies have team members located around the world
            working together to advance projects. This flexible working model allows Easy Get Coin
            to attract top talent from around the world and respond quickly to market changes.
          </p>
          <p class="section-content">
            During the development of the platform, Easy Get Coin has always adhered to the values
            of innovation, openness and win-win, and continuously promoted the development of the
            blockchain game industry. In the future, the company will continue to strive to create
            more innovative digital entertainment experiences to bring more fun and surprises to
            players.
          </p>
        </section>
        <section class="section">
          <h2 id="project-positioning" class="section-header section-subheader">
            1.3. Easy Get Coin project positioning
          </h2>
          <p class="section-content">
            Against this market background , Easy Get Coin 's project aims to develop an innovative
            blockchain game that combines the advanced concepts and technologies of Web3.0 . Easy
            Get Coin is committed to creating a game that is not only technically advanced , but
            also unique and attractive in gameplay , providing players with unprecedented gaming
            experience and value. Through this project, Easy Get Coin hopes to take a leadership
            position in the blockchain gaming field and contribute to the entire Web3.0 ecosystem.
          </p>
        </section>
        <section class="section">
          <h2 id="ownership-transferability" class="section-header section-subheader">
            1.4. Enhance ownership and transferability
          </h2>
          <ol class="section-content ordered-list">
            <li class="ordered-list-item">
              Through the blockchain, in-game items such as equipment, props, and even game
              characters can be created into non-fungible tokens ( NFT ), giving players true
              ownership. Players can trade, sell, or transfer these assets on the market outside of
              the game.
            </li>
            <li class="ordered-list-item">
              Improve transparency and security: The decentralization and tamper-proof records of
              the blockchain ensure the transparency and security of the game process and
              transactions, reducing the possibility of fraud and cheating.
            </li>
            <li class="ordered-list-item">
              Open economic model: Blockchain enables games to establish an open economic system,
              and players can obtain real economic returns through game activities, such as
              obtaining tokens by participating in game activities.
            </li>
            <li class="ordered-list-item">
              Cross-game compatibility: NFT and blockchain tokens can be transferred between
              different games and platforms, providing greater connectivity and scalability to the
              gaming ecosystem.
            </li>
            <li class="ordered-list-item">
              Decentralized Autonomous Organization ( DAO ): Blockchain technology allows the
              creation of DAO , allowing players to directly participate in the decision-making
              process of the game, such as voting on game content updates and rule changes.
            </li>
            <li class="ordered-list-item">
              New financing methods: Through blockchain, game developers can raise funds directly
              from the community through token sales, NFT or other crypto assets to provide capital
              for game projects.
            </li>
          </ol>
        </section>
        <section class="section">
          <h2 id="goals-vision" class="section-header section-subheader">1.5. Goals and Vision</h2>
          <ol class="section-content ordered-list">
            <li class="ordered-list-item">
              First stage - Verifiable chain game development:<br />
              Easy Get Coin will develop a number of blockchain-based games , which will not only
              provide entertainment value , but will also serve as a preliminary verification of the
              technical feasibility and market demand of Easy Get Coin .
            </li>
            <li class="ordered-list-item">
              The second stage - Game platform construction :<br />
              After proving the technical capabilities of Easy Get Coin , Easy Get Coin will expand
              to a larger gaming platform. This platform will include multiple types of games,
              including " play and earn " models, DeFi integration, NFT transactions and DAO
              operations. Easy Get Coin 's goal is to create a diversified gaming ecosystem to meet
              the needs of different players .
            </li>
            <li class="ordered-list-item">
              The third stage - Decentralized storage and autonomous infrastructure:<br />
              As the game ecosystem develops, Easy Get Coin will build its own blockchain network,
              mainnet and database. All games will be stored in Easy Get Coin ’s own decentralized
              storage system, which will ensure data security and operational transparency while
              enhancing the scalability and reliability of the system.
            </li>
            <li class="ordered-list-item">
              The fourth stage - Construction of decentralized funds and DAO :<br />
              Finally, Easy Get Coin will establish a decentralized fund through which it will
              provide financial support for other innovative projects. At the same time, DAO will be
              introduced as a decision-making mechanism to enable community members to participate
              in the governance of the project and ensure the democracy and adaptability of the
              project.
            </li>
          </ol>
          <p class="section-content">
            Through these four stages, Easy Get Coin can not only create a strong influence in the
            metaverse, but also provide a new financing and operating model for traditional Internet
            companies, while promoting the maturity and development of the entire blockchain
            ecosystem.
          </p>
        </section>
        <section class="section">
          <h2 id="market-analysis" class="section-header">2. Market Analysis</h2>
        </section>
        <section class="section">
          <h2 id="target-market" class="section-header section-subheader">
            2.1. Target Market Description
          </h2>
          <ol class="section-content ordered-list">
            <li class="ordered-list-header">
              Young players: Explore the gaming experience of the new era
            </li>
            <ul class="unordered-list">
              <li class="unordered-list-item">
                Easy Get Coin's core audience is young players aged 18 to 35 , who are pioneers in
                technological innovation and social interaction.
              </li>
              <li class="unordered-list-item">
                They crave games that are challenging, story-rich, and free.
              </li>
              <li class="unordered-list-item">
                Easy Get Coin's games will be actively promoted on social media and online gaming
                communities to attract the interest and participation of these players.
              </li>
            </ul>
            <li class="ordered-list-header">
              Blockchain Enthusiasts: Connecting Technology Pioneers and Innovators
            </li>
            <ul class="unordered-list">
              <li class="unordered-list-item">
                Easy Get Coin's project is open to people who understand and support blockchain
                technology. These enthusiasts are Easy Get Coin 's technical supporters and
                promoters.
              </li>
              <li class="unordered-list-item">
                Easy Get Coin will showcase the technical depth and economic model of the Easy Get
                Coin game through blockchain conferences, seminars and online platforms.
              </li>
              <li class="unordered-list-item">
                Easy Get Coin is not only a way of entertainment, but also a demonstration of the
                application of blockchain technology.
              </li>
            </ul>
            <li class="ordered-list-header">
              Game developers: Create a community of co-creation and win-win
            </li>
            <ul class="unordered-list">
              <li class="unordered-list-item">
                Easy Get Coin encourages professional and amateur developers who are interested in
                blockchain game development to participate in Easy Get Coin's platform.
              </li>
              <li class="unordered-list-item">
                Easy Get Coin provides the necessary tools, resources and community support to help
                developers realize their game vision.
              </li>
              <li class="unordered-list-item">
                By establishing a supportive and collaborative environment, Easy Get Coin promotes
                knowledge sharing and the incubation of innovation.
              </li>
            </ul>
          </ol>
          <p class="section-content">
            Through precise positioning in these three key markets, Easy Get Coin's project aims to
            become a leader in the field of blockchain games, providing players and developers with
            an innovative, interactive and collaborative game ecosystem.
          </p>
        </section>
        <section class="section">
          <h2 id="competiter-analysis" class="section-header section-subheader">
            2.2. Competitor Analysis
          </h2>
          <ol class="section-content ordered-list">
            <li class="ordered-list-item">
              Deep integration of gameplay and blockchain:<br />
              Many existing blockchain games mainly focus on transactions and investments, while the
              EGC project will focus more on gameplay, providing a richer and immersive gaming
              experience while combining the advantages of blockchain technology.
            </li>
            <li class="ordered-list-item">
              A truly decentralized gaming experience:<br />
              Although many games claim to use blockchain technology, many still rely on centralized
              servers and control systems. The EGC project will strive to create a fully
              decentralized gaming environment and improve transparency and security.
            </li>
            <li class="ordered-list-item">
              Player-driven economic system:<br />
              On the EGC gaming platform, players are not only consumers, but also important
              participants in economic activities. Players' decisions and activities will directly
              affect the in-game economic system, creating a more dynamic and interactive game
              world.
            </li>
            <li class="ordered-list-item">
              Cross-game asset exchange:<br />
              The EGC project will enable players to transfer assets, such as NFTs and tokens,
              between different games, providing players with a more diverse gaming experience and
              asset usage methods.
            </li>
            <li class="ordered-list-item">
              Community governance and participation:<br />
              The introduction of a DAO (Decentralized Autonomous Organization) mechanism allows
              players to participate in the game's decision-making process, such as voting on new
              features or changing rules, which increases players' sense of participation and
              investment in the game.
            </li>
            <li class="ordered-list-item">
              Innovative financing model:<br />
              The EGC project will use novel financing methods, such as raising funds directly from
              the community through token sales, NFT issuance or other crypto assets, to provide
              capital for game development and operations.
            </li>
            <li class="ordered-list-item">
              Highly scalable technical architecture:<br />
              Develop a highly scalable technical architecture that can support large numbers of
              players and complex game scenarios while maintaining a smooth gaming experience.
            </li>
          </ol>
        </section>
        <section class="section">
          <h2 id="market-trends" class="section-header section-subheader">2.3. Market Trends</h2>
          <ol class="section-content ordered-list">
            <li class="ordered-list-item">
              Enhancement of player ownership and asset liquidity:<br />
              Blockchain enables players to truly own in-game assets such as tokens, gear, and
              collectibles. These assets exist as non-fungible tokens ( NFT ) and can be freely
              traded in the external market of the game, increasing the liquidity and value of the
              assets.
            </li>
            <li class="ordered-list-item">
              New economic models and revenue sources:<br />
              " Play-to -Earn " model allows players to earn real-value tokens through game
              activities, which not only attracts a wide range of player groups, but also creates
              new profit channels for game developers. At the same time, NFT sales and transactions
              have become another source of revenue for gaming companies.
            </li>
            <li class="ordered-list-item">
              Increase transparency and trust:<br />
              The decentralization and immutability of blockchain enhances the transparency and
              fairness of the game. For example, game item rarity and ownership records can be
              publicly verified.
            </li>
            <li class="ordered-list-item">
              Cross-game asset compatibility:<br />
              Blockchain technology allows players to transfer assets from one game to another,
              increasing the utility and attractiveness of assets.
            </li>
            <li class="ordered-list-item">
              Community Engagement and Governance:<br />
              Through the Decentralized Autonomous Organization ( DAO ), players can participate in
              the governance and decision-making process of the game, which increases community
              participation and investment in the game.
            </li>
            <li class="ordered-list-item">
              Technological innovation and scalability:<br />
              Blockchain provides a new technical foundation for games, supports more complex
              economic systems and data management, and also encourages technological innovation.
            </li>
            <li class="ordered-list-item">
              Global market expansion:<br />
              Blockchain games can attract a wider international player base through their
              decentralized and globally accessible features.
            </li>
            <li class="ordered-list-item">
              Attract new investors:<br />
              The novelty and potential of blockchain games have attracted the attention of
              investors, bringing new funding streams and development opportunities.
            </li>
          </ol>
        </section>
        <section class="section">
          <h2 id="customer-aquisition" class="section-header section-subheader">
            2.4. Customer Aquisition
          </h2>
          <ol class="section-content ordered-list">
            <li class="ordered-list-header">
              Customer acquisition:<br />
              Strategy:
            </li>
            <ul class="unordered-list">
              <li class="unordered-list-item">
                Publish engaging content on major social media platforms (such as Twitter, Facebook,
                Instagram, LinkedIn ), including game previews, updates, tutorials and player
                stories.
              </li>
              <li class="unordered-list-item">
                Interaction and Engagement: Connect with the community through regular interactions
                such as replying to comments, starting discussions, and holding Q&A sessions.
              </li>
              <li class="unordered-list-item">
                Advertising and promotion: Use social media advertising to promote the game to
                specific groups to ensure accurate delivery of content.
              </li>
            </ul>
            <li class="ordered-list-header">
              Partnership:<br />
              Strategy:
            </li>
            <ul class="unordered-list">
              <li class="unordered-list-item">
                Industry cooperation: Establish cooperative relationships with other companies and
                brands in the gaming industry, such as attracting users through joint promotions and
                cross-brand activities.
              </li>
              <li class="unordered-list-item">
                Influencer Marketing: Work with influencers in the gaming community and blockchain
                space to promote the game through their social media channels and influence.
              </li>
              <li class="unordered-list-item">
                Technology Cooperation: Work with technology providers to leverage their platform
                and user base to promote the game.
              </li>
            </ul>
            <li class="ordered-list-header">
              Community activities:<br />
              Strategy:
            </li>
            <ul class="unordered-list">
              <li class="unordered-list-item">
                Online events: Host online events, such as live game demos, to increase engagement
                and exposure for your game.
              </li>
              <li class="unordered-list-item">
                Rewards and incentives: Set up a reward mechanism to encourage players to invite new
                users and participate in community building.
              </li>
              <li class="unordered-list-item">
                Feedback mechanism: Establish an effective user feedback system to encourage
                community members to provide opinions and suggestions and enhance their sense of
                belonging and loyalty.
              </li>
            </ul>
          </ol>
        </section>
        <section class="section">
          <h2 id="problems-solutions" class="section-header">3. Problems and Solutions</h2>
        </section>
        <section class="section">
          <h2 id="market-issues" class="section-header section-subheader">3.1. Market Issues</h2>
          <p class="section-content">
            In the current gaming market, Easy Get Coin faces two main problems: data opacity and
            lack of ownership protection.
          </p>
          <ol class="section-content ordered-list">
            <li class="ordered-list-item">
              Data is not transparent:<br />
              Existing game platforms often adopt centralized data management, making it impossible
              for players to fully understand and verify events that occur in the game, such as item
              drop rates, transaction records, or other players’ behaviors. This opacity erodes
              players’ trust in the gaming system and can lead to questions about the fairness of
              the game.<br />
              The lack of transparency also affects transactions and interactions between players,
              as they cannot verify the credibility of the counterparty or the authenticity of the
              items being traded.
            </li>
            <li class="ordered-list-item">
              Lack of ownership protection:<br />
              In traditional game models, in-game assets (such as virtual items, characters, or
              currencies) purchased or earned by players are actually still subject to the control
              of the game company. This means that even if players invest significant time and
              resources, their control over these assets is limited. This model limits players’
              freedom to dispose of their in-game assets, including trading, transferring, or using
              them outside the game.<br />
              These problems not only limit the depth and breadth of player experience, but also
              hinder the development potential of the game industry. Therefore, Easy Get Coin is
              committed to solving these problems through blockchain technology and providing
              players with a more transparent, free and fair gaming environment.
            </li>
          </ol>
        </section>
        <section class="section">
          <h2 id="solution" class="section-header section-subheader">3.2. Solution</h2>
          <p class="section-content">
            Implement a transparent and decentralized game data storage mechanism to ensure the true
            ownership and control of player assets.
          </p>
          <ol class="section-content ordered-list">
            <li class="ordered-list-header">Application of blockchain technology:</li>
            <ul class="unordered-list">
              <li class="unordered-list-item">
                Easy Get Coin will take advantage of the tamper-proof and decentralized
                characteristics of blockchain to provide a transparent and trustworthy platform for
                game data storage. All game-related data, including player transactions, asset
                history, and game events, will be recorded and verified on the blockchain.
              </li>
              <li class="unordered-list-item">
                This approach ensures data authenticity and transparency, allowing players to
                directly verify any in-game actions and events.
              </li>
            </ul>
            <li class="ordered-list-header">Ensure asset ownership:</li>
            <ul class="unordered-list">
              <li class="unordered-list-item">
                Easy Get Coin gives players full ownership of their in-game assets by converting
                in-game items, characters, or other assets into non-fungible tokens (NFTs).
              </li>
              <li class="unordered-list-item">
                This means that players can not only use these assets freely within the game, but
                also freely trade or transfer them in the market outside the game without the
                permission of a centralized platform or game developer.
              </li>
            </ul>
            <li class="ordered-list-header">Create an open and free economic system:</li>
            <ul class="unordered-list">
              <li class="unordered-list-item">
                Easy Get Coin's gaming platform will support a decentralized economic system in
                which players' actions and decisions directly affect the economic and social
                structure of the game world.
              </li>
              <li class="unordered-list-item">
                Players can earn and grow their assets by participating in game activities,
                completing tasks, or trading with other players.
              </li>
            </ul>
          </ol>
          <p class="section-content">
            Through these measures, Easy Get Coin not only solves existing problems in the market,
            but also provides players with a more fair, transparent and autonomous gaming
            experience. Easy Get Coin believes that this will promote the entire gaming industry to
            develop in a more open and innovative direction.
          </p>
        </section>
        <section class="section">
          <h2 id="project-description" class="section-header">4. Project Description</h2>
          <div class="section-content img-container">
            <img src="@/assets/project-description-1.png" alt="" />
            <img src="@/assets/project-description-2.png" alt="" />
          </div>
        </section>
        <section class="section">
          <h2 id="core-functions" class="section-header section-subheader">4.1. Core Functions</h2>
          <ol class="section-content ordered-list">
            <li class="ordered-list-header">MINES gameplay</li>
            <p class="ordered-list-item">
              Overview:<br />
              <span class="underline">
                MINES is an exciting strategy game where the player's goal is to find gold coins
                from 25 hidden grids while avoiding landmines. Before the game starts, players can
                choose the number of mines ( 2-24 ). The more mines, the higher the potential odds.
              </span>
              <br />
              How to play:
            </p>
            <ul class="unordered-list">
              <li class="unordered-list-item">
                Number of mines selection: Players set the number of mines before starting the game.
                The more mines there are, the higher the odds, but the risk also increases
                accordingly.
              </li>
              <li class="unordered-list-item">
                Treasure Hunt: The game displays 25 hidden grids. Players click on the grid to
                reveal its contents. If it is a gold coin, the prize pool amount increases; if it is
                a thunder, the game is over.
              </li>
              <li class="unordered-list-item">
                Decision: After each gold coin is revealed, the player can choose to continue
                playing or collect the rewards from the current prize pool.
              </li>
              <li class="unordered-list-item">
                Prize pool and odds: The more gold coins you click, the higher the prize pool amount
                will be. For specific odds, please refer to the odds table in the game interface.
              </li>
            </ul>
            <p class="ordered-list-item">Visual and sound effects:</p>
            <ul class="unordered-list">
              <li class="unordered-list-item">
                The game interface will be displayed in a clear grid layout, and the revelation of
                each grid is accompanied by exciting sound effects.
              </li>
              <li class="unordered-list-item">
                When players click on a mine, there will be special visual and sound prompts.
              </li>
            </ul>
            <div class="section-content img-container">
              <img src="@/assets/mines-gameplay-1.png" alt="" />
              <img src="@/assets/mines-gameplay-2.png" alt="" />
            </div>
            <li class="ordered-list-header">CRASH gameplay</li>
            <p class="ordered-list-item">
              Overview:<br />
              <span class="underline">
                CRASH is a prediction-based game where players need to guess the height of each
                rocket flight. The key to the game is betting the correct multiplier before the
                rocket crashes.
              </span>
              <br />
              How to play:
            </p>
            <ul class="unordered-list">
              <li class="unordered-list-item">
                Betting Selection: Players choose the amount of their bet before each rocket launch
                and predict the highest multiplier that can be achieved when the rocket takes off.
              </li>
              <li class="unordered-list-item">
                Rocket rises: Every ten seconds, a rocket rises into the sky, and the odds increase
                from 1x .
              </li>
              <li class="unordered-list-item">
                Multiplier selection: Players choose the multiplier achieved by the rocket based on
                their own judgment. If the rocket reaches this multiplier without falling , the
                player wins the corresponding multiplier bonus.
              </li>
              <li class="unordered-list-item">
                Risk and reward: If the rocket falls before reaching the predicted multiplier, the
                player loses his principal.
              </li>
            </ul>
            <p class="ordered-list-item">Visual and sound effects:</p>
            <ul class="unordered-list">
              <li class="unordered-list-item">
                The game screen will show the rocket's lift-off process and the real-time increase
                in magnification.
              </li>
              <li class="unordered-list-item">
                The game will provide rich visual effects, such as rocket launch animations and
                visual cues of increasing magnification.
              </li>
              <li class="unordered-list-item">
                Victory and defeat situations will be accompanied by special sound and visual
                effects.
              </li>
            </ul>
            <div class="section-content img-container-1">
              <img src="@/assets/crash-gameplay-1.png" alt="" />
              <img src="@/assets/crash-gameplay-2.png" alt="" />
              <img src="@/assets/crash-gameplay-3.png" alt="" />
            </div>
            <li class="ordered-list-header">Lucky 7 Matic event</li>
            <p class="ordered-list-item">Overview:</p>
            <ul class="unordered-list">
              <li class="unordered-list-item">Activity type: Digital asset lottery</li>
              <li class="unordered-list-item">
                Single draw: According to the real-time price * 1.05% divided by 77 shares
              </li>
              <li class="unordered-list-item">
                Prize pool distribution: 7 people will be drawn from 77 people, each with 111
                matics.
              </li>
              <li class="unordered-list-item">Number of winners: 7</li>
            </ul>
            <p class="ordered-list-item">
              This event provides players with a chance to win with a high prize rate, and aims to
              provide a fair and attractive lottery experience through reasonably set lottery prices
              and prize pool amounts.
            </p>
            <li class="ordered-list-header">BTC prize pool activity</li>
            <p class="ordered-list-item">Overview:</p>
            <ul class="unordered-list">
              <li class="unordered-list-item">Event location: Home page</li>
              <li class="unordered-list-item">
                Single lottery price: real-time price * 1.05% divided by 1,000
              </li>
              <li class="unordered-list-item">
                Prize pool distribution: One prize will be drawn among 1,000 people.
              </li>
              <li class="unordered-list-item">Number of winners: 1</li>
            </ul>
            <p class="ordered-list-item">
              The BTC prize pool activity focuses on providing a chance for a grand prize, setting a
              higher single draw price to attract players seeking high-odds prizes.
            </p>
            <li class="ordered-list-header">ETH prize pool activity</li>
            <p class="ordered-list-item">Overview:</p>
            <ul class="unordered-list">
              <li class="unordered-list-item">Event location: Home page</li>
              <li class="unordered-list-item">
                Single draw: According to the real-time price * 1.05% divided by 100
              </li>
              <li class="unordered-list-item">
                Prize pool distribution: One prize will be drawn among 100 people.
              </li>
              <li class="unordered-list-item">Number of winners: 1</li>
            </ul>
            <p class="ordered-list-item">
              The ETH Prize Pool event offers a relatively smaller prize pool, giving players the
              opportunity to win ETH -based prizes while maintaining reasonable draw prices.
            </p>
            <p class="ordered-list-item">Summarize:</p>
            <p class="ordered-list-item">
              Each of these three events has its own characteristics, from multiple winning
              opportunities in Lucky 7 Matic to high-value single prizes in BTC and ETH prize pools,
              each meeting the needs of different types of players. Through this diverse activity
              setting, Easy Get Coin aims to attract a wide range of user groups while keeping the
              platform active and attractive.
            </p>
            <li class="ordered-list-header">How to play EGC lottery:</li>
            <p class="ordered-list-item">
              <span class="underline"
                >In the EGC lottery, the winning rules are based on the order in which the lottery
                numbers are drawn starting from the first digit. </span
              >If the purchased numbers exactly match the corresponding digits of the lottery
              numbers, that is, starting from the first digit, you will get a reward. For example,
              if the lottery number is 999999 and the number I purchased is 998999 , I will win two
              digits; but if my number is 899999 , I will not win. The reward amount will increase
              according to the number of matching digits. The more winning numbers, the higher the
              reward, ensuring fair distribution of the prize.
            </p>
            <p class="ordered-list-item">Prize pool source:</p>
            <ol class="ordered-list">
              <li class="ordered-list-item">
                The amount paid by the ticket buyer to purchase the lottery ticket for this round
                EGC All will be injected back into the prize pool.
              </li>
              <li class="ordered-list-item">
                After each round, if no one in one of the bonus groups wins, then no one in that
                group claims the prize. EGC This will be rolled over to the next round and
                redistributed in the prize pool.
              </li>
              <li class="ordered-list-item">
                Within a week, part of the EGC will be withdrawn from the bonus pool Added to the
                draw round. Of course included in the rollover! Read more in our guide.
              </li>
              <li class="ordered-list-item">
                20% of the unwon prize pool tokens will be destroyed.
              </li>
            </ol>
            <li class="ordered-list-header">EGC prediction gameplay:</li>
            <p class="ordered-list-item">
              In the EGC prediction game, draws are held every 5 minutes and players have the
              opportunity to bet on whether the price will increase or decrease. The result of the
              game will be determined by eth matic The price of egc is determined. Compared with the
              last round of lottery results, if the price is greater than the previous round, it
              will be an up win, and vice versa, it will be a down win. The odds will be determined
              based on the amount that players bet more or less than in this round. The final odds
              will be adjusted to be relatively balanced, with the lowest odds being about 1.5. This
              innovative game rule provides players with a participation experience that is closely
              related to market changes, while ensuring the fairness and sustainability of the game
              by dynamically adjusting the odds.
            </p>
            <ul class="unordered-list">
              <li class="unordered-list-item">Betting time</li>
              <li class="unordered-list-item">
                Each round of the game lasts 5 minutes to ensure a fast pace.
              </li>
              <li class="unordered-list-item">
                The start time of this round of game immediately follows the end of the previous
                round of game to achieve a coherent game experience.
              </li>
              <li class="unordered-list-item">
                The game opens the betting window at the beginning of the round, giving players
                enough time to make their betting choices.
              </li>
              <li class="unordered-list-item">
                Under test conditions, the system will prohibit new bets when the remaining betting
                time is less than 20 seconds to ensure the fairness of the game and the accuracy of
                bets, and to avoid bet failures caused by network delays and other factors. This
                setup is designed to provide a stable and reliable gaming experience.
              </li>
            </ul>
          </ol>
        </section>
        <section class="section">
          <h2 id="technology" class="section-header section-subheader">4.2. Technology</h2>
          <p class="section-content-header">
            <span class="underline">
              Utilizing blockchain technology to achieve security and transparency of game data:
            </span>
          </p>
          <ol class="section-content ordered-list">
            <li class="ordered-list-item">Decentralized data management</li>
            <ul class="unordered-list">
              <li class="unordered-list-item">
                <span class="underline"
                  >Easy Get Coin uses blockchain technology to build a storage and management system
                  for game data.</span
                >
                This decentralized approach means that data is no longer stored on a single server
                or location, but is distributed across the entire network.
              </li>
              <li class="unordered-list-item">
                This distributed data storage mechanism greatly reduces the risk of data tampering
                or loss.
              </li>
              <li class="unordered-list-item">Immutable records</li>
              <li class="unordered-list-item">
                One of the core features of blockchain is that its data records cannot be changed
                once written. Once each block is verified by the network and added to the chain, the
                information within it cannot be tampered with.
              </li>
              <li class="unordered-list-item">
                This provides an indisputable, traceable historical record of all in-game events,
                transactions, and decisions.
              </li>
            </ul>
            <li class="ordered-list-item">Transparency and verifiability</li>
            <ul class="unordered-list">
              <li class="unordered-list-item">
                On the blockchain, all transactions and gaming activities are public, meaning they
                can be reviewed and verified by anyone.
              </li>
              <li class="unordered-list-item">
                This transparency not only enhances fairness and trust in the game, but also allows
                players to verify the authenticity of their assets and in-game activity.
              </li>
            </ul>
            <li class="ordered-list-item">Application of smart contracts</li>
            <ul class="unordered-list">
              <li class="unordered-list-item">
                Easy Get Coin uses smart contracts to automatically perform specific operations
                within the game, such as asset transfer, reward distribution, or execution of game
                rules.
              </li>
              <li class="unordered-list-item">
                Smart contracts ensure that the execution of these operations is automated,
                consistent, and does not rely on any centralized authority.
              </li>
            </ul>
            <li class="ordered-list-item">Security enhancement</li>
            <ul class="unordered-list">
              <li class="unordered-list-item">
                The encryption properties of the blockchain network ensure the security of data.
                Consensus is required for every blockchain node, making tampering with the network
                nearly impossible.
              </li>
              <li class="unordered-list-item">
                This encryption and consensus mechanism provides players with a secure gaming
                environment, protecting their data and assets from unauthorized access and
                manipulation.
              </li>
            </ul>
            <p class="ordered-list-item">
              <span class="underline"
                >Implemented through these technologies, Easy Get Coin is committed to creating a
                safe, transparent and fair gaming environment to provide players with a high-quality
                blockchain gaming experience.</span
              >
            </p>
          </ol>
        </section>
        <section class="section">
          <h2 id="community-governance" class="section-header">5. Community Governance</h2>
        </section>
        <section class="section">
          <h2 id="pledge-mechanism" class="section-header section-subheader">
            5.1. Pledge mechanism
          </h2>
          <p class="section-content">
            <span class="underline"
              >The Easy Get Coin DAO community governance white paper introduces an innovative
              pledge mechanism. By pledging tokens to become a community administrator, you can
              obtain platform profit sharing and equal voting rights, and participate in community
              governance, including voting on important decisions such as the release of the next
              game.</span
            >
            This mechanism encourages community members to actively participate in platform
            development and build a more decentralized, transparent and democratic governance
            system.
          </p>
          <p class="section-content">
            The EGC pledge system is based on blockchain technology and gives participants multiple
            rights and rewards by locking a certain number of tokens. Pledged tokens not only ensure
            the security and stability of the network, but also provide holders with investment
            returns,
            <span class="underline">
              participate in governance voting, share network fees and obtain platform benefits.
            </span>
          </p>
          <p class="section-content">
            <span class="underline">
              In community governance, the key role of pledged tokens is that holders participate in
              the decision-making process through pledges, put forward proposals, vote and influence
              network upgrades.</span
            >
            This decentralized governance structure increases the sense of participation and
            consensus among community members and establishes a more just and democratic
            decision-making mechanism.
          </p>
          <p class="section-content">
            Overall, the EGC staking system builds a more secure, stable and decentralized digital
            economic ecosystem by motivating participants to support network operations. The
            community governance white paper innovatively uses the staking mechanism to provide
            community administrators with voting rights and profit sharing, promote wider community
            participation, and create a prosperous and diverse ecosystem.
          </p>
        </section>
        <section class="section">
          <h2 id="reward-mechanism" class="section-header section-subheader">
            5.2. Community Reward Mechanism
          </h2>
          <p class="section-content">
            The community is committed to encouraging and rewarding members who contribute to the
            growth and prosperity of the community. Through this mechanism, we recognize and
            appreciate those individuals who actively participate in community building, make useful
            suggestions, share knowledge, and promote project progress.
          </p>
          <p class="section-content">
            <span class="underline">
              The community reward program will be in the form of tokens to reflect recognition and
              incentives for contributors.
            </span>
            These tokens are both a kind of honor within the community and can also be circulated
            and used on the platform as digital assets. Rewards include but are not limited to:
          </p>
          <p class="section-content">
            Proposal contribution rewards: For constructive proposals submitted and successfully
            implemented, the community will award the proposer a certain number of token rewards to
            encourage more innovation and improvement solutions.
          </p>
          <p class="section-content">
            Rewards for active participation: For members who actively participate and share
            valuable information in community forums, social media or other platforms, the community
            will reward them with corresponding tokens to recognize their contributions to community
            building.
          </p>
          <p class="section-content">
            Project promotion rewards: For those members who promote project development, help solve
            problems, or cooperate, the community will reward their efforts and support through
            token rewards.
          </p>
          <p class="section-content">
            Knowledge sharing rewards: Members are encouraged to share valuable industry knowledge,
            tutorials or experiences, and the community will reward them with corresponding tokens
            based on the quality and influence of the content.
          </p>
          <p class="section-content">
            Community management rewards: Community management rewards are a way to encourage
            community members to actively participate, contribute and maintain community order,
            thereby promoting community activity, improving user retention, optimizing content
            quality, and establishing a positive community culture.
          </p>
          <p class="section-content">
            This token reward program not only recognizes contributors, but also encourages more
            community members to actively participate, share and cooperate to jointly promote the
            prosperity and development of the community. We believe that by rewarding those who
            contribute to the community, we can build a more active and cohesive community
            ecosystem.
          </p>
        </section>
        <section class="section">
          <h2 id="token-economy" class="section-header">6. Token Economy</h2>
        </section>
        <section class="section">
          <h2 id="introduction-token" class="section-header section-subheader">
            6.1. Introduction to EGC Token
          </h2>
          <p class="section-content">
            Easy Get Coin ( EGC ) is EGC Governance token in DAO&apos;s community . EGC holders will
            be able to earn rewards if they stake tokens, play games and participate in key
            governance votes. Players can also earn $EGC when they participate in community
            management in the EGC DAO and through user-generated content initiatives.
          </p>
        </section>
        <section class="section">
          <h2 id="token-uses" class="section-header section-subheader">
            6.2. As a developer, let me introduce you to the multiple uses of EGC tokens
          </h2>
          <ol class="section-content ordered-list">
            <li class="ordered-list-item">
              Game participation:
              <span class="underline">
                The EGC token is the core of our gaming ecosystem and is used to participate in
                various exciting gaming activities.</span
              >
              By using EGC tokens, you can integrate into the exciting experience of the game,
              participate in various games and strive for generous rewards.
            </li>
            <li class="ordered-list-item">
              Pledge activities:
              <span class="underline">
                By using EGC tokens to participate in staking activities, you can enjoy additional
                rights and rewards.</span
              >
              Staking not only contributes to the stable operation of the platform, but also
              provides you with additional income opportunities, allowing you to participate more
              deeply in our ecosystem.
            </li>
            <li class="ordered-list-item">
              Community voting:
              <span class="underline">
                Users holding EGC tokens will be eligible to participate in voting decisions on
                community governance.</span
              >
              This provides you with the opportunity to influence the direction of the platform,
              ensuring that the common interests of the community are fully represented.
            </li>
            <li class="ordered-list-item">
              Deduction of handling fee: When you use EGC tokens in transactions and games , you can
              enjoy discounts on handling fees. This not only provides you with a more economical
              trading experience, but also encourages users to use EGC tokens more frequently.
            </li>
            <li class="ordered-list-item">
              Transaction: As the internal currency of the platform, EGC tokens can be traded
              freely, providing users with an efficient and convenient asset circulation channel. By
              using EGC tokens in transactions , you can manage your digital assets more flexibly.
            </li>
          </ol>
          <p class="section-content">
            These diverse uses are designed to create a comprehensive, interesting and valuable
            ecosystem for you, allowing you to fully enjoy the multiple values of EGC tokens.
          </p>
        </section>
        <section class="section">
          <h2 id="destruction-mechanism" class="section-header section-subheader">
            6.3. Destruction mechanism
          </h2>
          <p class="section-content">
            As a developer, I am happy to introduce to you the EGC token burning mechanism, which is
            an innovative design aimed at increasing the value of the token and promoting the
            sustainable development of the platform:
          </p>
          <ol class="section-content ordered-list">
            <li class="ordered-list-item">
              Handling fee: When transacting and participating in games using EGC tokens, a small
              fee will be charged. A portion of these fees will be burned, thereby reducing the
              total token supply and creating a basis for the token&apos;s scarcity and value.
            </li>
            <li class="ordered-list-item">
              Part of the costs of the community: As a member of the community, your participation
              in community governance, voting, and other activities may involve fees. A portion of
              the fees will be used to burn EGC tokens, further supporting the token&apos;s economic
              model.
            </li>
            <li class="ordered-list-item">
              Game prize pool: Part of the prize pool generated during the game will be used to
              destroy EGC tokens. This earns players a prize pool while also helping to maintain the
              economic balance of the token.
            </li>
            <li class="ordered-list-item">
              Partial platform income: A portion of the platform&apos;s revenue will also be used
              for token destruction, creating conditions for sustainable growth of the entire
              ecosystem. This mechanism aims to ensure that the platform and users benefit together
              and inspire users to more actively participate in the development of the platform
              ecosystem.
            </li>
            <li class="ordered-list-item">
              The comprehensive operation of these destruction pathways will effectively promote the
              scarcity of EGC tokens and provide strong support for the healthy development of the
              entire ecosystem. We look forward to your participation and jointly build a prosperous
              EGC ecosystem 4 platform token issuance.
            </li>
          </ol>
          <p class="section-content">Implementation Strategy:</p>
          <ul class="section-content unordered-list">
            <li class="unordered-list-item">
              Token economy: Issue platform-specific tokens that can be used for in-game purchases,
              participation in specific activities, or transactions in the player community.
            </li>
            <li class="unordered-list-item">
              Token Sale: Raise funds through token sales in the early stages to support game
              development and operations.
            </li>
            <li class="unordered-list-item">
              Token incentives: Set up a token reward mechanism to encourage players to participate
              in game development and community activities, such as providing feedback, creating
              content or promoting the game.
            </li>
          </ul>
        </section>
        <section class="section">
          <h2 id="unlocking-schedule" class="section-header section-subheader">
            6.4. Allocation and unlocking schedule
          </h2>
          <p class="section-content">
            EGC will be unlocked according to a predetermined schedule, lasting 60 months from the
            start of public sales. The initial circulation supply is set at 21,000,000 - 21% of the
            total supply.
          </p>
          <div class="section-content table_component" role="region" tabindex="0">
            <table>
              <thead>
                <tr>
                  <th></th>
                  <th>Circulation</th>
                  <th>
                    Private<br />
                    Placement
                  </th>
                  <th>Public Offering</th>
                  <th>Marketing Costs</th>
                  <th>Team</th>
                  <th>Community</th>
                  <th>Fund</th>
                  <th>Official Marketing</th>
                  <th>Platform Reserve</th>
                  <th>Destroy</th>
                  <th>Total Amount</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Total Amount</td>
                  <td>5,000,000</td>
                  <td>5,000,000</td>
                  <td>10,000,000</td>
                  <td>5,000,000</td>
                  <td>20,000,000</td>
                  <td>25,000,000</td>
                  <td>10,000,000</td>
                  <td>15,000,000</td>
                  <td>5,000,000</td>
                  <td>0</td>
                  <td>100,000,000</td>
                  <td></td>
                </tr>
                <tr>
                  <td>percentage %</td>
                  <td>5%</td>
                  <td>5%</td>
                  <td>10.0%</td>
                  <td>5%</td>
                  <td>20.0%</td>
                  <td>25%</td>
                  <td>10.0%</td>
                  <td>15%</td>
                  <td>5%</td>
                  <td>0%</td>
                  <td>100%</td>
                  <td></td>
                </tr>
                <tr>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                </tr>
                <tr>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                </tr>
                <tr>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                </tr>
                <tr>
                  <th>Unlock date</th>
                  <th>Circulation</th>
                  <th>Private Placement</th>
                  <th>Public Offering</th>
                  <th>Marketing Costs</th>
                  <th>Team</th>
                  <th>Community</th>
                  <th>Fund</th>
                  <th>Official Marketing</th>
                  <th>Platform Reserve</th>
                  <th>Destroy</th>
                  <th>Total Amount</th>
                  <th>Unlock Proportion</th>
                </tr>
                <tr>
                  <td>01/03/2024</td>
                  <td>5,000,000</td>
                  <td>500,000</td>
                  <td>500,000</td>
                  <td>5,000,000</td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td>5,000,000</td>
                  <td>5,000,000</td>
                  <td></td>
                  <td>21,000,000</td>
                  <td>21%</td>
                </tr>
                <tr>
                  <td>01/09/2024</td>
                  <td></td>
                  <td>500,000</td>
                  <td>500,000</td>
                  <td></td>
                  <td>4,000,000</td>
                  <td>1,000,000</td>
                  <td>3,000,000</td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td>30,000,000</td>
                  <td>30.0%</td>
                </tr>
                <tr>
                  <td>01/03/2025</td>
                  <td></td>
                  <td>500,000</td>
                  <td>1,000,000</td>
                  <td></td>
                  <td></td>
                  <td>4,500,000</td>
                  <td>1,000,000</td>
                  <td>5,000,000</td>
                  <td></td>
                  <td></td>
                  <td>42,000,000</td>
                  <td>42%</td>
                </tr>
                <tr>
                  <td>01/09/2025</td>
                  <td></td>
                  <td>500,000</td>
                  <td>2,000,000</td>
                  <td></td>
                  <td>2,000,000</td>
                  <td>4,500,000</td>
                  <td>1,000,000</td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td>52,000,000</td>
                  <td>52%</td>
                </tr>
                <tr>
                  <td>01/03/2026</td>
                  <td></td>
                  <td>1,000,000</td>
                  <td>2,000,000</td>
                  <td></td>
                  <td>2,000,000</td>
                  <td>3,000,000</td>
                  <td>1,000,000</td>
                  <td>5,000,000</td>
                  <td></td>
                  <td></td>
                  <td>66,000,000</td>
                  <td>66%</td>
                </tr>
                <tr>
                  <td>01/09/2026</td>
                  <td></td>
                  <td>1,000,000</td>
                  <td>2,000,000</td>
                  <td></td>
                  <td>2,000,000</td>
                  <td>3,000,000</td>
                  <td>1,000,000</td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td>75,000,000</td>
                  <td>75%</td>
                </tr>
                <tr>
                  <td>01/03/2027</td>
                  <td></td>
                  <td>1,000,000</td>
                  <td>2,000,000</td>
                  <td></td>
                  <td>2,000,000</td>
                  <td>2,000,000</td>
                  <td>1,000,000</td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td>83,000,000</td>
                  <td>83%</td>
                </tr>
                <tr>
                  <td>01/09/2027</td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td>2,000,000</td>
                  <td>2,000,000</td>
                  <td>1,000,000</td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td>88,000,000</td>
                  <td>88%</td>
                </tr>
                <tr>
                  <td>01/03/2028</td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td>2,000,000</td>
                  <td>2,000,000</td>
                  <td>1,000,000</td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td>93,000,000</td>
                  <td>93%</td>
                </tr>
                <tr>
                  <td>01/09/2028</td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td>2,000,000</td>
                  <td>2,000,000</td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td>97,000,000</td>
                  <td>97%</td>
                </tr>
                <tr>
                  <td>01/03/2029</td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td>2,000,000</td>
                  <td>1,000,000</td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td>100,000,000</td>
                  <td>100%</td>
                </tr>
                <tr>
                  <td>01/09/2028</td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                </tr>
                <tr>
                  <td>01/03/2030</td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                </tr>
              </tbody>
            </table>
          </div>
          <p class="section-content">
            The chart above illustrates the maximum possible issuance of EGC over the next few
            years, with the total supply never exceeding 100,000,000.
          </p>
        </section>
        <section class="section">
          <h2 id="private-placement" class="section-header section-subheader">
            6.5. Private Placement
          </h2>
          <p class="section-content">
            Private placement provides players with an opportunity to earn tokens. By participating
            in financing in the early stages of the project, investors can purchase tokens and
            incorporate them into the project fund pool, thereby sharing the benefits of the
            project's success. This creates a way for players to participate in the development of
            the project and potentially earn money.
          </p>
        </section>
        <section class="section">
          <h2 id="technical-architecture" class="section-header">7. Technical Architecture</h2>
        </section>
        <section class="section">
          <h2 id="overview" class="section-header section-subheader">7.1. Overview</h2>
          <p class="section-content">
            The Easy Get Coin gaming platform utilizes blockchain technology and smart contracts to
            ensure the security, transparency and fairness of the game. By combining traditional
            game server architecture and blockchain technology, we provide an innovative gaming
            environment that enables players to enjoy a fair and undisputed gaming experience.
          </p>
        </section>
        <section class="section">
          <h2 id="tech-architecture" class="section-header section-subheader">
            7.2. Technical Architecture
          </h2>
          <ol class="section-content ordered-list">
            <li class="ordered-list-header">Blockchain Network</li>
            <p class="ordered-list-item">
              The blockchain network is the core of our platform and is responsible for storing game
              assets, transaction records, and executing smart contracts. Leveraging the
              immutability and transparency of blockchain, we ensure that all gaming activity is
              publicly verifiable.
            </p>
            <li class="ordered-list-header">Smart Contract</li>
            <p class="ordered-list-item">
              Smart contracts play a central role in gaming platforms, handling asset transactions,
              game logic, and result verification. Every gaming activity, from betting to reward
              distribution, is automatically executed through smart contracts, ensuring the
              transparency and non-tamperability of the process.
            </p>
            <li class="ordered-list-header">Game Server</li>
            <p class="ordered-list-item">
              The game server handles game logic, player interaction, and graphics rendering. The
              server is also responsible for generating random number seeds, which are combined with
              client seeds to calculate game results using publicly verifiable algorithms to ensure
              fairness.
            </p>
            <li class="ordered-list-header">Verifiable Fairness</li>
            <ol class="ordered-list">
              <li class="ordered-list-item">Random number generation</li>
              <p class="ordered-list-item">
                Client seed: Players can generate a random seed through the game client, or choose
                to provide their own seeds to participate in the calculation of game results.
              </p>
              <p class="ordered-list-item">
                Server Seed: The game server also generates a random seed, which is used in
                conjunction with the client seed to ensure random and fair results.
              </p>
              <p class="ordered-list-item">
                Random number calculation: Using client seeds and server seeds, the platform uses a
                cryptographic hash function to calculate the final game result, ensuring it is
                unpredictable and fair.
              </p>
              <li class="ordered-list-item">Result verification</li>
              <p class="ordered-list-item">
                Verification process: After the game ends, the server seed (publicly disclosed
                afterwards), the client seed, and the cryptographic hash of the game result are all
                recorded on the blockchain. Players can use this data to independently verify the
                fairness of game results through third-party tools or verification functions
                provided by the platform.
              </p>
              <p class="ordered-list-item">
                Transparency Guarantee: By exposing all relevant verification data on the
                blockchain, we ensure the transparency and fairness of the game, allowing players to
                trust the operation of the platform.
              </p>
            </ol>
          </ol>
        </section>
        <section class="section">
          <h2 id="data-flow" class="section-header section-subheader">
            7.3. Data flow and interaction
          </h2>
          <ol class="section-content ordered-list">
            <li class="ordered-list-header">Transaction initiation and execution</li>
            <p class="ordered-list-item">
              Any operations performed by players in the game, such as placing bets or purchasing
              items, will be executed through smart contracts to ensure the transparency and
              fairness of transactions.
            </p>
            <li class="ordered-list-header">Game process</li>
            <p class="ordered-list-item">
              Seed generation and submission: Players and servers each generate seeds, and the
              client submits the seeds to the game server.
            </p>
            <p class="ordered-list-item">
              Game Execution: The server collects all necessary data, including the client seed, to
              calculate the game outcome.
            </p>
            <p class="ordered-list-item">
              Result verification and publication: The game results are recorded on the blockchain
              through smart contracts, and the server seeds are published, allowing players to
              verify the results.
            </p>
            <li class="ordered-list-header">Result verification</li>
            <p class="ordered-list-item">
              Players can use the provided seeds and result hashes to verify the correctness and
              fairness of the game results through the platform or third-party tools.
            </p>
          </ol>
        </section>
        <section class="section">
          <h2 id="security-privacy" class="section-header section-subheader">
            7.4. Security Privacy
          </h2>
          <p class="section-content">
            The platform adopts multi-layer security measures to protect the security of player data
            and assets, and also uses encryption technology to ensure the privacy of player seeds.
            Through this detailed technical architecture and data process description, the Easy Get
            Coin gaming platform demonstrates its commitment to providing a fair, transparent and
            safe gaming environment. We believe that by continuously optimizing and updating our
            technology, we can provide players with a better gaming experience.
          </p>
        </section>
        <section class="section">
          <h2 id="dev-roadmap" class="section-header">8. Development Roadmap</h2>
        </section>
        <section class="section">
          <h2 id="short-term-goals" class="section-header section-subheader">
            8.1. Short-Term Goals
          </h2>
          <ol class="section-content ordered-list">
            <li class="ordered-list-header">Game prototype development:</li>
            <ul class="unordered-list">
              <li class="unordered-list-item">
                Easy Get Coin will focus on developing a game platform with complete functions, rich
                gameplay and economic stability, which will serve as the core of the Easy Get Coin
                metaverse project. The platform will showcase the project&apos;s basic concepts,
                gameplay and blockchain integration.
              </li>
              <li class="unordered-list-item">
                To complete the development of at least 10 games on the platform within the next
                2024 , ensuring that it contains all key features and can showcase Easy Get
                Coin&apos;s innovative ideas.
              </li>
            </ul>
            <li class="ordered-list-header">User interface and experience design:</li>
            <ul class="unordered-list">
              <li class="unordered-list-item">
                During the development process, Easy Get Coin will pay attention to the design of
                user interface (UI) and user experience (UX) to ensure that the game is not only
                technologically advanced, but also user-friendly and easy to operate.
              </li>
              <li class="unordered-list-item">
                This includes intuitive navigation, attractive visual design, and smooth gameplay.
              </li>
            </ul>
            <li class="ordered-list-header">Preliminary user testing:</li>
            <ul class="unordered-list">
              <li class="unordered-list-item">
                After completing prototype development, Easy Get Coin will conduct a series of user
                tests to collect feedback and evaluate the game's playability and market appeal.
              </li>
              <li class="unordered-list-item">
                The test will invite target user groups (such as young gamers and blockchain
                enthusiasts) to participate, and collect data through questionnaires, focus group
                discussions, and actual game testing.
              </li>
            </ul>
            <li class="ordered-list-header">Gather feedback and iterate:</li>
            <ul class="unordered-list">
              <li class="unordered-list-item">
                Feedback from user testing will be used to guide subsequent iterations and
                improvements to the game prototype.
              </li>
              <li class="unordered-list-item">
                Easy Get Coin will pay special attention to the user's gaming experience, interface
                ease of use, and the integration of blockchain functions to ensure that these
                elements meet user expectations and needs.
              </li>
            </ul>
          </ol>
          <p class="section-content">
            By achieving this short-term goal, Easy Get Coin can not only verify Easy Get Coin's
            game concept and technical implementation, but also lay a solid foundation for future
            development. This will be a key step for Easy Get Coin to build a Metaverse project that
            ranks among the top 100 in market capitalization.
          </p>
        </section>
        <section class="section">
          <h2 id="long-term-goals" class="section-header section-subheader">
            8.2. Long-term goal: Introduce blockchain technology to traditional game companies and
            provide new financing methods
          </h2>
          <ol class="section-content ordered-list">
            <li class="ordered-list-header">Establish a partnership:</li>
            <ul class="unordered-list">
              <li class="unordered-list-item">
                Easy Get Coin will establish partnerships with traditional Internet gaming companies
                to help them understand and utilize the potential of blockchain technology. This
                includes providing consulting services, technical support and customized solutions.
              </li>
              <li class="unordered-list-item">
                Through these collaborations, Easy Get Coin aims to expand the businesses of these
                companies into the blockchain field and open up new markets and revenue channels.
              </li>
            </ul>
            <li class="ordered-list-header">Explore new financing methods:</li>
            <ul class="unordered-list">
              <li class="unordered-list-item">
                Easy Get Coin will guide and assist these companies in new types of financing
                through blockchain technology, such as by issuing tokens, NFTs or participating in
                decentralized finance ( DeFi ) projects.
              </li>
              <li class="unordered-list-item">
                This not only provides them with a source of capital but also increases the
                diversification and global accessibility of the business.
              </li>
            </ul>
            <li class="ordered-list-header">Technology integration and application:</li>
            <ul class="unordered-list">
              <li class="unordered-list-item">
                Easy Get Coin&apos;s gaming platform will serve as a demonstration project to
                demonstrate how blockchain technology can be integrated into existing Internet
                businesses.
              </li>
              <li class="unordered-list-item">
                At the same time, Easy Get Coin will develop easy-to-integrate blockchain tools and
                interfaces to enable non-blockchain companies to easily access and use these
                technologies.
              </li>
            </ul>
            <li class="ordered-list-header">Create a knowledge sharing platform:</li>
            <ul class="unordered-list">
              <li class="unordered-list-item">
                To support these companies in their transformation, Easy Get Coin will establish a
                knowledge sharing platform that provides educational resources, best practices and
                industry insights.
              </li>
              <li class="unordered-list-item">
                This platform will promote information exchange and help companies better understand
                the advantages and application scenarios of blockchain technology.
              </li>
              <li class="unordered-list-item">
                <span class="underline">
                  Easy Get Coin is to become the top 100 Yuanverse project by market value, while
                  providing reliable technical support and innovative financing solutions to
                  traditional Internet companies.
                </span>
              </li>
            </ul>
          </ol>
        </section>
        <section class="section">
          <h2 id="fund" class="section-header">9. Fund</h2>
        </section>
        <section class="section">
          <h2 id="blockchain-foundation" class="section-header section-subheader">
            9.1. Introduction to Blockchain Foundation
          </h2>
          <p class="section-content">
            <span class="underline">
              The EGC Foundation is an organization dedicated to promoting the development of
              blockchain technology, supporting innovative projects, and participating in
              philanthropic undertakings. Its core goal is to promote the global application of
              blockchain technology and play an active role in philanthropy and innovative projects.
            </span>
          </p>
          <ol class="section-content ordered-list">
            <li class="ordered-list-header">Mission and Vision</li>
            <p class="ordered-list-item">
              EGC Foundation is to promote the development of blockchain technology, promote its
              application in various fields of society, and create a positive impact on the
              community and global society through charitable donations and supporting social
              innovation.
            </p>
            <li class="ordered-list-header">Main functions</li>
            <p class="ordered-list-item">
              Invest in innovative projects: The EGC Foundation is committed to investing in and
              supporting forward-looking blockchain and encryption technology projects to promote
              innovation and development of the entire blockchain ecosystem.
            </p>
            <p class="ordered-list-item">
              Charity: The EGC Foundation supports charities through donations and resources,
              focuses on social issues, and uses the transparency and non-tamperability of
              blockchain technology to improve the tracking and use efficiency of charity funds.
            </p>
            <p class="ordered-list-item">
              Project incubation: The foundation provides technology, resources and network support
              to cultivate emerging blockchain and encryption startups by incubating innovative
              projects.
            </p>
            <p class="ordered-list-item">
              Community Building: Promote the building of the global blockchain community and create
              an environment for sharing knowledge, collaboration and innovation through events,
              seminars and social media interactions.
            </p>
            <li class="ordered-list-header">Invest in charity and listed projects</li>
            <p class="ordered-list-item">
              The EGC Foundation uses its funds to invest in philanthropic causes and listed
              projects to achieve the dual goals of economic benefits and social value. By funding
              innovative projects with potential, the foundation promotes the development of
              blockchain technology, and at the same time gives back to society through charitable
              investment, promoting technological innovation to bring positive impacts to the wider
              community. In terms of listed projects, the foundation supports the development of the
              entire industry by investing in potential blockchain companies, provides entrepreneurs
              with key funds and resources, and promotes the commercialization process of blockchain
              technology.
            </p>
          </ol>
          <p class="section-content">
            Through this comprehensive strategy, the EGC Foundation is committed to becoming a key
            driver in the blockchain ecosystem to promote continuous innovation in the industry,
            sustainable development of society, and the advancement of global philanthropy.
          </p>
        </section>
        <section class="section">
          <h2 id="conclusion" class="section-header">10. Conclusion</h2>
        </section>
        <section class="section">
          <h2 id="vision-goals" class="section-header section-subheader">10.1. Vision and Goals</h2>
          <ol class="section-content ordered-list">
            <li class="ordered-list-header">Vision:</li>
            <p class="ordered-list-item">
              <span class="underline">
                Easy Get Coin 's vision is to create a revolutionary change in the gaming industry
                by combining the concepts of the Metaverse and blockchain technology to develop
                gaming experiences that are both innovative and broadly appealing.</span
              >
              Easy Get Coin is committed to creating a gaming ecosystem that not only fascinates
              players but also sets new standards for the entire industry.
            </p>
            <p class="ordered-list-item">Target:</p>
            <ul class="unordered-list">
              <li class="unordered-list-item">
                Build a blockchain game project in the top 100 by market value : Easy Get
                Coin&apos;s goal is to develop Easy Get Coin&apos;s Metaverse project into a leading
                project in the top 100 by market value , attracting global players and investment by
                providing unique gaming experiences and innovative technologies readers&apos;
                attention.
              </li>
              <li class="unordered-list-item">
                Copy and expand successful models : Use the experience and benefits gained by Easy
                Get Coin in the Metaverse project to copy and promote more such projects. Easy Get
                Coin plans to expand Easy Get Coin 's market influence through continuous innovation
                and improvement .
              </li>
              <li class="unordered-list-item">
                Help traditional Internet companies integrate into the blockchain : Easy Get Coin
                will assist traditional Internet companies in understanding and applying blockchain
                technology, providing them with new financing methods, so that they can remain
                competitive in the digital age.
              </li>
              <li class="unordered-list-item">
                Promote the development of the game industry : Easy Get Coin believes that through
                the efforts of Easy Get Coin , the entire game industry can be promoted to develop
                in a more open and innovative direction, bringing players an unprecedented gaming
                experience.
              </li>
            </ul>
            <li class="ordered-list-header">Strategic Focus:</li>
            <ul class="unordered-list">
              <li class="unordered-list-item">
                Continuous technological innovation: Continuously explore and implement the latest
                blockchain technology to ensure that Easy Get Coin 's games maintain a leading
                position in the market.
              </li>
              <li class="unordered-list-item">
                Build a strong community: Build and maintain an active player community that drives
                player engagement and loyalty.
              </li>
              <li class="unordered-list-item">
                Collaboration and partnerships: Build strong relationships with partners inside and
                outside the industry to jointly drive industry development.
              </li>
            </ul>
            <li class="ordered-list-header">Project potential:</li>
            <ul class="unordered-list">
              <li class="unordered-list-item">
                Easy Get Coin combines the most cutting-edge blockchain technology with the aim of
                creating a unique and immersive gaming experience. This not only attracts a broad
                player base but also provides new business opportunities.
              </li>
              <li class="unordered-list-item">
                Easy Get Coin's project has significant growth potential, especially in the context
                of the rapid expansion of the blockchain gaming market.
              </li>
            </ul>
            <li class="ordered-list-header">Strategic direction:</li>
            <ul class="unordered-list">
              <li class="unordered-list-item">
                Easy Get Coin 's strategic focus is continued technological innovation, community
                building and strengthening partnerships.
              </li>
              <li class="unordered-list-item">
                Easy Get Coin plans to gradually enhance Easy Get Coin's influence in the gaming
                industry through continuous product iteration and market expansion.
              </li>
            </ul>
            <li class="ordered-list-header">Expected return:</li>
            <ul class="unordered-list">
              <li class="unordered-list-item">
                Investing in Easy Get Coin's projects means investing in a fast-growing industry and
                an innovative product with potential.
              </li>
              <li class="unordered-list-item">
                Easy Get Coin's business model includes multiple revenue channels, such as game
                revenue, cooperative promotion and platform token issuance, which is expected to
                bring considerable returns.
              </li>
            </ul>
            <li class="ordered-list-header">Role of investors and partners:</li>
            <ul class="unordered-list">
              <li class="unordered-list-item">
                Investors and partners play a key role in the Easy Get Coin project. In addition to
                providing financial support, their expertise and market experience are critical to
                the success of the project.
              </li>
              <li class="unordered-list-item">
                Easy Get Coin welcomes the active participation of investors and partners, including
                suggestions for project development, assistance with market strategies, and
                technical and operational support.
              </li>
            </ul>
            <li class="ordered-list-header">Emphasis on long-term cooperation:</li>
            <ul class="unordered-list">
              <li class="unordered-list-item">
                Easy Get Coin focuses on establishing long-term and stable relationships with
                investors and partners. Easy Get Coin believes that through joint efforts and
                resource sharing, greater success can be achieved together.
              </li>
            </ul>
          </ol>
          <p class="section-content">
            Easy Get Coin sincerely invites investors and partners to join Easy Get Coin's journey
            and explore new possibilities in this dynamic and potential gaming industry. Through
            Easy Get Coin's joint efforts , Easy Get Coin believes that the long-term success of the
            project can be achieved and significant returns can be achieved for all stakeholders.
          </p>
        </section>
      </article>
      <aside>
        <div>
          <a
            href="#summary"
            class="link"
            :class="{ active: currentSection == 'summary' }"
            @click="currentSection = 'summary'"
            >Summary</a
          >
          <a
            href="#introduction"
            class="link"
            :class="{ active: currentSection == 'introduction' }"
            @click="currentSection = 'introduction'"
            >1. Introduction</a
          >
          <a
            href="#project-background"
            class="link sublink"
            :class="{ active: currentSection == 'project-background' }"
            @click="currentSection = 'project-background'"
            >1.1. Project Background</a
          >
          <a
            href="#development-background"
            class="link sublink"
            :class="{ active: currentSection == 'development-background' }"
            @click="currentSection = 'development-background'"
            >1.2. Development Background</a
          >
          <a
            href="#project-positioning"
            class="link sublink"
            :class="{ active: currentSection == 'project-positioning' }"
            @click="currentSection = 'project-positioning'"
            >1.3. Easy Get Coin project positioning</a
          >
          <a
            href="#ownership-transferability"
            class="link sublink"
            :class="{ active: currentSection == 'ownership-transferability' }"
            @click="currentSection = 'ownership-transferability'"
            >1.4. Enhance ownership and transferability</a
          >
          <a
            href="#goals-vision"
            class="link sublink"
            :class="{ active: currentSection == 'goals-vision' }"
            @click="currentSection = 'goals-vision'"
            >1.5. Goals and Vision</a
          >
          <a
            href="#market-analysis"
            class="link"
            :class="{ active: currentSection == 'market-analysis' }"
            @click="currentSection = 'market-analysis'"
            >2. Market Analysis</a
          >
          <a
            href="#target-market"
            class="link sublink"
            :class="{ active: currentSection == 'target-market' }"
            @click="currentSection = 'target-market'"
            >2.1. Target Market Description</a
          >
          <a
            href="#competiter-analysis"
            class="link sublink"
            :class="{ active: currentSection == 'competiter-analysis' }"
            @click="currentSection = 'competiter-analysis'"
            >2.2. Competitor Analysis</a
          >
          <a
            href="#market-trends"
            class="link sublink"
            :class="{ active: currentSection == 'market-trends' }"
            @click="currentSection = 'market-trends'"
            >2.3. Market Trends</a
          >
          <a
            href="#customer-aquisition"
            class="link sublink"
            :class="{ active: currentSection == 'customer-aquisition' }"
            @click="currentSection = 'customer-aquisition'"
            >2.4. Customer Aquisition</a
          >
          <a
            href="#problems-solutions"
            class="link"
            :class="{ active: currentSection == 'problems-solutions' }"
            @click="currentSection = 'problems-solutions'"
            >3. Problems and Solutions</a
          >
          <a
            href="#market-issues"
            class="link sublink"
            :class="{ active: currentSection == 'market-issues' }"
            @click="currentSection = 'market-issues'"
            >3.1. Market Issues</a
          >
          <a
            href="#solution"
            class="link sublink"
            :class="{ active: currentSection == 'solution' }"
            @click="currentSection = 'solution'"
            >3.2. Solution</a
          >
          <a
            href="#project-description"
            class="link"
            :class="{ active: currentSection == 'project-description' }"
            @click="currentSection = 'project-description'"
            >4. Project Description</a
          >
          <a
            href="#core-functions"
            class="link sublink"
            :class="{ active: currentSection == 'core-functions' }"
            @click="currentSection = 'core-functions'"
            >4.1. Core Functions</a
          >
          <a
            href="#technology"
            class="link sublink"
            :class="{ active: currentSection == 'technology' }"
            @click="currentSection = 'technology'"
            >4.2. Technology</a
          >
          <a
            href="#community-governance"
            class="link"
            :class="{ active: currentSection == 'community-governance' }"
            @click="currentSection = 'community-governance'"
            >5. Community Governance</a
          >
          <a
            href="#pledge-mechanism"
            class="link sublink"
            :class="{ active: currentSection == 'pledge-mechanism' }"
            @click="currentSection = 'pledge-mechanism'"
            >5.1. Pledge Mechanism</a
          >
          <a
            href="#reward-mechanism"
            class="link sublink"
            :class="{ active: currentSection == 'reward-mechanism' }"
            @click="currentSection = 'reward-mechanism'"
            >5.2. Community Reward Mechanism</a
          >
          <a
            href="#token-economy"
            class="link"
            :class="{ active: currentSection == 'token-economy' }"
            @click="currentSection = 'token-economy'"
            >6. Token Economy</a
          >
          <a
            href="#introduction-token"
            class="link sublink"
            :class="{ active: currentSection == 'introduction-token' }"
            @click="currentSection = 'introduction-token'"
            >6.1. Introduction to EGC Token</a
          >
          <a
            href="#token-uses"
            class="link sublink"
            :class="{ active: currentSection == 'token-uses' }"
            @click="currentSection = 'token-uses'"
            >6.2. As a developer, let me introduce you to the multiple uses of EGC tokens</a
          >
          <a
            href="#destruction-mechanism"
            class="link sublink"
            :class="{ active: currentSection == 'destruction-mechanism' }"
            @click="currentSection = 'destruction-mechanism'"
            >6.3. Destruction Mechanism</a
          >
          <a
            href="#unlocking-schedule"
            class="link sublink"
            :class="{ active: currentSection == 'unlocking-schedule' }"
            @click="currentSection = 'unlocking-schedule'"
            >6.4. Allocation and unlocking schedule</a
          >
          <a
            href="#private-placement"
            class="link sublink"
            :class="{ active: currentSection == 'private-placement' }"
            @click="currentSection = 'private-placement'"
            >6.5. Private Placement</a
          >
          <a
            href="#technical-architecture"
            class="link"
            :class="{ active: currentSection == 'technical-architecture' }"
            @click="currentSection = 'technical-architecture'"
            >7. Technical Architecture</a
          >
          <a
            href="#overview"
            class="link sublink"
            :class="{ active: currentSection == 'overview' }"
            @click="currentSection = 'overview'"
            >7.1. Overview</a
          >
          <a
            href="#tech-architecture"
            class="link sublink"
            :class="{ active: currentSection == 'tech-architecture' }"
            @click="currentSection = 'tech-architecture'"
            >7.2. Technical Architecture</a
          >
          <a
            href="#data-flow"
            class="link sublink"
            :class="{ active: currentSection == 'data-flow' }"
            @click="currentSection = 'data-flow'"
            >7.3. Data flow and interaction</a
          >
          <a
            href="#security-privacy"
            class="link sublink"
            :class="{ active: currentSection == 'security-privacy' }"
            @click="currentSection = 'security-privacy'"
            >7.4. Security and Privacy</a
          >
          <a
            href="#dev-roadmap"
            class="link"
            :class="{ active: currentSection == 'dev-roadmap' }"
            @click="currentSection = 'dev-roadmap'"
            >8. Development Goals</a
          >
          <a
            href="#short-term-goals"
            class="link sublink"
            :class="{ active: currentSection == 'short-term-goals' }"
            @click="currentSection = 'short-term-goals'"
            >8.1. Short-Term Goals</a
          >
          <a
            href="#long-term-goals"
            class="link sublink"
            :class="{ active: currentSection == 'long-term-goals' }"
            @click="currentSection = 'long-term-goals'"
            >8.2. Long-term goal: Introduce blockchain technology to traditional game companies and
            provide new financing methods</a
          >
          <a
            href="#fund"
            class="link"
            :class="{ active: currentSection == 'fund' }"
            @click="currentSection = 'fund'"
            >9. Fund</a
          >
          <a
            href="#blockchain-foundation"
            class="link sublink"
            :class="{ active: currentSection == 'blockchain-foundation' }"
            @click="currentSection = 'blockchain-foundation'"
            >9.1. Introduction to Blockchain Foundation</a
          >
          <a
            href="#conclusion"
            class="link"
            :class="{ active: currentSection == 'conclusion' }"
            @click="currentSection = 'conclusion'"
            >10. Conclusion</a
          >
          <a
            href="#vision-goals"
            class="link sublink"
            :class="{ active: currentSection == 'vision-goals' }"
            @click="currentSection = 'vision-goals'"
            >10.1. Vision and Goals</a
          >
        </div>
      </aside>
    </div>
  </div>
</template>

<style scoped>
.whitepaper-container {
  display: flex;
  padding: 100px;
}
.bg {
  height: 50px;
  width: 100%;
  z-index: 100;
  background: #141217;
  position: fixed;
}
.page-heading {
  font-size: 45px;
}
article {
  color: white;
  width: 75%;
}
.section {
  margin-bottom: 60px;
  width: 100%;
}
.section-header {
  font-size: 40px;
  padding-top: 60px;
}
.section-subheader {
  font-size: 25px;
  padding-top: 0px;
}
.section-content-header {
  font-size: 23px;
  padding-top: 20px;
}
.section-content {
  font-size: 20px;
  line-height: 35px;
  margin-top: 20px;
  width: 90%;
}
.underline {
  text-decoration: underline;
}
.ordered-list {
  padding-left: 25px;
}
.ordered-list-header {
  font-weight: 600;
  padding-top: 15px;
  padding-left: 10px;
}
.ordered-list-item {
  padding-left: 10px;
  padding-top: 15px;
}
.unordered-list {
  padding-left: 20px;
}
.unordered-list-item {
  list-style-type: disc;
  padding-left: 20px;
  padding-top: 15px;
}
.img-container {
  display: flex;
  gap: 20px;
}
.img-container-1 {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
}
.table_component {
  overflow: auto;
  width: 100%;
}
.table_component table {
  border: 1px solid #dededf;
  height: 100%;
  width: 100%;
  table-layout: fixed;
  border-collapse: collapse;
  border-spacing: 1px;
  text-align: left;
}
.table_component th {
  border: 1px solid white;
  background-color: #54585a;
  color: #000000;
  padding: 5px;
  font-size: 11px;
  word-break: break-all;
  text-align: center;
}
.table_component tr {
  height: 40px;
}
.table_component td {
  border: 1px solid #dededf;
  background-color: transparent;
  color: white;
  padding: 5px;
  font-size: 11px;
  word-break: break-all;
  text-align: center;
}
aside {
  width: 25%;
  height: 90vh;
  padding-bottom: 100px;
  position: fixed;
  right: 50px;
  overflow-y: scroll;
}
aside > div {
  position: sticky;
  top: 100px;
  padding-left: 2em;
  display: flex;
  flex-direction: column;
}
.link {
  display: flex;
  align-items: center;
  text-decoration: none;
  color: rgba(122, 118, 118, 0.872);
  border-left: 1px solid rgba(122, 118, 118, 0.872);
  padding: 7px 0 7px 20px;
  line-height: 25px;
}
.link.active {
  color: white;
  border-color: white;
}
.sublink {
  padding: 5px 0 5px 35px;
}
</style>
