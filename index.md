---
layout: post
backLink: false
---

<div class="flex flex-col justify-center items-center bg-gray-900 text-gray-300 p-6 md:pt-10 md:pb-20 md:px-32">
  <div class="flex flex-col justify-evenly items-center">
    <div class="w-2/3 md:w-1/4">
      <img src="assets/GoL1bbg.gif">
    </div>
    <div class="grid place-content-center relative md:w-3/5">
      <div class="hidden md:block absolute -top-40 -right-10 z-0">
        <img src="assets/gol_block_2.svg">
      </div>
      <div class="hidden md:block absolute top-60 -left-40 z-0">
        <img src="assets/gol_block_3.svg">
      </div>
      <div class="z-10">
        <p class="text-gray-200 text-4xl md:text-6xl font-bold text-center mb-4 md:mb-8">Odet.Life</p>
        <article class="prose text-gray-300 max-w-none">
          <p>Odet Life is a dynamic generative art project based on Conway’s Game of Life</p>
          <p>Game of Life was not the first cellular automata ever created. John Von Neumann and Stanislaw Ulam discovered them in 1940s and it has been a topic for computer scientist ever since.
        But, Life was the first one to achieve cult status in 1970s. Since then, it has been gateway for generations of programmers. People are still discovering new patterns 50 year
        on. Generations have been awestruck with Life’s lesson - How simplicity can give birth to such magnificent complexity.</p>
          <p>John Horton Conway - created a zero player simulation game, which he called “life” because of its analogies to rise, fall
        and alternations of societies of living organisms. Conway designed the rules of the game to ensure unpredictable nature of population’s behaviour.</p>
          <p>Grid starts with an initial configuration and then it evolves, with three simple rules - iteration by iteration.</p>
          <ul>
            <li>Birth: An empty or “dead” cell with precisely three “live”
            neighbours will come to life.</li>
            <li>Death: A live cell with zero or one live neighbours will die of isolation; A live cell with four or more live neighbours will die of overpopulation.</li>
            <li>Survival: A live cell with two or three live neighbours remains alive.</li>
          </ul>
        </article>
      </div>
    </div>
  </div>
</div>

<div class="grid place-items-center w-full md:w-2/3 overflow-auto md:mb-12">
  <div id="sketch-holder"></div>
</div>

<div class="flex flex-col justify-center items-center bg-gray-900 text-gray-300 p-6 md:pt-10 md:pb-20 md:px-32">
  <div class="flex flex-col justify-evenly items-center">
    <div class="grid place-content-center relative md:w-3/5">
      <div class="hidden md:block absolute bottom-0 -right-36 z-0">
        <img src="assets/gol_block_1.svg">
      </div>
      <div class="z-10">
        <article class="prose text-gray-300 max-w-none">
          <p>Odet Life NFT collection pays tribute to Game of Life, and intends to increase the reach of this meme. Each NFT in the collection contains a unique initial configuration for Life.
          Game of Life’s initial map is encoded onto the NFT, and written on chain permanently. Making it truly on-chain artwork, and not just some simple link to JPEG.</p>
          <p>Since, Game of Life is deterministic, NFT will evolve in the exact same patterns no matter how you show it. This brings us to the fun part - Odet Life NFTs are dynamic like the game
          itself. NFT will take a new shape and form depending on from where and how it is being visualised.</p>
          <p>Project will be launched with a few privately distributed NFTs, and three visualisation to see the NFTs. We intend to ship a new visualisation every month, so that this art piece can be displayed in interesting ways and places. We will also reward NFT to anyone who submits a new visualisation. If project gathers enough requests from the community, we will organise a sale.</p>
        </article>
      </div>
    </div>
  </div>

  <div class="flex flex-col bg-gray-800 w-full md:w-1/2 rounded-lg mt-6 md:mt-12 p-4">
  <p class="text-center text-lg font-semibold mb-3">Mint Happening Soon!<br>Signup to get the information</p>
    <form class="flex flex-row gap-4 justify-between items-center" action="https://app.convertkit.com/forms/3221811/subscriptions" method="post" data-sv-form="3221811" data-uid="19d88e82b2">
      <input class="text-black bg-white focus:ring-2 focus:outline-none focus:ring-blue-500 font-medium rounded-lg text-sm w-4/5 py-3.5 text-center md:mr-0" type="email" value="" name="email_address" placeholder="Email Address" id="email" required>
      <input type="submit" data-element="submit" class="subscribe" value="Signup" class="text-white bg-blue-700 hover:bg-blue-600 focus:ring-2 focus:outline-none focus:ring-blue-500 font-medium rounded-lg text-sm w-1/5 py-3.5 text-center md:mr-0">
    </form>
  </div>
</div>

<script src="{{ "/assets/sketch.js" | relative_url }}"></script>