---
title: Modeled Modules Presentation
layout: presentation
transition: convex
---

<section>
  <h1 style="font-size: 100pt">Modeled Modules</h1>
  <h3>A SuperCollider Extension Project</h3>
  <p>Aiden Benton | April 21, 2024</p>
</section>
<section>
<h2>Outline</h2>
<ol>
<li class="fragment fade-right">History</li>
<li class="fragment fade-right">Project Overview</li>
</ol>
</section>
<section>
  <section>
    <h1>From Analog to Digital and Back Again</h1>
    <h3>A brief history of computer music</h3>
  </section>
  <section>
    <h2>What is an Analog Synthesizer?</h2>
    <ul>
      <li class="fragment fade-right">Teleharmonium (1896)</li>
      <li class="fragment fade-right">Theremin (1920)</li>
      <li class="fragment fade-right">Ondes Martenot (1928)</li>
      <li class="fragment fade-right">Orgues des Ondes (1929)</li>
    </ul>
  </section>
  <section data-transition=slide>
    <h4>Orgues and Ondes</h4>
    <img src="/assets/mm/tubes.jpg" height="300"> 
    <img src="/assets/mm/martenot.jpg" height="300">
  </section>
</section>
<section>
  <section>
    <h3>Trautonium (1930)</h3>
    <div class="multiCol">
      <ul>
        <li class="fragment fade-right">Dr. Freidrich Tratuwein</li>
        <li class="fragment fade-right">Single tube oscillator passed through resonant filters</li>
        <li class="fragment fade-right">Oskar Sala</li>
      </ul>
      <div class="col">
        <p><img src="/assets/mm/volks.jpg">
        <small><em>Volkstrautonium</em></small>
        </p>
      </div>
    </div>
  </section>
  <section data-transition=slide>
    <h4>Trautwein, Hindemith, and Sala</h4>
    <p><img src="/assets/mm/trautonium.jpg" alt="Trautwein (L), Paul Hindemith and Oskar Sala playing the Trautonium. Berlin, c 1933"></p>
  </section>
</section>
<section>
  <section>
    <h3>RCA Synthesizer I &amp; II (1951)</h3>
    <div class="multiCol">
      <ul>
        <li class="fragment fade-right">Harry Olson and Herbert Belar</li>
        <li class="fragment fade-right">Cost cutting</li>
        <li class="fragment fade-right">Millions of settings</li>
      </ul>
      <div class="col">
        <p><img src="/assets/mm/rca.jpg" alt="RCA MkII">
        <small><em>
        RCA Mk II
        </em></small></p>
      </div>
    </div>
  </section>
  <section data-transition=slide>
    <h4>RCA MkII Schematic</h4>
    <p><img src="/assets/mm/rcasynth_block_large.jpg" alt="RCA MkII"></p>
  </section>
</section>
<section>
  <section>
    <h2>Moog and Modularity</h2>
    <div class="multiCol">
      <ul>
        <li class="fragment fade-right">Modular Prototype</li>
        <li class="fragment fade-right">“Synthesizer” Series</li>
      </ul>
      <div class="col fragment fade-up">
        <p><img src="/assets/mm/1c.jpg" alt="">
        <small><em>
        Synthesizer IC
        </em></small></p>
      </div>
    </div>
  </section>
  <section>
    <h3>Synthesizer 2P</h3>
    <p><img src="/assets/mm/2P.png" alt=""></p>
  </section>
  <section>
    <h3>Synthesizer 3P</h3>
    <p><img src="/assets/mm/3p.png" alt=""></p>
  </section>
</section>
<section>
  <h3>The Minimoog Model D</h3>
  <img src="/assets/mm/minimoog_vi_hero.jpg" width="600">
  <ul>
    <li class="fragment fade-right">Most iconic synthesizer of all time</li>
    <li class="fragment fade-right">Hard-wired synthesizer routings</li>
    <li class="fragment fade-right">First model to be sold by instrument dealers</li>
  </ul>
