<script setup>
import { onMounted } from 'vue'
import { initFlowbite } from 'flowbite'

// initialize components based on data attribute selectors
onMounted(() => {
    initFlowbite();
})
</script>

<template>


<nav class="bg-white border-gray-200 dark:bg-gray-900">
    <div class="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl p-4">
        <a href="https://www.formula1.com/" class="flex items-center space-x-3 rtl:space-x-reverse">
            <img src="/F1.png" class="h-8" alt="F1 Logo" />
            <span class="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Formula 1</span>
        </a>
    </div>
</nav>
<nav class="bg-gray-50 dark:bg-gray-700">
    <div class="max-w-screen-xl px-4 py-3 mx-auto">
        <div class="flex items-center">
            <ul class="flex flex-row font-medium mt-0 space-x-8 rtl:space-x-reverse text-sm">
                <li>
                    <a href="#start" class="text-gray-900 dark:text-white hover:underline" aria-current="page">Zacznij przygode jajco</a>
                </li>
                <li>
                    <a href="#best" class="text-gray-900 dark:text-white hover:underline">Najlpesi kierowcy</a>
                </li>
                <li>
                    <a href="#again" class="text-gray-900 dark:text-white hover:underline">Przeżyj to jeszcze raz</a>
                </li>
            </ul>
        </div>
    </div>
</nav>



<section class="bg-white dark:bg-gray-900">
    <div class="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16 lg:px-12">
        <a href="https://www.formula1.com/en/page.what-is-f1.html" class="inline-flex justify-between items-center py-1 px-1 pr-4 mb-7 text-sm text-gray-700 bg-gray-100 rounded-full dark:bg-gray-800 dark:text-white hover:bg-gray-200 dark:hover:bg-gray-700" role="alert">
            <span class="text-xs bg-primary-600 rounded-full text-white px-4 py-1.5 mr-3">Obczaj</span> <span class="text-sm font-medium" href="">Czym jest Formula 1</span> 
            <svg class="ml-2 w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd"></path></svg>
        </a>
        <h1 class="mb-4 text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl dark:text-white">Formuła 1: Adrenalina i Szybkość</h1>
        <p class="mb-8 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 xl:px-48 dark:text-gray-400">Zapraszam do świata Formuły 1, gdzie innowacja spotyka się z prędkością. Przeżyj pasję i dynamikę najbardziej prestiżowych wyścigów na świecie!</p>
        <div class="flex flex-col mb-8 lg:mb-16 space-y-4 sm:flex-row sm:justify-center sm:space-y-0 sm:space-x-4">
            <a class="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-white rounded-lg bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 dark:focus:ring-primary-900">
                Obczaj więcej
                <svg class="ml-2 -mr-1 w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
            </a>
            <a href="https://www.youtube.com/watch?v=viQC-6xoJ3E" class="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-gray-900 rounded-lg border border-gray-300 hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 dark:text-white dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-800">
                <svg class="mr-2 -ml-1 w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M2 6a2 2 0 012-2h6a2 2 0 012 2v8a2 2 0 01-2 2H4a2 2 0 01-2-2V6zM14.553 7.106A1 1 0 0014 8v4a1 1 0 00.553.894l2 1A1 1 0 0018 13V7a1 1 0 00-1.447-.894l-2 1z"></path></svg>
                Zobacz video
            </a>   
        </div>



<section class="bg-white dark:bg-gray-900">
  <div class="max-w-screen-xl px-4 mx-auto lg:px-6">
    <div class="max-w-2xl mx-auto mt-8 lg:mt-16">
      <img class="w-full rounded-lg shadow-lg" src="/bolid.jpg"
        alt="Content image">
    </div>
  </div>
</section>


    </div>
</section>



