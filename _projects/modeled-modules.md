---
title: "Modeled Modules"
layout: single
header:
  teaser: /assets/images/synth.jpg
author_profile: true
toc: true
excerpt: Information about the Modeled Modules project
---

FIXME: rewrite this donkey water thing. Be more thorough. Use sections geebz

A collection of [SuperCollider](https://supercollider.github.io) extensions which model a number of analog synthesizer models. This project was undertaken as my senior capstone project. Deciding what to do for my project was not an easy task. In my studies I had worked in a studio, built audio hardware, worked with live sound, and created many musical projects, but I was looking for something which tied more into my passion for computer science and development. I didn't want to make a basic plugin using an online tutorial and framework like JUCE. I wanted to do something more hands on, where I had to design and solve the problems myself. Creating custom extensions for SuperCollider based on existing hardware synthesizer modules fit this perfectly. I had to first figure out roughly how each module worked, design the digital counterpart, and implement the design. Learning the SuperCollider server API and digital signal processing proved a fun challenge. SuperCollider is primarily written in C, but the modern API is meant for C++. Diving into the SuperCollider codebase for examples involved translating not only on the fundamental "what does this function do" level but also reframing into the adapted C++ API. I learned plenty of new concepts while working on this project. My biggest challenge was the Ripples module because I tried to implement my own IIR filters in the code. I did not have the mathematical background to learn to design digital filters in one semester on top of everything else I had to do. That's when I learned how to compile external libraries and the difference between static vs. dynamic linking (that one held me up for a while). Overall, this project served as a way to gain further knowledge of digital signal processing and programming for real time audio. It's crazy to see how far things have come from MUSIC I.

<a href="/assets/Capstone.pdf" class="btn btn--primary">Download Paper</a>

<iframe src="https://ghbtns.com/github-btn.html?user=intothebeans&repo=sc-modeledmodules&type=star&count=true&size=large" frameborder="0" scrolling="0" width="170" height="30" title="GitHub"></iframe>

<iframe src="https://ghbtns.com/github-btn.html?user=intothebeans&repo=sc-modeledmodules&type=watch&count=true&size=large&v=2" frameborder="0" scrolling="0" width="170" height="30" title="GitHub"></iframe>

## Video

The video of this presentation is currently in the possesion of my university. I am in the process of procuring it.

## Presentation

<iframe width="800" height="400" marginheight="0" marginwidth="0" src="/presentations/modeled-modules">
<p>Browser doesn't support iFrames</p>
</iframe>

Without the video of my presentation, there is not much the slides provide other than the basic structure. My personal philosophy is that presentation visuals should be an outline not a script. The presentation was created using reveal.js and a custom theme.

### Bibliography

<div class="csl-bib-body" style="line-height: 1.35; margin-left: 2em; text-indent:-2em; font-size: 10pt;">
    <div class="csl-entry">“A Brief Journey inside the IBM 704 - Archival History of Computing at MIT.” n.d. Accessed
      April 10, 2024. <a
        href="https://comphist.dhlab.mit.edu/archives/story/IBM_mechanics">https://comphist.dhlab.mit.edu/archives/story/IBM_mechanics</a>.
    </div>
    <span class="Z3988"
      title="url_ver=Z39.88-2004&amp;ctx_ver=Z39.88-2004&amp;rfr_id=info%3Asid%2Fzotero.org%3A2&amp;rft_val_fmt=info%3Aofi%2Ffmt%3Akev%3Amtx%3Adc&amp;rft.type=webpage&amp;rft.title=A%20Brief%20Journey%20inside%20the%20IBM%20704%20-%20Archival%20History%20of%20Computing%20at%20MIT&amp;rft.identifier=https%3A%2F%2Fcomphist.dhlab.mit.edu%2Farchives%2Fstory%2FIBM_mechanics"></span>
    <div class="csl-entry">Bloderer, Theo. 2016. “Sequential Prophet-5 - Milestone and Musical Legend.”
      <i>GreatSynthesizers</i> (blog). February 7, 2016. <a
        href="https://greatsynthesizers.com/en/review/sequential-prophet-5-milestone-and-musical-legend/">https://greatsynthesizers.com/en/review/sequential-prophet-5-milestone-and-musical-legend/</a>.
    </div>
    <span class="Z3988"
      title="url_ver=Z39.88-2004&amp;ctx_ver=Z39.88-2004&amp;rfr_id=info%3Asid%2Fzotero.org%3A2&amp;rft_val_fmt=info%3Aofi%2Ffmt%3Akev%3Amtx%3Adc&amp;rft.type=blogPost&amp;rft.title=Sequential%20Prophet-5%20-%20Milestone%20and%20Musical%20Legend&amp;rft.description=The%20Prophet-5%20is%20%E2%80%93%20along%20with%20the%20Minimoog%20%E2%80%93%20possibly%20the%20most%20timeless%20of%20the%20great%20analog%20synths.%20An%20icon%2C%20so%20to%20speak.%20It%20laid%20the%20foundation%20for%20all%20those%E2%80%A6%20Read%20More&amp;rft.identifier=https%3A%2F%2Fgreatsynthesizers.com%2Fen%2Freview%2Fsequential-prophet-5-milestone-and-musical-legend%2F&amp;rft.aufirst=Theo&amp;rft.aulast=Bloderer&amp;rft.au=Theo%20Bloderer&amp;rft.date=2016-02-07&amp;rft.language=en-US"></span>
    <div class="csl-entry">“Chapter 5: Computer Music.” 1997. In <i>Electric Sound: The Past and Promise of Electronic
        Music</i>, by Joel Chadabe. Prentice Hall.</div>
    <span class="Z3988"
      title="url_ver=Z39.88-2004&amp;ctx_ver=Z39.88-2004&amp;rfr_id=info%3Asid%2Fzotero.org%3A2&amp;rft_id=urn%3Aisbn%3A978-0-13-303231-4&amp;rft_val_fmt=info%3Aofi%2Ffmt%3Akev%3Amtx%3Abook&amp;rft.genre=bookitem&amp;rft.atitle=Chapter%205%3A%20Computer%20Music&amp;rft.publisher=Prentice%20Hall&amp;rft.au=Joel%20Chadabe&amp;rft.date=1997&amp;rft.isbn=978-0-13-303231-4&amp;rft.language=en"></span>
    <div class="csl-entry">“CLM.” n.d. Accessed April 14, 2024. <a
        href="https://ccrma.stanford.edu/software/snd/snd/clm.html">https://ccrma.stanford.edu/software/snd/snd/clm.html</a>.
    </div>
    <span class="Z3988"
      title="url_ver=Z39.88-2004&amp;ctx_ver=Z39.88-2004&amp;rfr_id=info%3Asid%2Fzotero.org%3A2&amp;rft_val_fmt=info%3Aofi%2Ffmt%3Akev%3Amtx%3Adc&amp;rft.type=webpage&amp;rft.title=CLM&amp;rft.identifier=https%3A%2F%2Fccrma.stanford.edu%2Fsoftware%2Fsnd%2Fsnd%2Fclm.html"></span>
    <div class="csl-entry">“Cmusic – Musica Informatica.” 2011. March 10, 2011. <a
        href="https://www.musicainformatica.org/topics/cmusic.php">https://www.musicainformatica.org/topics/cmusic.php</a>.
    </div>
    <span class="Z3988"
      title="url_ver=Z39.88-2004&amp;ctx_ver=Z39.88-2004&amp;rfr_id=info%3Asid%2Fzotero.org%3A2&amp;rft_val_fmt=info%3Aofi%2Ffmt%3Akev%3Amtx%3Adc&amp;rft.type=blogPost&amp;rft.title=Cmusic%20%E2%80%93%20Musica%20Informatica&amp;rft.identifier=https%3A%2F%2Fwww.musicainformatica.org%2Ftopics%2Fcmusic.php&amp;rft.date=2011-03-10&amp;rft.language=en-US"></span>
    <div class="csl-entry">“Computers | Timeline of Computer History | Computer History Museum.” n.d. Accessed April 10,
      2024. <a
        href="https://www.computerhistory.org/timeline/computers/">https://www.computerhistory.org/timeline/computers/</a>.
    </div>
    <span class="Z3988"
      title="url_ver=Z39.88-2004&amp;ctx_ver=Z39.88-2004&amp;rfr_id=info%3Asid%2Fzotero.org%3A2&amp;rft_val_fmt=info%3Aofi%2Ffmt%3Akev%3Amtx%3Adc&amp;rft.type=webpage&amp;rft.title=Computers%20%7C%20Timeline%20of%20Computer%20History%20%7C%20Computer%20History%20Museum&amp;rft.identifier=https%3A%2F%2Fwww.computerhistory.org%2Ftimeline%2Fcomputers%2F"></span>
    <div class="csl-entry">Crab, Simon. 2013a. “The ‘RCA Synthesiser I &amp; II’ Harry Olson &amp; Herbert Belar, USA,
      1951.” <i>120 Years of Electronic Music</i> (blog). September 21, 2013. <a
        href="https://120years.net/the-rca-synthesiser-i-iiharry-olsen-hebert-belarusa1952/">https://120years.net/the-rca-synthesiser-i-iiharry-olsen-hebert-belarusa1952/</a>.
    </div>
    <span class="Z3988"
      title="url_ver=Z39.88-2004&amp;ctx_ver=Z39.88-2004&amp;rfr_id=info%3Asid%2Fzotero.org%3A2&amp;rft_val_fmt=info%3Aofi%2Ffmt%3Akev%3Amtx%3Adc&amp;rft.type=blogPost&amp;rft.title=The%20%E2%80%98RCA%20Synthesiser%20I%20%26%20II%E2%80%99%20Harry%20Olson%20%26%20Herbert%20Belar%2C%20USA%2C%201951&amp;rft.description=In%20the%201950%E2%80%99s%20RCA%20was%20one%20of%20the%20largest%20entertainment%20conglomerates%20in%20the%20United%20States%3B%20business%20interests%20included%20manufacturing%20record%20players%2C%20radio%20and%20electronic%20equipment%20(military%20a%E2%80%A6&amp;rft.identifier=https%3A%2F%2F120years.net%2Fthe-rca-synthesiser-i-iiharry-olsen-hebert-belarusa1952%2F&amp;rft.aufirst=Simon&amp;rft.aulast=Crab&amp;rft.au=Simon%20Crab&amp;rft.date=2013-09-21&amp;rft.language=en-GB"></span>
    <div class="csl-entry">———. 2013b. “The ‘Trautonium’ Dr Freidrich Trautwein. Germany, 1930.” <i>120 Years of
        Electronic Music</i> (blog). September 23, 2013. <a
        href="https://120years.net/the-trautoniumdr-freidrich-trautweingermany1930/">https://120years.net/the-trautoniumdr-freidrich-trautweingermany1930/</a>.
    </div>
    <span class="Z3988"
      title="url_ver=Z39.88-2004&amp;ctx_ver=Z39.88-2004&amp;rfr_id=info%3Asid%2Fzotero.org%3A2&amp;rft_val_fmt=info%3Aofi%2Ffmt%3Akev%3Amtx%3Adc&amp;rft.type=blogPost&amp;rft.title=The%20%E2%80%98Trautonium%E2%80%99%20Dr%20Freidrich%20Trautwein.%20Germany%2C%201930&amp;rft.description=The%20Trautonium%20was%20an%20important%20electronic%20musical%20instrument%20developed%20by%20the%20electrical%20engineer%20Freidrich%20Trautwein%C2%A0in%20Germany%20in%201930.%C2%A0Trautwein%20designed%20the%20first%20version%20of%20the%20instrument%20wit%E2%80%A6&amp;rft.identifier=https%3A%2F%2F120years.net%2Fthe-trautoniumdr-freidrich-trautweingermany1930%2F&amp;rft.aufirst=Simon&amp;rft.aulast=Crab&amp;rft.au=Simon%20Crab&amp;rft.date=2013-09-23&amp;rft.language=en-GB"></span>
    <div class="csl-entry">———. 2013c. “The ‘Orgue Des Ondes’ Armand Givelet &amp; Edouard Eloi Coupleux, France. 1929.”
      <i>120 Years of Electronic Music</i> (blog). December 16, 2013. <a
        href="https://120years.net/the-orgue-des-ondes-armand-givelet-edouard-eloi-coupleux-france-1929/">https://120years.net/the-orgue-des-ondes-armand-givelet-edouard-eloi-coupleux-france-1929/</a>.
    </div>
    <span class="Z3988"
      title="url_ver=Z39.88-2004&amp;ctx_ver=Z39.88-2004&amp;rfr_id=info%3Asid%2Fzotero.org%3A2&amp;rft_val_fmt=info%3Aofi%2Ffmt%3Akev%3Amtx%3Adc&amp;rft.type=blogPost&amp;rft.title=The%20%E2%80%98Orgue%20des%20Ondes%E2%80%99%20Armand%20Givelet%20%26%20Edouard%20Eloi%20Coupleux%2C%20France.%201929&amp;rft.description=In%201929%20the%20radio%20engineer%20Armand%20Givelet%20began%20a%20long%20collaboration%20with%20the%20organ%20builder%20Edouard%20Eloi%20Coupleux%20with%20the%20ambition%20to%20build%20on%20his%20experience%20with%20the%20Clavier%20%C3%A0%20Lampe%C2%A0to%20create%20a%20p%E2%80%A6&amp;rft.identifier=https%3A%2F%2F120years.net%2Fthe-orgue-des-ondes-armand-givelet-edouard-eloi-coupleux-france-1929%2F&amp;rft.aufirst=Simon&amp;rft.aulast=Crab&amp;rft.au=Simon%20Crab&amp;rft.date=2013-12-16&amp;rft.language=en-GB"></span>
    <div class="csl-entry">———. 2013d. “‘MUSIC N’, Max Vernon Mathews, USA, 1957.” <i>120 Years of Electronic Music</i>
      (blog). December 26, 2013. <a
        href="https://120years.net/music-n-max-mathews-usa-1957/">https://120years.net/music-n-max-mathews-usa-1957/</a>.
    </div>
    <span class="Z3988"
      title="url_ver=Z39.88-2004&amp;ctx_ver=Z39.88-2004&amp;rfr_id=info%3Asid%2Fzotero.org%3A2&amp;rft_val_fmt=info%3Aofi%2Ffmt%3Akev%3Amtx%3Adc&amp;rft.type=blogPost&amp;rft.title=%E2%80%98MUSIC%20N%E2%80%99%2C%20Max%20Vernon%20Mathews%2C%20USA%2C%201957&amp;rft.description=Max%20Mathews%20was%20a%20pioneering%2C%20central%20figure%20in%20computer%20music.%20After%20studying%20engineering%20at%C2%A0California%20Institute%20of%20Technology%C2%A0and%20the%C2%A0Massachusetts%20Institute%20of%20Technology%20in%201954%20Mathews%20went%20o%E2%80%A6&amp;rft.identifier=https%3A%2F%2F120years.net%2Fmusic-n-max-mathews-usa-1957%2F&amp;rft.aufirst=Simon&amp;rft.aulast=Crab&amp;rft.au=Simon%20Crab&amp;rft.date=2013-12-26&amp;rft.language=en-GB"></span>
    <div class="csl-entry">“Deadmau5 Studio.” n.d. <i>Pilchner Schoustal International Inc.</i> (blog). Accessed April
      14, 2024. <a
        href="https://pilchner-schoustal.com/portfolio/deadmau5-studio/">https://pilchner-schoustal.com/portfolio/deadmau5-studio/</a>.
    </div>
    <span class="Z3988"
      title="url_ver=Z39.88-2004&amp;ctx_ver=Z39.88-2004&amp;rfr_id=info%3Asid%2Fzotero.org%3A2&amp;rft_val_fmt=info%3Aofi%2Ffmt%3Akev%3Amtx%3Adc&amp;rft.type=blogPost&amp;rft.title=Deadmau5%20Studio&amp;rft.identifier=https%3A%2F%2Fpilchner-schoustal.com%2Fportfolio%2Fdeadmau5-studio%2F&amp;rft.language=en-US"></span>
    <div class="csl-entry">Doom, Parrot of. 2009. <i>Manchester Baby Replica (Aka SSEM) at the Museum of Science and
        Industry, Closer Shot Showing the CRT.</i> Own work. <a
        href="https://commons.wikimedia.org/wiki/File:SSEM_Manchester_museum_close_up.jpg">https://commons.wikimedia.org/wiki/File:SSEM_Manchester_museum_close_up.jpg</a>.
    </div>
    <span class="Z3988"
      title="url_ver=Z39.88-2004&amp;ctx_ver=Z39.88-2004&amp;rfr_id=info%3Asid%2Fzotero.org%3A2&amp;rft_val_fmt=info%3Aofi%2Ffmt%3Akev%3Amtx%3Adc&amp;rft.type=artwork&amp;rft.title=Manchester%20Baby%20replica%20(aka%20SSEM)%20at%20the%20Museum%20of%20Science%20and%20Industry%2C%20closer%20shot%20showing%20the%20CRT.&amp;rft.rights=Permission%20is%20granted%20to%20copy%2C%20distribute%20and%2For%20modify%20this%20document%20under%20the%20terms%20of%20the%20GNU%20Free%20Documentation%20License%2C%20Version%201.2%20or%20any%20later%20version%20published%20by%20the%20Free%20Software%20Foundation%3B%20with%20no%20Invariant%20Sections%2C%20no%20Front-Cover%20Texts%2C%20and%20no%20Back-Cover%20Texts.%20A%20copy%20of%20the%20license%20is%20included%20in%20the%20section%20entitled%20GNU%20Free%20Documentation%20License.http%3A%2F%2Fwww.gnu.org%2Fcopyleft%2Ffdl.htmlGFDLGNU%20Free%20Documentation%20Licensetruetrue&amp;rft.identifier=https%3A%2F%2Fcommons.wikimedia.org%2Fwiki%2FFile%3ASSEM_Manchester_museum_close_up.jpg&amp;rft.aufirst=Parrot%20of&amp;rft.aulast=Doom&amp;rft.au=Parrot%20of%20Doom&amp;rft.date=2009-11-01"></span>
    <div class="csl-entry">“Erica Synths DIY Delay.” 2024. ModularGrid. March 2, 2024. <a
        href="https://modulargrid.net/e/erica-synths-diy-delay">https://modulargrid.net/e/erica-synths-diy-delay</a>.
    </div>
    <span class="Z3988"
      title="url_ver=Z39.88-2004&amp;ctx_ver=Z39.88-2004&amp;rfr_id=info%3Asid%2Fzotero.org%3A2&amp;rft_val_fmt=info%3Aofi%2Ffmt%3Akev%3Amtx%3Adc&amp;rft.type=webpage&amp;rft.title=Erica%20Synths%20DIY%20Delay&amp;rft.description=Erica%20Synths%20DIY%20Delay%20-%20Eurorack%20Module%20-%20Hi-Fi%20delay%20with%20Sync%2C%20Hold%2C%20Add%20and%20Reverse%20functions&amp;rft.identifier=https%3A%2F%2Fmodulargrid.net%2Fe%2Ferica-synths-diy-delay&amp;rft.date=2024-03-02&amp;rft.language=en"></span>
    <div class="csl-entry">“Evolution of Moog Synthesizers 1964-2002.” n.d. Google Arts &amp; Culture. Accessed April
      10, 2024. <a
        href="https://artsandculture.google.com/story/evolution-of-moog-synthesizers-1964-2002/agUh-zsKII1HOQ">https://artsandculture.google.com/story/evolution-of-moog-synthesizers-1964-2002/agUh-zsKII1HOQ</a>.
    </div>
    <span class="Z3988"
      title="url_ver=Z39.88-2004&amp;ctx_ver=Z39.88-2004&amp;rfr_id=info%3Asid%2Fzotero.org%3A2&amp;rft_val_fmt=info%3Aofi%2Ffmt%3Akev%3Amtx%3Adc&amp;rft.type=webpage&amp;rft.title=Evolution%20of%20Moog%20Synthesizers%201964-2002&amp;rft.description=A%20timeline%20tracing%20the%20evolution%20of%20Moog%20synthesizers%20from%20the%20Moog%20modular%20prototype%20to%20the%20Voyager.&amp;rft.identifier=https%3A%2F%2Fartsandculture.google.com%2Fstory%2Fevolution-of-moog-synthesizers-1964-2002%2FagUh-zsKII1HOQ&amp;rft.language=en"></span>
    <div class="csl-entry">Lansky, Paul. n.d. “Homepage for Paul Lansky.” Accessed April 14, 2024. <a
        href="https://paul.mycpanel.princeton.edu/software.html">https://paul.mycpanel.princeton.edu/software.html</a>.
    </div>
    <span class="Z3988"
      title="url_ver=Z39.88-2004&amp;ctx_ver=Z39.88-2004&amp;rfr_id=info%3Asid%2Fzotero.org%3A2&amp;rft_val_fmt=info%3Aofi%2Ffmt%3Akev%3Amtx%3Adc&amp;rft.type=webpage&amp;rft.title=Homepage%20for%20Paul%20Lansky&amp;rft.identifier=https%3A%2F%2Fpaul.mycpanel.princeton.edu%2Fsoftware.html&amp;rft.aufirst=Paul&amp;rft.aulast=Lansky&amp;rft.au=Paul%20Lansky"></span>
    <div class="csl-entry">“Max Mathews Makes MUSIC - CHM Revolution.” n.d. Accessed April 10, 2024. <a
        href="https://www.computerhistory.org/revolution/computer-graphics-music-and-art/15/222">https://www.computerhistory.org/revolution/computer-graphics-music-and-art/15/222</a>.
    </div>
    <span class="Z3988"
      title="url_ver=Z39.88-2004&amp;ctx_ver=Z39.88-2004&amp;rfr_id=info%3Asid%2Fzotero.org%3A2&amp;rft_val_fmt=info%3Aofi%2Ffmt%3Akev%3Amtx%3Adc&amp;rft.type=webpage&amp;rft.title=Max%20Mathews%20Makes%20MUSIC%20-%20CHM%20Revolution&amp;rft.identifier=https%3A%2F%2Fwww.computerhistory.org%2Frevolution%2Fcomputer-graphics-music-and-art%2F15%2F222"></span>
    <div class="csl-entry">Moog. n.d. “The Early Years Of The Moog Synthesizer | Moog.” Accessed April 10, 2024. <a
        href="https://www.moogmusic.com/news/early-years-moog-synthesizer">https://www.moogmusic.com/news/early-years-moog-synthesizer</a>.
    </div>
    <span class="Z3988"
      title="url_ver=Z39.88-2004&amp;ctx_ver=Z39.88-2004&amp;rfr_id=info%3Asid%2Fzotero.org%3A2&amp;rft_val_fmt=info%3Aofi%2Ffmt%3Akev%3Amtx%3Adc&amp;rft.type=webpage&amp;rft.title=The%20Early%20Years%20Of%20The%20Moog%20Synthesizer%20%7C%20Moog&amp;rft.identifier=https%3A%2F%2Fwww.moogmusic.com%2Fnews%2Fearly-years-moog-synthesizer&amp;rft.au=undefined"></span>
    <div class="csl-entry">“Mutable Instruments Ripples.” 2024. ModularGrid. April 14, 2024. <a
        href="https://modulargrid.net/e/mutable-instruments-ripples">https://modulargrid.net/e/mutable-instruments-ripples</a>.
    </div>
    <span class="Z3988"
      title="url_ver=Z39.88-2004&amp;ctx_ver=Z39.88-2004&amp;rfr_id=info%3Asid%2Fzotero.org%3A2&amp;rft_val_fmt=info%3Aofi%2Ffmt%3Akev%3Amtx%3Adc&amp;rft.type=webpage&amp;rft.title=Mutable%20instruments%20Ripples&amp;rft.description=Mutable%20instruments%20Ripples%20-%20Eurorack%20Module%20-%20Liquid%20filter&amp;rft.identifier=https%3A%2F%2Fmodulargrid.net%2Fe%2Fmutable-instruments-ripples&amp;rft.date=2024-04-14&amp;rft.language=en"></span>
    <div class="csl-entry">Reinhold, Arnold. 2006. <i>Punch Card from a Typical Fortran Program.</i> I took this picture
      of an artifact in my possession. The card was created in the late 1960s or early 1970s and has no copyright
      notice. <a
        href="https://commons.wikimedia.org/wiki/File:FortranCardPROJ039.agr.jpg">https://commons.wikimedia.org/wiki/File:FortranCardPROJ039.agr.jpg</a>.
    </div>
    <span class="Z3988"
      title="url_ver=Z39.88-2004&amp;ctx_ver=Z39.88-2004&amp;rfr_id=info%3Asid%2Fzotero.org%3A2&amp;rft_val_fmt=info%3Aofi%2Ffmt%3Akev%3Amtx%3Adc&amp;rft.type=artwork&amp;rft.title=Punch%20card%20from%20a%20typical%20Fortran%20program.&amp;rft.identifier=https%3A%2F%2Fcommons.wikimedia.org%2Fwiki%2FFile%3AFortranCardPROJ039.agr.jpg&amp;rft.aufirst=Arnold&amp;rft.aulast=Reinhold&amp;rft.au=Arnold%20Reinhold&amp;rft.date=2006-05-11"></span>
    <div class="csl-entry">Reynolds, Simon. 2020. “How Florian Schneider And Kraftwerk Created Pop’s Future.”
      <i>NPR</i>, May 7, 2020, sec. Music Features. <a
        href="https://www.npr.org/2020/05/07/852081716/how-florian-schneider-and-kraftwerk-created-pops-future">https://www.npr.org/2020/05/07/852081716/how-florian-schneider-and-kraftwerk-created-pops-future</a>.
    </div>
    <span class="Z3988"
      title="url_ver=Z39.88-2004&amp;ctx_ver=Z39.88-2004&amp;rfr_id=info%3Asid%2Fzotero.org%3A2&amp;rft_val_fmt=info%3Aofi%2Ffmt%3Akev%3Amtx%3Adc&amp;rft.type=newspaperArticle&amp;rft.title=How%20Florian%20Schneider%20And%20Kraftwerk%20Created%20Pop's%20Future&amp;rft.source=NPR&amp;rft.description=Florian%20Schneider%20and%20Ralf%20H%C3%BCtter%20met%20while%20studying%20piano%20and%20flute%20at%20university%20in%20Germany.%20Before%20too%20long%2C%20they'd%20redrawn%20the%20entire%20outline%20of%20pop%20music%20for%20the%20late%2020th%20century.&amp;rft.identifier=https%3A%2F%2Fwww.npr.org%2F2020%2F05%2F07%2F852081716%2Fhow-florian-schneider-and-kraftwerk-created-pops-future&amp;rft.aufirst=Simon&amp;rft.aulast=Reynolds&amp;rft.au=Simon%20Reynolds&amp;rft.date=2020-05-07&amp;rft.language=en"></span>
    <div class="csl-entry">“Some Photos of Kraftwerk.” 2012. <i>Observer</i> (blog). February 15, 2012. <a
        href="https://observer.com/2012/02/some-photos-of-kraftwerk/">https://observer.com/2012/02/some-photos-of-kraftwerk/</a>.
    </div>
    <span class="Z3988"
      title="url_ver=Z39.88-2004&amp;ctx_ver=Z39.88-2004&amp;rfr_id=info%3Asid%2Fzotero.org%3A2&amp;rft_val_fmt=info%3Aofi%2Ffmt%3Akev%3Amtx%3Adc&amp;rft.type=blogPost&amp;rft.title=Some%20Photos%20of%20Kraftwerk&amp;rft.description=Because%20honestly%2C%20why%20the%20hell%20not%3F%20These%20guys%20look%20like%20action%20figures.%20And%20they%20have%20a%20retrospective%20coming%20to%20MoMA%20in%20April%2C%20and%20it%20sounds%20awesome.%20Also%3A%20in%20a%20courageous%20act%20of%20investigative%20jou%E2%80%A6&amp;rft.identifier=https%3A%2F%2Fobserver.com%2F2012%2F02%2Fsome-photos-of-kraftwerk%2F&amp;rft.date=2012-02-15&amp;rft.language=en-US"></span>
    <div class="csl-entry">Unknown author. 1945. <i>English:&nbsp; Wartime Picture of a Bletchley Park Bombe</i>. Set of
      wartime photos of GC&amp;CS at Bletchley Park. <a
        href="https://commons.wikimedia.org/wiki/File:Wartime_picture_of_a_Bletchley_Park_Bombe.jpg">https://commons.wikimedia.org/wiki/File:Wartime_picture_of_a_Bletchley_Park_Bombe.jpg</a>.
    </div>
    <span class="Z3988"
      title="url_ver=Z39.88-2004&amp;ctx_ver=Z39.88-2004&amp;rfr_id=info%3Asid%2Fzotero.org%3A2&amp;rft_val_fmt=info%3Aofi%2Ffmt%3Akev%3Amtx%3Adc&amp;rft.type=artwork&amp;rft.title=English%3A%20%20Wartime%20picture%20of%20a%20Bletchley%20Park%20Bombe&amp;rft.rights=Public%20domain&amp;rft.identifier=https%3A%2F%2Fcommons.wikimedia.org%2Fwiki%2FFile%3AWartime_picture_of_a_Bletchley_Park_Bombe.jpg&amp;rft.au=undefined&amp;rft.date=1945"></span>
    <div class="csl-entry">updated, Matt Mullenlast. 2022. “Deadmau5: ‘The Moog Voyager - I Can’t Seem to Escape That
      Synth. It’s the Last Good Moog.’” MusicRadar. September 12, 2022. <a
        href="https://www.musicradar.com/news/deadmau5-interview">https://www.musicradar.com/news/deadmau5-interview</a>.
    </div>
    <span class="Z3988"
      title="url_ver=Z39.88-2004&amp;ctx_ver=Z39.88-2004&amp;rfr_id=info%3Asid%2Fzotero.org%3A2&amp;rft_val_fmt=info%3Aofi%2Ffmt%3Akev%3Amtx%3Adc&amp;rft.type=webpage&amp;rft.title=deadmau5%3A%20%E2%80%9CThe%20Moog%20Voyager%20-%20I%20can't%20seem%20to%20escape%20that%20synth.%20It%E2%80%99s%20the%20last%20good%20Moog%E2%80%9D&amp;rft.description=The%20mouse-headed%20king%20of%20electronic%20music%20on%20trackers%2C%20Web3%20and%20his%2030-foot%20modular%20set-up&amp;rft.identifier=https%3A%2F%2Fwww.musicradar.com%2Fnews%2Fdeadmau5-interview&amp;rft.aufirst=Matt%20Mullenlast&amp;rft.aulast=updated&amp;rft.au=Matt%20Mullenlast%20updated&amp;rft.date=2022-09-12&amp;rft.language=en"></span>
    <div class="csl-entry">Villalba, Juanjo. 2022. “Wendy Carlos: The Brilliant but Lonely Life of an Electronic Music
      Pioneer.” EL PAÍS English. December 12, 2022. <a
        href="https://english.elpais.com/culture/2022-12-12/wendy-carlos-the-brilliant-but-lonely-life-of-an-electronic-music-pioneer.html">https://english.elpais.com/culture/2022-12-12/wendy-carlos-the-brilliant-but-lonely-life-of-an-electronic-music-pioneer.html</a>.
    </div>
    <span class="Z3988"
      title="url_ver=Z39.88-2004&amp;ctx_ver=Z39.88-2004&amp;rfr_id=info%3Asid%2Fzotero.org%3A2&amp;rft_val_fmt=info%3Aofi%2Ffmt%3Akev%3Amtx%3Adc&amp;rft.type=webpage&amp;rft.title=Wendy%20Carlos%3A%20The%20brilliant%20but%20lonely%20life%20of%20an%20electronic%20music%20pioneer&amp;rft.description=The%20musician%20helped%20create%20the%20Moog%20synthesizer%20and%20composed%20groundbreaking%20albums%20and%20film%20scores%2C%20but%20lived%20in%20seclusion%20for%20almost%2010%20years%20to%20hide%20her%20gender%20reassignment&amp;rft.identifier=https%3A%2F%2Fenglish.elpais.com%2Fculture%2F2022-12-12%2Fwendy-carlos-the-brilliant-but-lonely-life-of-an-electronic-music-pioneer.html&amp;rft.aufirst=Juanjo&amp;rft.aulast=Villalba&amp;rft.au=Juanjo%20Villalba&amp;rft.date=2022-12-12&amp;rft.language=en-us"></span>
    <div class="csl-entry">Wang, Ge. 2007. “A History of Programming and Music.” In <i>The Cambridge Companion to
        Electronic Music</i>, edited by Nick Collins and Julio d’Escrivan. Cambridge Companions to Music. Cambridge:
      Cambridge University Press. <a
        href="https://doi.org/10.1017/CCOL9780521868617">https://doi.org/10.1017/CCOL9780521868617</a>.</div>
    <span class="Z3988"
      title="url_ver=Z39.88-2004&amp;ctx_ver=Z39.88-2004&amp;rfr_id=info%3Asid%2Fzotero.org%3A2&amp;rft_val_fmt=info%3Aofi%2Ffmt%3Akev%3Amtx%3Abook&amp;rft.genre=bookitem&amp;rft.atitle=A%20History%20of%20Programming%20and%20Music&amp;rft.place=Cambridge&amp;rft.publisher=Cambridge%20University%20Press&amp;rft.series=Cambridge%20Companions%20to%20Music&amp;rft.aufirst=Ge&amp;rft.aulast=Wang&amp;rft.au=Nick%20Collins&amp;rft.au=Julio%20d'Escrivan&amp;rft.au=Ge%20Wang&amp;rft.date=2007"></span>
    <div class="csl-entry">“Wavefonix Boolean Logic (BL).” n.d. ModularGrid. Accessed April 14, 2024. <a
        href="https://modulargrid.net/e/wavefonix-boolean-logic-bl">https://modulargrid.net/e/wavefonix-boolean-logic-bl</a>.
    </div>
    <span class="Z3988"
      title="url_ver=Z39.88-2004&amp;ctx_ver=Z39.88-2004&amp;rfr_id=info%3Asid%2Fzotero.org%3A2&amp;rft_val_fmt=info%3Aofi%2Ffmt%3Akev%3Amtx%3Adc&amp;rft.type=webpage&amp;rft.title=Wavefonix%20Boolean%20Logic%20(BL)&amp;rft.description=Wavefonix%20Boolean%20Logic%20(BL)%20-%20Eurorack%20Module%20-%20Boolean%20Logic%20Module%20with%20AND%2C%20OR%2C%20NAND%2C%20NOR%20and%20NOT%20Functions&amp;rft.identifier=https%3A%2F%2Fmodulargrid.net%2Fe%2Fwavefonix-boolean-logic-bl&amp;rft.language=en"></span>
    <div class="csl-entry">“What Is Max? | Cycling ’74.” n.d. Accessed April 14, 2024. <a
        href="https://cycling74.com/products/max">https://cycling74.com/products/max</a>.</div>
    <span class="Z3988"
      title="url_ver=Z39.88-2004&amp;ctx_ver=Z39.88-2004&amp;rfr_id=info%3Asid%2Fzotero.org%3A2&amp;rft_val_fmt=info%3Aofi%2Ffmt%3Akev%3Amtx%3Adc&amp;rft.type=webpage&amp;rft.title=What%20is%20Max%3F%20%7C%20Cycling%20'74&amp;rft.description=Max%20is%20an%20infinitely%20flexible%20space%20to%20create%20your%20own%20interactive%20software&amp;rft.identifier=https%3A%2F%2Fcycling74.com%2Fproducts%2Fmax"></span>
    <div class="csl-entry">Wikipedia, 30rKs56MaE at Japanese. 2006. <i>English:&nbsp; Les Ondes Martenot Are an
        Electronic Music Instrument Invented in 1928 by Maurice Martenot at The Atelier Jean-Louis Martenot in Neuilly
        (near of Paris).</i> Own work by the original uploader. <a
        href="https://commons.wikimedia.org/wiki/File:Ondes_martenot.jpg">https://commons.wikimedia.org/wiki/File:Ondes_martenot.jpg</a>.
    </div>
    <span class="Z3988"
      title="url_ver=Z39.88-2004&amp;ctx_ver=Z39.88-2004&amp;rfr_id=info%3Asid%2Fzotero.org%3A2&amp;rft_val_fmt=info%3Aofi%2Ffmt%3Akev%3Amtx%3Adc&amp;rft.type=artwork&amp;rft.title=English%3A%20%20Les%20Ondes%20Martenot%20are%20an%20electronic%20music%20instrument%20invented%20in%201928%20by%20Maurice%20Martenot%20at%20The%20Atelier%20Jean-Louis%20Martenot%20in%20Neuilly%20(near%20of%20Paris).&amp;rft.rights=Permission%20is%20granted%20to%20copy%2C%20distribute%20and%2For%20modify%20this%20document%20under%20the%20terms%20of%20the%20GNU%20Free%20Documentation%20License%2C%20Version%201.2%20or%20any%20later%20version%20published%20by%20the%20Free%20Software%20Foundation%3B%20with%20no%20Invariant%20Sections%2C%20no%20Front-Cover%20Texts%2C%20and%20no%20Back-Cover%20Texts.%20A%20copy%20of%20the%20license%20is%20included%20in%20the%20section%20entitled%20GNU%20Free%20Documentation%20License.%20Subject%20to%20disclaimers.http%3A%2F%2Fwww.gnu.org%2Fcopyleft%2Ffdl.htmlGFDLGNU%20Free%20Documentation%20Licensetruetrue&amp;rft.identifier=https%3A%2F%2Fcommons.wikimedia.org%2Fwiki%2FFile%3AOndes_martenot.jpg&amp;rft.aufirst=30rKs56MaE%20at%20Japanese&amp;rft.aulast=Wikipedia&amp;rft.au=30rKs56MaE%20at%20Japanese%20Wikipedia&amp;rft.date=2006-05-23"></span>
    <div class="csl-entry">Zuse, Konrad. 1952. <i>English:&nbsp; Drawing of the Zuse Z2</i>.
      http://zuse.zib.de/collection/0pu1VvMSUGrj66Ka/item/MBAx3BK9lkLFCKgL. <a
        href="https://commons.wikimedia.org/wiki/File:Zuse_archive_Z2.jpg">https://commons.wikimedia.org/wiki/File:Zuse_archive_Z2.jpg</a>.
    </div>
    <span class="Z3988"
      title="url_ver=Z39.88-2004&amp;ctx_ver=Z39.88-2004&amp;rfr_id=info%3Asid%2Fzotero.org%3A2&amp;rft_val_fmt=info%3Aofi%2Ffmt%3Akev%3Amtx%3Adc&amp;rft.type=artwork&amp;rft.title=English%3A%20%20Drawing%20of%20the%20Zuse%20Z2&amp;rft.rights=Public%20domain&amp;rft.identifier=https%3A%2F%2Fcommons.wikimedia.org%2Fwiki%2FFile%3AZuse_archive_Z2.jpg&amp;rft.aufirst=Konrad&amp;rft.aulast=Zuse&amp;rft.au=Konrad%20Zuse&amp;rft.date=1952"></span>
  </div>
