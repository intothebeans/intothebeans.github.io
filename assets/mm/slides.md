---
theme : "blood"
customTheme: "styles"
transition: "convex"
highlightTheme: "monokai"
slideNumber: false
title: "Modeled Modules"
---

<h1 style="font-size: 100pt">Modeled Modules</h1>

### A SuperCollider Extension Project

Aiden Benton | April 21, 2024

---

## Outline

1) History {.fragment .fade-right}
2) Project Overview {.fragment .fade-right}

---

# From Analog to Digital and Back Again
  
### A brief history of computer music

--

## What is an Analog Synthesizer?

note: uses electricity and electrical components as an analog to sound waves; microphone example

- Teleharmonium (1896) {.fragment .fade-right}
- Theremin (1920) {.fragment .fade-right}
- Ondes Martenot (1928) {.fragment .fade-right}
- Orgues des Ondes (1929) {.fragment .fade-right}

note: Martenot similar to theremin, Johnny Greenwood of radiohead modern martenot enthusiast; orgue des ondes had 700 vacuum tubes

--

#### Orgues and Ondes 
<!-- .slide: data-transition=slide-->

<img src="assets/tubes.jpg" height="300"> 
<img src="assets/martenot.jpg" height="300">

---

### Trautonium (1930)

<div class="multiCol">

- Dr. Freidrich Tratuwein {.fragment .fade-right}
- Single tube oscillator passed through resonant filters {.fragment .fade-right}
- Oskar Sala {.fragment .fade-right}

<div class="col">

![](assets/volks.jpg)
<small><em>Volkstrautonium</em></small>
</div>
</div>
  
note: had a metal string; really expensive commercial version called the volkstrautonium made by Telefunken; oskar sala continued its development until his death

--

#### Trautwein, Hindemith, and Sala
<!-- .slide: data-transition=slide -->

![Trautwein (L), Paul Hindemith and Oskar Sala playing the Trautonium. Berlin, c 1933](assets/trautonium.jpg)

---

### RCA Synthesizer I & II (1951)

<div class="multiCol">

- Harry Olson and Herbert Belar {.fragment .fade-right}
- Cost cutting {.fragment .fade-right}
- Millions of settings {.fragment .fade-right}
<div class="col">

![RCA MkII](assets/rca.jpg)
<small><em>
RCA Mk II
</em></small>
</div>

</div>