<section class="bg-white dark:bg-gray-900 antialiased">
  <div class="max-w-screen-xl px-4 py-8 mx-auto lg:px-6 sm:py-16 lg:py-24">
    <div class="max-w-2xl mx-auto text-center" id="start">
      <h2 class="text-3xl font-extrabold leading-tight tracking-tight text-gray-900 sm:text-4xl dark:text-white">
        Zacznij swoją własną przygode z F1!
      </h2>
      <p class="mt-4 text-base font-normal text-gray-500 sm:text-xl dark:text-gray-400">
        Odkryj ekscytację Formuły 1: dynamiczne wyścigi, mistrzowska rywalizacja i zaawansowana technologia. Dołącz do akcji, gdzie każda sekunda na torze przynosi niezapomniane emocje!
      </p>
    </div>

    <div class="mt-12 space-y-16 sm:mt-16">
      <div class="flex flex-col lg:items-center lg:flex-row gap-y-8 sm:gap-y-12 lg:gap-x-16 xl:gap-x-24">
        <div>
          <img class="object-cover w-full rounded-lg shadow-lg"
            src="/start-lights.png" alt="start-light">
        </div>

        <div class="w-full space-y-6 lg:max-w-lg shrink-0 xl:max-w-2xl">
          <div class="space-y-3">
            <h3 class="text-3xl font-bold leading-tight text-gray-900 sm:text-4xl dark:text-white">
                Zielone światło
            </h3>
            <p class="text-base font-normal text-gray-500 sm:text-lg dark:text-gray-400">
                Weekend Formuły 1 rozpoczyna się piątkowymi treningami, dającym kierowcom szansę na dostosowanie bolidów. W sobotę odbywają się dodatkowe treningi i kwalifikacje ustalające pozycje startowe. Niedziela to czas na główny wyścig, gdzie kierowcy walczą o punkty i zwycięstwo. Cały weekend łączy w sobie intensywne przygotowania, strategię i emocjonującą rywalizację.
            </p>
          </div>

          <a href="Cały weekend łączy w sobie intensywne przygotowania, strategię i emocjonującą rywalizację." title=""
            class="text-white bg-primary-700 justify-center hover:bg-primary-800 inline-flex items-center  focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
            role="button">
            Zobacz więcej informacji
            <svg aria-hidden="true" class="w-5 h-5 ml-2 -mr-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"
              fill="currentColor">
              <path fill-rule="evenodd"
                d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                clip-rule="evenodd" />
            </svg>
          </a>
        </div>
      </div>

      <div class="flex flex-col lg:items-center lg:flex-row gap-y-8 sm:gap-y-12 lg:gap-x-16 xl:gap-x-24">
        <div class="lg:order-2">
          <img class="object-cover w-full rounded-lg shadow-lg"
            src="/who-races.png" alt="">
        </div>

        <div class="w-full space-y-6 lg:max-w-lg shrink-0 xl:max-w-2xl lg:order-1">
          <div class="space-y-3">
            <h3 class="text-3xl font-bold leading-tight text-gray-900 sm:text-4xl dark:text-white">
              Kto się ściga w F1?
            </h3>
            <p class="text-base font-normal text-gray-500 sm:text-lg dark:text-gray-400">
                Ekstremalne siły G. Odważne decyzje podejmowane w mgnieniu oka – i przy prędkości 370 km/h. Walcząc o bycie najlepszym, kierowcy Formuły 1 bardziej przypominają pilotów myśliwców niż sportowców. Tylko 20 zawodników ma szansę wziąć udział w zawodach i wykorzystują siebie – i swoje niesamowite maszyny – do granic możliwości.
            </p>
          </div>

          <a href="https://www.formula1.com/en/drivers.html" title=""
            class="text-white bg-primary-700 justify-center hover:bg-primary-800 inline-flex items-center  focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
            role="button">
            Zobacz więcej informacji
            <svg aria-hidden="true" class="w-5 h-5 ml-2 -mr-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"
              fill="currentColor">
              <path fill-rule="evenodd"
                d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                clip-rule="evenodd" />
            </svg>
          </a>
        </div>
      </div>

      <div class="flex flex-col lg:items-center lg:flex-row gap-y-8 sm:gap-y-12 lg:gap-x-16 xl:gap-x-24">
        <div>
          <img class="object-cover w-full rounded-lg shadow-lg" src="/who-team.png"
            alt="">
        </div>

        <div class="w-full space-y-6 lg:max-w-lg shrink-0 xl:max-w-2xl">
          <div class="space-y-3">
            <h3 class="text-3xl font-bold leading-tight text-gray-900 sm:text-4xl dark:text-white">
              Jakie zespoły są w F1?
            </h3>
            <p class="text-base font-normal text-gray-500 sm:text-lg dark:text-gray-400">
                Formuła 1 to sport zespołowy. Trzeba wymienić wszystkie 4 opony w samochodzie w czasie krótszym niż 2 sekundy! Zespoły F1 projektują, budują swoje samochody i przygotowują je do wyścigu. Każdy ma swoją historię. Każdy ma swoje własne, unikalne podejście. Wszyscy chcą być najszybsi. Ale komu warto kibicować?
            </p>
          </div>

          <a href="https://www.formula1.com/en/teams.html" title=""
            class="text-white bg-primary-700 justify-center hover:bg-primary-800 inline-flex items-center  focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
            role="button">
            Zobacz więcej informacji
            <svg aria-hidden="true" class="w-5 h-5 ml-2 -mr-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"
              fill="currentColor">
              <path fill-rule="evenodd"
                d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                clip-rule="evenodd" />
            </svg>
          </a>
        </div>
      </div>

      <div class="flex flex-col lg:items-center lg:flex-row gap-y-8 sm:gap-y-12 lg:gap-x-16 xl:gap-x-24">
        <div class="lg:order-2">
          <img class="object-cover w-full rounded-lg shadow-lg"
            src="/where-race.png" alt="">
        </div>

        <div class="w-full space-y-6 lg:max-w-lg shrink-0 xl:max-w-2xl lg:order-1">
          <div class="space-y-3">
            <h3 class="text-3xl font-bold leading-tight text-gray-900 sm:text-4xl dark:text-white">
                Gdzie ściga się F1?
            </h3>
            <p class="text-base font-normal text-gray-500 sm:text-lg dark:text-gray-400">
                Niektóre obiekty sportowe rozgrywane są na stadionach. Nasze „stadiony” obejmują miasta. Z 23 wyścigami w 23 niesamowitych lokalizacjach na 5 kontynentach, Formuła 1 jest naprawdę sportem międzynarodowym.
            </p>
          </div>

          <a href="https://www.formula1.com/en/racing/2023.html" title=""
            class="text-white bg-primary-700 justify-center hover:bg-primary-800 inline-flex items-center  focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
            role="button">
            Zobacz więcej informacji
            <svg aria-hidden="true" class="w-5 h-5 ml-2 -mr-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"
              fill="currentColor">
              <path fill-rule="evenodd"
                d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                clip-rule="evenodd" />
            </svg>
          </a>
        </div>
      </div>


            <div class="flex flex-col lg:items-center lg:flex-row gap-y-8 sm:gap-y-12 lg:gap-x-16 xl:gap-x-24">
        <div>
          <img class="object-cover w-full rounded-lg shadow-lg" src="/f1-explains.png"
            alt="">
        </div>

        <div class="w-full space-y-6 lg:max-w-lg shrink-0 xl:max-w-2xl">
          <div class="space-y-3">
            <h3 class="text-3xl font-bold leading-tight text-gray-900 sm:text-4xl dark:text-white">
              F1 wyjaśnienia
            </h3>
            <p class="text-base font-normal text-gray-500 sm:text-lg dark:text-gray-400">
                F1 nie zatrzymuje się na fladze w szachownicę. Nasz podcast F1 Wyjaśnia, prowadzony przez Katie Osborne i Christiana Hewgilla, gromadzi znanych gości ze sportu, aby odpowiedzieć na pytania fanów dotyczące Formuły 1.
            </p>
          </div>

          <a href="https://www.formula1.com/en/latest/tags.formula-why.2Cd0j5aoD3EOoaaoaSdgiD.html" title=""
            class="text-white bg-primary-700 justify-center hover:bg-primary-800 inline-flex items-center  focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
            role="button">
            Zobacz więcej informacji
            <svg aria-hidden="true" class="w-5 h-5 ml-2 -mr-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"
              fill="currentColor">
              <path fill-rule="evenodd"
                d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                clip-rule="evenodd" />
            </svg>
          </a>
        </div>
      </div>
      
      <div class="flex flex-col lg:items-center lg:flex-row gap-y-8 sm:gap-y-12 lg:gap-x-16 xl:gap-x-24">
        <div class="lg:order-2">
          <img class="object-cover w-full rounded-lg shadow-lg"
            src="/under-hood.png" alt="">
        </div>

        <div class="w-full space-y-6 lg:max-w-lg shrink-0 xl:max-w-2xl lg:order-1">
          <div class="space-y-3">
            <h3 class="text-3xl font-bold leading-tight text-gray-900 sm:text-4xl dark:text-white">
              Wejdź pod maskę F1
            </h3>
            <p class="text-base font-normal text-gray-500 sm:text-lg dark:text-gray-400">
                F1 może poszczycić się technologią, która jest innowacyjna, przełomowa i ratująca życie. Samochody F1 korzystają już z najwydajniejszego silnika na świecie, a inżynierowie tego sportu toczą zaciętą walkę o pokonanie stopera… i swoich rywali!
            </p>
          </div>

          <a href="https://www.formula1.com/en/latest/tags.technical.4lP4Pth1kICO2iCQqGAIIU.html" title=""
            class="text-white bg-primary-700 justify-center hover:bg-primary-800 inline-flex items-center  focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
            role="button">
            Zobacz więcej informacji
            <svg aria-hidden="true" class="w-5 h-5 ml-2 -mr-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"
              fill="currentColor">
              <path fill-rule="evenodd"
                d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                clip-rule="evenodd" />
            </svg>
          </a>
        </div>
      </div>