</section>
<section>
  <h2>Dawn of Digital: Prophet-5</h2>
  <div class="multiCol">
    <ul>
      <li class="fragment fade-right">Dave Smith and John Bowen</li>
      <li class="fragment fade-right">Combined analog and digital technology</li>
      <li class="fragment fade-right">Best sounding and most popular polyphonic analog synthesizer</li>
    </ul>
    <div class="col">
      <img src="/assets/mm/prophet5.jpg">
    </div>
  </div>
</section>
<section>
  <h2>A Very Brief History of Digital Computers</h2>
</section>
<section>
  <h3>Electromechanical Computers</h3>
  <ul>
    <li class="fragment fade-right" data-fragment-index="1">Z2: Konrade Zuse (1939)</li>
    <li class="fragment fade-right" data-fragment-index="3">Bombe: Alan Turing (1941)</li>
  </ul>
  <div class="multiCol">
    <div class="col">
      <img class="fragment fade-right" data-fragment-index=2 src="/assets/mm/z2.jpg">
    </div>
    <img class="fragment fade-left" data-fragment-index=4 src="/assets/mm/bombe.jpg">
  </div>
</section>
<section>
  <section>
    <h3>Vacuum Tubes</h3>
    <ul>
      <li class="fragment fade-right" data-fragment-index="1">ENIAC: John Mauchly and J. Presper Eckert (1943)</li>
      <li class="fragment fade-right">The Manchester Baby: Frederic Williams, Tom Kilburn, and Geoff Toothill (1948)</li>
    </ul>
    <div class="multiCol">
      <p class="fragment fade-right" data-fragment-index="2"><img src="/assets/mm/eniac.jpg" alt=""></p>
      <div class="col">
      <p class="fragment fade-left"><img src="/assets/mm/baby.jpg" alt=""></p>
      </div>
    </div>
  </section>
  <section data-transition=slide>
    <h4>Commercial Applications</h4>
    <ul>
      <li class="fragment fade-right">J. Lyons &amp; Company LEO-I: (1951)</li>
    </ul>
    <p class="fragment fade-up"><img src="/assets/mm/leo.jpg" alt=""></p>
  </section>
</section>
<section>
  <section>
    <h3>Transistors</h3>
    <ul>
      <li class="fragment fade-right" data-fragment-index="1">Manchester TC: Tom Kilburn, Richard Grimsdale, and Douglas Webb (1953)</li>
      <li class="fragment fade-right">IBM 701: (1953)</li>
      <li class="fragment fade-right">IBM 704: (1954)</li>
    </ul>
    <img class="fragment fade-up" data-fragment-index=2 src="/assets/mm/tc.jpg" width="400">
  </section>
  <section data-transition=slide>
    <h4>IBM 704 Mainframe</h4>
    <p><img src="/assets/mm/ibm704.png" alt=""></p>
  </section>
</section>
<section>
  <h1 class="fragment fade-down">Max Mathews</h1>
  <img src="/assets/mm/max.png" height="400">
</section>
<section>
  <section>
    <h1>MUSIC-N</h1>
    <p><strong>The First of Its Kind</strong></p>
    <ul>
      <li class="fragment fade-right">MUSIC I (1957)
        <ul>
          <li class="fragment fade-right"><em>In the Silver Scale</em></li>
        </ul>
      </li>
      <li class="fragment fade-right">MUSIC II (1958)</li>
    </ul>
  </section>
  <section>
    <h2>MUSIC III (1959)</h2>
    <ul>
      <li class="fragment fade-right">Unit Generators (UGens)</li>
      <li class="fragment fade-right">Instrument and Orchestra relationship</li>
    </ul>
  </section>
  <section>
    <h2>MUSIC IV &amp; V (1962-68)</h2>
      <div class="multiCol">
        <ul>
          <li class="fragment fade-right">First integrated computer music system</li>
          <li class="fragment fade-right">FORTRAN</li>
        </ul>
        <p class="fragment fade-up"><img src="/assets/mm/punch.jpg" alt=""></p>
        <div class="col">
          <img src="/assets/mm/mathews-miller.webp">
          <small><em>Max Matthews and Joan Miller </em></small>
        </div>
      </div>
  </section>
