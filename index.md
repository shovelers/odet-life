---
layout: post
backLink: false
---

<div class="grid h-screen grid-cols-10 grid-rows-4 font-sans bg-cover bg-center" style="background-image: url('https://images.unsplash.com/photo-1519681393784-d120267933ba?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1124&q=100')">

<nav class="bg-transparent border-gray-200 px-4 md:px-10 py-2.5 rounded dark:bg-gray-800 w-screen">
  <div class="container flex flex-wrap justify-between items-center mx-auto">
    <div class="flex flex-row items-center">
      <a href="#" class="flex items-center"><img src="/assets/odet_logo.svg" class="h-6 sm:h-9" alt="Odet Logo" /></a>
      <button type="button" class="text-white bg-gray-900 font-normal rounded-lg text-xs px-2 text-center md:mr-0 h-5 md:h-6">Alpha</button>
    </div>
    <div class="flex md:order-2">
      <button type="button" class="text-white bg-blue-700 hover:bg-gray-800 focus:ring-2 focus:outline-none focus:ring-blue-500 font-medium rounded-lg text-sm px-5 py-2.5 text-center md:mr-0" data-modal-toggle="defaultModal">Request Access</button>

      <!-- Main modal -->
      <div id="defaultModal" tabindex="-1" aria-hidden="true" class="hidden overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 w-full md:inset-0 h-modal md:h-full">
        <div class="relative p-8 bg-gray-900 w-full max-w-2xl h-full md:h-auto">
          <!-- Modal content -->
          <div class="relative rounded-lg shadow dark:bg-gray-700">
            <!-- Modal header -->
            <div class="flex justify-between items-start rounded-t">
                <button type="button" class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white" data-modal-toggle="defaultModal">
                    <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                </button>
            </div>
            <div class="p-8 md:w-auto md:order-1 gap-8" id="mobile-menu-4">
              <p class="p-4 text-center text-xl lg:text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-tranparent to-blue-400">BETA SIGNUP</p>
              <p class="p-8 text-lg text-center text-white">Enter your email address below to receive access to private beta of odet</p>
              <form class="p-8 form flex flex-col gap-8 justify-between items-center" action="https://app.convertkit.com/forms/3174604/subscriptions" method="post" data-sv-form="3174604" data-uid="3ecf8fb6f9">
                <input class="text-black bg-white focus:ring-2 focus:outline-none focus:ring-blue-500 font-medium rounded-lg text-sm w-full py-3.5 text-center md:mr-0" type="email" value="" name="email_address" placeholder="Email Address" id="email" required>
                <input type="submit" data-element="submit" class="subscribe" value="Signup" class="text-white bg-blue-700 hover:bg-gray-800 focus:ring-2 focus:outline-none focus:ring-blue-500 font-medium rounded-lg text-sm w-full py-3.5 text-center md:mr-0">
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="hidden justify-between items-center w-full md:flex md:w-auto md:order-1" id="mobile-menu-4">
      <ul class="flex flex-col mt-4 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium">
        <li>
          <a href="#" class="block py-2 pr-4 pl-3 text-white hover:text-blue-500 md:p-0 text-lg" aria-current="page">Home</a>
        </li>
        <li>
          <a href="#tools" class="block py-2 pr-4 pl-3 text-white hover:text-blue-500 md:p-0 text-lg">Tools</a>
        </li>
      </ul>
  </div>
  </div>
</nav>

  <div class="top-card grid col-span-6 lg:col-span-4 col-start-3 lg:col-start-4 row-start-3 place-items-center text-center antialiased">
    <p class="text-4xl md:text-6xl lg:text-7xl text-white font-semibold mt-4"> Odet </p>
    <p class="text-lg md:text-2xl lg:text-4xl text-white mb-8">The alert inbox you deserve.</p>
  </div>
  <div class="grid w-screen row-start-4 place-items-center">
  <svg class="h-8 w-8 text-white self-end" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"/>
      </svg>
  </div>
</div>