<section class="bg-white dark:bg-gray-900">
  <div class="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
      <div class="mx-auto max-w-screen-sm text-center mb-8 lg:mb-16">
          <h2 class="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white" id="best">Najlepsi kierowcy F1 w historii</h2>
          <p class="font-light text-gray-500 lg:mb-16 sm:text-xl dark:text-gray-400">Poznaj legendy Formuły 1: kierowców, którzy przekroczyli granice możliwości, ustanawiając rekordy i podnosząc poprzeczkę w świecie wyścigów.</p>
      </div> 
      <div class="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          <div class="bg-white rounded-lg border border-gray-200 shadow-sm dark:bg-gray-800 dark:border-gray-700">
              <a href="#">
                  <img class="p-4 w-full rounded-lg" src="/MichaelSchumacher.jpg" alt="Jese Leos">
              </a>
              <div class="px-5 pb-5">
                  <h3 class="text-xl font-bold tracking-tight text-gray-900 dark:text-white">
                      <a href="#">Michael Schumacher</a>
                  </h3>
                  <span class="text-gray-500">król Formuły 1</span>
                  <p class="mt-3 mb-4 font-light text-gray-500 dark:text-gray-400">
                    Grand Prix: 308 <br>
                    Mistrzostwa świata: 7 (1994, 1995, 2000, 2001, 2002, 2003, 2004) <br>
                    Zwycięstwa: 91 <br>
                    Podia: 155 <br>
                    Pole positions: 68 <br>
                    Najszybsze okrążenia: 77 <br>
                    Debiut: GP Belgii 1991 <br>
                    Pierwsze zwycięstwo: GP Belgii 1992 <br>
                    Ostatnie zwycięstwo: GP Chin 2006 <br>
                    Ostatni start: GP Brazylii 2012 <br>
                  </p>
              </div>
          </div> 
          
          
          <div class="bg-white rounded-lg border border-gray-200 shadow-sm dark:bg-gray-800 dark:border-gray-700">
              <a href="#">
                  <img class="p-4 w-full rounded-lg" src="/LewisHamilton.jpg" alt="Bonnie Green">
              </a>
              <div class="px-5 pb-5">
                  <h3 class="text-xl font-bold tracking-tight text-gray-900 dark:text-white">
                      <a href="#">Lewis Hamilton</a>
                  </h3>
                  <span class="text-gray-500">najlepszy w historii... ale czy na pewno?</span>
                  <p class="mt-3 mb-4 font-light text-gray-500 dark:text-gray-400">
                    Grand Prix: 266 <br>
                    Mistrzostwa świata: 7 (2008, 2014, 2015, 2017, 2018, 2019, 2020) <br>
                    Zwycięstwa: 95 <br>
                    Podia: 165 <br>
                    Pole positions: 98 <br>
                    Najszybsze okrążenia: 53 <br>
                    Debiut: GP Australii 2007 <br>
                    Pierwsze zwycięstwo: GP Kanady 2007 <br>
                    Ostatnie zwycięstwo: GP Bahrajnu 2020 <br>
                    Ostatni start: GP Abu Zabi 2020
                  </p>
              </div>
          </div> 


          <div class="bg-white rounded-lg border border-gray-200 shadow-sm dark:bg-gray-800 dark:border-gray-700">
              <a href="#">
                  <img class="p-4 w-full rounded-lg" src="/AyrtonSenna.jpg" alt="Michael Gough">
              </a>
              <div class="px-5 pb-5">
                  <h3 class="text-xl font-bold tracking-tight text-gray-900 dark:text-white">
                      <a href="#">Ayrton Senna</a>
                  </h3>
                  <span class="text-gray-500">najjaśniejsza gwiazda F1</span>
                  <p class="mt-3 mb-4 font-light text-gray-500 dark:text-gray-400">
                    Grand Prix: 162 <br>
                    Mistrzostwa świata: 3 (1988, 1990, 1991) <br>
                    Zwycięstwa: 41 <br>
                    Podia: 80 <br>
                    Pole positions: 65 <br>
                    Najszybsze okrążenia: 19 <br>
                    Debiut: GP Brazylii 1984 <br>
                    Pierwsze zwycięstwo: GP Portugalii 1985 <br>
                    Ostatnie zwycięstwo: GP Australii 1993 <br>
                    Ostatni start: GP San Marino 1994
                </p>
              </div>
          </div> 


          <div class="bg-white rounded-lg border border-gray-200 shadow-sm dark:bg-gray-800 dark:border-gray-700">
              <a href="#">
                  <img class="p-4 w-full rounded-lg" src="/NicoRosberg.png" alt="Roberta Casas">
              </a>
              <div class="px-5 pb-5">
                  <h3 class="text-xl font-bold tracking-tight text-gray-900 dark:text-white">
                      <a href="#">Nico Rosberg</a>
                  </h3>
                  <span class="text-gray-500">niespodziewany czempion</span>
                  <p class="mt-3 mb-4 font-light text-gray-500 dark:text-gray-400">
                    Grand Prix: 206 <br>
                    Mistrzostwa świata: 1 (2016) <br>
                    Zwycięstwa: 23 <br>
                    Podia: 57 <br>
                    Pole positions: 30 <br>
                    Najszybsze okrążenia: 20 <br>
                    Debiut: GP Bahrajnu 2006 <br>
                    Pierwsze zwycięstwo: GP Chin 2012 <br>
                    Ostatnie zwycięstwo: GP Japonii 2016 <br>
                    Ostatni start: GP Abu Zabi 2016 <br>
                  </p>
              </div>
          </div> 


          <div class="bg-white rounded-lg border border-gray-200 shadow-sm dark:bg-gray-800 dark:border-gray-700">
              <a href="#">
                  <img class="p-4 w-full rounded-lg" src="/SebastianVettel.jpg" alt="Neil Sims">
              </a>
              <div class="px-5 pb-5">
                  <h3 class="text-xl font-bold tracking-tight text-gray-900 dark:text-white">
                      <a href="#">Sebastian Vettel</a>
                  </h3>
                  <span class="text-gray-500">drugi najlepszy Niemiec w F1</span>
                  <p class="mt-3 mb-4 font-light text-gray-500 dark:text-gray-400">
                    Grand Prix: 258 <br>
                    Mistrzostwa świata: 4 (2010, 2011, 2012, 2013) <br>
                    Zwycięstwa: 53 <br>
                    Podia: 121 <br>
                    Pole positions: 57 <br>
                    Najszybsze okrążenia: 38 <br>
                    Debiut: GP USA 2007 <br>
                    Pierwsze zwycięstwo: GP Włoch 2008 <br>
                    Ostatnie zwycięstwo: GP Singapuru 2019 <br>
                    Ostatni start: GP Abu Zabi 2020 <br>
                  </p>
              </div>
          </div>  


          <div class="bg-white rounded-lg border border-gray-200 shadow-sm dark:bg-gray-800 dark:border-gray-700">
              <a href="#">
                  <img class="p-4 w-full rounded-lg" src="/AlainProst.jpg" alt="Joseph Mcfall">
              </a>
              <div class="px-5 pb-5">
                  <h3 class="text-xl font-bold tracking-tight text-gray-900 dark:text-white">
                      <a href="#">Alain Prost</a>
                  </h3>
                  <span class="text-gray-500">profesor Formuły 1</span>
                  <p class="mt-3 mb-4 font-light text-gray-500 dark:text-gray-400">
                    Grand Prix: 202 <br>
                    Mistrzostwa świata: 4 (1985, 1986, 1989, 1993) <br>
                    Zwycięstwa: 51 <br>
                    Podia: 106 <br>
                    Pole positions: 33 <br>
                    Najszybsze okrążenia: 41 <br>
                    Debiut: GP Argentyny 1980 <br>
                    Pierwsze zwycięstwo: GP Francji 1981 <br>
                    Ostatnie zwycięstwo: GP Niemiec 1993 <br>
                    Ostatni start: GP Australii 1993
                  </p>
              </div>
          </div> 


          <div class="bg-white rounded-lg border border-gray-200 shadow-sm dark:bg-gray-800 dark:border-gray-700">
              <a href="#">
                  <img class="p-4 w-full rounded-lg" src="/JuanManuelFangio.jpg" alt="Thomas Lean">
              </a>
              <div class="px-5 pb-5">
                  <h3 class="text-xl font-bold tracking-tight text-gray-900 dark:text-white">
                      <a href="#">Juan Manuel Fangio</a>
                  </h3>
                  <span class="text-gray-500">pierwsza supergwiazda F1</span>
                  <p class="mt-3 mb-4 font-light text-gray-500 dark:text-gray-400">
                    Grand Prix: 52 <br>
                    Mistrzostwa świata: 5 (1951, 1954, 1955, 1956, 1957) <br>
                    Zwycięstwa: 24 <br>
                    Podia: 35 <br>
                    Pole positions: 29 <br>
                    Najszybsze okrążenia: 23 <br>
                    Debiut: GP Wielkiej Brytanii 1950 <br>
                    Pierwsze zwycięstwo: GP Monako 1950 <br>
                    Ostatnie zwycięstwo: GP Niemiec 1957 <br>
                    Ostatni start: GP Francji 1958
                  </p>
              </div>
          </div> 


        
          <div class="bg-white rounded-lg border border-gray-200 shadow-sm dark:bg-gray-800 dark:border-gray-700">
              <a href="#">
                  <img class="p-4 w-full rounded-lg" src="/NikiLauda.jpg" alt="Karen Nelson">
              </a>
              <div class="px-5 pb-5">
                  <h3 class="text-xl font-bold tracking-tight text-gray-900 dark:text-white">
                      <a href="#">Niki Lauda</a>
                  </h3>
                  <span class="text-gray-500">niezniszczalny mistrz F1</span>
                  <p class="mt-3 mb-4 font-light text-gray-500 dark:text-gray-400">
                    Grand Prix: 177 <br>
                    Mistrzostwa świata: 3 (1975, 1977, 1984) <br>
                    Zwycięstwa: 25 <br>
                    Podia: 54 <br>
                    Pole positions: 24 <br>
                    Najszybsze okrążenia: 24 <br>
                    Debiut: GP Austrii 1971 <br>
                    Pierwsze zwycięstwo: GP Hiszpanii 1974 <br>
                    Ostatnie zwycięstwo: GP Holandii 1985 <br>
                    Ostatni start: GP Australii 1985
                  </p>
              </div>
          </div> 


          <div class="bg-white rounded-lg border border-gray-200 shadow-sm dark:bg-gray-800 dark:border-gray-700">
              <a href="#">
                  <img class="p-4 w-full rounded-lg" src="/JackieStewart.jpg" alt="Karen Nelson">
              </a>
              <div class="px-5 pb-5">
                  <h3 class="text-xl font-bold tracking-tight text-gray-900 dark:text-white">
                      <a href="#">Jackie Stewart</a>
                  </h3>
                  <span class="text-gray-500">mistrz szalonych lat 70</span>
                  <p class="mt-3 mb-4 font-light text-gray-500 dark:text-gray-400">
                    Grand Prix: 100 <br>
                    Mistrzostwa świata: 3 (1969, 1971, 1973) <br>
                    Zwycięstwa: 27 <br>
                    Podia: 43 <br>
                    Pole positions: 17 <br>
                    Najszybsze okrążenia: 15 <br>
                    Debiut: GP RPA 1965 <br>
                    Pierwsze zwycięstwo: GP Włoch 1965 <br>
                    Ostatnie zwycięstwo: GP Niemiec 1973 <br>
                    Ostatni start: GP USA 1973 (nie wystartował w wyścigu)
                  </p>
              </div>
          </div> 


          <div class="bg-white rounded-lg border border-gray-200 shadow-sm dark:bg-gray-800 dark:border-gray-700">
              <a href="#">
                  <img class="p-4 w-full rounded-lg" src="/NelsonPiquet.jpg" alt="Karen Nelson">
              </a>
              <div class="px-5 pb-5">
                  <h3 class="text-xl font-bold tracking-tight text-gray-900 dark:text-white">
                      <a href="#">Nelson Piquet</a>
                  </h3>
                  <span class="text-gray-500">od tenisa do F1</span>
                  <p class="mt-3 mb-4 font-light text-gray-500 dark:text-gray-400">
                    Grand Prix: 207 <br>
                    Mistrzostwa świata: 3 (1981, 1983, 1987) <br>
                    Zwycięstwa: 23 <br>
                    Podia: 60 <br>
                    Pole positions: 24 <br>
                    Najszybsze okrążenia: 23 <br>
                    Debiut: GP Niemiec 1978 <br>
                    Pierwsze zwycięstwo: GP USA 1980 – Zachód <br>
                    Ostatnie zwycięstwo: GP Kanady 1991 <br>
                    Ostatni start: GP Australii 1991
                </p>
              </div>
          </div> 


          <div class="bg-white rounded-lg border border-gray-200 shadow-sm dark:bg-gray-800 dark:border-gray-700">
              <a href="#">
                  <img class="p-4 w-full rounded-lg" src="/FernandoAlonso.jpg" alt="Karen Nelson">
              </a>
              <div class="px-5 pb-5">
                  <h3 class="text-xl font-bold tracking-tight text-gray-900 dark:text-white">
                      <a href="#">Fernando Alonso</a>
                  </h3>
                  <span class="text-gray-500">powracający mistrz</span>
                  <p class="mt-3 mb-4 font-light text-gray-500 dark:text-gray-400">
                    Grand Prix: 314 <br>
                    Mistrzostwa świata: 2 (2005, 2006) <br>
                    Zwycięstwa: 32 <br>
                    Podia: 97 <br>
                    Pole positions: 22 <br>
                    Najszybsze okrążenia: 23 <br>
                    Debiut: GP Australii 2001 <br>
                    Pierwsze zwycięstwo: GP Węgier 2003 <br>
                    Ostatnie zwycięstwo: GP Hiszpanii 2013 <br>
                    Ostatni start: GP Abu Zabi 2018
                  </p>
              </div>
          </div> 


          <div class="bg-white rounded-lg border border-gray-200 shadow-sm dark:bg-gray-800 dark:border-gray-700">
              <a href="#">
                  <img class="p-4 w-full rounded-lg" src="/KimiRaikonen.jpg" alt="Karen Nelson">
              </a>
              <div class="px-5 pb-5">
                  <h3 class="text-xl font-bold tracking-tight text-gray-900 dark:text-white">
                      <a href="#">Kimi Räikkönen</a>
                  </h3>
                  <span class="text-gray-500">ostatni mistrz z Ferrari</span>
                  <p class="mt-3 mb-4 font-light text-gray-500 dark:text-gray-400">
                    Grand Prix: 332 <br>
                    Mistrzostwa świata: 1 (2007) <br>
                    Zwycięstwa: 21 <br>
                    Podia: 103 <br>
                    Pole positions: 18 <br>
                    Najszybsze okrążenia: 46 <br>
                    Debiut: GP Australii 2001 <br>
                    Pierwsze zwycięstwo: GP Malezji 2003 <br>
                    Ostatnie zwycięstwo: GP USA 2018 <br>
                    Ostatni start: GP Abu Zabi 2020
                </p>
              </div>
          </div> 
      </div>  
  </div>