note: first instrument to be called a synthesizer; RCA wanted to generate pop music and instrument sounds; score made of typed binary; used a long hole punched paper roll; Milton Babbitt composed for it; currently sitting in ruins :(

--

#### RCA MkII Schematic
<!-- .slide: data-transition=slide -->
![RCA MkII](assets/rcasynth_block_large.jpg)

---

## Moog and Modularity

<div class="multiCol">

- Modular Prototype {.fragment .fade-right}
- "Synthesizer" Series {.fragment .fade-right}

<div class="col fragment fade-up">

![](assets/1c.jpg)
<small><em>
Synthesizer IC
</em></small>
</div>
</div>

note: prototype called "The Abominatron"; 1964 for Herb Deutsch; modular system allowed for an incomprehensible number of combinations; studio and portable versions; synthesizer 1 offered basic needs 

--

### Synthesizer 2P
<!-- .slid: data-transition=slide -->
![](assets/2P.png)

note: Synthesizer 2 for more complex applications in studios and universities

--

### Synthesizer 3P
<!-- .slid: data-transition=slide -->
![](assets/3p.png)

note: the synthesizer 3 was the first fully realized synthesizer

---

### The Minimoog Model D

<img src="assets/minimoog_vi_hero.jpg" width="600">

- Most iconic synthesizer of all time {.fragment .fade-right}
- Hard-wired synthesizer routings {.fragment .fade-right}
- First model to be sold by instrument dealers {.fragment .fade-right}

note: 1970, monophonic, more user friendly, cheaper, the archetype

---

## Dawn of Digital: Prophet-5

<div class="multiCol">

- Dave Smith and John Bowen {.fragment .fade-right}
- Combined analog and digital technology {.fragment .fade-right}
- Best sounding and most popular polyphonic analog synthesizer {.fragment .fade-right}
<div class="col">
<img src="assets/prophet5.jpg">
</div>
</div>



note: released in 1977, hit stores in 78; analog sounds with the perks of digital memory for custom presets and keyboard scanning allowing for reactive keys; going into the 80's digital synthesizers and samplers replace their purely analog counterparts like the Roland TR-808 drum and TB-303 bass synths 

---

## A Very Brief History of Digital Computers

---

### Electromechanical Computers

- Z2: Konrade Zuse (1939) {.fragment .fade-right data-fragment-index=1}
- Bombe: Alan Turing (1941) {.fragment .fade-right data-fragment-index=3}


<div class="multiCol">
<div class="col">
<img class="fragment fade-right" data-fragment-index=2 src="assets/z2.jpg">
</div>
<img class="fragment fade-left" data-fragment-index=4 src="assets/bombe.jpg">
</div>

note: Invented by Konrad Zuse with his Z2 in 1939; electromechanical were the earliest form of digital computer which often took the form of numerical calculators and code breaking machines. Turing's Bombe ENIGMA breaker is a famous example. 

---

### Vacuum Tubes

- ENIAC: John Mauchly and J. Presper Eckert (1943) {.fragment .fade-right data-fragment-index=1}
- The Manchester Baby: Frederic Williams, Tom Kilburn, and Geoff Toothill (1948) {.fragment .fade-right}

<div class="multiCol">

![](assets/eniac.jpg) {.fragment .fade-right data-fragment-index=2}
<div class="col">

![](assets/baby.jpg) {.fragment .fade-left}
</div>
</div>

note: no mechanical = faster; ENIAC used panel to panel wiring and switching revealed to the public in 1946. First program in history to run on a digital, electronic, stored-program computer June 21st 1948

--


#### Commercial Applications
<!-- .slide: data-transition=slide -->

- J. Lyons & Company LEO-I: (1951) {.fragment .fade-right}

![](assets/leo.jpg) {.fragment .fade-up}

note: LEO first computer to have an office job solving the problem of production scheduling and delivery of cakes; Grace Hopper invents the compiler

---

### Transistors

- Manchester TC: Tom Kilburn, Richard Grimsdale, and Douglas Webb (1953) {.fragment .fade-right data-fragment-index=1}
- IBM 701: (1953) {.fragment .fade-right}
- IBM 704: (1954) {.fragment .fade-right}

<img class="fragment fade-up" data-fragment-index=2 src="assets/tc.jpg" width="400">

note: transistors smaller, less power less heat, more reliable; Manchester TC first prototype to use the transistor; known a the Defense Calculator first computer to play checkers IBMs entry into computer market; the IBM 704 designed to solve complex problems in large scale settings first super-computer

--

#### IBM 704 Mainframe
<!-- .slide: data-transition=slide -->
![](assets/ibm704.png)

---

# Max Mathews {.fragment .fade-down}

<img src="assets/max.png" height="400">

note: 1955 max mathews hired at bell labs

---

# MUSIC-N
**The First of Its Kind**

- MUSIC I (1957) {.fragment .fade-right}
  - *In the Silver Scale* {.fragment .fade-right}
- MUSIC II (1958) {.fragment .fade-right}

note: music i programmed for the ibm 704 in machine code so only worked on the computer model for which it was designed and was quote "terrible" in his own words a single triangle wave with pitch loudness and duration. 7 seconds silver. 2 added four voices and arbitrary waveforms and the concept of the wavetable oscillator

--

## MUSIC III (1959)

- Unit Generators (UGens) {.fragment .fade-right}
- Instrument and Orchestra relationship {.fragment .fade-right}

note: UGens super important concept; building blocks for generating audio signals and support a number of control inputs to change parameters. 
connection of ugens is an instrument and orchestra a collection of ugens; important concept

--

## MUSIC IV & V (1962-68)

<div class="multiCol">

- First integrated computer music system {.fragment .fade-right}
- FORTRAN {.fragment .fade-right}

![](assets/punch.jpg) {.fragment .fade-up}

<div class="col">
<img src="assets/mathews-miller.webp">
<small><em>
Max Matthews and Joan Miller 
</em></small>
</div>
</div>

note: music 4 given to chowning who hooked up the music N computer to the same storage as a DAC computer fortran made MUSIC-V accessible to every computer that could compile FORTRAN code

---

## The CARL System 

- UNIX and C {.fragment .fade-right}
- Modular {.fragment .fade-right}
- *cmusic* {.fragment .fade-right}

`> wave -waveform sine -frequency 440Hz | spect` {.fragment .fade-zoom}

note: with the advent of microprocessors, workstations with terminals, and operating systems, music programming advanced in its accessibility; and the Unix operating system could run on any computer with a c compiler. Gareth Loy and Richard Moore; CARL based on UNIX systems interconnected programs for text processing; not real-time, open-source; implemented in C and extensible through an api. cmusic implementation of music v in c; created by richard moore

---

## C Suite

- Cmix {.fragment .fade-right}
  - MINC {.fragment .fade-right}
- CLM {.fragment .fade-right}
  - Nyquist {.fragment .fade-right}
- Csound {.fragment .fade-right}

<div class="fragment fade-zoom">

```lisp
(definstrument simp (start-time duration frequency amplitude)
  (let* ((beg (floor (* start-time *srate*)))
	 (end (+ beg (floor (* duration *srate*))))
	 (j 0))
    (run
      (loop for i from beg below end do
        (outa i (* amplitude (sin (* j 2.0 pi (/ frequency *srate*)))))
	(incf j)))))
```
</div>

note: created by Paul Lansky not a MUSIC-N descendant; C library and scoring language; like loops and conditional statements; Common Lisp Music by Bill Schottstaedt; MUSIC-N descent; nyquist is a newer lisp based language audacity;csound most popular MUSIC-N descendant;audio rate and control rate; where ar and kr come from now supports real-time audio

---

## Realtime Audio

- PureData {.fragment .fade-right}
- Max/MSP {.fragment .fade-right}

<br>
<img src="assets/maxmsp.png" height="400" class="fragment fade-up">

note: created by Miller S. Puckette at IRCAM; Pd open source; Max originally made for MIDI but added the signal capabilities of Pd where the MSP comes from

---

# SuperCollider

- scsynth {.fragment .fade-right}
- sclang {.fragment .fade-right}
- scide {.fragment .fade-right}

note: James McCartney 1996; scsynth writing and sends the real time audio server supercollider code is executed on; it can be communicated with via the OSC standard; the server can be used by any number of applications and programs as long as they can communicate in a way the server understands; sclang is the interpreted programming language for writing supercollider code; scide is a development environment which integrates easily with sclang and scsynth while also providing easy access to the extensive help documentation

---

<!-- .slide: data-transition=zoom -->

# Why?

---

# Wendy Carlos

- *Switched on Bach* (1968) {.fragment .fade-right}
- *A Clockwork Orange*, *The Shining*, and *Tron* {.fragment .fade-right}

<img src="assets/carlos.png" width=600>

  
note: Switched on Bach skyrocketed moog synthesizers into the mainstream. The album required thousands of hours of work due to the monophonic nature of the synthesizers. The album was the second classical music album ever to go platinum, and won 3 grammys. compositions for incredibly influential films. inspired stranger things soundtrack

--

<iframe width="560" height="315" src="https://www.youtube.com/embed/gWEU5apbY0E?si=bczjO7YJlQWrR9lz&amp;start=94" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

---

# Kraftwerk

- Florian Schneider and Ralf Hütter {.fragment .fade-right}
- Foundational to the development of techno, electro, hip-hop, synth pop, and many others {.fragment .fade-right}
- *Autobahn* (1974) {.fragment .fade-right}



<img src="assets/kraftwerk.png">

note: the Beatles of electronic music; highly influential in a number of electronic and popular music genres. The single edit of the autobahn title track became an international hit in 1975. To quote Schneider "We are more like vehicles, a part of out mensch machine, out man-machine. Sometimes we play the music, sometimes the music plays us, sometimes... it plays." 

--

<iframe width="560" height="315" src="https://www.youtube.com/embed/rPgaz3Re0ik?si=KR-qmjQw9V6FTMIt&amp;start=94" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

---

# Deadmau5

- VCV Rack {.fragment .fade-right}
- Analogue Solutions Colossus and the Moog Voyager {.fragment .fade-right}

<img src="assets/studio.jpg" width=600>

note: he has a large collection of analog synthesizers in his studio that he uses he also is a fan of VCV rack which provides digital implementations of analog models. to quote "A lot of those oscillators are great. Obviously, not so much the analogue oscillators like you’d get out of a Cynthia or something like that. But the digital oscillators, all the wavetable stuff and the digital FM ops, and stuff like that are fucking great." there is a market for this kind of stuff

--

<iframe width="560" height="315" src="https://www.youtube.com/embed/YnwfTHpnGLY?si=FmNlhz1_iVlCW7D0&amp;start=245" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

---

# Why SuperCollider?

note: beyond accurate physical models, a full conversion to digital with digital capabilities; natural extensibility of scsynth, well documented, good API; familiar with the capabilites of SuperCollider and C++

---

# BooleanLogic

--

## Concept

![](assets/boolean.jpg)

**Wavefonix Boolean Logic** {.fragment .fade-up}

note: based on the Wavefonix Boolean Logic Module; talk about how my implementation differs
<!-- .slide: data-transition=slide -->

--

## Implementation
### C++

```cpp

#include "SC_PlugIn.hpp"
#include "BooleanLogic.hpp"

static InterfaceTable* ft;

namespace ModeledModules {

    BooleanLogic::BooleanLogic() {
        mCalcFunc = make_calc_function<BooleanLogic, &BooleanLogic::next>();
        next(1);
        mSelectedOperation = in0(Operation);
    }

    void BooleanLogic::next(int nSamples) {
        // Inputs
        float input1 = in0(Input1);
        float input2 = in0(Input2);


        switch (mSelectedOperation) {
            case AND:
                if(std::abs(input1) > 0 && std::abs(input2) > 0) {
                    out0(0) = 1.0;
                } else {
                    out0(0) = 0.0;
                }
                break;
            case OR:
                if(std::abs(input1) > 0 || std::abs(input2) > 0) {
                    out0(0) = 1.0;
                } else {
                    out0(0) = 0.0;
                }
                break;
            case XOR:
                if((std::abs(input1) > 0 && std::abs(input2) == 0) || (std::abs(input1) == 0 && std::abs(input2) > 0)) {
                    out0(0) = 1.0;
                } else {
                    out0(0) = 0.0;
                }
                break;
            case NAND:
                if(std::abs(input1) > 0 && std::abs(input2) > 0) {
                    out0(0) = 0.0;
                } else {
                    out0(0) = 1.0;
                }
                break;
            case NOR:
                if(std::abs(input1) > 0 || std::abs(input2) > 0) {
                    out0(0) = 0.0;
                } else {
                    out0(0) = 1.0;
                }
                break;
            case XNOR:
                if((std::abs(input1) > 0 && std::abs(input2) > 0) || (std::abs(input1) == 0 && std::abs(input2) == 0)) {
                    out0(0) = 1.0;
                } else {
                    out0(0) = 0.0;
                }
                break;
            default:
                out0(0) = 0.0;
                break;
        }

    }

} 
```
<!-- .slide: data-transition=slide -->

--

## SuperCollider

```java
BooleanLogic : UGen {
	// aliases for UGen boolean operations
	const <and = 0;
	const <or = 1;
	const <xor = 2;
	const <nand = 3;
	const <nor = 4;
	const <xnor = 5;

	*kr { |input1, input2, operation=0|
        ^this.multiNew('control', input1, input2, operation);
    }

	checkInputs {
		^this.checkValidInputs;
	}

}
```
<!-- .slide: data-transition=slide -->

--

## Use Case Example

note: go to SC

<!-- .slide: data-transition=slide -->

---

# DSP is Hard
<!-- .slide: data-transition=zoom-->

---

# Ripples

--

## Concept

![](assets/ripples.jpg)

**Mutable Instruments Ripples** {.fragment .fade-up}
<!-- .slide: data-transition=slide -->

note: differs in implementation no resonant filters, chebyschev filters instead due to my attempt to use digital filters for everyone as my implementation guide; no need for vca, and no other frequency input; hope to develop a version more accurate to the module in the future 

--

## Implementation 
### C++

```cpp
void Ripples::next(int nSamples) {
    const float *input = in(INPUT);
    float* outbuf0 = out(0);
    float* outbuf1 = out(1);
    float* outbuf2 = out(2);

    float width = in0(BP_RQ) * in0(BP_CF);

    if(in0(LP2_CF) != 0){
        LPF2.setup(sampleRate(), in0(LP2_CF), in0(LP2_R));
    }
    if(in0(LP4_CF) != 0){
        LPF4.setup(sampleRate(), in0(LP4_CF), in0(LP4_R));
    }
    BPF.setup(sampleRate(), in0(BP_CF), width, in0(BP_R));

    for(int i = 0; i < nSamples; ++i){
        outbuf0[i] = zapgremlins(BPF.filter(input[i]));
        outbuf1[i] = zapgremlins(LPF2.filter(input[i]));
        outbuf2[i] = zapgremlins(LPF4.filter(input[i]));
    }
}

```
<!-- .slide: data-transition=slide -->

--

### Header File

```cpp
// PluginRipples.hpp
// Aiden Benton (dev@aiden-benton.com)

#pragma once

#include "SC_PlugIn.hpp"
#include "../../external/iir1/Iir.h"

namespace ModeledModules {

    class Ripples : public SCUnit {
    public:
        Ripples();
    private:
        void next(int nSamples);

        Iir::ChebyshevI::LowPass<2> LPF2;
        Iir::ChebyshevI::LowPass<4> LPF4;
        Iir::ChebyshevI::BandPass<4> BPF;

        enum inputs {INPUT, BP_CF, BP_R, BP_RQ, LP2_CF, LP2_R, LP4_CF, LP4_R};

    };

} // namespace ModeledModules
```

<!-- .slide: data-transition=slide -->

--

### SuperCollider

```cpp
Ripples : MultiOutUGen {

	*ar { arg in, bpCF = 440.0, bpR = 0.5, bpRQ = 1, lp2CF= 0.0, lp2R=0.0, lp4CF=0.0, lp4R=0.0, mul=1.0, add=0.0;
		^this.multiNew('audio', in, bpCF, bpR, bpRQ, lp2CF, lp2R, lp4CF, lp4R, fmFreq, fmMul, fmIndex).madd(mul, add);
	}

	*kr { arg in, bpCF = 440.0, bpR = 0.5, bpRQ = 1, lp2CF= 0.0, lp2R=0.0, lp4CF=0.0, lp4R=0.0, mul=1.0, add=0.0;
		^this.multiNew('control', in, bpCF, bpR, bpRQ, lp2CF, lp2R, lp4CF, lp4R, fmFreq, fmMul, fmIndex).madd(mul, add);
	}

	init { arg ... theInputs;
		inputs = theInputs;
		channels = [
			OutputProxy(rate, this, 0),
			OutputProxy(rate, this, 1),
			OutputProxy(rate, this, 2),
		];
		^channels
	}

	checkInputs {
		^this.checkValidInputs;
	}
}

```
<!-- .slide: data-transition=slide -->

--

## Use Case Example

---

# DIYDelay

--

## Concept

![](assets/delay.jpg)

**Erica Synths DIY Delay** {.fragment .fade-right}

note: digital and tape delay with ability to overlap, hold, and reverse with controllable feedback. I have an option for tape saturation or not, hold, and reverse. The adding on this module serves a loop function which I have not yet been able to implement.

--

## Implementation
### C++
**Constructor**

```cpp
DIYDelay::DIYDelay()
{
    mCalcFunc = make_calc_function<DIYDelay, &DIYDelay::next>();
    m_maxDelay = in0(MAX_DELAY);
    m_bufSize = NEXTPOWEROFTWO(sampleRate() * m_maxDelay);
    m_mask = m_bufSize - 1;
    m_buf = (float *)RTAlloc(mWorld, m_bufSize * sizeof(float));
    if (m_buf == nullptr)
    {
        ClearUnitOutputs(this, 1);
        if (mWorld->mVerbosity > -2)
        {
            Print("DIYDelay: failed to allocate memory for buffer\n");
        }
        return;
    }
    memset(m_buf, 0, m_bufSize * sizeof(float));

    next(1);
}
```

--

### C++
**next() Function**
```cpp
void DIYDelay::next(int nSamples)
{
    // Inputs from SC
    const float *input = in(INPUT);
    float *outbuf = out(0);
    float delay = in0(DELAY_TIME);
    float fb = in0(FEEDBACK);

    auto hold = static_cast<bool>(in0(HOLD));
    auto reverse = static_cast<bool>(in0(REVERSE));
    auto tape = static_cast<bool>(in0(TAPE));

    // local stateless variables
    float const *buf = m_buf;
    int mask = m_mask;
    int write = m_readIndex;
    int read = (m_reverseIndex == 0) ? m_bufSize - 1 : m_reverseIndex;

    if (delay > m_maxDelay)
    {
        delay = m_maxDelay;
    }

    // initialize delay time
    float delay_samples = sampleRate() * delay;
    auto offset = static_cast<int>(delay_samples);
    float frac = delay_samples - (float)offset;

    for (int i = 0; i < nSamples; ++i)
    {

        int phase1 = reverse ? read - offset : write - offset;
        int phase2 = phase1 - 1;
        int phase3 = phase1 - 2;
        int phase0 = phase1 + 1;
        float d0 = buf[phase0 & mask];
        float d1 = buf[phase1 & mask];
        float d2 = buf[phase2 & mask];
        float d3 = buf[phase3 & mask];

        float delayed = cubicinterp(frac, d0, d1, d2, d3);

        float outSample = zapgremlins(input[i] + (fb * delayed));

        if (tape)
        {
            outSample = saturation(outSample);
        }

        outbuf[i] = outSample;
        if (!hold)
        {
            m_buf[write] = outSample;
        }

        write = (write + 1) & mask;
        read = (read - 1) & mask;
    }
    m_readIndex = write;
    m_reverseIndex = read;
}
```

--

## Use Case Example

---

## [Bibliography](bibliography.html)

