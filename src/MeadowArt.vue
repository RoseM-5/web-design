<template>
  <svg class="meadow-art" viewBox="0 0 800 520" preserveAspectRatio="xMidYMax slice" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" focusable="false">
    <defs>
      <g id="sunflower">
        <path d="M0 0V-107" fill="none" stroke="#397b4b" stroke-width="7" stroke-linecap="round"/>
        <path d="M-3-48c-31-28-45-14-40 2 8 18 30 16 40 4M3-67c32-27 46-11 38 6-9 18-29 13-38 0" fill="#53a65f"/>
        <g transform="translate(0 -119)" fill="#f4b735">
          <ellipse cy="-31" rx="12" ry="24"/>
          <ellipse cy="-31" rx="12" ry="24" transform="rotate(30)"/>
          <ellipse cy="-31" rx="12" ry="24" transform="rotate(60)"/>
          <ellipse cy="-31" rx="12" ry="24" transform="rotate(90)"/>
          <ellipse cy="-31" rx="12" ry="24" transform="rotate(120)"/>
          <ellipse cy="-31" rx="12" ry="24" transform="rotate(150)"/>
          <ellipse cy="-31" rx="12" ry="24" transform="rotate(180)"/>
          <ellipse cy="-31" rx="12" ry="24" transform="rotate(210)"/>
          <ellipse cy="-31" rx="12" ry="24" transform="rotate(240)"/>
          <ellipse cy="-31" rx="12" ry="24" transform="rotate(270)"/>
          <ellipse cy="-31" rx="12" ry="24" transform="rotate(300)"/>
          <ellipse cy="-31" rx="12" ry="24" transform="rotate(330)"/>
          <circle r="24" fill="#754b31"/>
          <circle r="17" fill="#8d5b37"/>
          <g fill="#c89257">
            <circle cx="-7" cy="-7" r="2"/><circle cx="5" cy="-10" r="2"/>
            <circle cx="11" cy="2" r="2"/><circle cx="-9" cy="6" r="2"/>
            <circle cx="2" cy="10" r="2"/><circle cx="0" cy="0" r="2"/>
          </g>
        </g>
      </g>
      <g id="tiny-flower">
        <path d="M0 0v-24" stroke="#36794e" stroke-width="3" stroke-linecap="round"/>
        <g transform="translate(0 -27)" fill="#fff8e8">
          <circle cx="-6" r="6"/><circle cx="6" r="6"/><circle cy="-6" r="6"/><circle cy="6" r="6"/>
          <circle r="5" fill="#f4b735"/>
        </g>
      </g>
    </defs>

    <!-- Sky, clouds, and a warm sun -->
    <g class="sun-rays" stroke="#f6c85b" stroke-width="4" stroke-linecap="round">
      <path d="M647 13v20M647 151v20M570 92h20M705 92h20M593 38l14 14M687 132l14 14M701 38l-14 14M607 132l-14 14"/>
    </g>
    <circle cx="647" cy="92" r="56" fill="#ffe3a2"/>
    <circle cx="635" cy="80" r="43" fill="#ffdc89" opacity=".55"/>
    <g class="cloud cloud-one" transform="translate(160 0)" fill="#fffdf1" opacity=".93">
      <ellipse cx="192" cy="82" rx="75" ry="22"/><circle cx="157" cy="72" r="26"/><circle cx="205" cy="61" r="34"/><circle cx="250" cy="76" r="24"/>
    </g>
    <g class="cloud cloud-two" fill="#fffdf1" opacity=".76">
      <ellipse cx="475" cy="154" rx="62" ry="16"/><circle cx="452" cy="145" r="22"/><circle cx="492" cy="139" r="26"/>
    </g>

    <!-- Rolling hills -->
    <path d="M0 319c112-75 204-63 298-20 107-92 253-99 371-8 52-13 93-20 131-20v249H0Z" fill="#b9dcad"/>
    <path d="M0 368c128-59 252-45 367 2 118-72 281-98 433-27v177H0Z" fill="#8ec59b"/>

    <!-- Left tree, with a small bird -->
    <g class="tree-left">
      <path d="M101 367v-154h31v154" fill="#8d6749"/>
      <path d="M116 270l-39-36M116 291l42-39" fill="none" stroke="#8d6749" stroke-width="10" stroke-linecap="round"/>
      <circle cx="70" cy="212" r="48" fill="#5ba774"/>
      <circle cx="119" cy="178" r="61" fill="#70b985"/>
      <circle cx="164" cy="220" r="47" fill="#5fae78"/>
      <circle cx="109" cy="224" r="51" fill="#77bd86"/>
      <path d="M73 184c20-27 51-37 75-27" fill="none" stroke="#a4d4a3" stroke-width="8" stroke-linecap="round" opacity=".55"/>
      <g fill="#e9f3ce"><circle cx="68" cy="215" r="6"/><circle cx="153" cy="190" r="5"/><circle cx="128" cy="242" r="4"/></g>
      <g class="bird" transform="translate(150 265)">
        <ellipse cx="0" cy="0" rx="18" ry="12" fill="#f6e29e"/>
        <circle cx="10" cy="-11" r="11" fill="#f6e29e"/>
        <path d="m20-10 11 5-11 4" fill="#dd8b45"/>
        <circle cx="13" cy="-13" r="2" fill="#314936"/>
        <path d="M-16-4-27-12l4 15" fill="#e5be72"/>
      </g>
    </g>

    <!-- Right tree -->
    <g class="tree-right">
      <path d="M721 374V259h22v115" fill="#987052"/>
      <circle cx="691" cy="246" r="40" fill="#70b985"/>
      <circle cx="732" cy="218" r="50" fill="#5da976"/>
      <circle cx="770" cy="252" r="38" fill="#7ac28a"/>
      <circle cx="730" cy="263" r="43" fill="#77be87"/>
      <path d="M706 214c15-17 35-22 52-17" fill="none" stroke="#add7a7" stroke-width="6" stroke-linecap="round" opacity=".6"/>
    </g>

    <!-- Foreground meadow -->
    <path d="M0 405c138-41 283-30 388 15 128-51 271-59 412-8v108H0Z" fill="#65ad78"/>
    <path d="M0 464c143-42 235-13 328 20 138-52 331-47 472-17v53H0Z" fill="#4e9c6b"/>
    <g fill="none" stroke="#3d8e60" stroke-width="3" stroke-linecap="round">
      <path d="M31 441l-8-16m8 16 10-21M257 464l-6-13m6 13 8-17M379 492l-7-13m7 13 9-15M688 477l-9-16m9 16 12-20M748 445l-8-17m8 17 11-18"/>
    </g>

    <!-- Friendly rabbit -->
    <g class="rabbit" transform="translate(215 387)">
      <ellipse cx="6" cy="52" rx="55" ry="37" fill="#fffaf0"/>
      <ellipse cx="-22" cy="-11" rx="15" ry="54" fill="#fffaf0" transform="rotate(-12 -22 -11)"/>
      <ellipse cx="9" cy="-15" rx="15" ry="58" fill="#fffaf0" transform="rotate(11 9 -15)"/>
      <ellipse cx="-21" cy="-16" rx="7" ry="39" fill="#efb9b3" transform="rotate(-12 -21 -16)"/>
      <ellipse cx="10" cy="-20" rx="7" ry="42" fill="#efb9b3" transform="rotate(11 10 -20)"/>
      <circle cx="-3" cy="34" r="43" fill="#fffdf7"/>
      <circle cx="-18" cy="29" r="3.6" fill="#3c5144"/>
      <circle cx="16" cy="29" r="3.6" fill="#3c5144"/>
      <path d="m-3 40-6 5 6 5 6-5Z" fill="#e8a6a1"/>
      <path d="M-3 50q-8 8-15 2M-3 50q8 8 15 2" fill="none" stroke="#9a766f" stroke-width="2" stroke-linecap="round"/>
      <ellipse cx="-28" cy="77" rx="18" ry="9" fill="#fffdf7"/>
      <ellipse cx="32" cy="77" rx="18" ry="9" fill="#fffdf7"/>
      <circle cx="53" cy="59" r="12" fill="#fffdf7"/>
    </g>

    <!-- Sunflowers with gentle sway -->
    <g class="flower-sway flower-one" transform="translate(348 469)"><use href="#sunflower"/></g>
    <g class="flower-sway flower-two" transform="translate(464 473) scale(.78)"><use href="#sunflower"/></g>
    <g class="flower-sway flower-three" transform="translate(594 469) scale(.92)"><use href="#sunflower"/></g>

    <!-- Small sitting fox -->
    <g class="fox" transform="translate(674 407)">
      <path d="M32 63c47-28 78 16 37 39-16 9-34 1-44-10" fill="#d8713d"/>
      <path d="M58 92c22 15 42 2 35-13-9 8-19 12-35 13" fill="#fff5df"/>
      <ellipse cx="0" cy="61" rx="48" ry="46" fill="#df7e45"/>
      <path d="M-31 43q31 17 61 0v51h-61Z" fill="#fff3db"/>
      <path d="m-44-4-8-52 37 18 18-7 21-15 5 56" fill="#d8753e"/>
      <path d="m-42-11-4-35 26 19M20-30l25-24-2 36" fill="#f3ae78"/>
      <path d="M-44-6q43 23 73-2c-2 40-17 58-38 58S-43 28-44-6" fill="#e88b4a"/>
      <path d="M-36 11q25 4 36 16 10-14 25-18-1 40-25 41-22-2-36-39" fill="#fff4df"/>
      <circle cx="-21" cy="7" r="3" fill="#33483a"/><circle cx="14" cy="7" r="3" fill="#33483a"/>
      <path d="m-4 24 7 1-3 5Z" fill="#3d483b"/>
      <ellipse cx="-26" cy="94" rx="15" ry="8" fill="#b9633d"/>
      <ellipse cx="20" cy="94" rx="15" ry="8" fill="#b9633d"/>
    </g>

    <!-- Butterflies and small wildflowers -->
    <g class="butterfly" transform="translate(515 205)">
      <ellipse cx="-11" cy="-7" rx="14" ry="9" transform="rotate(28 -11 -7)" fill="#e7a6a2"/>
      <ellipse cx="11" cy="-7" rx="14" ry="9" transform="rotate(-28 11 -7)" fill="#f2b9a9"/>
      <ellipse cx="-8" cy="7" rx="10" ry="7" transform="rotate(-22 -8 7)" fill="#efc2ae"/>
      <ellipse cx="8" cy="7" rx="10" ry="7" transform="rotate(22 8 7)" fill="#e9ac9c"/>
      <path d="M0-10v23" stroke="#745e51" stroke-width="3" stroke-linecap="round"/>
    </g>
    <use href="#tiny-flower" x="66" y="454"/><use href="#tiny-flower" x="116" y="480"/>
    <use href="#tiny-flower" x="537" y="497"/><use href="#tiny-flower" x="764" y="478"/>
  </svg>
</template>