</section>
<section>
  <h2>The CARL System</h2>
  <ul>
    <li class="fragment fade-right">UNIX and C</li>
    <li class="fragment fade-right">Modular</li>
    <li class="fragment fade-right"><em>cmusic</em></li>
  </ul>
  <p class="fragment fade-zoom"><code>&gt; wave -waveform sine -frequency 440Hz | spect</code></p>
</section>
<section>
  <h2>C Suite</h2>
  <ul>
    <li class="fragment fade-right">Cmix
      <ul>
        <li class="fragment fade-right">MINC</li>
      </ul>
    </li>
    <li class="fragment fade-right">CLM
      <ul>
        <li class="fragment fade-right">Nyquist</li>
      </ul>
    </li>
    <li class="fragment fade-right">Csound</li>
  </ul>
  <div class="fragment fade-zoom">
    <pre><code data-trim data-noescape class="language-lisp">
      (definstrument simp (start-time duration frequency amplitude)
      (let* ((beg (floor (* start-time *srate*)))
      (end (+ beg (floor (* duration *srate*))))
      (j 0))
        (run
          (loop for i from beg below end do
            (outa i (* amplitude (sin (* j 2.0 pi (/ frequency *srate*)))))
      (incf j)))))
    </code></pre>
  </div>
</section>
<section>
  <h2>Realtime Audio</h2>
  <ul>
    <li class="fragment fade-right">PureData</li>
    <li class="fragment fade-right">Max/MSP</li>
  </ul>
  <br>
  <img src="/assets/mm/maxmsp.png" height="400" class="fragment fade-up">
</section>
<section>
  <h1>SuperCollider</h1>
  <ul>
    <li class="fragment fade-right">scsynth</li>
    <li class="fragment fade-right">sclang</li>
    <li class="fragment fade-right">scide</li>
  </ul>
</section>
<section data-transition=zoom>
  <h1>Why?</h1>
</section>
<section>
  <section>
    <h1>Wendy Carlos</h1>
    <ul>
      <li class="fragment fade-right"><em>Switched on Bach</em> (1968)</li>
      <li class="fragment fade-right"><em>A Clockwork Orange</em>, <em>The Shining</em>, and <em>Tron</em></li>
    </ul>
    <img src="/assets/mm/carlos.png" width=600>
  </section>
  <section>
    <iframe width="560" height="315" src="https://www.youtube.com/embed/gWEU5apbY0E?si=bczjO7YJlQWrR9lz&amp;start=94" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
  </section>
</section>
<section>
  <section>
    <h1>Kraftwerk</h1>
    <ul>
      <li class="fragment fade-right">Florian Schneider and Ralf Hütter</li>
      <li class="fragment fade-right">Foundational to the development of techno, electro, hip-hop, synth pop, and many others</li>
      <li class="fragment fade-right"><em>Autobahn</em> (1974)</li>
    </ul>
    <img src="/assets/mm/kraftwerk.png">
  </section>
  <section>
    <iframe width="560" height="315" src="https://www.youtube.com/embed/rPgaz3Re0ik?si=KR-qmjQw9V6FTMIt&amp;start=94" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
  </section>
</section>
<section>
  <section>
    <h1>Deadmau5</h1>
    <ul>
      <li class="fragment fade-right">VCV Rack</li>
      <li class="fragment fade-right">Analogue Solutions Colossus and the Moog Voyager</li>
    </ul>
    <img src="/assets/mm/studio.jpg" width=600>
  </section>
  <section>
    <iframe width="560" height="315" src="https://www.youtube.com/embed/YnwfTHpnGLY?si=FmNlhz1_iVlCW7D0&amp;start=245" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
  </section>
</section>
<section>
  <h1>Why SuperCollider?</h1>
