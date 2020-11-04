import React, { Component } from 'react';
import Question from '../components/question';

class QuestionContainer extends Component {
  data = {
    "tags": [
      "java",
      "c++",
      "performance",
      "optimization",
      "branch-prediction"
    ],
    "comments": [
      {
        "owner": {
          "badge_counts": {
            "bronze": 24,
            "silver": 6,
            "gold": 0
          },
          "reputation": 1286,
          "user_id": 1300177,
          "profile_image": "https://www.gravatar.com/avatar/4996dd0400f07c6dd5776f5498c04aea?s=128&d=identicon&r=PG",
          "display_name": "screwnut"
        },
        "score": 30,
        "creation_date": 1525389149,
        "comment_id": 87347917,
        "body": "For the record, your data need not be sorted, only <a href=\"https://en.cppreference.com/w/cpp/algorithm/partition\" rel=\"nofollow noreferrer\">partitioned</a> which is a much faster operation."
      },
      {
        "owner": {
          "badge_counts": {
            "bronze": 9,
            "silver": 3,
            "gold": 1
          },
          "reputation": 220,
          "user_id": 5649936,
          "profile_image": "https://www.gravatar.com/avatar/0603f8b9920243e03e06c3e15eb77a8a?s=128&d=identicon&r=PG&f=1",
          "display_name": "Šimon Hrabec"
        },
        "score": 19,
        "creation_date": 1526042708,
        "comment_id": 87601479,
        "body": "Another observation is that you don&#39;t need to sort the array, but you just need to partition it with the value 128. Sorting is n*log(n), whereas partitioning is just linear. Basically it is just one run of the quick sort partitioning step with the pivot chosen to be 128. Unfortunately in C++ there is just nth_element function, which partition by position, not by value."
      },
      {
        "owner": {
          "badge_counts": {
            "bronze": 49,
            "silver": 37,
            "gold": 2
          },
          "reputation": 6937,
          "user_id": 58668,
          "profile_image": "https://www.gravatar.com/avatar/553fdb376e001fa69adb6b8046fd6a14?s=128&d=identicon&r=PG",
          "display_name": "Jonas K&#246;lker"
        },
        "score": 1,
        "creation_date": 1601886376,
        "comment_id": 113534273,
        "body": "@screwnut here&#39;s an experiment which would show that partitioning is sufficient: create an unsorted but partitioned array with otherwise random contents. Measure time. Sort it. Measure time again. The two measurements should be basically indistinguishable. (Experiment 2: create a random array. Measure time. Partition it. Measure time again. You should see the same speed-up as sorting. You could roll the two experiments into one.)"
      }
    ],
    "answers": [
      {
        "owner": {
          "badge_counts": {
            "bronze": 416,
            "silver": 287,
            "gold": 15
          },
          "reputation": 172069,
          "user_id": 1011995,
          "profile_image": "https://i.stack.imgur.com/Jca5Q.jpg?s=128&g=1",
          "display_name": "Daniel Fischer"
        },
        "is_accepted": false,
        "score": 4194,
        "last_activity_date": 1470383590,
        "last_edit_date": 1592644375,
        "creation_date": 1340805285,
        "answer_id": 11227877,
        "question_id": 11227809,
        "content_license": "CC BY-SA 4.0",
        "body": "<p><strong>Branch prediction.</strong></p>\n<p>With a sorted array, the condition <code>data[c] &gt;= 128</code> is first <code>false</code> for a streak of values, then becomes <code>true</code> for all later values. That's easy to predict. With an unsorted array, you pay for the branching cost.</p>\n"
      },
      {
        "owner": {
          "badge_counts": {
            "bronze": 321,
            "silver": 316,
            "gold": 41
          },
          "reputation": 426956,
          "user_id": 922184,
          "profile_image": "https://i.stack.imgur.com/h7WDB.jpg?s=128&g=1",
          "display_name": "Mysticial"
        },
        "is_accepted": true,
        "score": 32420,
        "last_activity_date": 1595426376,
        "last_edit_date": 1595426376,
        "creation_date": 1340805402,
        "answer_id": 11227902,
        "question_id": 11227809,
        "content_license": "CC BY-SA 4.0",
        "body": "<p><strong>You are a victim of <a href=\"//en.wikipedia.org/wiki/Branch_predictor\" rel=\"noreferrer\">branch prediction</a> fail.</strong></p>\n<hr />\n<h2>What is Branch Prediction?</h2>\n<p>Consider a railroad junction:</p>\n<p><a href=\"//commons.wikimedia.org/wiki/File:Entroncamento_do_Transpraia.JPG\" rel=\"noreferrer\"><img src=\"https://i.stack.imgur.com/muxnt.jpg\" alt=\"Image showing a railroad junction\" /></a>\n<sub><a href=\"//commons.wikimedia.org/wiki/File:Entroncamento_do_Transpraia.JPG\" rel=\"noreferrer\">Image</a> by Mecanismo, via Wikimedia Commons. Used under the <a href=\"//creativecommons.org/licenses/by-sa/3.0/deed.en\" rel=\"noreferrer\">CC-By-SA 3.0</a> license.</sub></p>\n<p>Now for the sake of argument, suppose this is back in the 1800s - before long distance or radio communication.</p>\n<p>You are the operator of a junction and you hear a train coming. You have no idea which way it is supposed to go. You stop the train to ask the driver which direction they want. And then you set the switch appropriately.</p>\n<p><em>Trains are heavy and have a lot of inertia. So they take forever to start up and slow down.</em></p>\n<p>Is there a better way? You guess which direction the train will go!</p>\n<ul>\n<li>If you guessed right, it continues on.</li>\n<li>If you guessed wrong, the captain will stop, back up, and yell at you to flip the switch. Then it can restart down the other path.</li>\n</ul>\n<p><strong>If you guess right every time</strong>, the train will never have to stop. <br/>\n<strong>If you guess wrong too often</strong>, the train will spend a lot of time stopping, backing up, and restarting.</p>\n<hr />\n<p><strong>Consider an if-statement:</strong> At the processor level, it is a branch instruction:</p>\n<p><img src=\"https://i.stack.imgur.com/pyfwC.png\" alt=\"Screenshot of compiled code containing an if statement\" /></p>\n<p>You are a processor and you see a branch. You have no idea which way it will go. What do you do? You halt execution and wait until the previous instructions are complete. Then you continue down the correct path.</p>\n<p><em>Modern processors are complicated and have long pipelines. So they take forever to &quot;warm up&quot; and &quot;slow down&quot;.</em></p>\n<p>Is there a better way? You guess which direction the branch will go!</p>\n<ul>\n<li>If you guessed right, you continue executing.</li>\n<li>If you guessed wrong, you need to flush the pipeline and roll back to the branch. Then you can restart down the other path.</li>\n</ul>\n<p><strong>If you guess right every time</strong>, the execution will never have to stop. <br/>\n<strong>If you guess wrong too often</strong>, you spend a lot of time stalling, rolling back, and restarting.</p>\n<hr />\n<p>This is branch prediction. I admit it's not the best analogy since the train could just signal the direction with a flag. But in computers, the processor doesn't know which direction a branch will go until the last moment.</p>\n<p>So how would you strategically guess to minimize the number of times that the train must back up and go down the other path? You look at the past history! If the train goes left 99% of the time, then you guess left. If it alternates, then you alternate your guesses. If it goes one way every three times, you guess the same...</p>\n<p><em><strong>In other words, you try to identify a pattern and follow it.</strong></em> This is more or less how branch predictors work.</p>\n<p>Most applications have well-behaved branches. So modern branch predictors will typically achieve &gt;90% hit rates. But when faced with unpredictable branches with no recognizable patterns, branch predictors are virtually useless.</p>\n<p>Further reading: <a href=\"//en.wikipedia.org/wiki/Branch_predictor\" rel=\"noreferrer\">&quot;Branch predictor&quot; article on Wikipedia</a>.</p>\n<hr />\n<h2>As hinted from above, the culprit is this if-statement:</h2>\n<pre><code>if (data[c] &gt;= 128)\n    sum += data[c];\n</code></pre>\n<p>Notice that the data is evenly distributed between 0 and 255. When the data is sorted, roughly the first half of the iterations will not enter the if-statement. After that, they will all enter the if-statement.</p>\n<p>This is very friendly to the branch predictor since the branch consecutively goes the same direction many times. Even a simple saturating counter will correctly predict the branch except for the few iterations after it switches direction.</p>\n<p><strong>Quick visualization:</strong></p>\n<pre><code>T = branch taken\nN = branch not taken\n\ndata[] = 0, 1, 2, 3, 4, ... 126, 127, 128, 129, 130, ... 250, 251, 252, ...\nbranch = N  N  N  N  N  ...   N    N    T    T    T  ...   T    T    T  ...\n\n       = NNNNNNNNNNNN ... NNNNNNNTTTTTTTTT ... TTTTTTTTTT  (easy to predict)\n</code></pre>\n<p>However, when the data is completely random, the branch predictor is rendered useless, because it can't predict random data. Thus there will probably be around 50% misprediction (no better than random guessing).</p>\n<pre><code>data[] = 226, 185, 125, 158, 198, 144, 217, 79, 202, 118,  14, 150, 177, 182, 133, ...\nbranch =   T,   T,   N,   T,   T,   T,   T,  N,   T,   N,   N,   T,   T,   T,   N  ...\n\n       = TTNTTTTNTNNTTTN ...   (completely random - hard to predict)\n</code></pre>\n<hr />\n<p><strong>So what can be done?</strong></p>\n<p>If the compiler isn't able to optimize the branch into a conditional move, you can try some hacks if you are willing to sacrifice readability for performance.</p>\n<p>Replace:</p>\n<pre><code>if (data[c] &gt;= 128)\n    sum += data[c];\n</code></pre>\n<p>with:</p>\n<pre><code>int t = (data[c] - 128) &gt;&gt; 31;\nsum += ~t &amp; data[c];\n</code></pre>\n<p>This eliminates the branch and replaces it with some bitwise operations.</p>\n<p><sub>(Note that this hack is not strictly equivalent to the original if-statement. But in this case, it's valid for all the input values of <code>data[]</code>.)</sub></p>\n<p><strong>Benchmarks: Core i7 920 @ 3.5 GHz</strong></p>\n<p>C++ - Visual Studio 2010 - x64 Release</p>\n<pre><code>//  Branch - Random\nseconds = 11.777\n\n//  Branch - Sorted\nseconds = 2.352\n\n//  Branchless - Random\nseconds = 2.564\n\n//  Branchless - Sorted\nseconds = 2.587\n</code></pre>\n<p>Java - NetBeans 7.1.1 JDK 7 - x64</p>\n<pre><code>//  Branch - Random\nseconds = 10.93293813\n\n//  Branch - Sorted\nseconds = 5.643797077\n\n//  Branchless - Random\nseconds = 3.113581453\n\n//  Branchless - Sorted\nseconds = 3.186068823\n</code></pre>\n<p>Observations:</p>\n<ul>\n<li><strong>With the Branch:</strong> There is a huge difference between the sorted and unsorted data.</li>\n<li><strong>With the Hack:</strong> There is no difference between sorted and unsorted data.</li>\n<li>In the C++ case, the hack is actually a tad slower than with the branch when the data is sorted.</li>\n</ul>\n<p>A general rule of thumb is to avoid data-dependent branching in critical loops (such as in this example).</p>\n<hr />\n<p><strong>Update:</strong></p>\n<ul>\n<li><p>GCC 4.6.1 with <code>-O3</code> or <code>-ftree-vectorize</code> on x64 is able to generate a conditional move. So there is no difference between the sorted and unsorted data - both are fast.</p>\n<p>(Or somewhat fast: for the already-sorted case, <code>cmov</code> can be slower especially if GCC puts it on the critical path instead of just <code>add</code>, especially on Intel before Broadwell where <code>cmov</code> has 2 cycle latency: <a href=\"https://stackoverflow.com/questions/28875325/gcc-optimization-flag-o3-makes-code-slower-than-o2\">gcc optimization flag -O3 makes code slower than -O2</a>)</p>\n</li>\n<li><p>VC++ 2010 is unable to generate conditional moves for this branch even under <code>/Ox</code>.</p>\n</li>\n<li><p><a href=\"https://en.wikipedia.org/wiki/Intel_C%2B%2B_Compiler\" rel=\"noreferrer\">Intel C++ Compiler</a> (ICC) 11 does something miraculous. It <a href=\"https://en.wikipedia.org/wiki/Loop_interchange\" rel=\"noreferrer\">interchanges the two loops</a>, thereby hoisting the unpredictable branch to the outer loop. So not only is it immune to the mispredictions, it is also twice as fast as whatever VC++ and GCC can generate! In other words, ICC took advantage of the test-loop to defeat the benchmark...</p>\n</li>\n<li><p>If you give the Intel compiler the branchless code, it just out-right vectorizes it... and is just as fast as with the branch (with the loop interchange).</p>\n</li>\n</ul>\n<p>This goes to show that even mature modern compilers can vary wildly in their ability to optimize code...</p>\n"
      },
      {
        "owner": {
          "badge_counts": {
            "bronze": 79,
            "silver": 47,
            "gold": 7
          },
          "reputation": 40605,
          "user_id": 866732,
          "profile_image": "https://www.gravatar.com/avatar/f09f0253204000d6083ed1de21afc6fd?s=128&d=identicon&r=PG",
          "display_name": "WiSaGaN"
        },
        "is_accepted": false,
        "score": 3397,
        "last_activity_date": 1602625652,
        "last_edit_date": 1602625652,
        "creation_date": 1340849643,
        "answer_id": 11237235,
        "question_id": 11227809,
        "content_license": "CC BY-SA 4.0",
        "body": "<p>The reason why performance improves drastically when the data is sorted is that the branch prediction penalty is removed, as explained beautifully in <a href=\"https://stackoverflow.com/questions/11227809/why-is-it-faster-to-process-a-sorted-array-than-an-unsorted-array/11227902#11227902\">Mysticial's answer</a>.</p>\n<p>Now, if we look at the code</p>\n<pre><code>if (data[c] &gt;= 128)\n    sum += data[c];\n</code></pre>\n<p>we can find that the meaning of this particular <code>if... else...</code> branch is to add something when a condition is satisfied. This type of branch can be easily transformed into a <strong>conditional move</strong> statement, which would be compiled into a conditional move instruction: <code>cmovl</code>, in an <code>x86</code> system. The branch and thus the potential branch prediction penalty is removed.</p>\n<p>In <code>C</code>, thus <code>C++</code>, the statement, which would compile directly (without any optimization) into the conditional move instruction in <code>x86</code>, is the ternary operator <code>... ? ... : ...</code>. So we rewrite the above statement into an equivalent one:</p>\n<pre><code>sum += data[c] &gt;=128 ? data[c] : 0;\n</code></pre>\n<p>While maintaining readability, we can check the speedup factor.</p>\n<p>On an Intel <a href=\"http://en.wikipedia.org/wiki/Intel_Core#Core_i7\" rel=\"noreferrer\">Core i7</a>-2600K @ 3.4 GHz and Visual Studio 2010 Release Mode, the benchmark is (format copied from Mysticial):</p>\n<p><strong>x86</strong></p>\n<pre><code>//  Branch - Random\nseconds = 8.885\n\n//  Branch - Sorted\nseconds = 1.528\n\n//  Branchless - Random\nseconds = 3.716\n\n//  Branchless - Sorted\nseconds = 3.71\n</code></pre>\n<p><strong>x64</strong></p>\n<pre><code>//  Branch - Random\nseconds = 11.302\n\n//  Branch - Sorted\n seconds = 1.830\n\n//  Branchless - Random\nseconds = 2.736\n\n//  Branchless - Sorted\nseconds = 2.737\n</code></pre>\n<p>The result is robust in multiple tests. We get a great speedup when the branch result is unpredictable, but we suffer a little bit when it is predictable. In fact, when using a conditional move, the performance is the same regardless of the data pattern.</p>\n<p>Now let's look more closely by investigating the <code>x86</code> assembly they generate. For simplicity, we use two functions <code>max1</code> and <code>max2</code>.</p>\n<p><code>max1</code> uses the conditional branch <code>if... else ...</code>:</p>\n<pre><code>int max1(int a, int b) {\n    if (a &gt; b)\n        return a;\n    else\n        return b;\n}\n</code></pre>\n<p><code>max2</code> uses the ternary operator <code>... ? ... : ...</code>:</p>\n<pre><code>int max2(int a, int b) {\n    return a &gt; b ? a : b;\n}\n</code></pre>\n<p>On a x86-64 machine, <code>GCC -S</code> generates the assembly below.</p>\n<pre><code>:max1\n    movl    %edi, -4(%rbp)\n    movl    %esi, -8(%rbp)\n    movl    -4(%rbp), %eax\n    cmpl    -8(%rbp), %eax\n    jle     .L2\n    movl    -4(%rbp), %eax\n    movl    %eax, -12(%rbp)\n    jmp     .L4\n.L2:\n    movl    -8(%rbp), %eax\n    movl    %eax, -12(%rbp)\n.L4:\n    movl    -12(%rbp), %eax\n    leave\n    ret\n\n:max2\n    movl    %edi, -4(%rbp)\n    movl    %esi, -8(%rbp)\n    movl    -4(%rbp), %eax\n    cmpl    %eax, -8(%rbp)\n    cmovge  -8(%rbp), %eax\n    leave\n    ret\n</code></pre>\n<p><code>max2</code> uses much less code due to the usage of instruction <code>cmovge</code>. But the real gain is that <code>max2</code> does not involve branch jumps, <code>jmp</code>, which would have a significant performance penalty if the predicted result is not right.</p>\n<p>So why does a conditional move perform better?</p>\n<p>In a typical <code>x86</code> processor, the execution of an instruction is divided into several stages. Roughly, we have different hardware to deal with different stages. So we do not have to wait for one instruction to finish to start a new one. This is called <strong><a href=\"http://en.wikipedia.org/wiki/Pipeline_%28computing%29\" rel=\"noreferrer\">pipelining</a></strong>.</p>\n<p>In a branch case, the following instruction is determined by the preceding one, so we cannot do pipelining. We have to either wait or predict.</p>\n<p>In a conditional move case, the execution conditional move instruction is divided into several stages, but the earlier stages like <code>Fetch</code> and <code>Decode</code> do not depend on the result of the previous instruction; only latter stages need the result. Thus, we wait a fraction of one instruction's execution time. This is why the conditional move version is slower than the branch when the prediction is easy.</p>\n<p>The book <em><a href=\"https://rads.stackoverflow.com/amzn/click/com/0136108040\" rel=\"noreferrer\" rel=\"nofollow noreferrer\">Computer Systems: A Programmer's Perspective, second edition</a></em> explains this in detail. You can check Section 3.6.6 for <em>Conditional Move Instructions</em>, entire Chapter 4 for <em>Processor Architecture</em>, and Section 5.11.2 for special treatment for <em>Branch Prediction and Misprediction Penalties</em>.</p>\n<p>Sometimes, some modern compilers can optimize our code to assembly with better performance, sometimes some compilers can't (the code in question is using Visual Studio's native compiler). Knowing the performance difference between a branch and a conditional move when unpredictable can help us write code with better performance when the scenario gets so complex that the compiler can not optimize them automatically.</p>\n"
      },
      {
        "owner": {
          "badge_counts": {
            "bronze": 86,
            "silver": 50,
            "gold": 8
          },
          "reputation": 28781,
          "user_id": 863980,
          "profile_image": "https://www.gravatar.com/avatar/ea08c9063ae1de86e8d576fb569d513a?s=128&d=identicon&r=PG",
          "display_name": "vulcan raven"
        },
        "is_accepted": false,
        "score": 2344,
        "last_activity_date": 1558961493,
        "last_edit_date": 1558961493,
        "creation_date": 1341282330,
        "answer_id": 11303693,
        "question_id": 11227809,
        "content_license": "CC BY-SA 4.0",
        "body": "<p>If you are curious about even more optimizations that can be done to this code, consider this:</p>\n\n<p>Starting with the original loop:</p>\n\n<pre><code>for (unsigned i = 0; i &lt; 100000; ++i)\n{\n    for (unsigned j = 0; j &lt; arraySize; ++j)\n    {\n        if (data[j] &gt;= 128)\n            sum += data[j];\n    }\n}\n</code></pre>\n\n<p>With loop interchange, we can safely change this loop to:</p>\n\n<pre><code>for (unsigned j = 0; j &lt; arraySize; ++j)\n{\n    for (unsigned i = 0; i &lt; 100000; ++i)\n    {\n        if (data[j] &gt;= 128)\n            sum += data[j];\n    }\n}\n</code></pre>\n\n<p>Then, you can see that the <code>if</code> conditional is constant throughout the execution of the <code>i</code> loop, so you can hoist the <code>if</code> out:</p>\n\n<pre><code>for (unsigned j = 0; j &lt; arraySize; ++j)\n{\n    if (data[j] &gt;= 128)\n    {\n        for (unsigned i = 0; i &lt; 100000; ++i)\n        {\n            sum += data[j];\n        }\n    }\n}\n</code></pre>\n\n<p>Then, you see that the inner loop can be collapsed into one single expression, assuming the floating point model allows it (<code>/fp:fast</code> is thrown, for example)</p>\n\n<pre><code>for (unsigned j = 0; j &lt; arraySize; ++j)\n{\n    if (data[j] &gt;= 128)\n    {\n        sum += data[j] * 100000;\n    }\n}\n</code></pre>\n\n<p>That one is 100,000 times faster than before.</p>\n"
      },
      {
        "owner": {
          "badge_counts": {
            "bronze": 425,
            "silver": 276,
            "gold": 34
          },
          "reputation": 211223,
          "user_id": 134633,
          "profile_image": "https://www.gravatar.com/avatar/dc6be45ddcfd038ba5e1e5fca319c7fa?s=128&d=identicon&r=PG",
          "display_name": "caf"
        },
        "is_accepted": false,
        "score": 1936,
        "last_activity_date": 1350588021,
        "last_edit_date": 1350588021,
        "creation_date": 1350021213,
        "answer_id": 12853037,
        "question_id": 11227809,
        "content_license": "CC BY-SA 3.0",
        "body": "<p>No doubt some of us would be interested in ways of identifying code that is problematic for the CPU's branch-predictor. The Valgrind tool <code>cachegrind</code> has a branch-predictor simulator, enabled by using the <code>--branch-sim=yes</code> flag. Running it over the examples in this question, with the number of outer loops reduced to 10000 and compiled with <code>g++</code>, gives these results:</p>\n\n<p><strong>Sorted:</strong></p>\n\n<pre><code>==32551== Branches:        656,645,130  (  656,609,208 cond +    35,922 ind)\n==32551== Mispredicts:         169,556  (      169,095 cond +       461 ind)\n==32551== Mispred rate:            0.0% (          0.0%     +       1.2%   )\n</code></pre>\n\n<p><strong>Unsorted:</strong></p>\n\n<pre><code>==32555== Branches:        655,996,082  (  655,960,160 cond +  35,922 ind)\n==32555== Mispredicts:     164,073,152  (  164,072,692 cond +     460 ind)\n==32555== Mispred rate:           25.0% (         25.0%     +     1.2%   )\n</code></pre>\n\n<p>Drilling down into the line-by-line output produced by <code>cg_annotate</code> we see for the loop in question:</p>\n\n<p><strong>Sorted:</strong></p>\n\n<pre><code>          Bc    Bcm Bi Bim\n      10,001      4  0   0      for (unsigned i = 0; i &lt; 10000; ++i)\n           .      .  .   .      {\n           .      .  .   .          // primary loop\n 327,690,000 10,016  0   0          for (unsigned c = 0; c &lt; arraySize; ++c)\n           .      .  .   .          {\n 327,680,000 10,006  0   0              if (data[c] &gt;= 128)\n           0      0  0   0                  sum += data[c];\n           .      .  .   .          }\n           .      .  .   .      }\n</code></pre>\n\n<p><strong>Unsorted:</strong></p>\n\n<pre><code>          Bc         Bcm Bi Bim\n      10,001           4  0   0      for (unsigned i = 0; i &lt; 10000; ++i)\n           .           .  .   .      {\n           .           .  .   .          // primary loop\n 327,690,000      10,038  0   0          for (unsigned c = 0; c &lt; arraySize; ++c)\n           .           .  .   .          {\n 327,680,000 164,050,007  0   0              if (data[c] &gt;= 128)\n           0           0  0   0                  sum += data[c];\n           .           .  .   .          }\n           .           .  .   .      }\n</code></pre>\n\n<p>This lets you easily identify the problematic line - in the unsorted version the <code>if (data[c] &gt;= 128)</code> line is causing 164,050,007 mispredicted conditional branches (<code>Bcm</code>) under cachegrind's branch-predictor model, whereas it's only causing 10,006 in the sorted version.</p>\n\n<hr>\n\n<p>Alternatively, on Linux you can use the performance counters subsystem to accomplish the same task, but with native performance using CPU counters.</p>\n\n<pre><code>perf stat ./sumtest_sorted\n</code></pre>\n\n<p><strong>Sorted:</strong></p>\n\n<pre><code> Performance counter stats for './sumtest_sorted':\n\n  11808.095776 task-clock                #    0.998 CPUs utilized          \n         1,062 context-switches          #    0.090 K/sec                  \n            14 CPU-migrations            #    0.001 K/sec                  \n           337 page-faults               #    0.029 K/sec                  \n26,487,882,764 cycles                    #    2.243 GHz                    \n41,025,654,322 instructions              #    1.55  insns per cycle        \n 6,558,871,379 branches                  #  555.455 M/sec                  \n       567,204 branch-misses             #    0.01% of all branches        \n\n  11.827228330 seconds time elapsed\n</code></pre>\n\n<p><strong>Unsorted:</strong></p>\n\n<pre><code> Performance counter stats for './sumtest_unsorted':\n\n  28877.954344 task-clock                #    0.998 CPUs utilized          \n         2,584 context-switches          #    0.089 K/sec                  \n            18 CPU-migrations            #    0.001 K/sec                  \n           335 page-faults               #    0.012 K/sec                  \n65,076,127,595 cycles                    #    2.253 GHz                    \n41,032,528,741 instructions              #    0.63  insns per cycle        \n 6,560,579,013 branches                  #  227.183 M/sec                  \n 1,646,394,749 branch-misses             #   25.10% of all branches        \n\n  28.935500947 seconds time elapsed\n</code></pre>\n\n<p>It can also do source code annotation with dissassembly.</p>\n\n<pre><code>perf record -e branch-misses ./sumtest_unsorted\nperf annotate -d sumtest_unsorted\n</code></pre>\n\n\n\n<pre><code> Percent |      Source code &amp; Disassembly of sumtest_unsorted\n------------------------------------------------\n...\n         :                      sum += data[c];\n    0.00 :        400a1a:       mov    -0x14(%rbp),%eax\n   39.97 :        400a1d:       mov    %eax,%eax\n    5.31 :        400a1f:       mov    -0x20040(%rbp,%rax,4),%eax\n    4.60 :        400a26:       cltq   \n    0.00 :        400a28:       add    %rax,-0x30(%rbp)\n...\n</code></pre>\n\n<p>See <a href=\"https://perf.wiki.kernel.org/index.php/Tutorial\" rel=\"noreferrer\">the performance tutorial</a> for more details.</p>\n"
      },
      {
        "owner": {
          "badge_counts": {
            "bronze": 57,
            "silver": 38,
            "gold": 10
          },
          "reputation": 4290,
          "user_id": 1020149,
          "profile_image": "https://www.gravatar.com/avatar/911f564e95671ac04ec1841524d76171?s=128&d=identicon&r=PG",
          "display_name": "Shan"
        },
        "is_accepted": false,
        "score": 138,
        "last_activity_date": 1521204334,
        "last_edit_date": 1521204334,
        "creation_date": 1356884206,
        "answer_id": 14092288,
        "question_id": 11227809,
        "content_license": "CC BY-SA 3.0",
        "body": "<p>I tried the same code with MATLAB 2011b with my MacBook Pro (Intel i7, 64 bit, 2.4 GHz) for the following MATLAB code:</p>\n\n<pre><code>% Processing time with Sorted data vs unsorted data\n%==========================================================================\n% Generate data\narraySize = 32768\nsum = 0;\n% Generate random integer data from range 0 to 255\ndata = randi(256, arraySize, 1);\n\n\n%Sort the data\ndata1= sort(data); % data1= data  when no sorting done\n\n\n%Start a stopwatch timer to measure the execution time\ntic;\n\nfor i=1:100000\n\n    for j=1:arraySize\n\n        if data1(j)&gt;=128\n            sum=sum + data1(j);\n        end\n    end\nend\n\ntoc;\n\nExeTimeWithSorting = toc - tic;\n</code></pre>\n\n<p>The results for the above MATLAB code are as follows:</p>\n\n<pre><code>  a: Elapsed time (without sorting) = 3479.880861 seconds.\n  b: Elapsed time (with sorting ) = 2377.873098 seconds.\n</code></pre>\n\n<p>The results of the C code as in @GManNickG I get:</p>\n\n<pre><code>  a: Elapsed time (without sorting) = 19.8761 sec.\n  b: Elapsed time (with sorting ) = 7.37778 sec.\n</code></pre>\n\n<p>Based on this, it looks MATLAB is almost <em>175 times</em> slower than the C implementation without sorting and <em>350 times</em> slower with sorting. In other words, the effect (of branch prediction) is <em>1.46x</em> for MATLAB implementation and <em>2.7x</em> for the C implementation.</p>\n"
      },
      {
        "owner": {
          "badge_counts": {
            "bronze": 33,
            "silver": 25,
            "gold": 4
          },
          "reputation": 15500,
          "user_id": 1012551,
          "profile_image": "https://www.gravatar.com/avatar/22df608584e3ef466f34afef94f134df?s=128&d=identicon&r=PG",
          "display_name": "Saqlain"
        },
        "is_accepted": false,
        "score": 1240,
        "last_activity_date": 1551265112,
        "last_edit_date": 1551265112,
        "creation_date": 1360913056,
        "answer_id": 14889969,
        "question_id": 11227809,
        "content_license": "CC BY-SA 4.0",
        "body": "<p>As data is distributed between 0 and 255 when the array is sorted, around the first half of the iterations will not enter the <code>if</code>-statement (the <code>if</code> statement is shared below).</p>\n\n<pre><code>if (data[c] &gt;= 128)\n    sum += data[c];\n</code></pre>\n\n<p>The question is: What makes the above statement not execute in certain cases as in case of sorted data? Here comes the \"branch predictor\". A branch predictor is a digital circuit that tries to guess which way a branch (e.g. an <code>if-then-else</code> structure) will go before this is known for sure. The purpose of the branch predictor is to improve the flow in the instruction pipeline. Branch predictors play a critical role in achieving high effective performance!</p>\n\n<p><strong>Let's do some bench marking to understand it better</strong></p>\n\n<p>The performance of an <code>if</code>-statement depends on whether its condition has a predictable pattern. If the condition is always true or always false, the branch prediction logic in the processor will pick up the pattern. On the other hand, if the pattern is unpredictable, the <code>if</code>-statement will be much more expensive.</p>\n\n<p>Let’s measure the performance of this loop with different conditions:</p>\n\n<pre><code>for (int i = 0; i &lt; max; i++)\n    if (condition)\n        sum++;\n</code></pre>\n\n<p>Here are the timings of the loop with different true-false patterns:</p>\n\n<pre><code>Condition                Pattern             Time (ms)\n-------------------------------------------------------\n(i &amp; 0×80000000) == 0    T repeated          322\n\n(i &amp; 0xffffffff) == 0    F repeated          276\n\n(i &amp; 1) == 0             TF alternating      760\n\n(i &amp; 3) == 0             TFFFTFFF…           513\n\n(i &amp; 2) == 0             TTFFTTFF…           1675\n\n(i &amp; 4) == 0             TTTTFFFFTTTTFFFF…   1275\n\n(i &amp; 8) == 0             8T 8F 8T 8F …       752\n\n(i &amp; 16) == 0            16T 16F 16T 16F …   490\n</code></pre>\n\n<p>A “<strong>bad</strong>” true-false pattern can make an <code>if</code>-statement up to six times slower than a “<strong>good</strong>” pattern! Of course, which pattern is good and which is bad depends on the exact instructions generated by the compiler and on the specific processor.</p>\n\n<p>So there is no doubt about the impact of branch prediction on performance!</p>\n"
      },
      {
        "owner": {
          "badge_counts": {
            "bronze": 71,
            "silver": 50,
            "gold": 3
          },
          "reputation": 26784,
          "user_id": 1031591,
          "profile_image": "https://i.stack.imgur.com/s3MiH.jpg?s=128&g=1",
          "display_name": "atlaste"
        },
        "is_accepted": false,
        "score": 1386,
        "last_activity_date": 1547614041,
        "last_edit_date": 1547614041,
        "creation_date": 1366784788,
        "answer_id": 16184827,
        "question_id": 11227809,
        "content_license": "CC BY-SA 4.0",
        "body": "<p>I just read up on this question and its answers, and I feel an answer is missing.</p>\n\n<p>A common way to eliminate branch prediction that I've found to work particularly good in managed languages is a table lookup instead of using a branch (although I haven't tested it in this case).</p>\n\n<p>This approach works in general if:</p>\n\n<ol>\n<li>it's a small table and is likely to be cached in the processor, and</li>\n<li>you are running things in a quite tight loop and/or the processor can preload the data.</li>\n</ol>\n\n<p><strong>Background and why</strong></p>\n\n<p>From a processor perspective, your memory is slow. To compensate for the difference in speed, a couple of caches are built into your processor (L1/L2 cache). So imagine that you're doing your nice calculations and figure out that you need a piece of memory. The processor will get its 'load' operation and loads the piece of memory into cache -- and then uses the cache to do the rest of the calculations. Because memory is relatively slow, this 'load' will slow down your program.</p>\n\n<p>Like branch prediction, this was optimized in the Pentium processors: the processor predicts that it needs to load a piece of data and attempts to load that into the cache before the operation actually hits the cache. As we've already seen, branch prediction sometimes goes horribly wrong -- in the worst case scenario you need to go back and actually wait for a memory load, which will take forever (<strong>in other words: failing branch prediction is bad, a memory load after a branch prediction fail is just horrible!</strong>).</p>\n\n<p>Fortunately for us, if the memory access pattern is predictable, the processor will load it in its fast cache and all is well.</p>\n\n<p>The first thing we need to know is what is <em>small</em>? While smaller is generally better, a rule of thumb is to stick to lookup tables that are &lt;= 4096 bytes in size. As an upper limit: if your lookup table is larger than 64K it's probably worth reconsidering.</p>\n\n<p><strong>Constructing a table</strong></p>\n\n<p>So we've figured out that we can create a small table. Next thing to do is get a lookup function in place. Lookup functions are usually small functions that use a couple of basic integer operations (and, or, xor, shift, add, remove and perhaps multiply). You want to have your input translated by the lookup function to some kind of 'unique key' in your table, which then simply gives you the answer of all the work you wanted it to do.</p>\n\n<p>In this case: >= 128 means we can keep the value, &lt; 128 means we get rid of it. The easiest way to do that is by using an 'AND': if we keep it, we AND it with 7FFFFFFF; if we want to get rid of it, we AND it with 0. Notice also that 128 is a power of 2 -- so we can go ahead and make a table of 32768/128 integers and fill it with one zero and a lot of 7FFFFFFFF's.</p>\n\n<p><strong>Managed languages</strong></p>\n\n<p>You might wonder why this works well in managed languages. After all, managed languages check the boundaries of the arrays with a branch to ensure you don't mess up...</p>\n\n<p>Well, not exactly... :-)</p>\n\n<p>There has been quite some work on eliminating this branch for managed languages. For example:</p>\n\n\n\n<pre class=\"lang-cs prettyprint-override\"><code>for (int i = 0; i &lt; array.Length; ++i)\n{\n   // Use array[i]\n}\n</code></pre>\n\n<p>In this case, it's obvious to the compiler that the boundary condition will never be hit. At least the Microsoft JIT compiler (but I expect Java does similar things) will notice this and remove the check altogether. WOW, that means no branch. Similarly, it will deal with other obvious cases.</p>\n\n<p>If you run into trouble with lookups in managed languages -- the key is to add a <code>&amp; 0x[something]FFF</code> to your lookup function to make the boundary check predictable -- and watch it going faster.</p>\n\n<p><strong>The result of this case</strong></p>\n\n<pre class=\"lang-cs prettyprint-override\"><code>// Generate data\nint arraySize = 32768;\nint[] data = new int[arraySize];\n\nRandom random = new Random(0);\nfor (int c = 0; c &lt; arraySize; ++c)\n{\n    data[c] = random.Next(256);\n}\n\n/*To keep the spirit of the code intact, I'll make a separate lookup table\n(I assume we cannot modify 'data' or the number of loops)*/\n\nint[] lookup = new int[256];\n\nfor (int c = 0; c &lt; 256; ++c)\n{\n    lookup[c] = (c &gt;= 128) ? c : 0;\n}\n\n// Test\nDateTime startTime = System.DateTime.Now;\nlong sum = 0;\n\nfor (int i = 0; i &lt; 100000; ++i)\n{\n    // Primary loop\n    for (int j = 0; j &lt; arraySize; ++j)\n    {\n        /* Here you basically want to use simple operations - so no\n        random branches, but things like &amp;, |, *, -, +, etc. are fine. */\n        sum += lookup[data[j]];\n    }\n}\n\nDateTime endTime = System.DateTime.Now;\nConsole.WriteLine(endTime - startTime);\nConsole.WriteLine(\"sum = \" + sum);\nConsole.ReadLine();\n</code></pre>\n"
      },
      {
        "owner": {
          "badge_counts": {
            "bronze": 111,
            "silver": 82,
            "gold": 16
          },
          "reputation": 64948,
          "user_id": 166949,
          "profile_image": "https://i.stack.imgur.com/tIFie.png?s=128&g=1",
          "display_name": "steveha"
        },
        "is_accepted": false,
        "score": 1166,
        "last_activity_date": 1558962512,
        "last_edit_date": 1558962512,
        "creation_date": 1374481770,
        "answer_id": 17782979,
        "question_id": 11227809,
        "content_license": "CC BY-SA 4.0",
        "body": "<p>One way to avoid branch prediction errors is to build a lookup table, and index it using the data.  Stefan de Bruijn discussed that in his answer.</p>\n\n<p>But in this case, we know values are in the range [0, 255] and we only care about values >= 128.  That means we can easily extract a single bit that will tell us whether we want a value or not: by shifting the data to the right 7 bits, we are left with a 0 bit or a 1 bit, and we only want to add the value when we have a 1 bit.  Let's call this bit the \"decision bit\".</p>\n\n<p>By using the 0/1 value of the decision bit as an index into an array, we can make code that will be equally fast whether the data is sorted or not sorted.  Our code will always add a value, but when the decision bit is 0, we will add the value somewhere we don't care about.  Here's the code:</p>\n\n<pre><code>// Test\nclock_t start = clock();\nlong long a[] = {0, 0};\nlong long sum;\n\nfor (unsigned i = 0; i &lt; 100000; ++i)\n{\n    // Primary loop\n    for (unsigned c = 0; c &lt; arraySize; ++c)\n    {\n        int j = (data[c] &gt;&gt; 7);\n        a[j] += data[c];\n    }\n}\n\ndouble elapsedTime = static_cast&lt;double&gt;(clock() - start) / CLOCKS_PER_SEC;\nsum = a[1];\n</code></pre>\n\n<p>This code wastes half of the adds but never has a branch prediction failure.  It's tremendously faster on random data than the version with an actual if statement.</p>\n\n<p>But in my testing, an explicit lookup table was slightly faster than this, probably because indexing into a lookup table was slightly faster than bit shifting.  This shows how my code sets up and uses the lookup table (unimaginatively called <code>lut</code> for \"LookUp Table\" in the code).  Here's the C++ code:</p>\n\n<pre><code>// Declare and then fill in the lookup table\nint lut[256];\nfor (unsigned c = 0; c &lt; 256; ++c)\n    lut[c] = (c &gt;= 128) ? c : 0;\n\n// Use the lookup table after it is built\nfor (unsigned i = 0; i &lt; 100000; ++i)\n{\n    // Primary loop\n    for (unsigned c = 0; c &lt; arraySize; ++c)\n    {\n        sum += lut[data[c]];\n    }\n}\n</code></pre>\n\n<p>In this case, the lookup table was only 256 bytes, so it fits nicely in a cache and all was fast.  This technique wouldn't work well if the data was 24-bit values and we only wanted half of them... the lookup table would be far too big to be practical.  On the other hand, we can combine the two techniques shown above: first shift the bits over, then index a lookup table.  For a 24-bit value that we only want the top half value, we could potentially shift the data right by 12 bits, and be left with a 12-bit value for a table index.  A 12-bit table index implies a table of 4096 values, which might be practical.</p>\n\n<p>The technique of indexing into an array, instead of using an <code>if</code> statement, can be used for deciding which pointer to use.  I saw a library that implemented binary trees, and instead of having two named pointers (<code>pLeft</code> and <code>pRight</code> or whatever) had a length-2 array of pointers and used the \"decision bit\" technique to decide which one to follow.  For example, instead of:</p>\n\n<pre><code>if (x &lt; node-&gt;value)\n    node = node-&gt;pLeft;\nelse\n    node = node-&gt;pRight;\n</code></pre>\n\n<p>this library would do something like:</p>\n\n<pre><code>i = (x &lt; node-&gt;value);\nnode = node-&gt;link[i];\n</code></pre>\n\n<p>Here's a link to this code: <a href=\"http://www.eternallyconfuzzled.com/tuts/datastructures/jsw_tut_rbtree.aspx\" rel=\"noreferrer\">Red Black Trees</a>, <em>Eternally Confuzzled</em></p>\n"
      },
      {
        "owner": {
          "badge_counts": {
            "bronze": 79,
            "silver": 38,
            "gold": 8
          },
          "reputation": 46719,
          "user_id": 1196549,
          "profile_image": "https://www.gravatar.com/avatar/fa597bf0dc47449a25e1f7f5b57e3ef1?s=128&d=identicon&r=PG",
          "display_name": "Yves Daoust"
        },
        "is_accepted": false,
        "score": 1057,
        "last_activity_date": 1557574272,
        "last_edit_date": 1557574272,
        "creation_date": 1374652659,
        "answer_id": 17828251,
        "question_id": 11227809,
        "content_license": "CC BY-SA 4.0",
        "body": "<p>In the sorted case, you can do better than relying on successful branch prediction or any branchless comparison trick: completely remove the branch.</p>\n\n<p>Indeed, the array is partitioned in a contiguous zone with <code>data &lt; 128</code> and another with <code>data &gt;= 128</code>. So you should find the partition point with a <a href=\"https://en.wikipedia.org/wiki/Dichotomic_search\" rel=\"noreferrer\">dichotomic search</a> (using <code>Lg(arraySize) = 15</code> comparisons), then do a straight accumulation from that point.</p>\n\n<p>Something like (unchecked)</p>\n\n<pre><code>int i= 0, j, k= arraySize;\nwhile (i &lt; k)\n{\n  j= (i + k) &gt;&gt; 1;\n  if (data[j] &gt;= 128)\n    k= j;\n  else\n    i= j;\n}\nsum= 0;\nfor (; i &lt; arraySize; i++)\n  sum+= data[i];\n</code></pre>\n\n<p>or, slightly more obfuscated</p>\n\n<pre><code>int i, k, j= (i + k) &gt;&gt; 1;\nfor (i= 0, k= arraySize; i &lt; k; (data[j] &gt;= 128 ? k : i)= j)\n  j= (i + k) &gt;&gt; 1;\nfor (sum= 0; i &lt; arraySize; i++)\n  sum+= data[i];\n</code></pre>\n\n<p>A yet faster approach, that gives an <strong>approximate</strong> solution for both sorted or unsorted is: <code>sum= 3137536;</code> (assuming a truly uniform distribution, 16384 samples with expected value 191.5) <strong>:-)</strong></p>\n"
      },
      {
        "owner": {
          "badge_counts": {
            "bronze": 22,
            "silver": 13,
            "gold": 2
          },
          "reputation": 9332,
          "user_id": 1627741,
          "profile_image": "https://i.stack.imgur.com/YXvvz.jpg?s=128&g=1",
          "display_name": "Harsh Sharma"
        },
        "is_accepted": false,
        "score": 864,
        "last_activity_date": 1523391206,
        "last_edit_date": 1523391206,
        "creation_date": 1435937752,
        "answer_id": 31210295,
        "question_id": 11227809,
        "content_license": "CC BY-SA 3.0",
        "body": "<p>The above behavior is happening because of Branch prediction.</p>\n\n<p>To understand branch prediction one must first understand <strong>Instruction Pipeline</strong>:</p>\n\n<p>Any instruction is broken into a sequence of steps so that different steps can be executed concurrently in parallel. This technique is known as instruction pipeline and this is used to increase throughput in modern processors. To understand this better please see this <a href=\"https://en.wikipedia.org/wiki/Pipeline_(computing)#Concept_and_motivation\" rel=\"noreferrer\">example on Wikipedia</a>.</p>\n\n<p>Generally, modern processors have quite long pipelines, but for ease let's consider these 4 steps only.</p>\n\n<ol>  \n  <li>IF -- Fetch the instruction from memory \n  <li>ID -- Decode the instruction\n  <li>EX -- Execute the instruction \n  <li>WB -- Write back to CPU register\n</ol>\n\n<p><strong><em>4-stage pipeline in general for 2 instructions.</em></strong>\n<img src=\"https://i.stack.imgur.com/PqBBR.png\" alt=\"4-stage pipeline in general\"></p>\n\n<p>Moving back to the above question let's consider the following instructions:</p>\n\n<pre><code>                        A) if (data[c] &gt;= 128)\n                                /\\\n                               /  \\\n                              /    \\\n                        true /      \\ false\n                            /        \\\n                           /          \\\n                          /            \\\n                         /              \\\n              B) sum += data[c];          C) for loop or print().\n</code></pre>\n\n<p>Without branch prediction, the following would occur:</p>\n\n<p>To execute instruction B or instruction C the processor will have to wait till the instruction A doesn't reach till EX stage in the pipeline, as the decision to go to instruction B or instruction C depends on the result of instruction A. So the pipeline will look like this.</p>\n\n<p><strong><em>when if condition returns true:</em></strong>\n<img src=\"https://i.stack.imgur.com/0H4gP.png\" alt=\"enter image description here\"></p>\n\n<p><strong><em>When if condition returns false:</em></strong>\n<img src=\"https://i.stack.imgur.com/APpca.png\" alt=\"enter image description here\"></p>\n\n<p>As a result of waiting for the result of instruction A, the total CPU cycles spent in the above case (without branch prediction; for both true and false) is 7.</p>\n\n<p><strong>So what is branch prediction?</strong></p>\n\n<p>Branch predictor will try to guess which way a branch (an if-then-else structure) will go before this is known for sure. It will not wait for the instruction A to reach the EX stage of the pipeline, but it will guess the decision and go to that instruction (B or C in case of our example).</p>\n\n<p><strong><em>In case of a correct guess, the pipeline looks something like this:</em></strong>\n<img src=\"https://i.stack.imgur.com/ZYUbs.png\" alt=\"enter image description here\"></p>\n\n<p>If it is later detected that the guess was wrong then the partially executed instructions are discarded and the pipeline starts over with the correct branch, incurring a delay. \nThe time that is wasted in case of a branch misprediction is equal to the number of stages in the pipeline from the fetch stage to the execute stage. Modern microprocessors tend to have quite long pipelines so that the misprediction delay is between 10 and 20 clock cycles. The longer the pipeline the greater the need for a good <a href=\"https://en.wikipedia.org/wiki/Branch_predictor\" rel=\"noreferrer\">branch predictor</a>.</p>\n\n<p>In the OP's code, the first time when the conditional, the branch predictor does not have any information to base up prediction, so the first time it will randomly choose the next instruction. Later in the for loop, it can base the prediction on the history. \nFor an array sorted in ascending order, there are three possibilities:</p>\n\n<ol>\n<li> All the elements are less than 128\n<li> All the elements are greater than 128\n<li> Some starting new elements are less than 128 and later it become greater than 128\n</ol>\n\n<p>Let us assume that the predictor will always assume the true branch on the first run.</p>\n\n<p>So in the first case, it will always take the true branch since historically all its predictions are correct.\nIn the 2nd case, initially it will predict wrong, but after a few iterations, it will predict correctly.\nIn the 3rd case, it will initially predict correctly till the elements are less than 128. After which it will fail for some time and the correct itself when it sees branch prediction failure in history. </p>\n\n<p>In all these cases the failure will be too less in number and as a result, only a few times it will need to discard the partially executed instructions and start over with the correct branch, resulting in fewer CPU cycles. </p>\n\n<p>But in case of a random unsorted array, the prediction will need to discard the partially executed instructions and start over with the correct branch most of the time and result in more CPU cycles compared to the sorted array.</p>\n"
      },
      {
        "owner": {
          "badge_counts": {
            "bronze": 52,
            "silver": 30,
            "gold": 5
          },
          "reputation": 12973,
          "user_id": 1313233,
          "profile_image": "https://i.stack.imgur.com/hBeXC.png?s=128&g=1",
          "display_name": "rkachach"
        },
        "is_accepted": false,
        "score": 728,
        "last_activity_date": 1477650491,
        "last_edit_date": 1477650491,
        "creation_date": 1443020267,
        "answer_id": 32742980,
        "question_id": 11227809,
        "content_license": "CC BY-SA 3.0",
        "body": "<p>In the same line (I think this was not highlighted by any answer) it's good to mention that sometimes (specially in software where the performance matters—like in the Linux kernel) you can find some if statements like the following:</p>\n\n<pre><code>if (likely( everything_is_ok ))\n{\n    /* Do something */\n}\n</code></pre>\n\n<p>or similarly:</p>\n\n<pre><code>if (unlikely(very_improbable_condition))\n{\n    /* Do something */    \n}\n</code></pre>\n\n<p>Both <code>likely()</code> and <code>unlikely()</code> are in fact macros that are defined by using something like the GCC's <code>__builtin_expect</code> to help the compiler insert prediction code to favour the condition taking into account the information provided by the user. GCC supports other builtins that could change the behavior of the running program or emit low level instructions like clearing the cache, etc. See <a href=\"https://gcc.gnu.org/onlinedocs/gcc/Other-Builtins.html\" rel=\"noreferrer\">this documentation</a> that goes through the available GCC's builtins.</p>\n\n<p>Normally this kind of optimizations are mainly found in hard-real time applications or embedded systems where execution time matters and it's critical. For example, if you are checking for some error condition that only happens 1/10000000 times, then why not inform the compiler about this? This way, by default, the branch prediction would assume that the condition is false.</p>\n"
      },
      {
        "owner": {
          "badge_counts": {
            "bronze": 16,
            "silver": 12,
            "gold": 2
          },
          "reputation": 8125,
          "user_id": 4895229,
          "profile_image": "https://www.gravatar.com/avatar/cc00fb71bd8f252a7ec9fc4216f58c0b?s=128&d=identicon&r=PG&f=1",
          "display_name": "Maciej"
        },
        "is_accepted": false,
        "score": 713,
        "last_activity_date": 1559234066,
        "last_edit_date": 1559234066,
        "creation_date": 1444437042,
        "answer_id": 33048998,
        "question_id": 11227809,
        "content_license": "CC BY-SA 4.0",
        "body": "<p>Frequently used Boolean operations in C++ produce many branches in the compiled program. If these branches are inside loops and are hard to predict they can slow down execution significantly. Boolean variables are stored as 8-bit integers with the value <code>0</code> for <code>false</code> and <code>1</code> for <code>true</code>.</p>\n\n<p>Boolean variables are overdetermined in the sense that all operators that have Boolean variables as input check if the inputs have any other value than <code>0</code> or <code>1</code>, but operators that have Booleans as output can produce no other value than <code>0</code> or <code>1</code>. This makes operations with Boolean variables as input less efficient than necessary.\nConsider example:</p>\n\n<pre><code>bool a, b, c, d;\nc = a &amp;&amp; b;\nd = a || b;\n</code></pre>\n\n<p>This is typically implemented by the compiler in the following way:</p>\n\n<pre><code>bool a, b, c, d;\nif (a != 0) {\n    if (b != 0) {\n        c = 1;\n    }\n    else {\n        goto CFALSE;\n    }\n}\nelse {\n    CFALSE:\n    c = 0;\n}\nif (a == 0) {\n    if (b == 0) {\n        d = 0;\n    }\n    else {\n        goto DTRUE;\n    }\n}\nelse {\n    DTRUE:\n    d = 1;\n}\n</code></pre>\n\n<p>This code is far from optimal. The branches may take a long time in case of mispredictions. The Boolean operations can be made much more efficient if it is known with certainty that the operands have no other values than <code>0</code> and <code>1</code>. The reason why the compiler does not make such an assumption is that the variables might have other values if they are uninitialized or come from unknown sources. The above code can be optimized if <code>a</code> and <code>b</code> has been initialized to valid values or if they come from operators that produce Boolean output. The optimized code looks like this:</p>\n\n<pre><code>char a = 0, b = 1, c, d;\nc = a &amp; b;\nd = a | b;\n</code></pre>\n\n<p><code>char</code> is used instead of <code>bool</code> in order to make it possible to use the bitwise operators (<code>&amp;</code> and <code>|</code>) instead of the Boolean operators (<code>&amp;&amp;</code> and <code>||</code>). The bitwise operators are single instructions that take only one clock cycle. The OR operator (<code>|</code>) works even if <code>a</code> and <code>b</code> have other values than <code>0</code> or <code>1</code>. The AND operator (<code>&amp;</code>) and the EXCLUSIVE OR operator (<code>^</code>) may give inconsistent results if the operands have other values than <code>0</code> and <code>1</code>.</p>\n\n<p><code>~</code> can not be used for NOT. Instead, you can make a Boolean NOT on a variable which is known to be <code>0</code> or <code>1</code> by XOR'ing it with <code>1</code>:</p>\n\n<pre><code>bool a, b;\nb = !a;\n</code></pre>\n\n<p>can be optimized to:</p>\n\n<pre><code>char a = 0, b;\nb = a ^ 1;\n</code></pre>\n\n<p><code>a &amp;&amp; b</code> cannot be replaced with <code>a &amp; b</code> if <code>b</code> is an expression that should not be evaluated if <code>a</code> is <code>false</code> ( <code>&amp;&amp;</code> will not evaluate <code>b</code>, <code>&amp;</code> will). Likewise, <code>a || b</code> can not be replaced with <code>a | b</code> if <code>b</code> is an expression that should not be evaluated if <code>a</code> is <code>true</code>.</p>\n\n<p>Using bitwise operators is more advantageous if the operands are variables than if the operands are comparisons:</p>\n\n<pre><code>bool a; double x, y, z;\na = x &gt; y &amp;&amp; z &lt; 5.0;\n</code></pre>\n\n<p>is optimal in most cases (unless you expect the <code>&amp;&amp;</code> expression to generate many branch mispredictions).</p>\n"
      },
      {
        "owner": {
          "badge_counts": {
            "bronze": 33,
            "silver": 20,
            "gold": 3
          },
          "reputation": 12388,
          "user_id": 4013258,
          "profile_image": "https://www.gravatar.com/avatar/1d423395e1033fa23d80a5561ab170fa?s=128&d=identicon&r=PG&f=1",
          "display_name": "Surt"
        },
        "is_accepted": false,
        "score": 759,
        "last_activity_date": 1485862773,
        "last_edit_date": 1485862773,
        "creation_date": 1444597518,
        "answer_id": 33070112,
        "question_id": 11227809,
        "content_license": "CC BY-SA 3.0",
        "body": "<p>An official answer would be from</p>\n\n<ol>\n<li><a href=\"https://software.intel.com/en-us/articles/avoiding-the-cost-of-branch-misprediction\" rel=\"noreferrer\">Intel - Avoiding the Cost of Branch Misprediction</a></li>\n<li><a href=\"https://software.intel.com/en-us/articles/branch-and-loop-reorganization-to-prevent-mispredicts\" rel=\"noreferrer\">Intel - Branch and Loop Reorganization to Prevent Mispredicts</a></li>\n<li><a href=\"https://scholar.google.com/scholar?q=branch%20prediction%20computer%20architecture&amp;hl=da&amp;as_sdt=0&amp;as_vis=1&amp;oi=scholart\" rel=\"noreferrer\">Scientific papers - branch prediction computer architecture</a></li>\n<li>Books: J.L. Hennessy, D.A. Patterson: Computer architecture: a quantitative approach</li>\n<li>Articles in scientific publications: T.Y. Yeh, Y.N. Patt made a lot of these on branch predictions.</li>\n</ol>\n\n<p>You can also see from this lovely <a href=\"https://en.wikipedia.org/wiki/Branch_predictor#/media/File:Branch_prediction_2bit_saturating_counter-dia.svg\" rel=\"noreferrer\">diagram</a> why the branch predictor gets confused.</p>\n\n<p><a href=\"https://i.stack.imgur.com/pBMV2.png\" rel=\"noreferrer\"><img src=\"https://i.stack.imgur.com/pBMV2.png\" alt=\"2-bit state diagram\"></a></p>\n\n<p>Each element in the original code is a random value</p>\n\n<pre><code>data[c] = std::rand() % 256;\n</code></pre>\n\n<p>so the predictor will change sides as the <code>std::rand()</code> blow.</p>\n\n<p>On the other hand, once it's sorted, the predictor will first move into a state of strongly not taken and when the values change to the high value the predictor will in three runs through change all the way from strongly not taken to strongly taken.</p>\n\n<hr>\n"
      },
      {
        "owner": {
          "badge_counts": {
            "bronze": 32,
            "silver": 21,
            "gold": 3
          },
          "reputation": 4908,
          "user_id": 601567,
          "profile_image": "https://www.gravatar.com/avatar/354e6825881d0dbb29130bdd4c0e560e?s=128&d=identicon&r=PG",
          "display_name": "ForeverLearning"
        },
        "is_accepted": false,
        "score": 329,
        "last_activity_date": 1484676151,
        "last_edit_date": 1484676151,
        "creation_date": 1484185828,
        "answer_id": 41603849,
        "question_id": 11227809,
        "content_license": "CC BY-SA 3.0",
        "body": "<p>This question has already been answered excellently many times over. Still I'd like to draw the group's attention to yet another interesting analysis.</p>\n\n<p>Recently this example (modified very slightly) was also used as a way to demonstrate how a piece of code can be profiled within the program itself on Windows. Along the way, the author also shows how to use the results to determine where the code is spending most of its time in both the sorted &amp; unsorted case. Finally the piece also shows how to use a little known feature of the HAL (Hardware Abstraction Layer) to determine just how much branch misprediction is happening in the unsorted case.</p>\n\n<p>The link is here:\n<a href=\"http://www.geoffchappell.com/studies/windows/km/ntoskrnl/api/ex/profile/demo.htm\">http://www.geoffchappell.com/studies/windows/km/ntoskrnl/api/ex/profile/demo.htm</a></p>\n"
      },
      {
        "owner": {
          "badge_counts": {
            "bronze": 150,
            "silver": 231,
            "gold": 19
          },
          "reputation": 78096,
          "user_id": 5423108,
          "profile_image": "https://i.stack.imgur.com/WtfBG.png?s=128&g=1",
          "display_name": "Alireza"
        },
        "is_accepted": false,
        "score": 372,
        "last_activity_date": 1525329351,
        "last_edit_date": 1592644375,
        "creation_date": 1497786043,
        "answer_id": 44614591,
        "question_id": 11227809,
        "content_license": "CC BY-SA 4.0",
        "body": "<p>That's for sure!...</p>\n<p><strong>Branch prediction</strong> makes the logic run slower, because of the switching which happens in your code! It's like you are going a straight street or a street with a lot of turnings, for sure the straight one is going to be done quicker!...</p>\n<p>If the array is sorted, your condition is false at the first step: <code>data[c] &gt;= 128</code>, then becomes a true value for the whole way to the end of the street. That's how you get to the end of the logic faster. On the other hand, using an unsorted array, you need a lot of turning and processing which make your code run slower for sure...</p>\n<p>Look at the image I created for you below. Which street is going to be finished faster?</p>\n<p><a href=\"https://i.stack.imgur.com/cSmCa.jpg\" rel=\"noreferrer\"><img src=\"https://i.stack.imgur.com/cSmCa.jpg\" alt=\"Branch Prediction\" /></a></p>\n<p>So programmatically, <strong>branch prediction</strong> causes the process to be slower...</p>\n<p>Also at the end, it's good to know we have two kinds of branch predictions that each is going to affect your code differently:</p>\n<p><strong>1. Static</strong></p>\n<p><strong>2. Dynamic</strong></p>\n<p><a href=\"https://i.stack.imgur.com/ZfhDu.jpg\" rel=\"noreferrer\"><img src=\"https://i.stack.imgur.com/ZfhDu.jpg\" alt=\"Branch Prediction\" /></a></p>\n<blockquote>\n<p>Static branch prediction is used by the microprocessor the first time\na conditional branch is encountered, and dynamic branch prediction is\nused for succeeding executions of the conditional branch code.</p>\n<p>In order to effectively write your code to take advantage of these\nrules, when writing <strong>if-else</strong> or <strong>switch</strong> statements, check the most\ncommon cases first and work progressively down to the least common.\nLoops do not necessarily require any special ordering of code for\nstatic branch prediction, as only the condition of the loop iterator\nis normally used.</p>\n</blockquote>\n"
      },
      {
        "owner": {
          "badge_counts": {
            "bronze": 66,
            "silver": 34,
            "gold": 6
          },
          "reputation": 10548,
          "user_id": 6530695,
          "profile_image": "https://i.stack.imgur.com/3Dm4H.jpg?s=128&g=1",
          "display_name": "Tony Tannous"
        },
        "is_accepted": false,
        "score": 233,
        "last_activity_date": 1521203445,
        "last_edit_date": 1592644375,
        "creation_date": 1501841232,
        "answer_id": 45503985,
        "question_id": 11227809,
        "content_license": "CC BY-SA 4.0",
        "body": "<p><strong>Branch-prediction gain!</strong></p>\n<p>It is important to understand that branch misprediction doesn't slow down programs. The cost of a missed prediction is just as if branch prediction didn't exist and you waited for the evaluation of the expression to decide what code to run (further explanation in the next paragraph).</p>\n<pre><code>if (expression)\n{\n    // Run 1\n} else {\n    // Run 2\n}\n</code></pre>\n<p>Whenever there's an <code>if-else</code> \\ <code>switch</code> statement, the expression has to be evaluated to determine which block should be executed. In the assembly code generated by the compiler, conditional <a href=\"https://en.wikipedia.org/wiki/Branch_(computer_science)\" rel=\"noreferrer\">branch</a> instructions are inserted.</p>\n<p>A branch instruction can cause a computer to begin executing a different instruction sequence and thus deviate from its default behavior of executing instructions in order (i.e. if the expression is false, the program skips the code of the <code>if</code> block) depending on some condition, which is the expression evaluation in our case.</p>\n<p>That being said, the compiler tries to predict the outcome prior to it being actually evaluated. It will fetch instructions from the <code>if</code> block, and if the expression turns out to be true, then wonderful! We gained the time it took to evaluate it and made progress in the code; if not then we are running the wrong code, the pipeline is flushed, and the correct block is run.</p>\n<h3>Visualization:</h3>\n<p>Let's say you need to pick route 1 or route 2. Waiting for your partner to check the map, you have stopped at ## and waited, or you could just pick route1 and if you were lucky (route 1 is the correct route), then great you didn't have to wait for your partner to check the map (you saved the time it would have taken him to check the map), otherwise you will just turn back.</p>\n<p>While flushing pipelines is super fast, nowadays taking this gamble is worth it. Predicting sorted data or a data that changes slowly is always easier and better than predicting fast changes.</p>\n<pre><code> O      Route 1  /-------------------------------\n/|\\             /\n |  ---------##/\n/ \\            \\\n                \\\n        Route 2  \\--------------------------------\n</code></pre>\n"
      },
      {
        "owner": {
          "badge_counts": {
            "bronze": 59,
            "silver": 33,
            "gold": 8
          },
          "reputation": 5188,
          "user_id": 5068056,
          "profile_image": "https://i.stack.imgur.com/m53CE.jpg?s=128&g=1",
          "display_name": "Farhad"
        },
        "is_accepted": false,
        "score": 161,
        "last_activity_date": 1521197843,
        "last_edit_date": 1521197843,
        "creation_date": 1507024074,
        "answer_id": 46541691,
        "question_id": 11227809,
        "content_license": "CC BY-SA 3.0",
        "body": "<p>It's about branch prediction. What is it?</p>\n\n<ul>\n<li><p>A branch predictor is one of the ancient performance improving techniques which still finds relevance into modern architectures. While the simple prediction techniques provide fast lookup and power efficiency they suffer from a high misprediction rate.</p></li>\n<li><p>On the other hand, complex branch predictions –either neural based or variants of two-level branch prediction –provide better prediction accuracy, but they consume more power and complexity increases exponentially.</p></li>\n<li><p>In addition to this, in complex prediction techniques the time taken to predict the branches is itself very high –ranging from 2 to 5 cycles –which is comparable to the execution time of actual branches.</p></li>\n<li><p>Branch prediction is essentially an optimization (minimization) problem where the emphasis is on to achieve lowest possible miss rate, low power consumption, and low complexity with minimum resources.</p></li>\n</ul>\n\n<p>There really are three different kinds of branches:</p>\n\n<p><strong>Forward conditional branches</strong> - based on a run-time condition, the PC (program counter) is changed to point to an address forward in the instruction stream.</p>\n\n<p><strong>Backward conditional branches</strong> - the PC is changed to point backward in the instruction stream. The branch is based on some condition, such as branching backwards to the beginning of a program loop when a test at the end of the loop states the loop should be executed again.</p>\n\n<p><strong>Unconditional branches</strong> - this includes jumps, procedure calls and returns that have no specific condition. For example, an unconditional jump instruction might be coded in assembly language as simply \"jmp\", and the instruction stream must immediately be directed to the target location pointed to by the jump instruction, whereas a conditional jump that might be coded as \"jmpne\" would redirect the instruction stream only if the result of a comparison of two values in a previous \"compare\" instructions shows the values to not be equal. (The segmented addressing scheme used by the x86 architecture adds extra complexity, since jumps can be either \"near\" (within a segment) or \"far\" (outside the segment). Each type has different effects on branch prediction algorithms.)</p>\n\n<p><strong>Static/dynamic Branch Prediction</strong>: Static branch prediction is used by the microprocessor the first time a conditional branch is encountered, and dynamic branch prediction is used for succeeding executions of the conditional branch code.</p>\n\n<p>References:</p>\n\n<ul>\n<li><p><em><a href=\"https://en.wikipedia.org/wiki/Branch_predictor\" rel=\"noreferrer\">Branch predictor</a></em></p></li>\n<li><p><em><a href=\"http://www.geoffchappell.com/studies/windows/km/ntoskrnl/api/ex/profile/demo.htm\" rel=\"noreferrer\">A Demonstration of Self-Profiling</a></em></p></li>\n<li><p><em><a href=\"https://courses.cs.washington.edu/courses/csep548/06au/lectures/branchPred.pdf\" rel=\"noreferrer\">Branch Prediction Review</a></em></p></li>\n<li><p><em><a href=\"https://web.njit.edu/~rlopes/Mod5.3.pdf\" rel=\"noreferrer\">Branch Prediction</a></em></p></li>\n</ul>\n"
      },
      {
        "owner": {
          "badge_counts": {
            "bronze": 50,
            "silver": 30,
            "gold": 3
          },
          "reputation": 7847,
          "user_id": 3378204,
          "profile_image": "https://i.stack.imgur.com/jrjpD.png?s=128&g=1",
          "display_name": "Eugene"
        },
        "is_accepted": false,
        "score": 301,
        "last_activity_date": 1581300329,
        "last_edit_date": 1581300329,
        "creation_date": 1509984916,
        "answer_id": 47141245,
        "question_id": 11227809,
        "content_license": "CC BY-SA 4.0",
        "body": "<p>As what has already been mentioned by others, what behind the mystery is <a href=\"https://en.wikipedia.org/wiki/Branch_predictor\" rel=\"noreferrer\">Branch Predictor</a>. </p>\n\n<p>I'm not trying to add something but explaining the concept in another way. \nThere is a concise introduction on the wiki which contains text and diagram.\nI do like the explanation below which uses a diagram to elaborate the Branch Predictor intuitively.</p>\n\n<blockquote>\n  <p>In computer architecture, a branch predictor is a\n  digital circuit that tries to guess which way a branch (e.g. an\n  if-then-else structure) will go before this is known for sure. The\n  purpose of the branch predictor is to improve the flow in the\n  instruction pipeline. Branch predictors play a critical role in\n  achieving high effective performance in many modern pipelined\n  microprocessor architectures such as x86.</p>\n  \n  <p>Two-way branching is usually implemented with a conditional jump\n  instruction. A conditional jump can either be \"not taken\" and continue\n  execution with the first branch of code which follows immediately\n  after the conditional jump, or it can be \"taken\" and jump to a\n  different place in program memory where the second branch of code is\n  stored. It is not known for certain whether a conditional jump will be\n  taken or not taken until the condition has been calculated and the\n  conditional jump has passed the execution stage in the instruction\n  pipeline (see fig. 1).</p>\n</blockquote>\n\n<p><a href=\"https://i.stack.imgur.com/unxnb.png\" rel=\"noreferrer\"><img src=\"https://i.stack.imgur.com/unxnb.png\" alt=\"figure 1\"></a></p>\n\n<p>Based on the described scenario, I have written an animation demo to show how instructions are executed in a pipeline in different situations.</p>\n\n<ol>\n<li>Without the Branch Predictor. </li>\n</ol>\n\n<blockquote>\n  <p>Without branch prediction, the processor would have to wait until the\n  conditional jump instruction has passed the execute stage before the\n  next instruction can enter the fetch stage in the pipeline.</p>\n</blockquote>\n\n<p>The example contains three instructions and the first one is a conditional jump instruction. The latter two instructions can go into the pipeline until the conditional jump instruction is executed. </p>\n\n<p><a href=\"https://i.stack.imgur.com/GMFQ6.gif\" rel=\"noreferrer\"><img src=\"https://i.stack.imgur.com/GMFQ6.gif\" alt=\"without branch predictor\"></a></p>\n\n<p>It will take 9 clock cycles for 3 instructions to be completed.</p>\n\n<ol start=\"2\">\n<li>Use Branch Predictor and don't take a conditional jump. Let's assume that the predict is <strong>not</strong> taking the conditional jump.</li>\n</ol>\n\n<p><a href=\"https://i.stack.imgur.com/Ms5p1.gif\" rel=\"noreferrer\"><img src=\"https://i.stack.imgur.com/Ms5p1.gif\" alt=\"enter image description here\"></a></p>\n\n<p>It will take 7 clock cycles for 3 instructions to be completed.</p>\n\n<ol start=\"3\">\n<li>Use Branch Predictor and take a conditional jump. Let's assume that the predict is <strong>not</strong> taking the conditional jump.</li>\n</ol>\n\n<p><a href=\"https://i.stack.imgur.com/HIpG3.gif\" rel=\"noreferrer\"><img src=\"https://i.stack.imgur.com/HIpG3.gif\" alt=\"enter image description here\"></a></p>\n\n<p>It will take 9 clock cycles for 3 instructions to be completed.</p>\n\n<blockquote>\n  <p>The time that is wasted in case of a branch misprediction is equal to\n  the number of stages in the pipeline from the fetch stage to the\n  execute stage. Modern microprocessors tend to have quite long\n  pipelines so that the misprediction delay is between 10 and 20 clock\n  cycles. As a result, making a pipeline longer increases the need for a\n  more advanced branch predictor.</p>\n</blockquote>\n\n<p>As you can see, it seems we don't have a reason not to use Branch Predictor.</p>\n\n<p>It's quite a simple demo that clarifies the very basic part of Branch Predictor. If those gifs are annoying, please feel free to remove them from the answer and visitors can also get the live demo source code from <a href=\"https://github.com/Eugene-Mark/BranchPredictorDemo\" rel=\"noreferrer\">BranchPredictorDemo</a></p>\n"
      },
      {
        "owner": {
          "badge_counts": {
            "bronze": 174,
            "silver": 130,
            "gold": 20
          },
          "reputation": 43438,
          "user_id": 536086,
          "profile_image": "https://www.gravatar.com/avatar/75d228bb162b779392a94d9364969208?s=128&d=identicon&r=PG",
          "display_name": "Yochai Timmer"
        },
        "is_accepted": false,
        "score": 164,
        "last_activity_date": 1551779920,
        "last_edit_date": 1551779920,
        "creation_date": 1511447309,
        "answer_id": 47457772,
        "question_id": 11227809,
        "content_license": "CC BY-SA 4.0",
        "body": "<p>Besides the fact that the branch prediction may slow you down, a sorted array has another advantage:   </p>\n\n<p>You can have a stop condition instead of just checking the value, this way you only loop over the relevant data, and ignore the rest.<br>\nThe branch prediction will miss only once.</p>\n\n<pre><code> // sort backwards (higher values first), may be in some other part of the code\n std::sort(data, data + arraySize, std::greater&lt;int&gt;());\n\n for (unsigned c = 0; c &lt; arraySize; ++c) {\n       if (data[c] &lt; 128) {\n              break;\n       }\n       sum += data[c];               \n }\n</code></pre>\n"
      },
      {
        "owner": {
          "badge_counts": {
            "bronze": 21,
            "silver": 6,
            "gold": 1
          },
          "reputation": 2058,
          "user_id": 8459055,
          "profile_image": "https://www.gravatar.com/avatar/ffdc4d783c65c0ab6ff327551fb953c4?s=128&d=identicon&r=PG&f=1",
          "display_name": "omkaartg"
        },
        "is_accepted": false,
        "score": 146,
        "last_activity_date": 1558961238,
        "last_edit_date": 1558961238,
        "creation_date": 1512667709,
        "answer_id": 47700573,
        "question_id": 11227809,
        "content_license": "CC BY-SA 4.0",
        "body": "<p>Sorted arrays are processed faster than an unsorted array, due to a phenomena called branch prediction.</p>\n\n<p>The branch predictor is a digital circuit (in computer architecture) trying to predict which way a branch will go, improving the flow in the instruction pipeline. The circuit/computer predicts the next step and executes it.</p>\n\n<p>Making a wrong prediction leads to going back to the previous step, and executing with another prediction. Assuming the prediction is correct, the code will continue to the next step. A wrong prediction results in repeating the same step, until a correct prediction occurs.</p>\n\n<p>The answer to your question is very simple.</p>\n\n<p>In an unsorted array, the computer makes multiple predictions, leading to an increased chance of errors.\nWhereas, in a sorted array, the computer makes fewer predictions, reducing the chance of errors.\nMaking more predictions requires more time.</p>\n\n<p>Sorted Array: Straight Road\n    ____________________________________________________________________________________\n    - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -\n    TTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTT</p>\n\n<p>Unsorted Array: Curved Road</p>\n\n<pre><code>______   ________\n|     |__|\n</code></pre>\n\n<p>Branch prediction: Guessing/predicting which road is straight and following it without checking</p>\n\n<pre><code>___________________________________________ Straight road\n |_________________________________________|Longer road\n</code></pre>\n\n<p>Although both the roads reach the same destination, the straight road is shorter, and the other is longer. If then you choose the other by mistake, there is no turning back, and so you will waste some extra time if you choose the longer road. This is similar to what happens in the computer, and I hope this helped you understand better.</p>\n\n<hr>\n\n<p>Also I want to cite <a href=\"https://stackoverflow.com/users/16940/simon-weaver\">@Simon_Weaver</a> from the comments:</p>\n\n<blockquote>\n  <p>It doesn’t make fewer predictions - it makes fewer incorrect predictions. It still has to predict for each time through the loop...</p>\n</blockquote>\n"
      },
      {
        "owner": {
          "badge_counts": {
            "bronze": 26,
            "silver": 28,
            "gold": 2
          },
          "reputation": 5457,
          "user_id": 3950982,
          "profile_image": "https://www.gravatar.com/avatar/7491f45ae073ed6bfe01b1e63fb06bf0?s=128&d=identicon&r=PG",
          "display_name": "Luke Hutchison"
        },
        "is_accepted": false,
        "score": 189,
        "last_activity_date": 1603233212,
        "last_edit_date": 1603233212,
        "creation_date": 1513948385,
        "answer_id": 47942152,
        "question_id": 11227809,
        "content_license": "CC BY-SA 4.0",
        "body": "<p>On ARM, there is no branch needed, because every instruction has a 4-bit condition field, which tests (at zero cost) any of <a href=\"https://community.arm.com/developer/ip-products/processors/b/processors-ip-blog/posts/condition-codes-1-condition-flags-and-codes\" rel=\"noreferrer\">16 different different conditions</a> that may arise in the Processor Status Register, and if the condition on an instruction is false, the instruction is skipped. This eliminates the need for short branches, and there would be no branch prediction hit for this algorithm. <b>Therefore, the sorted version of this algorithm would run slower than the unsorted version on ARM, because of the extra overhead of sorting.</b></p>\n<p>The inner loop for this algorithm would look something like the following in ARM assembly language:</p>\n<pre class=\"lang-js prettyprint-override\"><code>MOV R0, #0   // R0 = sum = 0\nMOV R1, #0   // R1 = c = 0\nADR R2, data // R2 = addr of data array (put this instruction outside outer loop)\n.inner_loop  // Inner loop branch label\n    LDRB R3, [R2, R1]   // R3 = data[c]\n    CMP R3, #128        // compare R3 to 128\n    ADDGE R0, R0, R3    // if R3 &gt;= 128, then sum += data[c] -- no branch needed!\n    ADD R1, R1, #1      // c++\n    CMP R1, #arraySize  // compare c to arraySize\n    BLT inner_loop      // Branch to inner_loop if c &lt; arraySize\n</code></pre>\n<p><em><strong>But this is actually part of a bigger picture:</strong></em></p>\n<p><code>CMP</code> opcodes always update the status bits in the Processor Status Register (PSR), because that is their purpose, but most other instructions do not touch the PSR unless you add an optional <code>S</code> suffix to the instruction, specifying that the PSR should be updated based on the result of the instruction. <strong>Just like the 4-bit condition suffix, being able to execute instructions without affecting the PSR is a mechanism that reduces the need for branches on ARM, and also facilitates out of order dispatch at the hardware level</strong>, because after performing some operation X that updates the status bits, subsequently (or in parallel) you can do a bunch of other work that explicitly should not affect (or be affected by) the status bits, then you can test the state of the status bits set earlier by X.</p>\n<p>The condition testing field and the optional &quot;set status bit&quot; field can be combined, for example:</p>\n<ul>\n<li><code>ADD R1, R2, R3</code> performs <code>R1 = R2 + R3</code> without updating any status bits.</li>\n<li><code>ADDGE R1, R2, R3</code> performs the same operation only if a previous instruction that affected the status bits resulted in a Greater than or Equal condition.</li>\n<li><code>ADDS R1, R2, R3</code> performs the addition and then updates the <code>N</code>, <code>Z</code>, <code>C</code> and <code>V</code> flags in the Processor Status Register based on whether the result was Negative, Zero, Carried (for unsigned addition), or oVerflowed (for signed addition).</li>\n<li><code>ADDSGE R1, R2, R3</code> performs the addition only if the <code>GE</code> test is true, and then subsequently updates the status bits based on the result of the addition.</li>\n</ul>\n<p>Most processor architectures do not have this ability to specify whether or not the status bits should be updated for a given operation, which can necessitate writing additional code to save and later restore status bits, or may require additional branches, or may limit the processor's out of order execution efficiency: one of the side effects of most CPU instruction set architectures forcibly updating status bits after most instructions is that it is much harder to tease apart which instructions can be run in parallel without interfering with each other. Updating status bits has side effects, therefore has a linearizing effect on code. <strong>ARM's ability to mix and match branch-free condition testing on any instruction with the option to either update or not update the status bits after any instruction is extremely powerful, for both assembly language programmers and compilers, and produces very efficient code.</strong></p>\n<p>When you don't have to branch, you can avoid the time cost of flushing the pipeline for what would otherwise be short branches, and you can avoid the design complexity of many forms of speculative evalution. The performance impact of the initial naive imlementations of the mitigations for many recently discovered processor vulnerabilities (Spectre etc.) shows you just how much the performance of modern processors depends upon complex speculative evaluation logic. With a short pipeline and the dramatically reduced need for branching, ARM just doesn't need to rely on speculative evaluation as much as CISC processors. (Of course high-end ARM implementations do include speculative evaluation, but it's a smaller part of the performance story.)</p>\n<p>If you have ever wondered why ARM has been so phenomenally successful, the brilliant effectiveness and interplay of these two mechanisms (combined with another mechanism that lets you &quot;barrel shift&quot; left or right one of the two arguments of any arithmetic operator or offset memory access operator at zero additional cost) are a big part of the story, because they are some of the greatest sources of the ARM architecture's efficiency. The brilliance of the original designers of the ARM ISA back in 1983, Steve Furber and Roger (now Sophie) Wilson, cannot be overstated.</p>\n"
      },
      {
        "owner": {
          "badge_counts": {
            "bronze": 26,
            "silver": 16,
            "gold": 0
          },
          "reputation": 1773,
          "user_id": 2297550,
          "profile_image": "https://www.gravatar.com/avatar/20092a7b6e8eebf36a9c28951bd2261f?s=128&d=identicon&r=PG",
          "display_name": "user2297550"
        },
        "is_accepted": false,
        "score": 71,
        "last_activity_date": 1562040497,
        "last_edit_date": 1562040497,
        "creation_date": 1544336297,
        "answer_id": 53689911,
        "question_id": 11227809,
        "content_license": "CC BY-SA 4.0",
        "body": "<p>The assumption by other answers that one needs to sort the data is not correct.</p>\n\n<p>The following code does not sort the entire array, but only 200-element segments of it, and thereby runs the fastest.</p>\n\n<p>Sorting only k-element sections completes the pre-processing in linear time, <code>O(n)</code>, rather than the <code>O(n.log(n))</code> time needed to sort the entire array.</p>\n\n<pre><code>#include &lt;algorithm&gt;\n#include &lt;ctime&gt;\n#include &lt;iostream&gt;\n\nint main() {\n    int data[32768]; const int l = sizeof data / sizeof data[0];\n\n    for (unsigned c = 0; c &lt; l; ++c)\n        data[c] = std::rand() % 256;\n\n    // sort 200-element segments, not the whole array\n    for (unsigned c = 0; c + 200 &lt;= l; c += 200)\n        std::sort(&amp;data[c], &amp;data[c + 200]);\n\n    clock_t start = clock();\n    long long sum = 0;\n\n    for (unsigned i = 0; i &lt; 100000; ++i) {\n        for (unsigned c = 0; c &lt; sizeof data / sizeof(int); ++c) {\n            if (data[c] &gt;= 128)\n                sum += data[c];\n        }\n    }\n\n    std::cout &lt;&lt; static_cast&lt;double&gt;(clock() - start) / CLOCKS_PER_SEC &lt;&lt; std::endl;\n    std::cout &lt;&lt; \"sum = \" &lt;&lt; sum &lt;&lt; std::endl;\n}\n</code></pre>\n\n<p>This also \"proves\" that it has nothing to do with any algorithmic issue such as sort order, and it is indeed branch prediction.</p>\n"
      },
      {
        "owner": {
          "badge_counts": {
            "bronze": 85,
            "silver": 79,
            "gold": 10
          },
          "reputation": 41554,
          "user_id": 2011147,
          "profile_image": "https://i.stack.imgur.com/FGRgf.jpg?s=128&g=1",
          "display_name": "Selcuk"
        },
        "is_accepted": false,
        "community_owned_date": 1571096080,
        "score": 53,
        "last_activity_date": 1571096080,
        "creation_date": 1571096080,
        "answer_id": 58385294,
        "question_id": 11227809,
        "content_license": "CC BY-SA 4.0",
        "body": "<p><em><a href=\"https://stackoverflow.blog/2019/10/11/c-creator-bjarne-stroustrup-answers-our-top-five-c-questions/\">Bjarne Stroustrup's Answer</a> to this question:</em></p>\n\n<p>That sounds like an interview question. Is it true? How would you know? It is a bad idea to answer questions about efficiency without first doing some measurements, so it is important to know how to measure.</p>\n\n<p>So, I tried with a vector of a million integers and got:</p>\n\n<pre><code>Already sorted    32995 milliseconds\nShuffled          125944 milliseconds\n\nAlready sorted    18610 milliseconds\nShuffled          133304 milliseconds\n\nAlready sorted    17942 milliseconds\nShuffled          107858 milliseconds\n</code></pre>\n\n<p>I ran that a few times to be sure. Yes, the phenomenon is real. My key code was:</p>\n\n<pre><code>void run(vector&lt;int&gt;&amp; v, const string&amp; label)\n{\n    auto t0 = system_clock::now();\n    sort(v.begin(), v.end());\n    auto t1 = system_clock::now();\n    cout &lt;&lt; label \n         &lt;&lt; duration_cast&lt;microseconds&gt;(t1 — t0).count() \n         &lt;&lt; \" milliseconds\\n\";\n}\n\nvoid tst()\n{\n    vector&lt;int&gt; v(1'000'000);\n    iota(v.begin(), v.end(), 0);\n    run(v, \"already sorted \");\n    std::shuffle(v.begin(), v.end(), std::mt19937{ std::random_device{}() });\n    run(v, \"shuffled    \");\n}\n</code></pre>\n\n<p>At least the phenomenon is real with this compiler, standard library, and optimizer settings. Different implementations can and do give different answers. In fact, someone did do a more systematic study (a quick web search will find it) and most implementations show that effect.</p>\n\n<p>One reason is branch prediction: the key operation in the sort algorithm is <code>“if(v[i] &lt; pivot]) …”</code> or equivalent. For a sorted sequence that test is always true whereas, for a random sequence, the branch chosen varies randomly.</p>\n\n<p>Another reason is that when the vector is already sorted, we never need to move elements to their correct position. The effect of these little details is the factor of five or six that we saw.</p>\n\n<p>Quicksort (and sorting in general) is a complex study that has attracted some of the greatest minds of computer science. A good sort function is a result of both choosing a good algorithm and paying attention to hardware performance in its implementation.</p>\n\n<p>If you want to write efficient code, you need to know a bit about machine architecture.</p>\n"
      },
      {
        "owner": {
          "badge_counts": {
            "bronze": 19,
            "silver": 8,
            "gold": 1
          },
          "reputation": 951,
          "user_id": 3821643,
          "profile_image": "https://www.gravatar.com/avatar/bc25ab7aa68cfa9d7b0ca53a15d5f40c?s=128&d=identicon&r=PG&f=1",
          "display_name": "hatirlatici"
        },
        "is_accepted": false,
        "score": 46,
        "last_activity_date": 1576244782,
        "last_edit_date": 1576244782,
        "creation_date": 1571866540,
        "answer_id": 58531294,
        "question_id": 11227809,
        "content_license": "CC BY-SA 4.0",
        "body": "<p>This question is rooted in Branch Prediction Models on CPUs. I'd recommend reading this paper: </p>\n\n<p><a href=\"https://pdfs.semanticscholar.org/5634/4be375cfed0f79cb9d009ac838682e1bace3.pdf\" rel=\"noreferrer\"><strong>Increasing the Instruction Fetch Rate via Multiple Branch Prediction and a Branch Address Cache</strong></a></p>\n\n<p>When you have sorted elements, IR could not be bothered to fetch all CPU instructions, again and again, It fetches them from cache.</p>\n"
      },
      {
        "owner": {
          "badge_counts": {
            "bronze": 20,
            "silver": 5,
            "gold": 0
          },
          "reputation": 623,
          "user_id": 10328570,
          "profile_image": "https://lh4.googleusercontent.com/-7L-8h_7j_IA/AAAAAAAAAAI/AAAAAAAAF4U/h2j0cXUgmTo/photo.jpg?sz=128",
          "display_name": "Manoj Kashyam"
        },
        "is_accepted": false,
        "score": 39,
        "last_activity_date": 1592746008,
        "last_edit_date": 1592746008,
        "creation_date": 1579597687,
        "answer_id": 59837525,
        "question_id": 11227809,
        "content_license": "CC BY-SA 4.0",
        "body": "<p>One way to avoid branch prediction errors is to build a lookup table, and index it using the data. Stefan de Bruijn discussed that in his answer.</p>\n<p>But in this case, we know values are in the range [0, 255] and we only care about values &gt;= 128. That means we can easily extract a single bit that will tell us whether we want a value or not: by shifting the data to the right 7 bits, we are left with a 0 bit or a 1 bit, and we only want to add the value when we have a 1 bit. Let's call this bit the &quot;decision bit&quot;.</p>\n<p>By using the 0/1 value of the decision bit as an index into an array, we can make code that will be equally fast whether the data is sorted or not sorted. Our code will always add a value, but when the decision bit is 0, we will add the value somewhere we don't care about. Here's the code:</p>\n<p>// Test</p>\n<pre><code>clock_t start = clock();\nlong long a[] = {0, 0};\nlong long sum;\n\nfor (unsigned i = 0; i &lt; 100000; ++i)\n{\n    // Primary loop\n    for (unsigned c = 0; c &lt; arraySize; ++c)\n    {\n        int j = (data[c] &gt;&gt; 7);\n        a[j] += data[c];\n    }\n}\n\ndouble elapsedTime = static_cast&lt;double&gt;(clock() - start) / CLOCKS_PER_SEC;\nsum = a[1];\n</code></pre>\n<p>This code wastes half of the adds but never has a branch prediction failure. It's tremendously faster on random data than the version with an actual if statement.</p>\n<p>But in my testing, an explicit lookup table was slightly faster than this, probably because indexing into a lookup table was slightly faster than bit shifting. This shows how my code sets up and uses the lookup table (unimaginatively called lut for &quot;LookUp Table&quot; in the code). Here's the C++ code:</p>\n<p>// Declare and then fill in the lookup table</p>\n<pre><code>int lut[256];\nfor (unsigned c = 0; c &lt; 256; ++c)\n    lut[c] = (c &gt;= 128) ? c : 0;\n\n// Use the lookup table after it is built\nfor (unsigned i = 0; i &lt; 100000; ++i)\n{\n    // Primary loop\n    for (unsigned c = 0; c &lt; arraySize; ++c)\n    {\n        sum += lut[data[c]];\n    }\n}\n</code></pre>\n<p>In this case, the lookup table was only 256 bytes, so it fits nicely in a cache and all was fast. This technique wouldn't work well if the data was 24-bit values and we only wanted half of them... the lookup table would be far too big to be practical. On the other hand, we can combine the two techniques shown above: first shift the bits over, then index a lookup table. For a 24-bit value that we only want the top half value, we could potentially shift the data right by 12 bits, and be left with a 12-bit value for a table index. A 12-bit table index implies a table of 4096 values, which might be practical.</p>\n<p>The technique of indexing into an array, instead of using an if statement, can be used for deciding which pointer to use. I saw a library that implemented binary trees, and instead of having two named pointers (pLeft and pRight or whatever) had a length-2 array of pointers and used the &quot;decision bit&quot; technique to decide which one to follow. For example, instead of:</p>\n<pre><code>if (x &lt; node-&gt;value)\n    node = node-&gt;pLeft;\nelse\n    node = node-&gt;pRight;\nthis library would do something like:\n\ni = (x &lt; node-&gt;value);\nnode = node-&gt;link[i];\n</code></pre>\n<p>It's a nice solution and maybe it will work.</p>\n"
      }
    ],
    "owner": {
      "badge_counts": {
        "bronze": 531,
        "silver": 455,
        "gold": 47
      },
      "reputation": 446908,
      "user_id": 87234,
      "profile_image": "https://i.stack.imgur.com/FkjBe.png?s=128&g=1",
      "display_name": "GManNickG"
    },
    "is_answered": true,
    "view_count": 1542239,
    "protected_date": 1399067470,
    "accepted_answer_id": 11227902,
    "answer_count": 26,
    "score": 24976,
    "last_activity_date": 1603233212,
    "creation_date": 1340805096,
    "question_id": 11227809,
    "title": "Why is processing a sorted array faster than processing an unsorted array?",
    "body": "<p>Here is a piece of C++ code that shows some very peculiar behavior. For some strange reason, sorting the data miraculously makes the code almost six times faster:</p>\n<pre class=\"lang-cpp prettyprint-override\"><code>#include &lt;algorithm&gt;\n#include &lt;ctime&gt;\n#include &lt;iostream&gt;\n\nint main()\n{\n    // Generate data\n    const unsigned arraySize = 32768;\n    int data[arraySize];\n\n    for (unsigned c = 0; c &lt; arraySize; ++c)\n        data[c] = std::rand() % 256;\n\n    // !!! With this, the next loop runs faster.\n    std::sort(data, data + arraySize);\n\n    // Test\n    clock_t start = clock();\n    long long sum = 0;\n\n    for (unsigned i = 0; i &lt; 100000; ++i)\n    {\n        // Primary loop\n        for (unsigned c = 0; c &lt; arraySize; ++c)\n        {\n            if (data[c] &gt;= 128)\n                sum += data[c];\n        }\n    }\n\n    double elapsedTime = static_cast&lt;double&gt;(clock() - start) / CLOCKS_PER_SEC;\n\n    std::cout &lt;&lt; elapsedTime &lt;&lt; std::endl;\n    std::cout &lt;&lt; &quot;sum = &quot; &lt;&lt; sum &lt;&lt; std::endl;\n}\n</code></pre>\n<ul>\n<li>Without <code>std::sort(data, data + arraySize);</code>, the code runs in 11.54 seconds.</li>\n<li>With the sorted data, the code runs in 1.93 seconds.</li>\n</ul>\n<hr />\n<p>Initially, I thought this might be just a language or compiler anomaly, so I tried Java:</p>\n<pre class=\"lang-java prettyprint-override\"><code>import java.util.Arrays;\nimport java.util.Random;\n\npublic class Main\n{\n    public static void main(String[] args)\n    {\n        // Generate data\n        int arraySize = 32768;\n        int data[] = new int[arraySize];\n\n        Random rnd = new Random(0);\n        for (int c = 0; c &lt; arraySize; ++c)\n            data[c] = rnd.nextInt() % 256;\n\n        // !!! With this, the next loop runs faster\n        Arrays.sort(data);\n\n        // Test\n        long start = System.nanoTime();\n        long sum = 0;\n\n        for (int i = 0; i &lt; 100000; ++i)\n        {\n            // Primary loop\n            for (int c = 0; c &lt; arraySize; ++c)\n            {\n                if (data[c] &gt;= 128)\n                    sum += data[c];\n            }\n        }\n\n        System.out.println((System.nanoTime() - start) / 1000000000.0);\n        System.out.println(&quot;sum = &quot; + sum);\n    }\n}\n</code></pre>\n<p>With a similar but less extreme result.</p>\n<hr />\n<p>My first thought was that sorting brings the data into the <a href=\"https://en.wikipedia.org/wiki/CPU_cache\" rel=\"noreferrer\">cache</a>, but then I thought how silly that was because the array was just generated.</p>\n<ul>\n<li>What is going on?</li>\n<li>Why is processing a sorted array faster than processing an unsorted array?</li>\n</ul>\n<p>The code is summing up some independent terms, so the order should not matter.</p>\n"
  }
  render() {
    return <Question data={this.data}/>;
  }
};

export default QuestionContainer;