<div class="grid bg-gray-900 min-h-screen p-6 md:p-20 antialiased">
  <div class="card p-3 md:p-20 flex flex-col justify-center md:flex-row text-gray-300">
    <div class="md:w-1/3 hidden md:grid place-content-evenly">
      <img class="w-full object-contain" src="/assets/em_chat.png" alt="Man looking at item at a store">
    </div>
    <div class="w-full md:w-2/3 text-center p-4 flex flex-col justify-around">
      <p class="text-xl lg:text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-tranparent to-blue-400">Alert Management is broken.</p>
      <p class="py-2">Monitoring systems (across infrastructure, application, performance, security & data) generate 1000s of alert notifications. These are funneled to Slack or other communication tools to reach teams. Response to alerts is time-critical to ensure customer experience and business are not impacted. Alerts with poor signal to noise ratio flood channels, resulting in poor comprehension,alert fatigue & degraded developer experience.</p>
      <p class="py-2">Slack doesn't cut it. <span class="font-bold text-lg">We need a better inbox.</span></p>
      <p>One that recognizes alerts as first-class entitites. One that understands the inherent workflow for alert management. One that doesn't get in the way. One that I don't mute to make my life better. One that understands and flexes to my need.</p>
      <p class="py-2">Hence, we are building <span class="font-bold">Odet</span>.</p>
    </div>
  </div>
</div>

<div class="grid min-h-screen blue-blob text-gray-300 p-6 md:p-20 lg:p-20 place-content-evenly antialiased">
  <p class="text-lg md:text-3xl font-semibold text-center">Features</p>
  <div class="flex flex-col md:flex-row">
    <div class="card grid grid-rows-3 h-64 text-center m-4 p-4 md:p-4 lg:p-8 md:w-1/2">
      <p class="text-lg md:text-2xl lg:text-3xl font-semibold">Hit Inbox-Zero </p>
      <p class="text-sm md:text-base lg:text-lg row-span-2">Breeze through alerts
      without missing critical information using the <span class="font-bold">Aggregate View & Split
      Inboxes</span></p>
    </div>
    <div class="card grid grid-rows-3 h-64 text-center m-4 p-4 md:p-4 lg:p-8 md:w-1/2">
      <p class="text-lg md:text-2xl lg:text-3xl font-semibold">Lightning Fast</p>
      <p class="text-sm md:text-base lg:text-lg row-span-2">Escape the cobweb of monitoring tools for alert management using <span class="font-bold">Intuitive Key bindings & In-Place Alert Modification</span> across tools</p>
    </div>
  </div>

  <div class="flex justify-center">
    <div class="card grid grid-rows-3 h-64 text-center m-4 p-4 md:p-4 lg:p-8 md:w-1/2">
      <p class="text-lg md:text-2xl lg:text-3xl font-semibold">Zero Disturbance</p>
      <p class="text-sm md:text-base lg:text-lg row-span-2">Never get disturbed by alerts that don't need you. Ack, mute, set reminders, tag & filter to design an alert inbox that works for you. <span class="font-bold">ALWAYS.</span></p>
    </div>
  </div>
</div>

<div id="tools" class="flex flex-col h-screen md:max-h-screen text-gray-300 bg-gray-900 justify-center items-center p-4 md:p-20 antializased space-y-2">
  <p class="text-xl md:text-3xl text-gray-300  md:text-2xl font-semibold text-center">Free Tools</p>
  <div class="card w-full p-2 md:p-8 py-8 text-center space-y-2">
    <div class="flex flex-col md:flex-row items-center justify-between">
      <img class="md:w-1/2 object-contain" src="/assets/fatigue_meter_2.png" alt="fatigue_2">
      <div class="space-y-4">
        <p class="text-2xl md:text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-tranparent to-blue-400">Fatigue Meter</p>
        <p class="text-sm md:text-base"><span class="font-bold md:text-xl">Scale the wall of text</span><br>Measure Fatigue Level of your slack channel<br>Spot historical patterns, tech-debts & broken windows in the system.<br><span class="font-semibold italic">Put the slack channel to work</span></p>
        <a href="https://slack.com/oauth/v2/authorize?client_id=1228755460243.3294491732801&scope=channels:history,channels:join,channels:read,team:read,users:read&user_scope=" type="button" class="text-white bg-blue-700 hover:bg-gray-800 focus:ring-2 focus:outline-none focus:ring-blue-500 font-medium rounded-lg text-sm px-5 py-2.5 text-center md:mr-0">Try Now</a>
        <p class="text-xs font-extralight pt-2 md:pt-4">This will install a slackbot to the selected slack channel<br>to calculate the fatigue</p>
      </div>
      </div>
  </div>
  <div class="grid text-center text-white font-extralight">
    <p class="text-xs md:text-sm"> Crafted with &#10084; by <a href="https://shovel.company" target="_blank" class="underline text-purple-400"> Shovel.Company </a> </p>
  </div>
</div>