</section>
<section>
  <section>
    <h1>BooleanLogic</h1>
  </section>
  <section data-transition=slide>
    <h2>Concept</h2> 
    <p><img src="/assets/mm/boolean.jpg" alt=""></p>
    <p class="fragment fade-up"><strong>Wavefonix Boolean Logic</strong></p>
  </section>
  <section data-transition=slide>
    <h2>Implementation</h2>
    <h3>C++</h3>
    <pre><code data-trim data-noescape>
      #include &quot;SC_PlugIn.hpp&quot;
      #include &quot;BooleanLogic.hpp&quot;

      static InterfaceTable\* ft;

      namespace ModeledModules {

          BooleanLogic::BooleanLogic() {
              mCalcFunc = make_calc_function&lt;BooleanLogic, &amp;BooleanLogic::next&gt;();
              next(1);
              mSelectedOperation = in0(Operation);
          }

          void BooleanLogic::next(int nSamples) {
              // Inputs
              float input1 = in0(Input1);
              float input2 = in0(Input2);


              switch (mSelectedOperation) {
                  case AND:
                      if(std::abs(input1) &gt; 0 &amp;&amp; std::abs(input2) &gt; 0) {
                          out0(0) = 1.0;
                      } else {
                          out0(0) = 0.0;
                      }
                      break;
                  case OR:
                      if(std::abs(input1) &gt; 0 || std::abs(input2) &gt; 0) {
                          out0(0) = 1.0;
                      } else {
                          out0(0) = 0.0;
                      }
                      break;
                  case XOR:
                      if((std::abs(input1) &gt; 0 &amp;&amp; std::abs(input2) == 0) || (std::abs(input1) == 0 &amp;&amp; std::abs(input2) &gt; 0)) {
                          out0(0) = 1.0;
                      } else {
                          out0(0) = 0.0;
                      }
                      break;
                  case NAND:
                      if(std::abs(input1) &gt; 0 &amp;&amp; std::abs(input2) &gt; 0) {
                          out0(0) = 0.0;
                      } else {
                          out0(0) = 1.0;
                      }
                      break;
                  case NOR:
                      if(std::abs(input1) &gt; 0 || std::abs(input2) &gt; 0) {
                          out0(0) = 0.0;
                      } else {
                          out0(0) = 1.0;
                      }
                      break;
                  case XNOR:
                      if((std::abs(input1) &gt; 0 &amp;&amp; std::abs(input2) &gt; 0) || (std::abs(input1) == 0 &amp;&amp; std::abs(input2) == 0)) {
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

</code></pre>

  </section>
  <section data-transition=slide>
    <h2>SuperCollider</h2>
    <pre><code data-trim data-noescape>
      BooleanLogic : UGen {
        // aliases for UGen boolean operations
        const &lt;and = 0;
        const &lt;or = 1;
        const &lt;xor = 2;
        const &lt;nand = 3;
        const &lt;nor = 4;
        const &lt;xnor = 5;

        *kr { |input1, input2, operation=0|
              ^this.multiNew('control', input1, input2, operation);
          }

        checkInputs {
          ^this.checkValidInputs;
        }
      }

</code></pre>

  </section>
  <section data-transition=slide>
    <h2>Use Case Example</h2>
  </section>
</section>
<section data-transition=zoom>
  <h1>DSP is Hard</h1>
</section>
<section>
  <section>
    <h1>Ripples</h1>
  </section>
  <section data-transition=slide>
    <h2>Concept</h2>
    <p><img src="/assets/mm/ripples.jpg" alt=""></p>
    <p class="fragment fade-up"><strong>Mutable Instruments Ripples</strong></p>
  </section>
  <section data-transition=slide>
    <h2>Implementation</h2>
    <h3>C++</h3>
    <pre><code data-trim data-noescape>
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

        for(int i = 0; i &lt; nSamples; ++i){
            outbuf0[i] = zapgremlins(BPF.filter(input[i]));
            outbuf1[i] = zapgremlins(LPF2.filter(input[i]));
            outbuf2[i] = zapgremlins(LPF4.filter(input[i]));
        }
      }

</code></pre>

  </section>
  <section data-transition=slide>
    <h3>Header File</h3>
    <pre><code data-trim data-noescape>
      // PluginRipples.hpp
      // Aiden Benton (dev@aiden-benton.com)

      #pragma once

      #include &quot;SC_PlugIn.hpp&quot;
      #include &quot;../../external/iir1/Iir.h&quot;

      namespace ModeledModules {

          class Ripples : public SCUnit {
          public:
              Ripples();
          private:
              void next(int nSamples);

              Iir::ChebyshevI::LowPass&lt;2&gt; LPF2;
              Iir::ChebyshevI::LowPass&lt;4&gt; LPF4;
              Iir::ChebyshevI::BandPass&lt;4&gt; BPF;

              enum inputs {INPUT, BP_CF, BP_R, BP_RQ, LP2_CF, LP2_R, LP4_CF, LP4_R};

          };

      } // namespace ModeledModules

</code></pre>

  </section>
  <section data-transition=slide>
    <h3>SuperCollider</h3>
    <pre><code data-trim data-noescape>
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

</code></pre>

  </section>
  <section >
    <h2>Use Case Example</h2>
  </section>
</section>
<section>
  <section>
    <h1>DIYDelay</h1>
  </section>
  <section>
    <h2>Concept</h2>
    <p><img src="/assets/mm/delay.jpg" alt=""></p>
    <p class="fragment fade-right"><strong>Erica Synths DIY Delay</strong></p>
  </section>
  <section>
    <h2>Implementation</h2>
    <h3>C++</h3>
    <p><strong>Constructor</strong></p>
    <pre><code data-trim data-noescape>
      DIYDelay::DIYDelay(){
        mCalcFunc = make_calc_function&lt;DIYDelay, &amp;DIYDelay::next&gt;();
        m_maxDelay = in0(MAX_DELAY);
        m_bufSize = NEXTPOWEROFTWO(sampleRate() * m_maxDelay);
        m_mask = m_bufSize - 1;
        m_buf = (float *)RTAlloc(mWorld, m_bufSize * sizeof(float));
        if (m_buf == nullptr)
        {
            ClearUnitOutputs(this, 1);
            if (mWorld-&gt;mVerbosity &gt; -2)
            {
                Print(&quot;DIYDelay: failed to allocate memory for buffer\n&quot;);
            }
            return;
        }
        memset(m_buf, 0, m_bufSize * sizeof(float));

        next(1);

      }

</code></pre>

  </section>
  <section>
    <h3>C++</h3>
    <p><strong>next() Function</strong></p>
    <pre><code  data-trim data-noescape>
      void DIYDelay::next(int nSamples){
        // Inputs from SC
        const float *input = in(INPUT);
        float *outbuf = out(0);
        float delay = in0(DELAY_TIME);
        float fb = in0(FEEDBACK);

        auto hold = static_cast&lt;bool&gt;(in0(HOLD));
        auto reverse = static_cast&lt;bool&gt;(in0(REVERSE));
        auto tape = static_cast&lt;bool&gt;(in0(TAPE));

        // local stateless variables
        float const *buf = m_buf;
        int mask = m_mask;
        int write = m_readIndex;
        int read = (m_reverseIndex == 0) ? m_bufSize - 1 : m_reverseIndex;

        if (delay &gt; m_maxDelay)
        {
            delay = m_maxDelay;
        }

        // initialize delay time
        float delay_samples = sampleRate() * delay;
        auto offset = static_cast&lt;int&gt;(delay_samples);
        float frac = delay_samples - (float)offset;

        for (int i = 0; i &lt; nSamples; ++i)
        {

            int phase1 = reverse ? read - offset : write - offset;
            int phase2 = phase1 - 1;
            int phase3 = phase1 - 2;
            int phase0 = phase1 + 1;
            float d0 = buf[phase0 &amp; mask];
            float d1 = buf[phase1 &amp; mask];
            float d2 = buf[phase2 &amp; mask];
            float d3 = buf[phase3 &amp; mask];

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

            write = (write + 1) &amp; mask;
            read = (read - 1) &amp; mask;
        }
        m_readIndex = write;
        m_reverseIndex = read;

      }

</code></pre>

  </section>
  <section>
    <h2>Use Case Example</h2>
  </section>
</section>