</section>
    </div>
  </div>
</section>


<section class="bg-white dark:bg-gray-900 pb-20">
    <div class="px-4 mx-auto max-w-screen-xl lg:px-12 sm:text-center">
      <h2 class="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white" id="again">
        Przeżyj jeszcze raz najbardziej ekscytujące momenty twoich ulubionych zespołów!
      </h2>
      <p class="font-light text-gray-500 sm:text-lg md:px-20 lg:px-38 xl:px-48 dark:text-gray-400">
        Od niesamowitych zwycięstw po dramatyczne zwroty akcji, każdy z tych momentów symbolizuje prawdziwą pasję i ducha sportowego. 
        Poczuj na nowo adrenalinę, triumf i inspirujące dokonania, które na zawsze zapisały się w historii i w sercach fanów.
      </p>
      <div class="team-container flex justify-center space-x-4 p-10">
        <div v-for="(url, team) in teamVideos" :key="team" @click="changeVideo(url)" class="team-item p-4 cursor-pointer rounded bg-gray-200 hover:bg-gray-300">
          {{ team }}
        </div>
      </div>
      <iframe :src="currentVideoUrl" class="mx-auto w-full max-w-2xl h-64 rounded-lg sm:h-96" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    </div>
  </section>





  <footer class="p-4 bg-white md:p-8 lg:p-10 dark:bg-gray-800">
  <div class="mx-auto max-w-screen-xl text-center">
      <a href="#" class="flex justify-center items-center text-2xl font-semibold text-gray-900 dark:text-white">
            <img src="/F1.png" class="h-8" alt="F1 Logo" />
      </a>
      <p class="my-6 text-gray-500 dark:text-gray-400">Formuła 1 to emocjonujący świat najnowszych wiadomości, pełnych adrenalinę wyścigów z bogatą biblioteką wideo, dostępnym harmonogramem wydarzeń, aktualnymi wynikami, profilami czołowych kierowców i zespołów, wciągającą rozgrywką w gry oraz możliwością śledzenia czasu na żywo..</p>

      <ul class="flex flex-wrap justify-center items-center mb-6 text-gray-900 dark:text-white">
          <li>
              <a href="https://www.formula1.com/en/latest.html" class="mr-4 hover:underline md:mr-6 ">Najnowsze</a>
          </li>
          <li>
              <a href="https://www.formula1.com/en/video.html" class="mr-4 hover:underline md:mr-6">Wideo</a>
          </li>
          <li>
              <a href="https://www.formula1.com/en/racing/2024.html" class="mr-4 hover:underline md:mr-6 ">Harmonogram</a>
          </li>
          <li>
              <a href="https://www.formula1.com/en/results.html/2023/races.html" class="mr-4 hover:underline md:mr-6">Wyniki</a>
          </li>
          <li>
              <a href="https://www.formula1.com/en/drivers.html" class="mr-4 hover:underline md:mr-6">Kierowcy</a>
          </li>
          <li>
              <a href="https://www.formula1.com/en/teams.html" class="mr-4 hover:underline md:mr-6">Zespoły</a>
          </li>
          <li>
              <a href="https://www.formula1.com/en/gaming.html" class="mr-4 hover:underline md:mr-6">Gaming</a>
          </li>
      </ul>
      <span class="text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2023 <a href="#" class="hover:underline">Szymon Ciruk</a></span>
  </div>
</footer>

</template>


<script>
export default {
  data() {
    return {
      currentVideoUrl: 'https://www.youtube.com/embed/B139iTwYLpk', // startowy filmik
      teamVideos: {
        'RedBull': 'https://www.youtube.com/embed/fG556hpNeCs',
        'Ferrari': 'https://www.youtube.com/embed/_Dq4u8_JF1U',
        'Mercedes': 'https://www.youtube.com/embed/HjDjFHJ5LTU',
        'McLaren': 'https://www.youtube.com//embed/wLywfqAi6Dk',
        'Williams': 'https://www.youtube.com/embed/BUbwYwiUzyM'
      }
    }
  },
  methods: {
    changeVideo(url) {
      this.currentVideoUrl = url;
    }
  }
}
</script>