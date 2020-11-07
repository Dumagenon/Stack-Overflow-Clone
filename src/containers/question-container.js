import React, { Component } from 'react';
import Question from '../components/question';

class QuestionContainer extends Component {
  data = {
    "tags": [
      "git",
      "version-control",
      "git-commit",
      "undo"
    ],
    "comments": [
      {
        "owner": {
          "badge_counts": {
            "bronze": 63,
            "silver": 29,
            "gold": 2
          },
          "reputation": 3088,
          "user_id": 1939163,
          "profile_image": "https://i.stack.imgur.com/SLDki.jpg?s=128&g=1",
          "display_name": "Luzan Baral"
        },
        "score": 0,
        "creation_date": 1488167599,
        "comment_id": 72095415,
        "body": "See this guide for Git commits undo on Local, Public and Git Branch <a href=\"http://justcode.me/git/undo-git-commits/\" rel=\"nofollow noreferrer\">How to undo Git Commits like pro</a>"
      },
      {
        "owner": {
          "badge_counts": {
            "bronze": 157,
            "silver": 111,
            "gold": 16
          },
          "reputation": 26463,
          "user_id": 1084174,
          "profile_image": "https://i.stack.imgur.com/BsASP.png?s=128&g=1",
          "display_name": "Sazzad Hissain Khan"
        },
        "score": 196,
        "creation_date": 1497540396,
        "comment_id": 76131587,
        "body": "Before you post a new answer, consider there are already 65+ answers for this question. Make sure that your answer contributes what is not among existing answers."
      },
      {
        "owner": {
          "badge_counts": {
            "bronze": 14,
            "silver": 1,
            "gold": 0
          },
          "reputation": 161,
          "user_id": 8401926,
          "profile_image": "https://i.stack.imgur.com/AvM4G.png?s=128&g=1",
          "display_name": "Roland"
        },
        "score": 0,
        "creation_date": 1509628904,
        "comment_id": 81101052,
        "body": "What @thSoft said is correct, pushing your commits and then <code>git reset --bla foo</code> requires you a <code>git --force push [--all] [somewhere-else-than-origin]</code>. Note that this is a &quot;forced-push&quot; which requires other people do a &quot;forced-update&quot;. They should <b>not</b> use <code>git pull</code> as this implies a merge, but use <code>git fetch [--all]</code> and then <code>git rebase origin&#47;master</code> (assume that the forced-update came from <code>origin</code>). All <code>[bla]</code> are optional parameters but sometimes needed, for example when you push to more than just one remote repository."
      },
      {
        "owner": {
          "badge_counts": {
            "bronze": 14,
            "silver": 1,
            "gold": 0
          },
          "reputation": 161,
          "user_id": 8401926,
          "profile_image": "https://i.stack.imgur.com/AvM4G.png?s=128&g=1",
          "display_name": "Roland"
        },
        "score": 0,
        "creation_date": 1509629003,
        "comment_id": 81101107,
        "body": "The reason for <code>git fetch [--all]</code> + <code>git rebase origin&#47;master</code> is that this fixes your local history avoiding a merge making the history easier for GIT to handle."
      },
      {
        "owner": {
          "badge_counts": {
            "bronze": 43,
            "silver": 23,
            "gold": 2
          },
          "reputation": 1295,
          "user_id": 1476792,
          "profile_image": "https://www.gravatar.com/avatar/29c301fe5a5792851c5eb25873d06214?s=128&d=identicon&r=PG",
          "display_name": "Yimin Rong"
        },
        "score": 145,
        "creation_date": 1521510328,
        "comment_id": 85751313,
        "body": "You know what git needs? <code>git undo</code>, that&#39;s it. Then the reputation git has for handling mistakes made by us mere mortals disappears. Implement by pushing the current state on a git stack before executing any <code>git</code> command. It would affect performance, so it would be best to add a config flag as to whether to enable it."
      },
      {
        "owner": {
          "badge_counts": {
            "bronze": 72,
            "silver": 56,
            "gold": 9
          },
          "reputation": 15953,
          "user_id": 6782707,
          "profile_image": "https://www.gravatar.com/avatar/2425200c04f326a53ef0085b703369d6?s=128&d=identicon&r=PG",
          "display_name": "Edric"
        },
        "score": 18,
        "creation_date": 1538751008,
        "comment_id": 92266288,
        "body": "@YiminRong That can be done with Git&#39;s <code>alias</code> feature: <a href=\"https://git-scm.com/book/en/v2/Git-Basics-Git-Aliases\" rel=\"nofollow noreferrer\">git-scm.com/book/en/v2/Git-Basics-Git-Aliases</a>"
      },
      {
        "owner": {
          "badge_counts": {
            "bronze": 12,
            "silver": 0,
            "gold": 0
          },
          "reputation": 175,
          "user_id": 9717508,
          "profile_image": "https://lh3.googleusercontent.com/-QVXGkn828Q0/AAAAAAAAAAI/AAAAAAAAAAU/VEL-orvDJI4/photo.jpg?sz=128",
          "display_name": "ashad"
        },
        "score": 1,
        "creation_date": 1554725740,
        "comment_id": 97845110,
        "body": "For VsCode users , just type ctrl +shift +G and then click on three dot ,ie , more options and then click on undo Last Commit"
      },
      {
        "owner": {
          "badge_counts": {
            "bronze": 37,
            "silver": 21,
            "gold": 2
          },
          "reputation": 13032,
          "user_id": 1057485,
          "profile_image": "https://www.gravatar.com/avatar/e261055e2ed9f0176e1cecf7e38533c5?s=128&d=identicon&r=PG",
          "display_name": "RomainValeri"
        },
        "score": 1,
        "creation_date": 1585060023,
        "comment_id": 107629225,
        "body": "@YiminRong Undo <i>what</i> exactly? There are dozens of very different functional cases where &quot;undoing&quot; means something <b>completely</b> different. I&#39;d bet adding a new fancy &quot;magic wand&quot; would only confuse things more."
      },
      {
        "owner": {
          "badge_counts": {
            "bronze": 43,
            "silver": 23,
            "gold": 2
          },
          "reputation": 1295,
          "user_id": 1476792,
          "profile_image": "https://www.gravatar.com/avatar/29c301fe5a5792851c5eb25873d06214?s=128&d=identicon&r=PG",
          "display_name": "Yimin Rong"
        },
        "score": 11,
        "creation_date": 1585139756,
        "comment_id": 107657034,
        "body": "@RomainValeri - Same way undo works everywhere else."
      },
      {
        "owner": {
          "badge_counts": {
            "bronze": 37,
            "silver": 21,
            "gold": 2
          },
          "reputation": 13032,
          "user_id": 1057485,
          "profile_image": "https://www.gravatar.com/avatar/e261055e2ed9f0176e1cecf7e38533c5?s=128&d=identicon&r=PG",
          "display_name": "RomainValeri"
        },
        "score": 12,
        "creation_date": 1585142613,
        "comment_id": 107658442,
        "body": "@YiminRong Not buying it. People would still fumble and undo things not to be undone. But more importantly, <code>git reflog</code> is already close to what you describe, but gives the user more control on what&#39;s to be (un)done. But please, no, &quot;undo&quot; does not work the same everywhere, and people would <i>expect</i> many different things for the feature to achieve. Undo last commit? Undo last action? If last action was a push, undo how exactly, (reset and push) or (revert and push)?"
      },
      {
        "owner": {
          "badge_counts": {
            "bronze": 185,
            "silver": 105,
            "gold": 13
          },
          "reputation": 21296,
          "user_id": 5175709,
          "profile_image": "https://i.stack.imgur.com/LGmTA.png?s=128&g=1",
          "display_name": "Honey"
        },
        "score": 1,
        "creation_date": 1585426235,
        "comment_id": 107756519,
        "body": "See this <a href=\"http://justinhileman.info/article/git-pretty/git-pretty.png\" rel=\"nofollow noreferrer\">diagram from Git</a>. It shows all the possible ways to mess up code and its solutions."
      },
      {
        "owner": {
          "badge_counts": {
            "bronze": 23,
            "silver": 6,
            "gold": 1
          },
          "reputation": 548,
          "user_id": 6565511,
          "profile_image": "https://i.stack.imgur.com/TOn0U.png?s=128&g=1",
          "display_name": "Nathan"
        },
        "score": 0,
        "creation_date": 1588446858,
        "comment_id": 108901547,
        "body": "@RomainValeri A valid criticism.  But &quot;x has problems&quot; is not a sufficient argument to justify &quot;don&#39;t do x&quot;"
      },
      {
        "owner": {
          "badge_counts": {
            "bronze": 298,
            "silver": 184,
            "gold": 54
          },
          "reputation": 62368,
          "user_id": 343204,
          "profile_image": "https://i.stack.imgur.com/uOZYt.jpg?s=128&g=1",
          "display_name": "Snowcrash"
        },
        "score": 0,
        "creation_date": 1603117650,
        "comment_id": 113927452,
        "body": "To do something simple in git either do Impossibly Hard Task A or Impossibly Hard Task B. Then mess it up slightly and try and revert by doing Impossibly Hard Task C or Impossibly Hard Task D."
      },
      {
        "owner": {
          "badge_counts": {
            "bronze": 75,
            "silver": 49,
            "gold": 4
          },
          "reputation": 7586,
          "user_id": 1461862,
          "profile_image": "https://www.gravatar.com/avatar/70721356bfbfabd20b55d41085efcc2d?s=128&d=identicon&r=PG",
          "display_name": "Mauricio Gracia Gutierrez"
        },
        "score": 0,
        "creation_date": 1603730738,
        "comment_id": 114122501,
        "body": "@YiminRong I can already see people complaining that &quot;git undo&quot; because it did nothing, or made things worse or halfway. It sounds a little bit like &quot;I am going to try and guess what you want to do and do it for you&quot; ;-)"
      }
    ],
    "answers": [
      {
        "comments": [
          {
            "owner": {
              "badge_counts": {
                "bronze": 206,
                "silver": 108,
                "gold": 22
              },
              "reputation": 15471,
              "user_id": 1469208,
              "profile_image": "https://www.gravatar.com/avatar/63e4f7c36cfb54861bc2c2518bdb7cf2?s=128&d=identicon&r=PG",
              "display_name": "trejder"
            },
            "score": 22,
            "creation_date": 1403368319,
            "comment_id": 37635032,
            "body": "<code>git commit -a -m &quot;&quot;</code> or <code>git commit -am &quot;&quot;</code> naturally! :]"
          },
          {
            "owner": {
              "badge_counts": {
                "bronze": 12,
                "silver": 2,
                "gold": 0
              },
              "reputation": 276,
              "user_id": 2555263,
              "profile_image": "https://i.stack.imgur.com/eH7bC.jpg?s=128&g=1",
              "display_name": "seanriordan08"
            },
            "score": 0,
            "creation_date": 1449613829,
            "comment_id": 56081980,
            "body": "Another &#39;shortcut&#39; use of stash; if you want to unstage everything (undo git add), just <code>git stash</code>, then <code>git stash pop</code>"
          }
        ],
        "owner": {
          "badge_counts": {
            "bronze": 31,
            "silver": 22,
            "gold": 4
          },
          "reputation": 16953,
          "user_id": 66445,
          "profile_image": "https://www.gravatar.com/avatar/1eeaa20a58132f3ea9a2c547fce7b92a?s=128&d=identicon&r=PG",
          "display_name": "Lennart Koopmann"
        },
        "is_accepted": false,
        "score": 1052,
        "last_activity_date": 1513202608,
        "creation_date": 1243620787,
        "answer_id": 927378,
        "body": "<pre class=\"lang-bash prettyprint-override\"><code>git rm yourfiles/*.class\ngit commit -a -m \"deleted all class files in folder 'yourfiles'\"\n</code></pre>\n\n<p>or</p>\n\n<pre><code>git reset --hard HEAD~1\n</code></pre>\n\n<p><strong>Warning: The above command will permanently remove the modifications to the <code>.java</code> files (and any other files) that you wanted to commit.</strong></p>\n\n<p>The <code>hard reset</code> to <code>HEAD-1</code> will set your working copy to the state of the commit before your wrong commit.</p>\n"
      },
      {
        "comments": [
          {
            "owner": {
              "badge_counts": {
                "bronze": 88,
                "silver": 61,
                "gold": 8
              },
              "reputation": 16421,
              "user_id": 10259,
              "profile_image": "https://www.gravatar.com/avatar/f1779d6230d7211bf089d812674c9e7f?s=128&d=identicon&r=PG",
              "display_name": "Frank Shearar"
            },
            "score": 498,
            "creation_date": 1286293460,
            "comment_id": 4110794,
            "body": "And if the commit was to the wrong branch, you may <code>git checkout theRightBranch</code> with all the changes stages. As I just had to do."
          },
          {
            "owner": {
              "badge_counts": {
                "bronze": 203,
                "silver": 170,
                "gold": 32
              },
              "reputation": 182470,
              "user_id": 5486,
              "profile_image": "https://www.gravatar.com/avatar/750159e9cdab58c4b6547d382311c9af?s=128&d=identicon&r=PG",
              "display_name": "Ryan Lundy"
            },
            "score": 513,
            "creation_date": 1302704110,
            "comment_id": 6443962,
            "body": "If you&#39;re working in DOS, instead of <code>git reset --soft HEAD^</code> you&#39;ll need to use <code>git reset --soft HEAD~1</code>.  The ^ is a continuation character in DOS so it won&#39;t work properly.  Also, <code>--soft</code> is the default, so you can omit it if you like and just say <code>git reset HEAD~1</code>."
          },
          {
            "owner": {
              "badge_counts": {
                "bronze": 14,
                "silver": 5,
                "gold": 0
              },
              "reputation": 532,
              "user_id": 166128,
              "profile_image": "https://www.gravatar.com/avatar/32d4563a0685d91b5770a9d58d0983b2?s=128&d=identicon&r=PG",
              "display_name": "tnajdek"
            },
            "score": 134,
            "creation_date": 1361468876,
            "comment_id": 21084878,
            "body": "zsh users might get: <code>zsh: no matches found: HEAD^</code> - you need to escape ^ i.e. <code>git reset --soft HEAD\\^</code>"
          },
          {
            "owner": {
              "badge_counts": {
                "bronze": 20,
                "silver": 8,
                "gold": 0
              },
              "reputation": 978,
              "user_id": 1028259,
              "profile_image": "https://www.gravatar.com/avatar/a3557cbacc796011f014a6f76a4a4469?s=128&d=identicon&r=PG",
              "display_name": "dmansfield"
            },
            "score": 13,
            "creation_date": 1404335970,
            "comment_id": 38004724,
            "body": "The answer is not correct if, say by accident, <code>git commit -a</code> was issued when the <code>-a</code> should have been left out.  In which case, it&#39;s better no leave out the <code>--soft</code> (which will result in <code>--mixed</code> which is the default) and then you can restage the changes you meant to commit."
          },
          {
            "owner": {
              "badge_counts": {
                "bronze": 99,
                "silver": 71,
                "gold": 4
              },
              "reputation": 15663,
              "user_id": 211292,
              "profile_image": "https://www.gravatar.com/avatar/506d58a313a564c1f46b19e67eb476c8?s=128&d=identicon&r=PG",
              "display_name": "ThomasW"
            },
            "score": 4,
            "creation_date": 1474005385,
            "comment_id": 66364432,
            "body": "In more recent versions of git <code>HEAD~</code> can be replaced with <code>@~</code>."
          },
          {
            "owner": {
              "badge_counts": {
                "bronze": 28,
                "silver": 12,
                "gold": 0
              },
              "reputation": 833,
              "user_id": 866741,
              "profile_image": "https://www.gravatar.com/avatar/f47bc7af3ddd90bdc14f37092418bd51?s=128&d=identicon&r=PG",
              "display_name": "jterm"
            },
            "score": 1,
            "creation_date": 1489527044,
            "comment_id": 72708483,
            "body": "This doesn&#39;t really serve as way to undo a set of changes those? This is more if you need to amend a change?"
          },
          {
            "owner": {
              "badge_counts": {
                "bronze": 14,
                "silver": 9,
                "gold": 0
              },
              "reputation": 773,
              "user_id": 3613932,
              "profile_image": "https://graph.facebook.com/634120614/picture?type=large",
              "display_name": "user3613932"
            },
            "score": 3,
            "creation_date": 1492106888,
            "comment_id": 73858684,
            "body": "If you have already pushed your changes to a remote branch, and you do git reset as shown above, you will be behind the remote branch. In such a situation, it is preferable to use git revert &lt;commit hash&gt; which will add another commit which reverts the previous changes. More information <a href=\"http://christoph.ruegg.name/blog/git-howto-revert-a-commit-already-pushed-to-a-remote-reposit.html\" rel=\"nofollow noreferrer\">here</a>"
          },
          {
            "owner": {
              "badge_counts": {
                "bronze": 14,
                "silver": 7,
                "gold": 1
              },
              "reputation": 918,
              "user_id": 441930,
              "profile_image": "https://www.gravatar.com/avatar/a22c09207551da03c315cd273e9ff6bc?s=128&d=identicon&r=PG",
              "display_name": "Mr5o1"
            },
            "score": 1,
            "creation_date": 1505343949,
            "comment_id": 79379518,
            "body": "@Green I think this happens if you only have 1 commit... there&#39;s no earlier commit to reset to."
          },
          {
            "owner": {
              "badge_counts": {
                "bronze": 20,
                "silver": 13,
                "gold": 0
              },
              "reputation": 1265,
              "user_id": 4814774,
              "profile_image": "https://www.gravatar.com/avatar/976e52b11ec8ae14d08debc051f82594?s=128&d=identicon&r=PG",
              "display_name": "daGo"
            },
            "score": 4,
            "creation_date": 1507293408,
            "comment_id": 80163520,
            "body": "It is almost a comprehensive answer. In case your &#39;last commit&#39; === &#39;your first commit&#39; — reset will do nothing but throw nice fatal message. In this case use <code>git update-ref -d HEAD</code>."
          },
          {
            "owner": {
              "badge_counts": {
                "bronze": 10,
                "silver": 0,
                "gold": 0
              },
              "reputation": 119,
              "user_id": 1076527,
              "profile_image": "https://i.stack.imgur.com/mERgC.jpg?s=128&g=1",
              "display_name": "microsaurus_dex"
            },
            "score": 1,
            "creation_date": 1521516436,
            "comment_id": 85752817,
            "body": "Also if you have too-large files that don&#39;t belong and cant complete your initial commits. you can delete .git, remove your too large files. git init and commit -m &#39;initial commit&#39; and then push -u origin master"
          },
          {
            "owner": {
              "badge_counts": {
                "bronze": 14,
                "silver": 6,
                "gold": 0
              },
              "reputation": 653,
              "user_id": 2948889,
              "profile_image": "https://www.gravatar.com/avatar/534826e3e4a97e9294c88fc797f3916c?s=128&d=identicon&r=PG&f=1",
              "display_name": "Mr. Tao"
            },
            "score": 2,
            "creation_date": 1525603242,
            "comment_id": 87414165,
            "body": "<b>zsh</b> users should <a href=\"http://bewatermyfriend.org/p/2016/002/\" rel=\"nofollow noreferrer\">turn off globbing</a> with <code>noglob git</code> to get rid of this constant annoyance with caret <code>^</code> character."
          },
          {
            "owner": {
              "badge_counts": {
                "bronze": 3,
                "silver": 1,
                "gold": 0
              },
              "reputation": 101,
              "user_id": 6837661,
              "profile_image": "https://www.gravatar.com/avatar/358c48722e2abbed5bc68ed46f524933?s=128&d=identicon&r=PG&f=1",
              "display_name": "briefy"
            },
            "score": 2,
            "creation_date": 1541580662,
            "comment_id": 93261550,
            "body": "- git reset --hard HEAD~1, will go back to one commit and delete all file git knows about, but not untracked files, since git got no idea of them. - git reset HEAD~1, will keep all the changes of the current commit,but make them untracked - git reset --soft HEAD~1, will keep your commited files staged and untracked files still untracked"
          },
          {
            "owner": {
              "badge_counts": {
                "bronze": 10,
                "silver": 0,
                "gold": 0
              },
              "reputation": 153,
              "user_id": 2639928,
              "profile_image": "https://www.gravatar.com/avatar/b30da6670693e2250d280b9134ef9b02?s=128&d=identicon&r=PG",
              "display_name": "Auxiliary Joel"
            },
            "score": 1,
            "creation_date": 1564357532,
            "comment_id": 100992202,
            "body": "I accidentally committed an entire folder. so I then ran &#39;git reset HEAD core/&#39; which gave me this list &#39;Unstaged changes after reset:&#39; (showing all my core folder/subfolder files). Then when I ran &#39;git status&#39; all my &quot;core&quot;content was under the list heading &quot;Changes not staged for commit:&quot; which sounds good. I then added &#39;core&#39; to my .gitignore. and ran &#39;git status&#39; again, but the files kept appearing in the &quot;not staged for commit&quot; list. I&#39;d rather git does not even see them but I can&#39;t figure out how to do that?"
          },
          {
            "owner": {
              "badge_counts": {
                "bronze": 13,
                "silver": 3,
                "gold": 0
              },
              "reputation": 387,
              "user_id": 5163194,
              "profile_image": "https://i.stack.imgur.com/a8Rdo.jpg?s=128&g=1",
              "display_name": "100pic"
            },
            "score": 2,
            "creation_date": 1566361555,
            "comment_id": 101627173,
            "body": "I&#39;ve googled &amp; hit this page about 50 times, and I always chuckle at the first line of code <code>git commit -m &quot;Something terribly misguided&quot;</code>"
          },
          {
            "owner": {
              "badge_counts": {
                "bronze": 22,
                "silver": 9,
                "gold": 1
              },
              "reputation": 1598,
              "user_id": 10048799,
              "profile_image": "https://www.gravatar.com/avatar/43e3b78b616247e7b5a2fcfde299bcfb?s=128&d=identicon&r=PG&f=1",
              "display_name": "kaleidawave"
            },
            "score": 3,
            "creation_date": 1573222771,
            "comment_id": 103822331,
            "body": "Running the first command gives <code>fatal: ambiguous argument &#39;HEAD~&#39;: unknown revision or path not in the working tree.</code>"
          },
          {
            "owner": {
              "badge_counts": {
                "bronze": 38,
                "silver": 42,
                "gold": 1
              },
              "reputation": 13496,
              "user_id": 452587,
              "profile_image": "https://www.gravatar.com/avatar/2f3d521daf2fca0116987e9c8354ec55?s=128&d=identicon&r=PG",
              "display_name": "thdoan"
            },
            "score": 1,
            "creation_date": 1576027062,
            "comment_id": 104762108,
            "body": "By accident I did <code>git commit -m &#39;...&#39; files</code> without first doing <code>git add files</code> and noticed that that commit and push worked fine. I guess git is now smart enough to do an add automatically when you use <code>git commit</code>."
          }
        ],
        "owner": {
          "badge_counts": {
            "bronze": 124,
            "silver": 106,
            "gold": 13
          },
          "reputation": 70463,
          "user_id": 62130,
          "profile_image": "https://www.gravatar.com/avatar/520c9c078b8d25980de17b8d4fe0ceba?s=128&d=identicon&r=PG",
          "display_name": "Esko Luontola"
        },
        "is_accepted": true,
        "score": 23704,
        "last_activity_date": 1604380808,
        "creation_date": 1243620822,
        "answer_id": 927386,
        "body": "<h1>Undo a commit &amp; redo</h1>\n<pre class=\"lang-sh prettyprint-override\"><code>$ git commit -m &quot;Something terribly misguided&quot; # (0: Your Accident)\n$ git reset HEAD~                              # (1)\n&lt;&lt; edit files as necessary &gt;&gt;                  # (2)\n$ git add .                                    # (3)\n$ git commit -c ORIG_HEAD                      # (4)\n</code></pre>\n<ol>\n<li><p>This command is responsible for the <strong>undo</strong>. It will undo your last commit while <strong>leaving your working tree (the state of your files on disk) untouched.</strong> You'll need to add them again before you can commit them again).</p>\n</li>\n<li><p>Make corrections to working tree files.</p>\n</li>\n<li><p><code>git add</code> anything that you want to include in your new commit.</p>\n</li>\n<li><p>Commit the changes, reusing the old commit message. <code>reset</code> copied the old head to <code>.git/ORIG_HEAD</code>; <code>commit</code> with <code>-c ORIG_HEAD</code> will open an editor, which initially contains the log message from the old commit and allows you to edit it. If you do not need to edit the message, you could use the <code>-C</code> option.</p>\n</li>\n</ol>\n<p><strong>Alternatively, to edit the previous commit (or just its commit message)</strong>, <code>commit --amend</code> will add changes within the current index to the previous commit.</p>\n<p><strong>To remove (not revert) a commit that has been pushed to the server</strong>, rewriting history with <code>git push origin master --force</code> is necessary.</p>\n<hr />\n<h2>Further Reading</h2>\n<p><a href=\"https://stackoverflow.com/questions/34519665/how-to-move-head-back-to-a-previous-location-detached-head/34519716#34519716\">How can I move HEAD back to a previous location? (Detached head) &amp; Undo commits</a></p>\n<p>The above answer will show you <code>git reflog</code>, which you can use to determine the SHA-1 for the commit to which you wish to revert. Once you have this value, use the sequence of commands as explained above.</p>\n<hr />\n<p><code>HEAD~</code> is the same as <code>HEAD~1</code>. The article <a href=\"https://stackoverflow.com/a/46350644/5175709\">What is the HEAD in git?</a> is helpful if you want to uncommit multiple commits.</p>\n"
      },
      {
        "comments": [
          {
            "owner": {
              "badge_counts": {
                "bronze": 31,
                "silver": 12,
                "gold": 2
              },
              "reputation": 2426,
              "user_id": 3031010,
              "profile_image": "https://www.gravatar.com/avatar/ffa38568c216231682287c3ee73d2783?s=128&d=identicon&r=PG&f=1",
              "display_name": "egorlitvinenko"
            },
            "score": 4,
            "creation_date": 1589536991,
            "comment_id": 109339551,
            "body": "FYI: This removes all my files and I lost changes."
          },
          {
            "owner": {
              "badge_counts": {
                "bronze": 31,
                "silver": 12,
                "gold": 2
              },
              "reputation": 2426,
              "user_id": 3031010,
              "profile_image": "https://www.gravatar.com/avatar/ffa38568c216231682287c3ee73d2783?s=128&d=identicon&r=PG&f=1",
              "display_name": "egorlitvinenko"
            },
            "score": 0,
            "creation_date": 1589541956,
            "comment_id": 109341955,
            "body": "UPD: However, I&#39;ve restored it using reflog. But the receipt did not work for the initial commit."
          },
          {
            "owner": {
              "badge_counts": {
                "bronze": 12,
                "silver": 2,
                "gold": 0
              },
              "reputation": 133,
              "user_id": 4288004,
              "profile_image": "https://www.gravatar.com/avatar/c71a13ea10117773c01ac54bd2ca2a57?s=128&d=identicon&r=PG&f=1",
              "display_name": "xuiqzy"
            },
            "score": 3,
            "creation_date": 1589882455,
            "comment_id": 109462491,
            "body": "Use <code>git rm --cached</code> to keep the files in the filesystem and only delete them from the git index!"
          }
        ],
        "owner": {
          "badge_counts": {
            "bronze": 310,
            "silver": 237,
            "gold": 27
          },
          "reputation": 198596,
          "user_id": 36723,
          "profile_image": "https://www.gravatar.com/avatar/d5a138149601087e78436b67718578cd?s=128&d=identicon&r=PG",
          "display_name": "bdonlan"
        },
        "is_accepted": false,
        "score": 1774,
        "last_activity_date": 1476254755,
        "creation_date": 1243620986,
        "answer_id": 927397,
        "body": "<p>Add/remove files to get things the way you want:</p>\n\n<pre><code>git rm classdir\ngit add sourcedir\n</code></pre>\n\n<p>Then amend the commit:</p>\n\n<pre><code>git commit --amend\n</code></pre>\n\n<p>The previous, erroneous commit will be edited to reflect the new index state - in other words, it'll be like you never made the mistake in the first place.</p>\n\n<p>Note that you should only do this if you haven't pushed yet. If you have pushed, then you'll just have to commit a fix normally.</p>\n"
      },
      {
        "comments": [
          {
            "owner": {
              "badge_counts": {
                "bronze": 65,
                "silver": 79,
                "gold": 8
              },
              "reputation": 22236,
              "user_id": 4880924,
              "profile_image": "https://www.gravatar.com/avatar/d40e83be235d4f70428da0d42e12d427?s=128&d=identicon&r=PG&f=1",
              "display_name": "BKSpurgeon"
            },
            "score": 3,
            "creation_date": 1533712260,
            "comment_id": 90441122,
            "body": "For those reading in future - please note that <code>git revert</code> is a separate command - which basically &#39;resets&#39; a single commimt."
          }
        ],
        "owner": {
          "badge_counts": {
            "bronze": 90,
            "silver": 70,
            "gold": 10
          },
          "reputation": 37732,
          "user_id": 405550,
          "profile_image": "https://www.gravatar.com/avatar/7bc4d5f38183597c6e47f3f6f3be2ff6?s=128&d=identicon&r=PG",
          "display_name": "Zaz"
        },
        "is_accepted": false,
        "score": 803,
        "last_activity_date": 1574343642,
        "creation_date": 1280569153,
        "answer_id": 3377569,
        "body": "<h2>To change the last commit</h2>\n\n<p>Replace the files in the index:</p>\n\n<pre><code>git rm --cached *.class\ngit add *.java\n</code></pre>\n\n<p>Then, if it's a private branch, <strong>amend</strong> the commit:</p>\n\n<pre><code>git commit --amend\n</code></pre>\n\n<p>Or, if it's a shared branch, make a new commit:</p>\n\n<pre><code>git commit -m 'Replace .class files with .java files'\n</code></pre>\n\n<p><br/></p>\n\n<p><em>(<strong>To change a previous commit</strong>, use the awesome <a href=\"https://stackoverflow.com/a/28421811/405550\">interactive rebase</a>.)</em></p>\n\n<hr>\n\n<p>ProTip™: Add <code>*.class</code> to a <a href=\"https://help.github.com/articles/ignoring-files\" rel=\"noreferrer\">gitignore</a> to stop this happening again.</p>\n\n<hr>\n\n<h2>To revert a commit</h2>\n\n<p>Amending a commit is the ideal solution if you need to change the last commit, but a more general solution is <code>reset</code>.</p>\n\n<p>You can reset Git to any commit with:</p>\n\n<pre><code>git reset @~N\n</code></pre>\n\n<p>Where <code>N</code> is the number of commits before <code>HEAD</code>, and <code>@~</code> resets to the previous commit.</p>\n\n<p>So, instead of amending the commit, you could use:</p>\n\n<pre><code>git reset @~\ngit add *.java\ngit commit -m \"Add .java files\"\n</code></pre>\n\n<p>Check out <code>git help reset</code>, specifically the sections on <code>--soft</code> <code>--mixed</code> and <code>--hard</code>, for a better understanding of what this does.</p>\n\n<h2>Reflog</h2>\n\n<p>If you mess up, you can always use the reflog to find dropped commits:</p>\n\n<pre><code>$ git reset @~\n$ git reflog\nc4f708b HEAD@{0}: reset: moving to @~\n2c52489 HEAD@{1}: commit: added some .class files\n$ git reset 2c52489\n... and you're back where you started\n</code></pre>\n\n<p><br/></p>\n"
      },
      {
        "comments": [
          {
            "owner": {
              "badge_counts": {
                "bronze": 229,
                "silver": 151,
                "gold": 38
              },
              "reputation": 37935,
              "user_id": 149008,
              "profile_image": "https://www.gravatar.com/avatar/1a8bd268a2ee0c608ced29e192ffec73?s=128&d=identicon&r=PG",
              "display_name": "nacho4d"
            },
            "score": 110,
            "creation_date": 1310632373,
            "comment_id": 7916341,
            "body": "I found this answer the clearest. <code>git revert HEAD^</code> is not the previous, is the previous of the previous. I did : <code>git revert HEAD</code> and then push again and it worked :)"
          },
          {
            "owner": {
              "badge_counts": {
                "bronze": 30,
                "silver": 20,
                "gold": 0
              },
              "reputation": 1402,
              "user_id": 823470,
              "profile_image": "https://i.stack.imgur.com/z21vL.png?s=128&g=1",
              "display_name": "tar"
            },
            "score": 4,
            "creation_date": 1583423409,
            "comment_id": 107119451,
            "body": "If Git asks you &quot;More?&quot; when you try these commands, use the alternate syntax on this answer: <a href=\"https://stackoverflow.com/a/14204318/823470\">stackoverflow.com/a/14204318/823470</a>"
          }
        ],
        "owner": {
          "badge_counts": {
            "bronze": 665,
            "silver": 481,
            "gold": 181
          },
          "reputation": 187148,
          "user_id": 48523,
          "profile_image": "https://www.gravatar.com/avatar/1c787bc735dbe80ec2f88824e1d10c6c?s=128&d=identicon&r=PG",
          "display_name": "Andrew"
        },
        "is_accepted": false,
        "score": 2222,
        "last_activity_date": 1574343774,
        "creation_date": 1308245243,
        "answer_id": 6376039,
        "body": "<p>There are two ways to &quot;undo&quot; your last commit, depending on whether or not you have already made your commit public (pushed to your remote repository):</p>\n<h2>How to undo a local commit</h2>\n<p>Let's say I committed locally, but now I want to remove that commit.</p>\n<pre><code>git log\n    commit 101: bad commit    # Latest commit. This would be called 'HEAD'.\n    commit 100: good commit   # Second to last commit. This is the one we want.\n</code></pre>\n<p>To restore everything back to the way it was prior to the last commit, we need to <code>reset</code> to the commit before <code>HEAD</code>:</p>\n<pre><code>git reset --soft HEAD^     # Use --soft if you want to keep your changes\ngit reset --hard HEAD^     # Use --hard if you don't care about keeping the changes you made\n</code></pre>\n<p>Now <code>git log</code> will show that our last commit has been removed.</p>\n<h2>How to undo a public commit</h2>\n<p>If you have already made your commits public, you will want to create a new commit which will &quot;revert&quot; the changes you made in your previous commit (current HEAD).</p>\n<pre><code>git revert HEAD\n</code></pre>\n<p>Your changes will now be reverted and ready for you to commit:</p>\n<pre><code>git commit -m 'restoring the file I removed by accident'\ngit log\n    commit 102: restoring the file I removed by accident\n    commit 101: removing a file we don't need\n    commit 100: adding a file that we need\n</code></pre>\n<p>For more information, check out <em><a href=\"https://git-scm.com/book/en/v2/Git-Basics-Undoing-Things\" rel=\"noreferrer\">Git Basics - Undoing Things</a></em>.</p>\n"
      },
      {
        "comments": [
          {
            "owner": {
              "badge_counts": {
                "bronze": 119,
                "silver": 66,
                "gold": 13
              },
              "reputation": 9253,
              "user_id": 267197,
              "profile_image": "https://www.gravatar.com/avatar/9e8f0978ff9aefa02e1633c3f77dc1ba?s=128&d=identicon&r=PG",
              "display_name": "dma_k"
            },
            "score": 2,
            "creation_date": 1330176691,
            "comment_id": 11944691,
            "body": "@Kyralessa: If I do <code>git reset --hard HEAD^</code> twice, will the state shift to <code>(A)</code>?"
          },
          {
            "owner": {
              "badge_counts": {
                "bronze": 146,
                "silver": 119,
                "gold": 16
              },
              "reputation": 31897,
              "user_id": 153422,
              "profile_image": "https://www.gravatar.com/avatar/8033fa6d00ea3c5a231a31ca1989fd78?s=128&d=identicon&r=PG&f=1",
              "display_name": "Adam"
            },
            "score": 0,
            "creation_date": 1340362420,
            "comment_id": 14626749,
            "body": "Doesn&#39;t work with OS x. - I get &quot;ambiguous argument &#39;HEAD^&#39; ... Unknow revision or  path not in the working tree&quot;. Using he tilde version makes no difference. But git log and git status both appear to show there is a valid commit in place"
          },
          {
            "owner": {
              "badge_counts": {
                "bronze": 146,
                "silver": 119,
                "gold": 16
              },
              "reputation": 31897,
              "user_id": 153422,
              "profile_image": "https://www.gravatar.com/avatar/8033fa6d00ea3c5a231a31ca1989fd78?s=128&d=identicon&r=PG&f=1",
              "display_name": "Adam"
            },
            "score": 1,
            "creation_date": 1340368531,
            "comment_id": 14629085,
            "body": "@Kyralessa - yes, I think that might be the problem. In this case, I committed something I thought was small - and when I tried to Push, I found it was 400 MB of data (!) (a deep nested Resources folder containing video and music files). So, I need to undo the commit, but keep the source files, and I&#39;ll commit them later, when I have better net connection - or to a different repo."
          },
          {
            "owner": {
              "badge_counts": {
                "bronze": 22,
                "silver": 11,
                "gold": 0
              },
              "reputation": 1031,
              "user_id": 57001,
              "profile_image": "https://i.stack.imgur.com/6iwLu.jpg?s=128&g=1",
              "display_name": "TwainJ"
            },
            "score": 1,
            "creation_date": 1351577389,
            "comment_id": 17861647,
            "body": "My thanks also for the explanation. Question about this statement though (re --hard) : &quot;your files are reset to their state at commit B&quot;. Say I had only committed some of my modifications, other files being intended for future commits. How much am I resetting?  Just the committed files? Or do I reset my whole working set?"
          },
          {
            "owner": {
              "badge_counts": {
                "bronze": 45,
                "silver": 32,
                "gold": 11
              },
              "reputation": 3420,
              "user_id": 327547,
              "profile_image": "https://www.gravatar.com/avatar/906a618517b4f18e732e4c66adff1df4?s=128&d=identicon&r=PG",
              "display_name": "Danny"
            },
            "score": 3,
            "creation_date": 1359747589,
            "comment_id": 20476738,
            "body": "Since so many people are supportive of the answer, I offer this feedback: write a quickly-readable and easily-executed set of instructions that I can run to fix my problem.  The other answer has it; this one does not."
          },
          {
            "owner": {
              "badge_counts": {
                "bronze": 25,
                "silver": 7,
                "gold": 0
              },
              "reputation": 1078,
              "user_id": 655582,
              "profile_image": "https://i.stack.imgur.com/il4pK.jpg?s=128&g=1",
              "display_name": "Chris Kerekes"
            },
            "score": 28,
            "creation_date": 1361385995,
            "comment_id": 21048262,
            "body": "BEWARE! This might not do what you expect if your erroneous commit was a (fast-forward) merge! If your head is on a merge commit (ex: merged branch feature into master), <code>git reset --hard~1</code> will point the master branch to the last commit inside the feature branch. In this case the specific commit ID should be used instead of the relative command."
          },
          {
            "owner": {
              "badge_counts": {
                "bronze": 25,
                "silver": 7,
                "gold": 0
              },
              "reputation": 1078,
              "user_id": 655582,
              "profile_image": "https://i.stack.imgur.com/il4pK.jpg?s=128&g=1",
              "display_name": "Chris Kerekes"
            },
            "score": 1,
            "creation_date": 1361455528,
            "comment_id": 21076580,
            "body": "Upon further thought this behaviour nay have been a result of merging the master branch into the feature branch first, testing and then (fast-forward) merging the feature branch into the master."
          },
          {
            "owner": {
              "badge_counts": {
                "bronze": 362,
                "silver": 255,
                "gold": 58
              },
              "reputation": 156668,
              "user_id": 425275,
              "profile_image": "https://www.gravatar.com/avatar/a9db2cbc6d4e589aec2d25f67771b85e?s=128&d=identicon&r=PG",
              "display_name": "Šime Vidas"
            },
            "score": 4,
            "creation_date": 1376404646,
            "comment_id": 26693726,
            "body": "Consider noting that the number in <code>HEAD~1</code> can be substituted to any positive integer, e.g. <code>HEAD~3</code>. It may seem obvious, but beginners (like me) are very careful when running git commands, so they may not want to risk messing something up by testing this stuff themselves."
          },
          {
            "owner": {
              "badge_counts": {
                "bronze": 87,
                "silver": 53,
                "gold": 9
              },
              "reputation": 13628,
              "user_id": 554807,
              "profile_image": "https://www.gravatar.com/avatar/11449ff391eb9e813ac9f467ae6e0102?s=128&d=identicon&r=PG",
              "display_name": "GreenAsJade"
            },
            "score": 1,
            "creation_date": 1378350654,
            "comment_id": 27421905,
            "body": "Could someone comment on &quot;what if you have already pushed the commit?&quot;.  Is this answer still valid, or does that make it all more difficult?"
          },
          {
            "owner": {
              "badge_counts": {
                "bronze": 46,
                "silver": 18,
                "gold": 0
              },
              "reputation": 3254,
              "user_id": 1666676,
              "profile_image": "https://i.stack.imgur.com/EQ9IF.jpg?s=128&g=1",
              "display_name": "Phlucious"
            },
            "score": 1,
            "creation_date": 1382651660,
            "comment_id": 29054981,
            "body": "Great tip. Just used it, though I think it&#39;s relevant to note that any tags associated with the deleted commit will continue to exist, even though it won&#39;t appear in gitk. Delete it with &quot;git tag -d XXXXX&quot; where XXXXX is the tag name."
          },
          {
            "owner": {
              "badge_counts": {
                "bronze": 44,
                "silver": 36,
                "gold": 2
              },
              "reputation": 4545,
              "user_id": 175169,
              "profile_image": "https://www.gravatar.com/avatar/d5a44226e7d4f3e9638ece0c8882d6bf?s=128&d=identicon&r=PG",
              "display_name": "FractalSpace"
            },
            "score": 115,
            "creation_date": 1383954198,
            "comment_id": 29556901,
            "body": "Missing a crucial point: If the said commit was previously &#39;pushed&#39; to the remote, any &#39;undo&#39; operation, no matter how simple, will cause enormous pain and suffering to the rest of the users who have this commit in their local copy, when they do a &#39;git pull&#39; in the future.  So, if the commit was already &#39;pushed&#39;, do this instead:      git revert &lt;bad-commit-sha1-id&gt;     git push origin :"
          },
          {
            "owner": {
              "badge_counts": {
                "bronze": 203,
                "silver": 170,
                "gold": 32
              },
              "reputation": 182470,
              "user_id": 5486,
              "profile_image": "https://www.gravatar.com/avatar/750159e9cdab58c4b6547d382311c9af?s=128&d=identicon&r=PG",
              "display_name": "Ryan Lundy"
            },
            "score": 19,
            "creation_date": 1383955210,
            "comment_id": 29557201,
            "body": "@FractalSpace, it won&#39;t cause &quot;enormous pain and suffering.&quot;  I&#39;ve done a few force pushes when using Git with a team.  All it takes is communication."
          },
          {
            "owner": {
              "badge_counts": {
                "bronze": 44,
                "silver": 36,
                "gold": 2
              },
              "reputation": 4545,
              "user_id": 175169,
              "profile_image": "https://www.gravatar.com/avatar/d5a44226e7d4f3e9638ece0c8882d6bf?s=128&d=identicon&r=PG",
              "display_name": "FractalSpace"
            },
            "score": 20,
            "creation_date": 1383966171,
            "comment_id": 29559369,
            "body": "@Kyralessa In my workplace, messing up entire team&#39;s workflow and then telling them how to fix sh*t is not called &#39;communication&#39;. git history re-write is a destructive operation that results in trashing of parts of the repo. Insisting on its use, while clear and safe alternatives are available is simply irresponsible."
          },
          {
            "owner": {
              "badge_counts": {
                "bronze": 79,
                "silver": 42,
                "gold": 8
              },
              "reputation": 5673,
              "user_id": 631051,
              "profile_image": "https://www.gravatar.com/avatar/88a9701bb32b465a3b8357a2aa092815?s=128&d=identicon&r=PG",
              "display_name": "Ellen Spertus"
            },
            "score": 1,
            "creation_date": 1392893296,
            "comment_id": 33174352,
            "body": "@Kyralessa, I have a question about your answer.  You say that &quot;git reset --soft&quot; &quot;not only leaves your files alone, it even leaves your index alone. When you do git status, you&#39;ll see that the same files are in the index as before. In fact, right after this command, you could do git commit and you&#39;d be redoing the same commit you just had.&quot;  But if &quot;git reset --soft&quot; doesn&#39;t change the index, &quot;git commit&quot; wouldn&#39;t do anything.  Do you mean &quot;git commit -a&quot; (assuming there had been no changes in the working directory beforehand) or am I missing something (likelier)?"
          },
          {
            "owner": {
              "badge_counts": {
                "bronze": 203,
                "silver": 170,
                "gold": 32
              },
              "reputation": 182470,
              "user_id": 5486,
              "profile_image": "https://www.gravatar.com/avatar/750159e9cdab58c4b6547d382311c9af?s=128&d=identicon&r=PG",
              "display_name": "Ryan Lundy"
            },
            "score": 3,
            "creation_date": 1392906536,
            "comment_id": 33183713,
            "body": "@espertus, perhaps one way to look at it is that there are three things working here: Your files, your index, and your history (that is, your branch pointer).  Let&#39;s say you&#39;re at commit C (as above).  Your files, index, and branch pointer match.  If you use git reset --soft HEAD~1, your branch pointer moves back to B, but your files and index stay at their versions in C.  If you use git reset --mixed HEAD~1, your branch pointer and index move back to B, but your files stay in their state at C.  Then your files show changes but your index doesn&#39;t.  git reset --hard HEAD~1 moves all three back."
          },
          {
            "owner": {
              "badge_counts": {
                "bronze": 79,
                "silver": 42,
                "gold": 8
              },
              "reputation": 5673,
              "user_id": 631051,
              "profile_image": "https://www.gravatar.com/avatar/88a9701bb32b465a3b8357a2aa092815?s=128&d=identicon&r=PG",
              "display_name": "Ellen Spertus"
            },
            "score": 1,
            "creation_date": 1392912519,
            "comment_id": 33188594,
            "body": "@Kyralessa, thanks so much for the quick reply.  When I woke up, I realized what I was missing. I assumed that the index is empty when everything is committed, but now I understand it&#39;s a copy."
          },
          {
            "owner": {
              "badge_counts": {
                "bronze": 27,
                "silver": 12,
                "gold": 1
              },
              "reputation": 1608,
              "user_id": 2012372,
              "profile_image": "https://www.gravatar.com/avatar/d24ee53faff01ecc7529ba806334cda9?s=128&d=identicon&r=PG",
              "display_name": "fspinnenhirn"
            },
            "score": 3,
            "creation_date": 1408417984,
            "comment_id": 39570655,
            "body": "<a href=\"http://git-scm.com/blog/2011/07/11/reset.html\" rel=\"nofollow noreferrer\">Reset demystified</a> by Scott Chacon (GitHub CIO, <i>Pro Git</i> author) explains and illustrates the <code>git reset</code> command and how to move the HEAD (<code>--soft</code>), update the index (<code>--mixed</code>, <i>default</i>) and update the working directory (<code>--hard</code>), from the bottom up.  I&#39;ve always used Kyralessa&#39;s answer as a cheat sheet, but Scott&#39;s blog post finally made it click and stick!"
          },
          {
            "owner": {
              "badge_counts": {
                "bronze": 58,
                "silver": 38,
                "gold": 6
              },
              "reputation": 11068,
              "user_id": 2790048,
              "profile_image": "https://i.stack.imgur.com/OZndo.png?s=128&g=1",
              "display_name": "Nick Volynkin"
            },
            "score": 1,
            "creation_date": 1436180949,
            "comment_id": 50485988,
            "body": "Adopted your illustrations with some improvements. <a href=\"http://ru.stackoverflow.com/a/431521/181472\">ru.stackoverflow.com/a/431521/181472</a>"
          },
          {
            "owner": {
              "badge_counts": {
                "bronze": 124,
                "silver": 70,
                "gold": 13
              },
              "reputation": 13201,
              "user_id": 1509695,
              "profile_image": "https://www.gravatar.com/avatar/04a3ca8cd41bf8e170b901072fcc667f?s=128&d=identicon&r=PG",
              "display_name": "matanster"
            },
            "score": 1,
            "creation_date": 1444929006,
            "comment_id": 54118238,
            "body": "link about <code>index</code> added in context, plus comment about backing up your entire project as a precaution @Kidburla."
          },
          {
            "owner": {
              "badge_counts": {
                "bronze": 107,
                "silver": 89,
                "gold": 9
              },
              "reputation": 20868,
              "user_id": 2166823,
              "profile_image": "https://www.gravatar.com/avatar/7211df2b87d2241696d2c8e8be35585c?s=128&d=identicon&r=PG",
              "display_name": "joelostblom"
            },
            "score": 1,
            "creation_date": 1483758748,
            "comment_id": 70241130,
            "body": "In addition to the illustrations here, there are some intuitive graphical ones <a href=\"https://www.atlassian.com/git/tutorials/resetting-checking-out-and-reverting/commit-level-operations\" rel=\"nofollow noreferrer\">in this post</a>"
          },
          {
            "owner": {
              "badge_counts": {
                "bronze": 134,
                "silver": 78,
                "gold": 15
              },
              "reputation": 44940,
              "user_id": 1281485,
              "profile_image": "https://i.stack.imgur.com/G4LdD.jpg?s=128&g=1",
              "display_name": "Alfe"
            },
            "score": 1,
            "creation_date": 1505304583,
            "comment_id": 79356672,
            "body": "@Kyralessa I see.  But is it better to talk of &quot;shas&quot; than of &quot;hashes&quot;?  The git man page mentions only hashes and &quot;SHA-1 hashes&quot;.  The question is rather:  What improves the answer most?"
          },
          {
            "owner": {
              "badge_counts": {
                "bronze": 66,
                "silver": 40,
                "gold": 4
              },
              "reputation": 4081,
              "user_id": 4242086,
              "profile_image": "https://i.stack.imgur.com/gSgFW.png?s=128&g=1",
              "display_name": "Jaime Montoya"
            },
            "score": 2,
            "creation_date": 1506555343,
            "comment_id": 79872871,
            "body": "What is the difference between <code>git reset --hard HEAD~1</code> and <code>git reset --hard</code>, if what you need is to simply get rid of all of the changes you made after your latest commit? I always use <code>git reset --hard</code> and it takes me back to my latest commit. For an analogy, I feel that it is kind of closing an application without saving changes so that everything that was on RAM memory is lost, but what you had on ROM memory is kept, using your latest commit as the ROM memory in this analogy, and your changes that have not been committed as stuff in the RAM memory that has not been saved yet."
          },
          {
            "owner": {
              "badge_counts": {
                "bronze": 66,
                "silver": 40,
                "gold": 4
              },
              "reputation": 4081,
              "user_id": 4242086,
              "profile_image": "https://i.stack.imgur.com/gSgFW.png?s=128&g=1",
              "display_name": "Jaime Montoya"
            },
            "score": 1,
            "creation_date": 1506610843,
            "comment_id": 79899731,
            "body": "Citing @poorva from comments in other posts below: &#39;To undo latest changes you can use git reset --hard , but if you have to hard remove last &quot;n&quot; commits you specify a SHA&#39;."
          },
          {
            "owner": {
              "badge_counts": {
                "bronze": 20,
                "silver": 3,
                "gold": 1
              },
              "reputation": 377,
              "user_id": 2035417,
              "profile_image": "https://www.gravatar.com/avatar/be22c7b705fa45820b740d9256e1593e?s=128&d=identicon&r=PG",
              "display_name": "ruckc"
            },
            "score": 1,
            "creation_date": 1508877148,
            "comment_id": 80786478,
            "body": "Can you rearrange the post to make the --soft the first suggestion shown?  One of our engineers didn&#39;t read the full article and used --hard on a shared working directory, which luckily only cost us one day of work.  - Thanks.  P.S. Yes, we know using shared working directories are bad practice, but this isn&#39;t storing code, but puppet configuration."
          },
          {
            "owner": {
              "badge_counts": {
                "bronze": 36,
                "silver": 24,
                "gold": 2
              },
              "reputation": 2569,
              "user_id": 416122,
              "profile_image": "https://www.gravatar.com/avatar/2f5883c65768f5146bc6b79cce8bc29a?s=128&d=identicon&r=PG",
              "display_name": "gangelo"
            },
            "score": 1,
            "creation_date": 1513716799,
            "comment_id": 82756723,
            "body": "I&#39;m trying git reset --soft HEAD~1 and I keep getting the following, why?: fatal: ambiguous argument &#39;HEAD~1&#39;: unknown revision or path not in the working tree. Use &#39;--&#39; to separate paths from revisions, like this: &#39;git &lt;command&gt; [&lt;revision&gt;...] -- [&lt;file&gt;...]&#39;"
          },
          {
            "owner": {
              "badge_counts": {
                "bronze": 203,
                "silver": 170,
                "gold": 32
              },
              "reputation": 182470,
              "user_id": 5486,
              "profile_image": "https://www.gravatar.com/avatar/750159e9cdab58c4b6547d382311c9af?s=128&d=identicon&r=PG",
              "display_name": "Ryan Lundy"
            },
            "score": 0,
            "creation_date": 1513717553,
            "comment_id": 82757044,
            "body": "@gangelo, how many commits do you have in your repository?  More than one?  It&#39;s hard to reset back before <i>any</i> commits, so I usually start a repo with a &quot;dummy&quot; commit (such as an empty .gitignore file) to get around this type of problem."
          },
          {
            "owner": {
              "badge_counts": {
                "bronze": 36,
                "silver": 24,
                "gold": 2
              },
              "reputation": 2569,
              "user_id": 416122,
              "profile_image": "https://www.gravatar.com/avatar/2f5883c65768f5146bc6b79cce8bc29a?s=128&d=identicon&r=PG",
              "display_name": "gangelo"
            },
            "score": 0,
            "creation_date": 1513718881,
            "comment_id": 82757583,
            "body": "@Kyralessa I only have 1 commit but it&#39;s not pushed because, oddly enough, I need to pull down my .gitignore file from my repository. I guess I can commit and apply the .gitignore after the fact, but I don&#39;t remember how to do that and remember it being a hassle. I only want to undo the commit I have to a point where if I do &#39;git status&#39; I&#39;ll see all my files tracked, and ready to commit as if it never happened."
          },
          {
            "owner": {
              "badge_counts": {
                "bronze": 203,
                "silver": 170,
                "gold": 32
              },
              "reputation": 182470,
              "user_id": 5486,
              "profile_image": "https://www.gravatar.com/avatar/750159e9cdab58c4b6547d382311c9af?s=128&d=identicon&r=PG",
              "display_name": "Ryan Lundy"
            },
            "score": 0,
            "creation_date": 1513756785,
            "comment_id": 82769068,
            "body": "@gangelo, have a look here for some ideas about how to revert that first commit: <a href=\"https://stackoverflow.com/questions/6632191/how-to-revert-initial-git-commit\" title=\"how to revert initial git commit\">stackoverflow.com/questions/6632191/&hellip;</a>"
          },
          {
            "owner": {
              "badge_counts": {
                "bronze": 3,
                "silver": 1,
                "gold": 0
              },
              "reputation": 101,
              "user_id": 6837661,
              "profile_image": "https://www.gravatar.com/avatar/358c48722e2abbed5bc68ed46f524933?s=128&d=identicon&r=PG&f=1",
              "display_name": "briefy"
            },
            "score": 0,
            "creation_date": 1541564867,
            "comment_id": 93257011,
            "body": "- git reset --hard HEAD~1, will go back to one commit and delete all file git knows about, but not untracked files, since git got no idea of them.          - git reset HEAD~1, will keep all the changes of the current commit,but make them untracked  - git reset --soft HEAD~1, will keep your commited files staged and untracked files still untracked"
          },
          {
            "owner": {
              "badge_counts": {
                "bronze": 39,
                "silver": 28,
                "gold": 5
              },
              "reputation": 3174,
              "user_id": 1269953,
              "profile_image": "https://www.gravatar.com/avatar/2da99f47b9afbe1628113966be5c27ce?s=128&d=identicon&r=PG",
              "display_name": "Pztar"
            },
            "score": 0,
            "creation_date": 1547065200,
            "comment_id": 95068021,
            "body": "This is great. Super useful if your last commit was a &quot;wip&quot; but you want to re-organize into more meaningful commits, in which case use. <code>git reset --soft HEAD~1</code>"
          },
          {
            "owner": {
              "badge_counts": {
                "bronze": 4,
                "silver": 1,
                "gold": 0
              },
              "reputation": 153,
              "user_id": 9006048,
              "profile_image": "https://www.gravatar.com/avatar/230bf601419b2022d4ec2c52bb166f66?s=128&d=identicon&r=PG&f=1",
              "display_name": "Murilo"
            },
            "score": 1,
            "creation_date": 1557767357,
            "comment_id": 98867230,
            "body": "As mentioned by @Kidburla, when using <code>git reset --hard HEAD~1</code> deletes the current changes that were not commited. It&#39;s a bit confusing because it seems that (F) is representing these changes and you keep (F) after <code>reset --hard</code>. There should be a warning or something to prevent people from deleting their changes. Or you could also represent the &quot;uncommitted changes&quot; in the examples."
          },
          {
            "owner": {
              "badge_counts": {
                "bronze": 83,
                "silver": 53,
                "gold": 8
              },
              "reputation": 6648,
              "user_id": 114558,
              "profile_image": "https://www.gravatar.com/avatar/bab612017b2cd60149999f197e9e5cc3?s=128&d=identicon&r=PG",
              "display_name": "rinogo"
            },
            "score": 1,
            "creation_date": 1597346171,
            "comment_id": 112110583,
            "body": "Given how many times I&#39;ve Googled this, I think I need to tattoo <code>git reset --soft HEAD~1</code> on the back of my hand."
          }
        ],
        "owner": {
          "badge_counts": {
            "bronze": 203,
            "silver": 170,
            "gold": 32
          },
          "reputation": 182470,
          "user_id": 5486,
          "profile_image": "https://www.gravatar.com/avatar/750159e9cdab58c4b6547d382311c9af?s=128&d=identicon&r=PG",
          "display_name": "Ryan Lundy"
        },
        "is_accepted": false,
        "score": 11000,
        "last_activity_date": 1602265986,
        "creation_date": 1311891740,
        "answer_id": 6866485,
        "body": "<p>Undoing a commit is a little scary if you don't know how it works.  But it's actually amazingly easy if you do understand. I'll show you the 4 different ways you can undo a commit.</p>\n<h3>option 1: <code>git reset --hard</code></h3>\n<p>Say you have this, where C is your HEAD and (F) is the state of your files.</p>\n<pre><code>   (F)\nA-B-C\n    ↑\n  master\n</code></pre>\n<p>You want to <strong>nuke commit C and never see it again and lose all the changes in locally modified files</strong>.  You do this:</p>\n<pre><code>git reset --hard HEAD~1\n</code></pre>\n<p>The result is:</p>\n<pre><code> (F)\nA-B\n  ↑\nmaster\n</code></pre>\n<p>Now B is the HEAD.  Because you used <code>--hard</code>, your files are reset to their state at commit B.</p>\n<h3>option 2: <code>git reset</code></h3>\n<p>Ah, but suppose commit C wasn't a disaster, but just a bit off.  You want to <strong>undo the commit but keep your changes</strong> for a bit of editing before you do a better commit.  Starting again from here, with C as your HEAD:</p>\n<pre><code>   (F)\nA-B-C\n    ↑\n  master\n</code></pre>\n<p>You can do this, leaving off the <code>--hard</code>:</p>\n<pre><code>git reset HEAD~1\n</code></pre>\n<p>In this case the result is:</p>\n<pre><code>   (F)\nA-B-C\n  ↑\nmaster\n</code></pre>\n<p>In both cases, HEAD is just a pointer to the latest commit.  When you do a <code>git reset HEAD~1</code>, you tell Git to move the HEAD pointer back one commit.  But (unless you use <code>--hard</code>) you leave your files as they were.  So now <code>git status</code> shows the changes you had checked into C.  You haven't lost a thing!</p>\n<h3>option 3: <code>git reset --soft</code></h3>\n<p>For the lightest touch, you can even <strong>undo your commit but leave your files and your <a href=\"https://git.wiki.kernel.org/index.php/WhatIsTheIndex\" rel=\"noreferrer\">index</a></strong>:</p>\n<pre><code>git reset --soft HEAD~1\n</code></pre>\n<p>This not only leaves your files alone, it even leaves your <em>index</em> alone.  When you do <code>git status</code>, you'll see that the same files are in the index as before.  In fact, right after this command, you could do <code>git commit</code> and you'd be redoing the same commit you just had.</p>\n<h3>option 4: you did <code>git reset --hard</code> and need to get that code back</h3>\n<p>One more thing: <strong>Suppose you destroy a commit</strong> as in the first example, <strong>but then discover you needed it after all</strong>?  Tough luck, right?</p>\n<p>Nope, there's <em>still</em> a way to get it back.  Type <code>git reflog</code> and you'll see a list of (partial) commit <a href=\"https://en.wikipedia.org/wiki/SHA-1#Data_integrity\" rel=\"noreferrer\">shas</a> (that is, hashes) that you've moved around in.  Find the commit you destroyed, and do this:</p>\n<pre><code>git checkout -b someNewBranchName shaYouDestroyed\n</code></pre>\n<p>You've now resurrected that commit.  Commits don't actually get destroyed in Git for some 90 days, so you can usually go back and rescue one you didn't mean to get rid of.</p>\n"
      },
      {
        "owner": {
          "badge_counts": {
            "bronze": 703,
            "silver": 607,
            "gold": 187
          },
          "reputation": 485443,
          "user_id": 9021,
          "profile_image": "https://www.gravatar.com/avatar/f092dfd45793e9483281d4205b674823?s=128&d=identicon&r=PG",
          "display_name": "nickf"
        },
        "is_accepted": false,
        "score": 524,
        "last_activity_date": 1574343986,
        "creation_date": 1323771511,
        "answer_id": 8487487,
        "body": "<p>If you have <a href=\"https://github.com/visionmedia/git-extras\" rel=\"noreferrer\">Git Extras</a> installed, you can run <code>git undo</code> to undo the latest commit. <code>git undo 3</code> will undo the last three commits.</p>\n"
      },
      {
        "comments": [
          {
            "owner": {
              "badge_counts": {
                "bronze": 124,
                "silver": 95,
                "gold": 17
              },
              "reputation": 15414,
              "user_id": 425313,
              "profile_image": "https://www.gravatar.com/avatar/2fd9754b62b3a6953874f4ef42978e4d?s=128&d=identicon&r=PG",
              "display_name": "Brad Koch"
            },
            "score": 29,
            "creation_date": 1354896132,
            "comment_id": 18924301,
            "body": "Rewriting history on a shared repository is generally a very bad idea.  I assume you know what you&#39;re doing, I just hope future readers do too."
          },
          {
            "owner": {
              "badge_counts": {
                "bronze": 139,
                "silver": 149,
                "gold": 22
              },
              "reputation": 42581,
              "user_id": 78336,
              "profile_image": "https://www.gravatar.com/avatar/896cfc242a7762467c2a0b2af86598e5?s=128&d=identicon&r=PG",
              "display_name": "neoneye"
            },
            "score": 0,
            "creation_date": 1354976083,
            "comment_id": 18944655,
            "body": "Yes rollback is dangerous. Make sure that your working copy is in the desired state before you push. When pushing then the unwanted commits gets deleted permanently."
          },
          {
            "owner": {
              "badge_counts": {
                "bronze": 79,
                "silver": 47,
                "gold": 7
              },
              "reputation": 8522,
              "user_id": 334451,
              "profile_image": "https://www.gravatar.com/avatar/752bf1cd2ef2702724c89f661a5e78d7?s=128&d=identicon&r=PG",
              "display_name": "Mikko Rantalainen"
            },
            "score": 6,
            "creation_date": 1375870225,
            "comment_id": 26496284,
            "body": "&quot;Just like in the real world, if you want to rewrite history, you need a conspiracy: everybody has to be &#39;in&#39; on the conspiracy (at least everybody who knows about the history, i.e. everybody who has ever pulled from the branch).&quot; Source: <a href=\"http://stackoverflow.com/a/2046748/334451\">stackoverflow.com/a/2046748/334451</a>"
          }
        ],
        "owner": {
          "badge_counts": {
            "bronze": 139,
            "silver": 149,
            "gold": 22
          },
          "reputation": 42581,
          "user_id": 78336,
          "profile_image": "https://www.gravatar.com/avatar/896cfc242a7762467c2a0b2af86598e5?s=128&d=identicon&r=PG",
          "display_name": "neoneye"
        },
        "is_accepted": false,
        "score": 489,
        "last_activity_date": 1574344020,
        "creation_date": 1333720732,
        "answer_id": 10044540,
        "body": "<p>I wanted to undo the latest five commits in our shared repository. I looked up the revision id that I wanted to rollback to. Then I typed in the following.</p>\n\n<pre><code>prompt&gt; git reset --hard 5a7404742c85\nHEAD is now at 5a74047 Added one more page to catalogue\nprompt&gt; git push origin master --force\nTotal 0 (delta 0), reused 0 (delta 0)\nremote: bb/acl: neoneye is allowed. accepted payload.\nTo git@bitbucket.org:thecompany/prometheus.git\n + 09a6480...5a74047 master -&gt; master (forced update)\nprompt&gt;\n</code></pre>\n"
      },
      {
        "comments": [
          {
            "owner": {
              "badge_counts": {
                "bronze": 14,
                "silver": 4,
                "gold": 1
              },
              "reputation": 470,
              "user_id": 943022,
              "profile_image": "https://i.stack.imgur.com/FC5fz.jpg?s=128&g=1",
              "display_name": "astronomerdave"
            },
            "score": 17,
            "creation_date": 1421186757,
            "comment_id": 44262353,
            "body": "What does that mean, cherry pick the commit? In my case, I was on the wrong branch when I edited a file. I committed it then realized I was in the wrong branch. Using &quot;git reset --soft HEAD~1&quot; got me back to just before the commit, but now if I checkout the correct branch, how do I undo the changes to the file in wrong branch but instead make them (in the same named file) in the correct branch?"
          },
          {
            "owner": {
              "badge_counts": {
                "bronze": 21,
                "silver": 11,
                "gold": 2
              },
              "reputation": 3003,
              "user_id": 3502119,
              "profile_image": "https://i.stack.imgur.com/zUnLd.jpg?s=128&g=1",
              "display_name": "Casey Robinson"
            },
            "score": 0,
            "creation_date": 1453756036,
            "comment_id": 57732857,
            "body": "I just utilized <code>git revert commit-id</code> worked like a charm.  Of course then you will need to push your changes."
          },
          {
            "owner": {
              "badge_counts": {
                "bronze": 43,
                "silver": 31,
                "gold": 1
              },
              "reputation": 3506,
              "user_id": 1803879,
              "profile_image": "https://www.gravatar.com/avatar/adc631e70ac262fa5fab8bb81f0db715?s=128&d=identicon&r=PG",
              "display_name": "Tom Howard"
            },
            "score": 9,
            "creation_date": 1476987590,
            "comment_id": 67592334,
            "body": "I believe that would be <code>git cherry-pick &lt;&lt;erroneous-commit-sha&gt;&gt;</code> @astronomerdave. From, Mr. Almost-2-Years-Late-to-the-Party."
          },
          {
            "owner": {
              "badge_counts": {
                "bronze": 96,
                "silver": 60,
                "gold": 5
              },
              "reputation": 13914,
              "user_id": 4632019,
              "profile_image": "https://www.gravatar.com/avatar/8937eb40752cf51c7da61bd4a322a4ef?s=128&d=identicon&r=PG&f=1",
              "display_name": "Eugen Konkov"
            },
            "score": 0,
            "creation_date": 1541842738,
            "comment_id": 93361410,
            "body": "@Kris: Instead of cherry-pick use rebase. Because it is advanced cherry-picking"
          },
          {
            "owner": {
              "badge_counts": {
                "bronze": 47,
                "silver": 29,
                "gold": 3
              },
              "reputation": 5209,
              "user_id": 1615183,
              "profile_image": "https://www.gravatar.com/avatar/7567bbb6b4a4a88001bcddefd5d27390?s=128&d=identicon&r=PG",
              "display_name": "Hola Soy Edu Feliz Navidad"
            },
            "score": 0,
            "creation_date": 1580992843,
            "comment_id": 106285588,
            "body": "I&#39;d use revert only if I&#39;ve already pushed my commit. Otherwise, reset is a better option. Don&#39;t forget that revert creates a new commit, and usually this is not the goal."
          }
        ],
        "owner": {
          "badge_counts": {
            "bronze": 91,
            "silver": 55,
            "gold": 10
          },
          "reputation": 23533,
          "user_id": 121531,
          "profile_image": "https://www.gravatar.com/avatar/bcfba9a4b07837ac5c91978191b2cd61?s=128&d=identicon&r=PG",
          "display_name": "Jaco Pretorius"
        },
        "is_accepted": false,
        "score": 711,
        "last_activity_date": 1574344063,
        "creation_date": 1337961869,
        "answer_id": 10757800,
        "body": "<p>Use <code>git revert &lt;commit-id&gt;</code>.</p>\n\n<p>To get the commit ID, just use <code>git log</code>.</p>\n"
      },
      {
        "comments": [
          {
            "owner": {
              "badge_counts": {
                "bronze": 12,
                "silver": 6,
                "gold": 0
              },
              "reputation": 841,
              "user_id": 218572,
              "profile_image": "https://www.gravatar.com/avatar/931ffb230792cfa97135e93087bb5f76?s=128&d=identicon&r=PG",
              "display_name": "FredL"
            },
            "score": 0,
            "creation_date": 1595597022,
            "comment_id": 111538102,
            "body": "I find this really useful for undoing merges/cherry-picks from e.g. an unstable feature branch"
          }
        ],
        "owner": {
          "badge_counts": {
            "bronze": 339,
            "silver": 298,
            "gold": 45
          },
          "reputation": 77091,
          "user_id": 1002260,
          "profile_image": "https://www.gravatar.com/avatar/5ec9c21c8d54825b04def7a41998d18d?s=128&d=identicon&r=PG",
          "display_name": "Steven Penny"
        },
        "is_accepted": false,
        "score": 462,
        "last_activity_date": 1544133560,
        "creation_date": 1351136480,
        "answer_id": 13061212,
        "body": "<p>I prefer to use <code>git rebase -i</code> for this job, because a nice list pops up where I can choose the commits to get rid of. It might not be as direct as some other answers here, but it just <em>feels right</em>.</p>\n\n<p>Choose how many commits you want to list, then invoke like this (to enlist last three)</p>\n\n<pre><code>git rebase -i HEAD~3\n</code></pre>\n\n<p>Sample list</p>\n\n<pre><code>pick aa28ba7 Sanity check for RtmpSrv port\npick c26c541 RtmpSrv version option\npick 58d6909 Better URL decoding support\n</code></pre>\n\n<p>Then Git will remove commits for any line that you remove.</p>\n"
      },
      {
        "comments": [
          {
            "owner": {
              "badge_counts": {
                "bronze": 18,
                "silver": 15,
                "gold": 3
              },
              "reputation": 12664,
              "user_id": 1996609,
              "profile_image": "https://i.stack.imgur.com/831od.jpg?s=128&g=1",
              "display_name": "Madhan Ayyasamy"
            },
            "score": 14,
            "creation_date": 1450107251,
            "comment_id": 56283123,
            "body": "@SMR, In your example, all are pointing into current HEAD only. HEAD^ = HEAD^1. As well as HEAD^1 = HEAD~1.  When you use HEAD~2, there is a difference between ~ and ^ symbols. If you use ~2 means “the first parent of the first parent,” or “the grandparent”."
          }
        ],
        "owner": {
          "badge_counts": {
            "bronze": 18,
            "silver": 15,
            "gold": 3
          },
          "reputation": 12664,
          "user_id": 1996609,
          "profile_image": "https://i.stack.imgur.com/831od.jpg?s=128&g=1",
          "display_name": "Madhan Ayyasamy"
        },
        "is_accepted": false,
        "score": 555,
        "last_activity_date": 1538124239,
        "creation_date": 1359615970,
        "answer_id": 14620228,
        "body": "<p>If you are planning to undo a local commit entirely, whatever you change you did on the commit, and if you don't worry anything about that, just do the following command.</p>\n\n<pre><code>git reset --hard HEAD^1\n</code></pre>\n\n<p>(This command will ignore your entire commit and your changes will be lost completely from your local working tree). If you want to undo your commit, but you want your changes in the staging area (before commit just like after <code>git add</code>) then do the following command.</p>\n\n<pre><code>git reset --soft HEAD^1\n</code></pre>\n\n<p>Now your committed files come into the staging area. Suppose if you want to upstage the files, because you need to edit some wrong content, then do the following command</p>\n\n<pre><code>git reset HEAD\n</code></pre>\n\n<p>Now committed files to come from the staged area into the unstaged area. Now files are ready to edit, so whatever you change, you want to go edit and added it and make a fresh/new commit.</p>\n\n<p><a href=\"http://madhan-tech-updates.blogspot.in/2013/01/how-to-undo-your-local-git-commit.html\" rel=\"noreferrer\">More</a></p>\n"
      },
      {
        "comments": [
          {
            "owner": {
              "badge_counts": {
                "bronze": 130,
                "silver": 118,
                "gold": 11
              },
              "reputation": 37243,
              "user_id": 86967,
              "profile_image": "https://www.gravatar.com/avatar/624a9d99ab6293522102feab52c61f36?s=128&d=identicon&r=PG&f=1",
              "display_name": "Brent Bradburn"
            },
            "score": 11,
            "creation_date": 1413675491,
            "comment_id": 41533928,
            "body": "<code>gitk --all $(git reflog | cut -c1-7)&amp;</code> may be helpful for finding the previous revision if you want to undo an &#39;--amend&#39; commit."
          },
          {
            "owner": {
              "badge_counts": {
                "bronze": 82,
                "silver": 56,
                "gold": 8
              },
              "reputation": 25775,
              "user_id": 85306,
              "profile_image": "https://www.gravatar.com/avatar/4283ac48d7f22118cc4e47a514b3269c?s=128&d=identicon&r=PG",
              "display_name": "Jherico"
            },
            "score": 6,
            "creation_date": 1441342321,
            "comment_id": 52649525,
            "body": "It should be noted that if you&#39;re attempting to remove secret information before pushing to a shared repository, doing a revert won&#39;t help you, because the information will still be in the history in the previous commit.  If you want to ensure the change is never visible to others you need to use <code>git reset</code>"
          },
          {
            "owner": {
              "badge_counts": {
                "bronze": 130,
                "silver": 118,
                "gold": 11
              },
              "reputation": 37243,
              "user_id": 86967,
              "profile_image": "https://www.gravatar.com/avatar/624a9d99ab6293522102feab52c61f36?s=128&d=identicon&r=PG&f=1",
              "display_name": "Brent Bradburn"
            },
            "score": 0,
            "creation_date": 1522249167,
            "comment_id": 86082673,
            "body": "I think &#39;private&#39;/&#39;public&#39; would more correctly be &#39;local&#39;/&#39;remote&#39;."
          },
          {
            "owner": {
              "badge_counts": {
                "bronze": 130,
                "silver": 118,
                "gold": 11
              },
              "reputation": 37243,
              "user_id": 86967,
              "profile_image": "https://www.gravatar.com/avatar/624a9d99ab6293522102feab52c61f36?s=128&d=identicon&r=PG&f=1",
              "display_name": "Brent Bradburn"
            },
            "score": 0,
            "creation_date": 1536322178,
            "comment_id": 91393111,
            "body": "Correcting a private branch in  remote repository can also be done by simply <code>git push origin (branch_name) --force</code>"
          }
        ],
        "owner": {
          "badge_counts": {
            "bronze": 130,
            "silver": 118,
            "gold": 11
          },
          "reputation": 37243,
          "user_id": 86967,
          "profile_image": "https://www.gravatar.com/avatar/624a9d99ab6293522102feab52c61f36?s=128&d=identicon&r=PG&f=1",
          "display_name": "Brent Bradburn"
        },
        "is_accepted": false,
        "score": 440,
        "last_activity_date": 1544162247,
        "creation_date": 1366738065,
        "answer_id": 16175525,
        "body": "<h2>How to fix the previous local commit</h2>\n\n<p>Use git-gui (or similar) to perform a <code>git commit --amend</code>. From the GUI you can add or remove individual files from the commit. You can also modify the commit message. </p>\n\n<h2>How to undo the previous local commit</h2>\n\n<p>Just reset your branch to the previous location (for example, using <code>gitk</code> or <code>git rebase</code>). Then reapply your changes from a saved copy. After garbage collection in your local repository, it will be like the unwanted commit never happened. To do all of that in a single command, use <code>git reset HEAD~1</code>.</p>\n\n<p><strong>Word of warning</strong>: <em>Careless use of <code>git reset</code> is a good way to get your working copy into a confusing state. I recommend that Git novices avoid this if they can.</em></p>\n\n<h2>How to undo a public commit</h2>\n\n<p>Perform a <a href=\"https://stackoverflow.com/a/1624724/86967\">reverse cherry pick</a> (<a href=\"http://git-scm.com/docs/git-revert.html\" rel=\"noreferrer\">git-revert</a>) to undo the changes.</p>\n\n<p>If you haven't yet pulled other changes onto your branch, you can simply do...</p>\n\n<pre><code>git revert --no-edit HEAD\n</code></pre>\n\n<p>Then push your updated branch to the shared repository.</p>\n\n<p><em>The commit history will show both commits, separately</em>.</p>\n\n<hr>\n\n<h2>Advanced: Correction of the <em>private</em> branch in public repository</h2>\n\n<h3><em>This can be dangerous -- be sure you have a local copy of the branch to repush.</em></h3>\n\n<p><em>Also note: You don't want to do this if someone else may be working on the branch.</em></p>\n\n<pre><code>git push --delete (branch_name) ## remove public version of branch\n</code></pre>\n\n<p>Clean up your branch locally then repush...</p>\n\n<pre><code>git push origin (branch_name)\n</code></pre>\n\n<p><em>In the normal case, you probably needn't worry about your private-branch commit history being pristine.  Just push a followup commit (see 'How to undo a public commit' above), and later, do a <a href=\"https://stackoverflow.com/a/22417539/86967\">squash-merge</a> to hide the history.</em></p>\n"
      },
      {
        "owner": {
          "badge_counts": {
            "bronze": 64,
            "silver": 46,
            "gold": 7
          },
          "reputation": 8958,
          "user_id": 811519,
          "profile_image": "https://i.stack.imgur.com/Ubbj9.jpg?s=128&g=1",
          "display_name": "CommaToast"
        },
        "is_accepted": false,
        "score": 162,
        "last_activity_date": 1435138461,
        "creation_date": 1368465145,
        "answer_id": 16527510,
        "body": "<p>Another way:</p>\n\n<p>Checkout the branch you want to revert, then reset your local working copy back to the commit that you want to be the latest one on the remote server (everything after it will go bye-bye). To do this, in SourceTree I right-clicked on the and selected \"Reset BRANCHNAME to this commit\".</p>\n\n<p>Then navigate to your repository's local directory and run this command:</p>\n\n<pre><code>git -c diff.mnemonicprefix=false -c core.quotepath=false push -v -f --tags REPOSITORY_NAME BRANCHNAME:BRANCHNAME\n</code></pre>\n\n<p>This will erase all commits after the current one in your local repository but only for that one branch.</p>\n"
      },
      {
        "owner": {
          "badge_counts": {
            "bronze": 6,
            "silver": 2,
            "gold": 1
          },
          "reputation": 36,
          "user_id": 853293,
          "profile_image": "https://www.gravatar.com/avatar/8bc10fdb11326b4f17550c9e219b4938?s=128&d=identicon&r=PG",
          "display_name": "user853293"
        },
        "is_accepted": false,
        "score": 153,
        "last_activity_date": 1435138458,
        "creation_date": 1368623549,
        "answer_id": 16565962,
        "body": "<p>Type <code>git log</code> and find the last commit hash code and then enter:</p>\n\n<pre><code>git reset &lt;the previous co&gt;\n</code></pre>\n"
      },
      {
        "comments": [
          {
            "owner": {
              "badge_counts": {
                "bronze": 66,
                "silver": 40,
                "gold": 4
              },
              "reputation": 4081,
              "user_id": 4242086,
              "profile_image": "https://i.stack.imgur.com/gSgFW.png?s=128&g=1",
              "display_name": "Jaime Montoya"
            },
            "score": 0,
            "creation_date": 1506555018,
            "comment_id": 79872792,
            "body": "What if you do not use &quot;&lt;commit_id&gt;&quot; and simply use &quot;git reset --hard&quot;? I typically just want to get rid of my latest updates that I have not committed yet and got back to the latest commit I made, and I always use &quot;git reset --hard&quot;."
          },
          {
            "owner": {
              "badge_counts": {
                "bronze": 15,
                "silver": 15,
                "gold": 1
              },
              "reputation": 1285,
              "user_id": 2349141,
              "profile_image": "https://i.stack.imgur.com/jbWDl.jpg?s=128&g=1",
              "display_name": "poorva"
            },
            "score": 6,
            "creation_date": 1506604231,
            "comment_id": 79895034,
            "body": "@JaimeMontoya To undo latest changes you can use <code>git reset --hard</code> , but if you have to hard remove last &quot;n&quot; commits you specify a SHA"
          }
        ],
        "owner": {
          "badge_counts": {
            "bronze": 15,
            "silver": 15,
            "gold": 1
          },
          "reputation": 1285,
          "user_id": 2349141,
          "profile_image": "https://i.stack.imgur.com/jbWDl.jpg?s=128&g=1",
          "display_name": "poorva"
        },
        "is_accepted": false,
        "score": 352,
        "last_activity_date": 1435138455,
        "creation_date": 1368795733,
        "answer_id": 16609755,
        "body": "<p>If you want to permanently undo it and you have cloned some repository </p>\n\n<p>The commit id can be seen by </p>\n\n<pre><code>git log \n</code></pre>\n\n<p>Then you can do -</p>\n\n<pre><code>git reset --hard &lt;commit_id&gt;\n\ngit push origin &lt;branch_name&gt; -f\n</code></pre>\n"
      },
      {
        "owner": {
          "badge_counts": {
            "bronze": 9,
            "silver": 3,
            "gold": 1
          },
          "reputation": 178,
          "user_id": 1243378,
          "profile_image": "https://i.stack.imgur.com/rNPoX.jpg?s=128&g=1",
          "display_name": "Varun Parakh"
        },
        "is_accepted": false,
        "score": 301,
        "last_activity_date": 1435138451,
        "creation_date": 1372414709,
        "answer_id": 17362437,
        "body": "<p>On <a href=\"https://www.atlassian.com/software/sourcetree/overview\">SourceTree</a> (GUI for GitHub), you may right-click the commit and do a 'Reverse Commit'. This should undo your changes.</p>\n\n<p>On the terminal:</p>\n\n<p>You may alternatively use:</p>\n\n<pre><code>git revert\n</code></pre>\n\n<p>Or:</p>\n\n<pre class=\"lang-bash prettyprint-override\"><code>git reset --soft HEAD^ # Use --soft if you want to keep your changes.\ngit reset --hard HEAD^ # Use --hard if you don't care about keeping your changes.\n</code></pre>\n"
      },
      {
        "owner": {
          "badge_counts": {
            "bronze": 7,
            "silver": 6,
            "gold": 1
          },
          "reputation": 529,
          "user_id": 811535,
          "profile_image": "https://www.gravatar.com/avatar/eb19e5bd2c0f29161d7c3d03bd05755c?s=128&d=identicon&r=PG",
          "display_name": "egridasov"
        },
        "is_accepted": false,
        "score": 147,
        "last_activity_date": 1435138449,
        "creation_date": 1374129676,
        "answer_id": 17716319,
        "body": "<p>In my case I accidentally committed some files I did not want to. So I did the following and it worked:</p>\n\n<pre><code>git reset --soft HEAD^\ngit rm --cached [files you do not need]\ngit add [files you need]\ngit commit -c ORIG_HEAD\n</code></pre>\n\n<p>Verify the results with gitk or git log --stat</p>\n"
      },
      {
        "owner": {
          "badge_counts": {
            "bronze": 4,
            "silver": 2,
            "gold": 1
          },
          "reputation": 39,
          "user_id": 1015812,
          "profile_image": "https://www.gravatar.com/avatar/02cd1cf768105f694e740c853153a167?s=128&d=identicon&r=PG",
          "display_name": "iOS Coder"
        },
        "is_accepted": false,
        "score": 127,
        "last_activity_date": 1497273708,
        "creation_date": 1377793119,
        "answer_id": 18516122,
        "body": "<p>Use <a href=\"https://www.atlassian.com/software/sourcetree/overview\" rel=\"noreferrer\">SourceTree</a> (graphical tool for Git) to see your commits and tree. You can manually reset it directly by right clicking it.</p>\n"
      },
      {
        "owner": {
          "badge_counts": {
            "bronze": 36,
            "silver": 22,
            "gold": 2
          },
          "reputation": 12089,
          "user_id": 1496927,
          "profile_image": "https://i.stack.imgur.com/3KT04.png?s=128&g=1",
          "display_name": "Ravi_Parmar"
        },
        "is_accepted": false,
        "score": 204,
        "last_activity_date": 1576255186,
        "creation_date": 1380804237,
        "answer_id": 19159566,
        "body": "<p>\"Reset the working tree to the last commit\"</p>\n\n<pre><code>git reset --hard HEAD^ \n</code></pre>\n\n<p>\"Clean unknown files from the working tree\"</p>\n\n<pre><code>git clean    \n</code></pre>\n\n<p>see - <a href=\"http://jonas.nitro.dk/git/quick-reference.html\" rel=\"noreferrer\">Git Quick Reference</a></p>\n\n<p><strong>NOTE:</strong> This command will delete your previous commit, so use with caution! <code>git reset --hard</code> is safer.</p>\n"
      },
      {
        "owner": {
          "badge_counts": {
            "bronze": 7,
            "silver": 3,
            "gold": 2
          },
          "reputation": 151,
          "user_id": 2700225,
          "profile_image": "https://www.gravatar.com/avatar/e90aec77fcd1ae949feb3c7ae27e986d?s=128&d=identicon&r=PG&f=1",
          "display_name": "U. Ali"
        },
        "is_accepted": false,
        "score": 173,
        "last_activity_date": 1435138400,
        "creation_date": 1381502476,
        "answer_id": 19320941,
        "body": "<p>First run: </p>\n\n<pre><code>git reflog\n</code></pre>\n\n<p>It will show you all the possible actions you have performed on your repository, for example, commit, merge, pull, etc.</p>\n\n<p>Then do:</p>\n\n<pre><code>git reset --hard ActionIdFromRefLog\n</code></pre>\n"
      },
      {
        "owner": {
          "badge_counts": {
            "bronze": 76,
            "silver": 64,
            "gold": 8
          },
          "reputation": 33195,
          "user_id": 2670370,
          "profile_image": "https://www.gravatar.com/avatar/6518601c45f36ac09aa177a3abfc1b21?s=128&d=identicon&r=PG",
          "display_name": "Shubham Chaudhary"
        },
        "is_accepted": false,
        "score": 199,
        "last_activity_date": 1389047646,
        "creation_date": 1389047646,
        "answer_id": 20960584,
        "body": "<p>Use reflog to find a correct state</p>\n\n<pre><code>git reflog\n</code></pre>\n\n<p><img src=\"https://i.stack.imgur.com/c7e7D.png\" alt=\"reflog before\">\n<em>REFLOG BEFORE RESET</em></p>\n\n<p>Select the correct reflog (f3cb6e2 in my case) and type </p>\n\n<pre><code>git reset --hard f3cb6e2\n</code></pre>\n\n<p>After that the repo HEAD will be reset to that HEADid\n<img src=\"https://i.stack.imgur.com/GdnDT.png\" alt=\"reset effect\">\n<em>LOG AFTER RESET</em></p>\n\n<p>Finally the reflog looks like the picture below</p>\n\n<p><img src=\"https://i.stack.imgur.com/Fhhub.png\" alt=\"reflog after\">\n<em>REFLOG FINAL</em></p>\n"
      },
      {
        "owner": {
          "badge_counts": {
            "bronze": 36,
            "silver": 22,
            "gold": 1
          },
          "reputation": 2151,
          "user_id": 1911787,
          "profile_image": "https://www.gravatar.com/avatar/611466ef0a6cdcbf59613e7089c1d89f?s=128&d=identicon&r=PG",
          "display_name": "geoom"
        },
        "is_accepted": false,
        "score": 129,
        "last_activity_date": 1405973708,
        "creation_date": 1393907718,
        "answer_id": 22163029,
        "body": "<h3>For a local commit</h3>\n\n<pre><code>git reset --soft HEAD~1\n</code></pre>\n\n<p>or if you do not remember exactly in which commit it is, you might use</p>\n\n<pre><code>git rm --cached &lt;file&gt;\n</code></pre>\n\n<h3>For a pushed commit</h3>\n\n<p>The proper way of removing files from the repository history is using <code>git filter-branch</code>. That is,</p>\n\n<pre class=\"lang-bash prettyprint-override\"><code>git filter-branch --index-filter 'git rm --cached &lt;file&gt;' HEAD\n</code></pre>\n\n<p>But I recomnend you use this command with care. Read more at <em><a href=\"https://www.kernel.org/pub/software/scm/git/docs/git-filter-branch.html\">git-filter-branch(1) Manual Page</a></em>.</p>\n"
      },
      {
        "comments": [
          {
            "owner": {
              "badge_counts": {
                "bronze": 30,
                "silver": 28,
                "gold": 0
              },
              "reputation": 2969,
              "user_id": 957286,
              "profile_image": "https://www.gravatar.com/avatar/cad69d8c583da522e4d1f3877dadaf69?s=128&d=identicon&r=PG",
              "display_name": "Ena"
            },
            "score": 15,
            "creation_date": 1398244415,
            "comment_id": 35557657,
            "body": "I needed to write git reset --soft &quot;HEAD^&quot; with double quotes, because I write it from Windows command prompt."
          }
        ],
        "owner": {
          "badge_counts": {
            "bronze": 100,
            "silver": 88,
            "gold": 13
          },
          "reputation": 24928,
          "user_id": 1133932,
          "profile_image": "https://i.stack.imgur.com/5oN3M.jpg?s=128&g=1",
          "display_name": "Manish Shrivastava"
        },
        "is_accepted": false,
        "score": 281,
        "last_activity_date": 1405973614,
        "creation_date": 1394027735,
        "answer_id": 22199804,
        "body": "<p>A single command:</p>\n\n<pre class=\"lang-bash prettyprint-override\"><code>git reset --soft 'HEAD^' \n</code></pre>\n\n<p>It works great to undo the last local commit!</p>\n"
      },
      {
        "owner": {
          "badge_counts": {
            "bronze": 22,
            "silver": 17,
            "gold": 2
          },
          "reputation": 2929,
          "user_id": 1379514,
          "profile_image": "https://www.gravatar.com/avatar/d968f09778657cdb1d7c0d58939834f8?s=128&d=identicon&r=PG",
          "display_name": "Ranjithkumar Ravi"
        },
        "is_accepted": false,
        "score": 248,
        "last_activity_date": 1490429641,
        "creation_date": 1398252080,
        "answer_id": 23242764,
        "body": "<p><strong>How to undo the last Git commit?</strong></p>\n\n<p>To restore everything back to the way it was prior to the last commit, we need to reset to the commit before HEAD.</p>\n\n<ol>\n<li><p>If you don't want to keep your changes that you made:</p>\n\n<pre><code>git reset --hard HEAD^\n</code></pre></li>\n<li><p>If you want to keep your changes:</p>\n\n<pre><code>git reset --soft HEAD^\n</code></pre></li>\n</ol>\n\n<p>Now check your git log. It will show that our last commit has been removed.</p>\n"
      },
      {
        "comments": [
          {
            "owner": {
              "badge_counts": {
                "bronze": 16,
                "silver": 11,
                "gold": 0
              },
              "reputation": 1144,
              "user_id": 455269,
              "profile_image": "https://www.gravatar.com/avatar/bddf3b45f8e6ee287fd417244bfbded4?s=128&d=identicon&r=PG",
              "display_name": "cr7pt0gr4ph7"
            },
            "score": 23,
            "creation_date": 1416868529,
            "comment_id": 42733563,
            "body": "Maybe you could at a note/warning that his command will throw away the commit <b>and the changes in the working directory</b> without asking any further."
          },
          {
            "owner": {
              "badge_counts": {
                "bronze": 16,
                "silver": 11,
                "gold": 0
              },
              "reputation": 1144,
              "user_id": 455269,
              "profile_image": "https://www.gravatar.com/avatar/bddf3b45f8e6ee287fd417244bfbded4?s=128&d=identicon&r=PG",
              "display_name": "cr7pt0gr4ph7"
            },
            "score": 6,
            "creation_date": 1416868857,
            "comment_id": 42733703,
            "body": "If you happen to do this by accident, not all is lost, though. See <a href=\"http://stackoverflow.com/questions/10099258/how-can-i-recover-a-lost-commit-in-git\" title=\"how can i recover a lost commit in git\">stackoverflow.com/questions/10099258/&hellip;</a>, <a href=\"http://stackoverflow.com/questions/15479501/git-commit-lost-after-reset-hard-not-found-by-fsck-not-in-reflog\" title=\"git commit lost after reset hard not found by fsck not in reflog\">stackoverflow.com/questions/15479501/&hellip;</a> and <a href=\"http://stackoverflow.com/questions/7374069/undo-git-reset-hard/7376959\" title=\"undo git reset hard\">stackoverflow.com/questions/7374069/undo-git-reset-hard/7376&zwnj;&#8203;959</a>."
          },
          {
            "owner": {
              "badge_counts": {
                "bronze": 52,
                "silver": 46,
                "gold": 4
              },
              "reputation": 11091,
              "user_id": 936957,
              "profile_image": "https://i.stack.imgur.com/MUPHh.jpg?s=128&g=1",
              "display_name": "Yunus Nedim Mehel"
            },
            "score": 13,
            "creation_date": 1425892266,
            "comment_id": 46131721,
            "body": "Use <code>--soft</code> to keep your changes as <code>uncommitted changes</code>, <code>--hard</code> to nuke the commit completely and revert back by one. Remember to do such operations only on changes, that are not pushed yet."
          },
          {
            "owner": {
              "badge_counts": {
                "bronze": 16,
                "silver": 11,
                "gold": 0
              },
              "reputation": 1144,
              "user_id": 455269,
              "profile_image": "https://www.gravatar.com/avatar/bddf3b45f8e6ee287fd417244bfbded4?s=128&d=identicon&r=PG",
              "display_name": "cr7pt0gr4ph7"
            },
            "score": 0,
            "creation_date": 1473801430,
            "comment_id": 66277381,
            "body": "@Zaz: You are right; maybe I should have clarified that. Only files/changes that have been either added to index (/staged) or have been committed can possibly be recovered. Uncommitted, unstaged changes <i>are</i>, as you said, completely thrown away by <code>git reset --hard</code>."
          },
          {
            "owner": {
              "badge_counts": {
                "bronze": 16,
                "silver": 11,
                "gold": 0
              },
              "reputation": 1144,
              "user_id": 455269,
              "profile_image": "https://www.gravatar.com/avatar/bddf3b45f8e6ee287fd417244bfbded4?s=128&d=identicon&r=PG",
              "display_name": "cr7pt0gr4ph7"
            },
            "score": 1,
            "creation_date": 1473801772,
            "comment_id": 66277535,
            "body": "As a sidenote: Everytime a file is staged, <code>git</code> stores its contents in its object database. The stored contents are only removed when garbage collection is executed. It is therefore possible to recover the last staged version of a file that was not currently staged when <code>git reset --hard</code> was executed (see the posts linked above for more information)."
          },
          {
            "owner": {
              "badge_counts": {
                "bronze": 13,
                "silver": 8,
                "gold": 0
              },
              "reputation": 1081,
              "user_id": 3802697,
              "profile_image": "https://www.gravatar.com/avatar/d18f5ffbbe7b2a18bab6df299a709425?s=128&d=identicon&r=PG",
              "display_name": "stidmatt"
            },
            "score": 0,
            "creation_date": 1548456092,
            "comment_id": 95561912,
            "body": "This is terrible advice. This doesn&#39;t just reset your remote, this deletes the actual files from the folder you are doing. This was not clear at all to me, and I thought you were saying you were simply resetting the git head, not resetting your current files to what is in the repository. If my notebooks from yesterday were not in my RAM I would have lost everything I did yesterday."
          }
        ],
        "owner": {
          "badge_counts": {
            "bronze": 21,
            "silver": 24,
            "gold": 2
          },
          "reputation": 3941,
          "user_id": 2418867,
          "profile_image": "https://www.gravatar.com/avatar/bc985a69198dc193871764e0e5bd521b?s=128&d=identicon&r=PG",
          "display_name": "thestar"
        },
        "is_accepted": false,
        "score": 130,
        "last_activity_date": 1474010701,
        "creation_date": 1409241784,
        "answer_id": 25553225,
        "body": "<p>To reset to the previous revision, permanently deleting all uncommitted changes: </p>\n\n<pre><code>git reset --hard HEAD~1\n</code></pre>\n"
      },
      {
        "comments": [
          {
            "owner": {
              "badge_counts": {
                "bronze": 11,
                "silver": 10,
                "gold": 0
              },
              "reputation": 861,
              "user_id": 892487,
              "profile_image": "https://www.gravatar.com/avatar/0a611a42716c1a9262c3e5bb558e27b9?s=128&d=identicon&r=PG",
              "display_name": "metaforge"
            },
            "score": 0,
            "creation_date": 1415820962,
            "comment_id": 42343566,
            "body": "I&#39;m in the 2nd case, but when I do &quot;git revert HEAD&quot; it says &quot;error: Commit [ID] is a merge but no -m option was given.  fatal: revert failed&quot;.  Any suggestions?"
          },
          {
            "owner": {
              "badge_counts": {
                "bronze": 118,
                "silver": 112,
                "gold": 8
              },
              "reputation": 18765,
              "user_id": 191246,
              "profile_image": "https://i.stack.imgur.com/zRo29.png?s=128&g=1",
              "display_name": "ccpizza"
            },
            "score": 4,
            "creation_date": 1417912729,
            "comment_id": 43133073,
            "body": "Probably worth mentioning that instead of <code>HEAD~1</code> you could use the actual hash as displayed by <code>git log --stat</code> or by <code>git reflog</code> - useful when you need to &#39;undo&#39; more than one commit."
          }
        ],
        "owner": {
          "badge_counts": {
            "bronze": 7,
            "silver": 2,
            "gold": 1
          },
          "reputation": 37,
          "user_id": 3655052,
          "profile_image": "https://i.stack.imgur.com/332zG.jpg?s=128&g=1",
          "display_name": "santos_mgr"
        },
        "is_accepted": false,
        "score": 351,
        "last_activity_date": 1411631905,
        "creation_date": 1409728530,
        "answer_id": 25638420,
        "body": "<p>If you have committed junk but not pushed,</p>\n\n<pre><code>git reset --soft HEAD~1\n</code></pre>\n\n<blockquote>\n  <p><strong>HEAD~1</strong> is a shorthand for the commit before head. Alternatively you can refer to the <strong>SHA-1</strong> of the hash if you want to reset to. <em>--soft</em> option will delete the commit but it will leave all your changed files \"Changes to be committed\", as git status would put it.</p>\n  \n  <p>If you want to get rid of any changes to tracked files in the working tree since the commit before head use \"<strong>--hard</strong>\" instead.</p>\n</blockquote>\n\n<p>OR</p>\n\n<blockquote>\n  <p>If you already pushed and someone pulled which is usually my case, you can't use <em>git reset</em>. You can however do a <em>git revert</em>,</p>\n</blockquote>\n\n<pre><code>git revert HEAD\n</code></pre>\n\n<blockquote>\n  <p>This will create a new commit that reverses everything introduced by the accidental commit.</p>\n</blockquote>\n"
      },
      {
        "owner": {
          "badge_counts": {
            "bronze": 21,
            "silver": 17,
            "gold": 2
          },
          "reputation": 10517,
          "user_id": 702601,
          "profile_image": "https://www.gravatar.com/avatar/88c7a6d0feb5151f6e489b44fdeef9a7?s=128&d=identicon&r=PG",
          "display_name": "dseminara"
        },
        "is_accepted": false,
        "score": 132,
        "last_activity_date": 1452556247,
        "creation_date": 1410533461,
        "answer_id": 25811069,
        "body": "<p>There are two main scenarios</p>\n\n<p><strong>You haven't pushed the commit yet</strong></p>\n\n<p>If the problem was extra files you commited (and you don't want those on repository), you can remove them using <code>git rm</code> and then commiting with <code>--amend</code></p>\n\n<pre><code>git rm &lt;pathToFile&gt;\n</code></pre>\n\n<p>You can also remove entire directories with <code>-r</code>, or even combine with other <a href=\"http://en.wikipedia.org/wiki/Bash_%28Unix_shell%29\">Bash</a> commands</p>\n\n<pre><code>git rm -r &lt;pathToDirectory&gt;\ngit rm $(find -name '*.class')\n</code></pre>\n\n<p>After removing the files, you can commit, with <strong>--amend</strong> option</p>\n\n<pre><code>git commit --amend -C HEAD # the -C option is to use the same commit message\n</code></pre>\n\n<p>This will rewrite your recent local commit removing the extra files, so, these files will never be sent on push and also will be removed from your local .git repository by GC.</p>\n\n<p><strong>You already pushed the commit</strong></p>\n\n<p>You can apply the same solution of the other scenario and then doing <code>git push</code> with the <code>-f</code> option, but it is <strong>not recommended</strong> since it overwrites the remote history with a divergent change (it can mess your repository).</p>\n\n<p>Instead, you have to do the commit without <code>--amend</code> (remember this about -amend`: That option rewrites the history on the last commit).</p>\n"
      },
      {
        "owner": {
          "badge_counts": {
            "bronze": 97,
            "silver": 71,
            "gold": 10
          },
          "reputation": 37809,
          "user_id": 13760,
          "profile_image": "https://www.gravatar.com/avatar/d7951e5f68ad9562c47212f4e651edda?s=128&d=identicon&r=PG",
          "display_name": "Carl"
        },
        "is_accepted": false,
        "score": 76,
        "last_activity_date": 1552454083,
        "creation_date": 1416337868,
        "answer_id": 27002094,
        "body": "<p>Usually, you want to <strong>undo</strong> a commit because you made a mistake and you want to fix it - essentially what the OP did when he asked the question. So really, you actually want to <strong>redo</strong> a commit.</p>\n\n<p>Most of the answers here focus on the command line. While the command line is the best way to use Git when you're comfortable with it, its probably a bit alien to those coming from other version control systems to Git. </p>\n\n<p>Here's how to do it using a GUI. If you have Git installed, you already have everything you need to follow these instructions.</p>\n\n<p><strong>NOTE:</strong> I will assume here that you realised the commit was wrong before you pushed it. If you don't know what pushing means, then you probably haven't pushed. So carry on with the instructions. If you have pushed the faulty commit, the least risky way is just to follow up the faulty commit with a new commit that fixes things, the way you would do it in a version control system that does not allow you to rewrite history. </p>\n\n<p>That said, here's how to fix your most recent fault commit using a GUI:</p>\n\n<ol>\n<li>Navigate to your repository on the command line and start the GUI with <code>git gui</code></li>\n<li>Choose \"Amend last commit\". You will see your last commit message, the files you staged and the files you didn't.</li>\n<li>Now change things to how you want them to look and click Commit. </li>\n</ol>\n"
      },
      {
        "owner": {
          "badge_counts": {
            "bronze": 12,
            "silver": 6,
            "gold": 0
          },
          "reputation": 484,
          "user_id": 4123945,
          "profile_image": "https://i.stack.imgur.com/fZIQM.jpg?s=128&g=1",
          "display_name": "steven"
        },
        "is_accepted": false,
        "score": 63,
        "last_activity_date": 1431968134,
        "creation_date": 1431072263,
        "answer_id": 30118831,
        "body": "<p>Just undo the last commit: </p>\n\n<pre><code>git reset --soft HEAD~\n</code></pre>\n\n<p>Or undo the time before last time commit: </p>\n\n<pre><code>git reset --soft HEAD~2\n</code></pre>\n\n<p>Or undo any previous commit: </p>\n\n<pre><code>git reset --soft &lt;commitID&gt;\n</code></pre>\n\n<p>(you can get the commitID using <code>git reflog</code>)</p>\n\n<p>When you undo a previous commit, remember to clean the workplace with</p>\n\n<pre><code>git clean\n</code></pre>\n\n<p>More details can be found in the docs: <a href=\"http://git-scm.com/docs/git-reset\">git-reset</a></p>\n"
      },
      {
        "owner": {
          "badge_counts": {
            "bronze": 23,
            "silver": 9,
            "gold": 0
          },
          "reputation": 789,
          "user_id": 4619105,
          "profile_image": "https://i.stack.imgur.com/FP10Q.png?s=128&g=1",
          "display_name": "Yahs Hef"
        },
        "is_accepted": false,
        "score": 36,
        "last_activity_date": 1490429689,
        "creation_date": 1432501744,
        "answer_id": 30428348,
        "body": "<p>You need to do the easy and fast</p>\n\n<pre><code>    git commit --amend\n</code></pre>\n\n<p>if it's a private branch or</p>\n\n<pre><code>    git commit -m 'Replace .class files with .java files'\n</code></pre>\n\n<p>if it's a shared or public branch.</p>\n"
      },
      {
        "owner": {
          "badge_counts": {
            "bronze": 8,
            "silver": 2,
            "gold": 0
          },
          "reputation": 56,
          "user_id": 3260270,
          "profile_image": "https://i.stack.imgur.com/iieFQ.jpg?s=128&g=1",
          "display_name": "Jishnu Sukumaran"
        },
        "is_accepted": false,
        "score": 31,
        "last_activity_date": 1436171420,
        "creation_date": 1436171420,
        "answer_id": 31241087,
        "body": "<p>Use this command</p>\n\n<pre><code>git checkout -b old-state 0d1d7fc32\n</code></pre>\n"
      },
      {
        "owner": {
          "badge_counts": {
            "bronze": 16,
            "silver": 10,
            "gold": 0
          },
          "reputation": 630,
          "user_id": 2438177,
          "profile_image": "https://i.stack.imgur.com/eanvc.jpg?s=128&g=1",
          "display_name": "FraK"
        },
        "is_accepted": false,
        "score": 56,
        "last_activity_date": 1552454148,
        "creation_date": 1439302274,
        "answer_id": 31944160,
        "body": "<p>In my case I committed and pushed to the wrong branch, so what I wanted was to have all my changes back so I can commit them to a new correct branch, so I did this:</p>\n\n<p>On the same branch that you committed and pushed, if you type \"git status\" you won't see anything new because you committed and pushed, now type:</p>\n\n<p><code>git reset --soft HEAD~1</code></p>\n\n<p>This will get all your changes(files) back in the stage area, now to get them back in the working directory(unstage) you just type:</p>\n\n<pre><code>git reset FILE\n</code></pre>\n\n<p>Where \"File\" is the file that you want to commit again. Now, this FILE should be in the working directory(unstaged) with all the changes that you did. Now you can change to whatever branch that you want and commit the changes in that branch. Hope this helps other people that made the same mistake I did. Of course, the initial branch that you committed is still there with all changes, but in my case that was ok, if it is not for you-you can look for ways to revert that commit in that branch.</p>\n"
      },
      {
        "owner": {
          "badge_counts": {
            "bronze": 23,
            "silver": 6,
            "gold": 0
          },
          "reputation": 572,
          "user_id": 802766,
          "profile_image": "https://i.stack.imgur.com/pd4BN.jpg?s=128&g=1",
          "display_name": "V V"
        },
        "is_accepted": false,
        "score": 43,
        "last_activity_date": 1552454532,
        "creation_date": 1449249650,
        "answer_id": 34093958,
        "body": "<p><strong>Remove a wrong commit that is already pushed to Github</strong></p>\n\n<pre><code>git push origin +(previous good commit id):(branch name)\n</code></pre>\n\n<p>Please specify the last good commit id you would like to reset back in Github.</p>\n\n<p>For example. If latest commit id is wrong then specify the previous commit id in above git command with the branch name. </p>\n\n<p>You can get previous commit id using <code>git log</code></p>\n"
      },
      {
        "owner": {
          "badge_counts": {
            "bronze": 10,
            "silver": 4,
            "gold": 0
          },
          "reputation": 206,
          "user_id": 3993731,
          "profile_image": "https://www.gravatar.com/avatar/1f54ddc35792ff1d2ab7718aa733a532?s=128&d=identicon&r=PG&f=1",
          "display_name": "shreshta bm"
        },
        "is_accepted": false,
        "score": 29,
        "last_activity_date": 1541842068,
        "creation_date": 1449731835,
        "answer_id": 34195835,
        "body": "<p>You can always do a <code>git checkout &lt;SHA code&gt;</code>  of the previous version and then commit again with the new code.</p>\n"
      },
      {
        "comments": [
          {
            "owner": {
              "badge_counts": {
                "bronze": 30,
                "silver": 15,
                "gold": 2
              },
              "reputation": 974,
              "user_id": 5157515,
              "profile_image": "https://lh6.googleusercontent.com/-wk--kvlFfuo/AAAAAAAAAAI/AAAAAAAAAcE/WAB2aC9PMH0/photo.jpg?sz=128",
              "display_name": "Chaitanya Bapat"
            },
            "score": 0,
            "creation_date": 1540927107,
            "comment_id": 93041217,
            "body": "What if I am working on a fork, so basically I have 2 remotes actual repo e.g. incubator-mxnet and my forked repo ChaiBapchya/incubator-mxnet  So in such a case, how can I solve merge conflicts from local to my forked repo branch"
          }
        ],
        "owner": {
          "badge_counts": {
            "bronze": 157,
            "silver": 111,
            "gold": 16
          },
          "reputation": 26463,
          "user_id": 1084174,
          "profile_image": "https://i.stack.imgur.com/BsASP.png?s=128&g=1",
          "display_name": "Sazzad Hissain Khan"
        },
        "is_accepted": false,
        "score": 49,
        "last_activity_date": 1490429813,
        "creation_date": 1451572465,
        "answer_id": 34547846,
        "body": "<h3>A Typical Git Cycle</h3>\n<p>In speaking of Git-related commands in the previous answers, I would like to share my typical Git cycles with all readers which may helpful. Here is how I work with Git,</p>\n<ol>\n<li><p>Cloning the first time from the remote server</p>\n<p><code>git clone $project</code></p>\n</li>\n<li><p>Pulling from remote (when I don't have a pending local commit to push)</p>\n<p><code>git pull</code></p>\n</li>\n<li><p>Adding a new local file1 into $to_be_committed_list (just imagine $to_be_committed_list means <code>staged</code> area)</p>\n<p><code>git add $file1</code></p>\n</li>\n<li><p>Removing mistakenly added file2 from $to_be_committed_list (assume that file2 is added like step 3, which I didn't want)</p>\n<p><code>git reset $file2</code></p>\n</li>\n<li><p>Committing file1 which is in $to_be_committed_list</p>\n<p><code>git commit -m &quot;commit message description&quot;</code></p>\n</li>\n<li><p>Syncing local commit with remote repository before pushing</p>\n<p><code>git pull --rebase</code></p>\n</li>\n<li><p>Resolving when conflict occurs <a href=\"https://git-scm.com/book/en/v2/Customizing-Git-Git-Configuration\" rel=\"noreferrer\">prerequisite configure mergetool</a></p>\n<p><code>git mergetool #resolve merging here, also can manually merge</code></p>\n</li>\n<li><p>Adding conflict-resolved files, let's say <code>file1</code>:</p>\n<p><code>git add $file1</code></p>\n</li>\n<li><p>Continuing my previous rebase command</p>\n<p><code>git rebase --continue</code></p>\n</li>\n<li><p>Pushing ready and already synced last local commit</p>\n<p><code>git push origin head:refs/for/$branch # branch = master, dev, etc.</code></p>\n</li>\n</ol>\n"
      },
      {
        "comments": [
          {
            "owner": {
              "badge_counts": {
                "bronze": 96,
                "silver": 60,
                "gold": 5
              },
              "reputation": 13914,
              "user_id": 4632019,
              "profile_image": "https://www.gravatar.com/avatar/8937eb40752cf51c7da61bd4a322a4ef?s=128&d=identicon&r=PG&f=1",
              "display_name": "Eugen Konkov"
            },
            "score": 0,
            "creation_date": 1481819141,
            "comment_id": 69538122,
            "body": "Be <b>extra</b> careful when reverting merge commits. You may lose your commits. Read about what Linus says about that: <a href=\"https://www.kernel.org/pub/software/scm/git/docs/howto/revert-a-faulty-merge.html\" rel=\"nofollow noreferrer\">kernel.org/pub/software/scm/git/docs/howto/&hellip;</a>"
          }
        ],
        "owner": {
          "badge_counts": {
            "bronze": 26,
            "silver": 10,
            "gold": 1
          },
          "reputation": 1492,
          "user_id": 5733263,
          "profile_image": "https://i.stack.imgur.com/Bf5Rg.jpg?s=128&g=1",
          "display_name": "mfathy00"
        },
        "is_accepted": false,
        "score": 56,
        "last_activity_date": 1541841961,
        "creation_date": 1451865582,
        "answer_id": 34583071,
        "body": "<p>To undo your local commit you use <code>git reset &lt;commit&gt;</code>. Also <a href=\"https://www.atlassian.com/git/tutorials/undoing-changes/git-reset\" rel=\"noreferrer\">that tutorial</a> is very helpful to show you how it works.</p>\n\n<p>Alternatively, you can use <code>git revert &lt;commit&gt;</code>: <a href=\"https://www.atlassian.com/git/tutorials/undoing-changes/git-revert/\" rel=\"noreferrer\">reverting</a> should be used when you want to add another commit that rolls back the changes (but keeps them in the project history).</p>\n"
      },
      {
        "owner": {
          "badge_counts": {
            "bronze": 392,
            "silver": 220,
            "gold": 70
          },
          "reputation": 40230,
          "user_id": 4480164,
          "profile_image": "https://i.stack.imgur.com/Ds8pV.png?s=128&g=1",
          "display_name": "cyber8200"
        },
        "is_accepted": false,
        "score": 141,
        "last_activity_date": 1453154313,
        "creation_date": 1452089412,
        "answer_id": 34635179,
        "body": "<p>Simple, run this in your command line:</p>\n\n<pre><code>git reset --soft HEAD~ \n</code></pre>\n"
      },
      {
        "comments": [
          {
            "owner": {
              "badge_counts": {
                "bronze": 24,
                "silver": 12,
                "gold": 0
              },
              "reputation": 921,
              "user_id": 1720476,
              "profile_image": "https://www.gravatar.com/avatar/b76061f8b1a4cd11960d9b5a6743ef51?s=128&d=identicon&r=PG",
              "display_name": "Arnis Juraga"
            },
            "score": 6,
            "creation_date": 1490098187,
            "comment_id": 72950715,
            "body": "<code>git reset --hard HEAD~1</code> is <b>too dangerous</b>! This will not just &#39;cancel last commit&#39;, but will revert repo completely back to the previous commit. So you will LOOSE all changes committed in the last commit!"
          },
          {
            "owner": {
              "badge_counts": {
                "bronze": 22,
                "silver": 13,
                "gold": 1
              },
              "reputation": 1162,
              "user_id": 3621912,
              "profile_image": "https://i.stack.imgur.com/KhFGu.png?s=128&g=1",
              "display_name": "Benny"
            },
            "score": 0,
            "creation_date": 1493039223,
            "comment_id": 74227215,
            "body": "You right, to undo this you can use <code>git push -f &lt;remote&gt; HEAD@{1}:&lt;branch&gt;</code>"
          },
          {
            "owner": {
              "badge_counts": {
                "bronze": 15,
                "silver": 12,
                "gold": 0
              },
              "reputation": 994,
              "user_id": 6710360,
              "profile_image": "https://lh6.googleusercontent.com/-_kIB1Fmgq_c/AAAAAAAAAAI/AAAAAAAAABM/RhpxIymZN0Q/photo.jpg?sz=128",
              "display_name": "anonymous"
            },
            "score": 0,
            "creation_date": 1534686797,
            "comment_id": 90786456,
            "body": "Unfortunately, I use --hard, and my files are deleted! I did not check the comment first because it is collapsed. Do not use --hard if you do not know what you are doing!"
          }
        ],
        "owner": {
          "badge_counts": {
            "bronze": 17,
            "silver": 10,
            "gold": 1
          },
          "reputation": 656,
          "user_id": 3799762,
          "profile_image": "https://www.gravatar.com/avatar/1a60a24abf7f485c28ba89aed32419b3?s=128&d=identicon&r=PG&f=1",
          "display_name": "Spyder"
        },
        "is_accepted": false,
        "score": 130,
        "last_activity_date": 1534687216,
        "creation_date": 1455766058,
        "answer_id": 35472255,
        "body": "<p>There are many ways to do it:</p>\n\n<p>Git command to undo the last commit/ previous commits:</p>\n\n<p><strong>Warning:</strong> Do Not use --hard if you do not know what you are doing.\n--hard is too <strong>dangerous</strong>, and it might <strong>delete your files.</strong></p>\n\n<p><strong>Basic command to revert the commit in Git is:</strong></p>\n\n<pre><code>$ git reset --hard &lt;COMMIT -ID&gt;\n</code></pre>\n\n<p>or</p>\n\n<pre><code>$ git reset --hard HEAD~&lt;n&gt;\n</code></pre>\n\n<p><strong>COMMIT-ID</strong>: ID for the commit</p>\n\n<p><strong>n:</strong>  is number of last commits you want to revert</p>\n\n<p>You can get the commit id as shown below:</p>\n\n<pre><code>$ **git log --oneline**\n\nd81d3f1 function to subtract two numbers\n\nbe20eb8 function to add two numbers\n\nbedgfgg function to mulitply two numbers\n</code></pre>\n\n<p>where <strong>d81d3f1</strong> and <strong>be20eb8</strong> are commit id.</p>\n\n<p><strong>Now let's see some cases:</strong></p>\n\n<p><em>Suppose you want to revert the last commit 'd81d3f1'.  Here are two options:</em></p>\n\n<pre><code>$ git reset --hard d81d3f1\n</code></pre>\n\n<p>or</p>\n\n<pre><code>$ git reset --hard HEAD~1\n</code></pre>\n\n<p><em>Suppose you want to revert the commit 'be20eb8':</em></p>\n\n<pre><code>$ git reset --hard be20eb8\n</code></pre>\n\n<p>For more detailed information you can refer and try out some other commands too for resetting head to a specified state:</p>\n\n<pre><code>$ git reset --help\n</code></pre>\n"
      },
      {
        "owner": {
          "badge_counts": {
            "bronze": 19,
            "silver": 15,
            "gold": 1
          },
          "reputation": 1407,
          "user_id": 3996359,
          "profile_image": "https://i.stack.imgur.com/gTw4B.jpg?s=128&g=1",
          "display_name": "akshay_rahar"
        },
        "is_accepted": false,
        "score": 166,
        "last_activity_date": 1513202720,
        "creation_date": 1457265202,
        "answer_id": 35826537,
        "body": "<h2>Undo last commit:</h2>\n\n<p><code>git reset --soft HEAD^</code> or <code>git reset --soft HEAD~</code></p>\n\n<p>This will undo the last commit.</p>\n\n<p>Here <code>--soft</code> means reset into staging.</p>\n\n<p><code>HEAD~</code> or <code>HEAD^</code> means to move to commit before HEAD.</p>\n\n<hr>\n\n<h2>Replace last commit to new commit:</h2>\n\n<pre><code>git commit --amend -m \"message\"\n</code></pre>\n\n<p>It will replace the last commit with the new commit.</p>\n"
      },
      {
        "comments": [
          {
            "owner": {
              "badge_counts": {
                "bronze": 16,
                "silver": 6,
                "gold": 0
              },
              "reputation": 576,
              "user_id": 5091077,
              "profile_image": "https://www.gravatar.com/avatar/c344e406210c680b44d99d98278bb4b7?s=128&d=identicon&r=PG&f=1",
              "display_name": "cSharma"
            },
            "score": 0,
            "creation_date": 1558533745,
            "comment_id": 99133891,
            "body": "Note: checking out &#39;5456cea9&#39;.  You are in &#39;detached HEAD&#39; state. You can look around, make experimental changes and commit them, and you can discard any commits you make in this state without impacting any branches by performing another checkout.  If you want to create a new branch to retain commits you create, you may do so (now or later) by using -b with the checkout command again. Example:    git checkout -b &lt;new-branch-name&gt;  HEAD is now at 5456cea... Need to delete Exclusions.xslt from Documentation folder. - Delete What should i do after this"
          }
        ],
        "owner": {
          "badge_counts": {
            "bronze": 18,
            "silver": 15,
            "gold": 0
          },
          "reputation": 1577,
          "user_id": 4326275,
          "profile_image": "https://www.gravatar.com/avatar/781b6eebf65265ffe4773c2f417b4c54?s=128&d=identicon&r=PG&f=1",
          "display_name": "ioopl"
        },
        "is_accepted": false,
        "score": 40,
        "last_activity_date": 1490430071,
        "creation_date": 1458142910,
        "answer_id": 36040444,
        "body": "<p>I got the commit ID from <code>bitbucket</code> and then did:</p>\n\n<pre><code>git checkout commitID .\n</code></pre>\n\n<p>Example:</p>\n\n<pre><code>git checkout 7991072 .\n</code></pre>\n\n<p>And it reverted it back up to that working copy of that commit.</p>\n"
      },
      {
        "owner": {
          "badge_counts": {
            "bronze": 106,
            "silver": 100,
            "gold": 6
          },
          "reputation": 1,
          "user_id": 756246,
          "profile_image": "https://i.stack.imgur.com/GRrID.jpg?s=128&g=1",
          "display_name": "Tom Stickel"
        },
        "is_accepted": false,
        "score": 50,
        "last_activity_date": 1490430164,
        "creation_date": 1461706553,
        "answer_id": 36876212,
        "body": "<p><strong>VISUAL STUDIO USERS (2015, etc.)</strong></p>\n\n<p>If you cannot synchronise in Visual Studio as you are not allowed to push to a branch like \"development\" then as much as I tried, in Visual Studio NEITHER the <strong>REVERT</strong> NOR the <strong>RESET</strong> (hard or soft) would work.</p>\n\n<p>Per the answer with TONS OF VOTES:</p>\n\n<p>Use this at the command prompt of root of your project to nuke anything that will attempt to get pushed:</p>\n\n<pre><code>git reset --hard HEAD~1\n</code></pre>\n\n<p>Backup or zip your files just in case you don't wish to lose any work, etc...</p>\n"
      },
      {
        "owner": {
          "badge_counts": {
            "bronze": 17,
            "silver": 5,
            "gold": 0
          },
          "reputation": 375,
          "user_id": 4598557,
          "profile_image": "https://i.stack.imgur.com/RpkAc.png?s=128&g=1",
          "display_name": "hubot"
        },
        "is_accepted": false,
        "score": 20,
        "last_activity_date": 1464531677,
        "creation_date": 1464531677,
        "answer_id": 37510994,
        "body": "<p>Just use <code>git reset --hard &lt;last good SHA&gt;</code> to reset your changes and give new commit. You can also use <code>git checkout -- &lt;bad filename&gt;</code>.</p>\n"
      },
      {
        "comments": [
          {
            "owner": {
              "badge_counts": {
                "bronze": 90,
                "silver": 70,
                "gold": 10
              },
              "reputation": 37732,
              "user_id": 405550,
              "profile_image": "https://www.gravatar.com/avatar/7bc4d5f38183597c6e47f3f6f3be2ff6?s=128&d=identicon&r=PG",
              "display_name": "Zaz"
            },
            "score": 10,
            "creation_date": 1470299810,
            "comment_id": 64896543,
            "body": "Or <code>git reset @~</code>"
          }
        ],
        "owner": {
          "badge_counts": {
            "bronze": 28,
            "silver": 12,
            "gold": 2
          },
          "reputation": 789,
          "user_id": 6143919,
          "profile_image": "https://graph.facebook.com/150402488687754/picture?type=large",
          "display_name": "Jade Han"
        },
        "is_accepted": false,
        "score": 78,
        "last_activity_date": 1490430193,
        "creation_date": 1467181706,
        "answer_id": 38091882,
        "body": "<p>You can use:</p>\n\n<pre><code>git reset HEAD@{1}\n</code></pre>\n\n<p>This command will delete your wrong commit without a Git log.</p>\n"
      },
      {
        "comments": [
          {
            "owner": {
              "badge_counts": {
                "bronze": 96,
                "silver": 60,
                "gold": 5
              },
              "reputation": 13914,
              "user_id": 4632019,
              "profile_image": "https://www.gravatar.com/avatar/8937eb40752cf51c7da61bd4a322a4ef?s=128&d=identicon&r=PG&f=1",
              "display_name": "Eugen Konkov"
            },
            "score": 9,
            "creation_date": 1481819361,
            "comment_id": 69538260,
            "body": "The very useful description about differences <code>--soft</code> VS <code>--hard</code> <a href=\"https://www.atlassian.com/git/tutorials/resetting-checking-out-and-reverting/\" rel=\"nofollow noreferrer\">atlassian.com/git/tutorials/&hellip;</a>"
          },
          {
            "owner": {
              "badge_counts": {
                "bronze": 33,
                "silver": 13,
                "gold": 2
              },
              "reputation": 521,
              "user_id": 384724,
              "profile_image": "https://i.stack.imgur.com/VvF8J.png?s=128&g=1",
              "display_name": "Todd"
            },
            "score": 2,
            "creation_date": 1505139059,
            "comment_id": 79277392,
            "body": "One doesn&#39;t really lose the commits on a <code>--hard</code> reset as they will be available in the ref log for 30 days <code>git reflog</code>."
          }
        ],
        "owner": {
          "badge_counts": {
            "bronze": 60,
            "silver": 42,
            "gold": 5
          },
          "reputation": 17211,
          "user_id": 1104402,
          "profile_image": "https://www.gravatar.com/avatar/51a1a6aa3c65b84b02c56041cce937fc?s=128&d=identicon&r=PG",
          "display_name": "amd"
        },
        "is_accepted": false,
        "score": 130,
        "last_activity_date": 1490430271,
        "creation_date": 1469690662,
        "answer_id": 38629666,
        "body": "<h2>WHAT TO USE, <code>reset --soft</code> or <code>reset --hard</code>?</h2>\n\n<p>I am just adding two cents for @Kyralessa's answer:</p>\n\n<p>If you are unsure what to use go for <code>--soft</code> (I used this convention to remember it --<strong>s</strong>oft for safe).</p>\n\n<h3>Why ?</h3>\n\n<p>If you choose <code>--hard</code> by mistake you will <strong>LOSE</strong> your changes as it wasn't before.\nIf you choose <code>--soft</code> by mistake you can achieve the same results of <code>--hard</code> by applying additional commands</p>\n\n<pre><code>git reset HEAD file.html\ngit checkout -- file.html\n</code></pre>\n\n<h3>Full example</h3>\n\n<pre><code>echo \"some changes...\" &gt; file.html\ngit add file.html\ngit commit -m \"wrong commit\"\n\n# I need to reset\ngit reset --hard HEAD~1 (cancel changes)\n# OR\ngit reset --soft HEAD~1 # Back to staging\ngit reset HEAD file.html # back to working directory\ngit checkout -- file.html # cancel changes\n</code></pre>\n\n<p>Credits goes to @Kyralessa.</p>\n"
      },
      {
        "owner": {
          "badge_counts": {
            "bronze": 64,
            "silver": 36,
            "gold": 3
          },
          "reputation": 4374,
          "user_id": 1074179,
          "profile_image": "https://i.stack.imgur.com/dLjU3.jpg?s=128&g=1",
          "display_name": "Alexandr"
        },
        "is_accepted": false,
        "score": 61,
        "last_activity_date": 1490433739,
        "creation_date": 1469787268,
        "answer_id": 38656254,
        "body": "<p>If you are working with <strong><a href=\"https://www.sourcetreeapp.com/\" rel=\"noreferrer\">SourceTree</a></strong>, this will help you.</p>\n\n<p><strong>Right click</strong> on the commit then <strong>select</strong> \"<em>Reset (current branch)/master to this commit</em>\" and last <strong>select</strong>  <em>\"Soft\" reset</em>.</p>\n\n<p><a href=\"https://i.stack.imgur.com/BSMo2.png\" rel=\"noreferrer\"><img src=\"https://i.stack.imgur.com/BSMo2.png\" alt=\"Enter image description here\"></a></p>\n"
      },
      {
        "owner": {
          "badge_counts": {
            "bronze": 39,
            "silver": 21,
            "gold": 3
          },
          "reputation": 2114,
          "user_id": 2961878,
          "profile_image": "https://i.stack.imgur.com/wuiuT.jpg?s=128&g=1",
          "display_name": "Alisa"
        },
        "is_accepted": false,
        "score": 32,
        "last_activity_date": 1478404182,
        "creation_date": 1478403522,
        "answer_id": 40445749,
        "body": "<p>In order to get rid of (all the changes in) last commit, last 2 commits and last n commits:</p>\n\n<pre><code>git reset --hard HEAD~1\ngit reset --hard HEAD~2\n...\ngit reset --hard HEAD~n\n</code></pre>\n\n<p>And, to get rid of anything after a specific commit:</p>\n\n<pre><code>git reset --hard &lt;commit sha&gt;\n</code></pre>\n\n<p>e.g., </p>\n\n<pre><code>git reset --hard 0d12345\n</code></pre>\n\n<blockquote>\n  <p>PS:<br>\n  1- Be careful, because of \"hard\" option, it deletes the local changes\n  in your repo as well and reverts to the previous mentioned commit. You\n  should run this if you are sure you messed up in your last commit(s)\n  and would like to go back in time. </p>\n  \n  <p>2- Usually 7 letters of \"commit sha\" is enough, but in bigger\n  projects, you may need up to 12 letters to guarantee be unique. You\n  also can mention the whole 40 letters sha.</p>\n  \n  <p>3- The above commands work in Github for Windows as well.</p>\n</blockquote>\n"
      },
      {
        "owner": {
          "badge_counts": {
            "bronze": 31,
            "silver": 15,
            "gold": 1
          },
          "reputation": 1112,
          "user_id": 4699016,
          "profile_image": "https://i.stack.imgur.com/itgis.png?s=128&g=1",
          "display_name": "Uchiha Itachi"
        },
        "is_accepted": false,
        "score": 13,
        "last_activity_date": 1479244072,
        "creation_date": 1479244072,
        "answer_id": 40619708,
        "body": "<p><a href=\"https://i.stack.imgur.com/ueFVY.png\" rel=\"noreferrer\"><img src=\"https://i.stack.imgur.com/ueFVY.png\" alt=\"enter image description here\" /></a></p>\n<p>Assuming you're working in Visual Studio, if you go in to you branch history and look at all of your commits, simply select the event prior to the commit you want to undo, right-click it, and select <code>Revert</code>.  Easy as that.</p>\n"
      },
      {
        "owner": {
          "badge_counts": {
            "bronze": 27,
            "silver": 15,
            "gold": 1
          },
          "reputation": 1079,
          "user_id": 2696125,
          "profile_image": "https://i.stack.imgur.com/7NcRc.jpg?s=128&g=1",
          "display_name": "Ali Motameni"
        },
        "is_accepted": false,
        "score": 92,
        "last_activity_date": 1565033086,
        "creation_date": 1479459459,
        "answer_id": 40672892,
        "body": "<p>Think we have <strong><em>code.txt</em></strong> file.\nWe make some changes on it and commit.\n<strong>We can undo this commit in three ways</strong>, but first you should know what is the staged file...\nAn staged file is a file that ready to commit and if you run <code>git status</code> this file will be shown with green color and if this is not staged for commit will be shown with red color:</p>\n\n<p><a href=\"https://i.stack.imgur.com/ymNKl.png\" rel=\"noreferrer\"><img src=\"https://i.stack.imgur.com/ymNKl.png\" alt=\"enter image description here\"></a></p>\n\n<p>It means if you commit your change, your changes on this file is not saved.\nYou can add this file in your stage with <code>git add code.txt</code> and then commit your change:</p>\n\n<p><a href=\"https://i.stack.imgur.com/36Yag.png\" rel=\"noreferrer\"><img src=\"https://i.stack.imgur.com/36Yag.png\" alt=\"enter image description here\"></a></p>\n\n<p><strong>Undo last commit:</strong></p>\n\n<ol>\n<li><p>Now if we want to just undo commit without any other changes, we can use</p>\n\n<p><code>git reset --soft HEAD^</code> </p>\n\n<p><a href=\"https://i.stack.imgur.com/Tx6x1.png\" rel=\"noreferrer\"><img src=\"https://i.stack.imgur.com/Tx6x1.png\" alt=\"enter image description here\"></a></p></li>\n<li><p>If we want to undo commit and its changes (<strong><em>THIS IS DANGEROUS, because your change will lost</em></strong>), we can use</p>\n\n<p><code>git reset --hard HEAD^</code></p>\n\n<p><a href=\"https://i.stack.imgur.com/8NDBS.png\" rel=\"noreferrer\"><img src=\"https://i.stack.imgur.com/8NDBS.png\" alt=\"enter image description here\"></a></p></li>\n<li><p>And if we want to undo commit and remove changes from stage, we can use</p>\n\n<p><code>git reset --mixed HEAD^</code> or in a short form <code>git reset HEAD^</code></p>\n\n<p><a href=\"https://i.stack.imgur.com/jg8g0.png\" rel=\"noreferrer\"><img src=\"https://i.stack.imgur.com/jg8g0.png\" alt=\"enter image description here\"></a></p></li>\n</ol>\n"
      },
      {
        "owner": {
          "badge_counts": {
            "bronze": 96,
            "silver": 60,
            "gold": 5
          },
          "reputation": 13914,
          "user_id": 4632019,
          "profile_image": "https://www.gravatar.com/avatar/8937eb40752cf51c7da61bd4a322a4ef?s=128&d=identicon&r=PG&f=1",
          "display_name": "Eugen Konkov"
        },
        "is_accepted": false,
        "score": 22,
        "last_activity_date": 1541841365,
        "creation_date": 1481818888,
        "answer_id": 41168796,
        "body": "<p>I have found <a href=\"http://ohshitgit.com/\" rel=\"noreferrer\">this</a> site which describes how to undo things that you have committed into the repository.</p>\n\n<p>Some commands:</p>\n\n<pre><code>git commit --amend        # Change last commit\ngit reset HEAD~1 --soft   # Undo last commit\n</code></pre>\n"
      },
      {
        "owner": {
          "badge_counts": {
            "bronze": 15,
            "silver": 13,
            "gold": 0
          },
          "reputation": 1034,
          "user_id": 3254469,
          "profile_image": "https://www.gravatar.com/avatar/66f5b2e2d08cdbb1a19b2d69799db8ad?s=128&d=identicon&r=PG&f=1",
          "display_name": "Fadid"
        },
        "is_accepted": false,
        "score": 31,
        "last_activity_date": 1490433842,
        "creation_date": 1482864171,
        "answer_id": 41350510,
        "body": "<p>Use this command:</p>\n\n<pre><code>git checkout -b old-state number_commit\n</code></pre>\n"
      },
      {
        "owner": {
          "badge_counts": {
            "bronze": 125,
            "silver": 100,
            "gold": 19
          },
          "reputation": 83443,
          "user_id": 1755598,
          "profile_image": "https://i.stack.imgur.com/S6a50.jpg?s=128&g=1",
          "display_name": "CodeWizard"
        },
        "is_accepted": false,
        "score": 64,
        "last_activity_date": 1571064164,
        "creation_date": 1485562213,
        "answer_id": 41905003,
        "body": "<p>Before answering let's add some background, explaining what is this <code>HEAD</code>.</p>\n\n<h1><strong><em><code>First of all what is HEAD?</code></em></strong></h1>\n\n<p><code>HEAD</code> is simply a reference to the current commit (latest) on the current branch.<br>\nThere can only be a single <code>HEAD</code> at any given time. (excluding <code>git worktree</code>)</p>\n\n<p>The content of <code>HEAD</code> is stored inside <code>.git/HEAD</code> and it contains the 40 bytes SHA-1 of the current commit.</p>\n\n<hr>\n\n<h1><strong><em><code>detached HEAD</code></em></strong></h1>\n\n<p>If you are not on the latest commit - meaning that <code>HEAD</code> is pointing to a prior commit in history its called <strong><em><code>detached HEAD</code></em></strong>.</p>\n\n<p><a href=\"https://i.stack.imgur.com/OlavO.png\" rel=\"noreferrer\"><img src=\"https://i.stack.imgur.com/OlavO.png\" alt=\"enter image description here\"></a></p>\n\n<p>On the command line, it will look like this- SHA-1 instead of the branch name since the <code>HEAD</code> is not pointing to the tip of the current branch</p>\n\n<p><a href=\"https://i.stack.imgur.com/qplvo.png\" rel=\"noreferrer\"><img src=\"https://i.stack.imgur.com/qplvo.png\" alt=\"enter image description here\"></a></p>\n\n<h2><a href=\"https://i.stack.imgur.com/U0l3s.png\" rel=\"noreferrer\"><img src=\"https://i.stack.imgur.com/U0l3s.png\" alt=\"enter image description here\"></a></h2>\n\n<h3>A few options on how to recover from a detached HEAD:</h3>\n\n<hr>\n\n<h3><a href=\"https://git-scm.com/docs/git-checkout\" rel=\"noreferrer\"><code>git checkout</code></a></h3>\n\n<pre><code>git checkout &lt;commit_id&gt;\ngit checkout -b &lt;new branch&gt; &lt;commit_id&gt;\ngit checkout HEAD~X // x is the number of commits t go back\n</code></pre>\n\n<p>This will checkout new branch pointing to the desired commit.<br>\nThis command will checkout to a given commit.<br>\nAt this point, you can create a branch and start to work from this point on.</p>\n\n<pre><code># Checkout a given commit. \n# Doing so will result in a `detached HEAD` which mean that the `HEAD`\n# is not pointing to the latest so you will need to checkout branch\n# in order to be able to update the code.\ngit checkout &lt;commit-id&gt;\n\n# create a new branch forked to the given commit\ngit checkout -b &lt;branch name&gt;\n</code></pre>\n\n<hr>\n\n<h3><a href=\"https://git-scm.com/docs/git-reflog\" rel=\"noreferrer\"><code>git reflog</code></a></h3>\n\n<p>You can always use the <code>reflog</code> as well.<br>\n<code>git reflog</code> will display any change which updated the <code>HEAD</code> and checking out the desired reflog entry will set the <code>HEAD</code> back to this commit. </p>\n\n<p><strong>Every time the HEAD is modified there will be a new entry in the <code>reflog</code></strong></p>\n\n<pre><code>git reflog\ngit checkout HEAD@{...}\n</code></pre>\n\n<p>This will get you back to your desired commit</p>\n\n<p><a href=\"https://i.stack.imgur.com/atW9w.png\" rel=\"noreferrer\"><img src=\"https://i.stack.imgur.com/atW9w.png\" alt=\"enter image description here\"></a></p>\n\n<hr>\n\n<h3><strong><em><a href=\"https://git-scm.com/docs/git-reset\" rel=\"noreferrer\"><code>git reset --hard &lt;commit_id&gt;</code></a></em></strong></h3>\n\n<p>\"Move\" your HEAD back to the desired commit.</p>\n\n<pre class=\"lang-sh prettyprint-override\"><code># This will destroy any local modifications.\n# Don't do it if you have uncommitted work you want to keep.\ngit reset --hard 0d1d7fc32\n\n# Alternatively, if there's work to keep:\ngit stash\ngit reset --hard 0d1d7fc32\ngit stash pop\n# This saves the modifications, then reapplies that patch after resetting.\n# You could get merge conflicts if you've modified things which were\n# changed since the commit you reset to.\n</code></pre>\n\n<ul>\n<li>Note: (<a href=\"https://github.com/git/git/blob/master/Documentation/RelNotes/2.7.0.txt\" rel=\"noreferrer\">Since Git 2.7</a>)<br>\nyou can also use the <code>git rebase --no-autostash</code> as well.</li>\n</ul>\n\n<hr>\n\n<h3><strong><em><a href=\"https://git-scm.com/docs/git-revert\" rel=\"noreferrer\"><code>git revert &lt;sha-1&gt;</code></a></em></strong></h3>\n\n<p>\"Undo\" the given commit or commit range.<br>\nThe reset command will \"undo\" any changes made in the given commit.<br>\nA new commit with the undo patch will be committed while the original commit will remain in the history as well.</p>\n\n<pre class=\"lang-sh prettyprint-override\"><code># add new commit with the undo of the original one.\n# the &lt;sha-1&gt; can be any commit(s) or commit range\ngit revert &lt;sha-1&gt;\n</code></pre>\n\n<hr>\n\n<p>This schema illustrates which command does what.<br>\nAs you can see there <code>reset &amp;&amp; checkout</code> modify the <code>HEAD</code>.</p>\n\n<p><a href=\"https://i.stack.imgur.com/NuThL.png\" rel=\"noreferrer\"><img src=\"https://i.stack.imgur.com/NuThL.png\" alt=\"enter image description here\"></a></p>\n"
      },
      {
        "owner": {
          "badge_counts": {
            "bronze": 41,
            "silver": 31,
            "gold": 1
          },
          "reputation": 4893,
          "user_id": 5074973,
          "profile_image": "https://www.gravatar.com/avatar/76f7f24ec76258c68904b7e9929df90c?s=128&d=identicon&r=PG&f=1",
          "display_name": "nPcomp"
        },
        "is_accepted": false,
        "score": 11,
        "last_activity_date": 1540230120,
        "creation_date": 1489699251,
        "answer_id": 42844988,
        "body": "<p>If you would like to eliminate the wrong files you should do </p>\n\n<p><code>git reset --soft &lt;your_last_good_commit_hash_here&gt;</code>\nHere, if you do <code>git status</code>, you will see the files in the staging area. You can select the wrong files and take them down from the staging area.</p>\n\n<p>Like the following.</p>\n\n<p><code>git reset wrongFile1 wrongFile2 wrongFile3</code></p>\n\n<p>You can now just add the files that you need to push,</p>\n\n<p><code>git add goodFile1 goodFile2</code></p>\n\n<p>commit them </p>\n\n<p><code>git commit -v</code> or <code>git commit -am \"Message\"</code></p>\n\n<p>and push</p>\n\n<p><code>git push origin master</code></p>\n\n<p>However, if you do not care about the changed files you can hard reset to previous good commit and push everything to the server.</p>\n\n<p>by </p>\n\n<pre><code>git reset --hard &lt;your_last_good_commit_hash_here&gt;\n</code></pre>\n\n<p><code>git push origin master</code></p>\n\n<p>If you already published your wrong files to the server, you can use the <code>--force</code> flag to push to the server and edit the history.</p>\n\n<p><code>git push --force origin master</code></p>\n"
      },
      {
        "owner": {
          "badge_counts": {
            "bronze": 72,
            "silver": 48,
            "gold": 11
          },
          "reputation": 3790,
          "user_id": 1215594,
          "profile_image": "https://www.gravatar.com/avatar/21de36376cdb9babb57fcd5d678a1b25?s=128&d=identicon&r=PG",
          "display_name": "Ranadheer Reddy"
        },
        "is_accepted": false,
        "score": 21,
        "last_activity_date": 1491993095,
        "creation_date": 1490907419,
        "answer_id": 43128168,
        "body": "<p>Reference: <a href=\"http://www.coding-issues.com/2017/03/how-to-undo-or-revert-last-commits-in-git.html\" rel=\"noreferrer\">How to undo last commit in Git?</a></p>\n\n<p>If you have Git Extensions installed you can easily undo/revert any commit (you can download git extensions from <a href=\"https://gitextensions.github.io/\" rel=\"noreferrer\">here</a>).</p>\n\n<p>Open Git Extensions, right click on the commit you want to revert then select \"Revert commit\". </p>\n\n<p><a href=\"https://i.stack.imgur.com/j2fK1.png\" rel=\"noreferrer\"><img src=\"https://i.stack.imgur.com/j2fK1.png\" alt=\"Git Extensions screen shot\"></a></p>\n\n<p>A popup will be opened (see the screenshot below)</p>\n\n<p><a href=\"https://i.stack.imgur.com/Skufo.jpg\" rel=\"noreferrer\"><img src=\"https://i.stack.imgur.com/Skufo.jpg\" alt=\"Revert commit popup\"></a></p>\n\n<p>Select \"Automatically create a commit\" if you want to directly commit the reverted changes or if you want to manually commit the reverted changes keep the box un-selected and click on \"Revert this commit\" button.</p>\n"
      },
      {
        "comments": [
          {
            "owner": {
              "badge_counts": {
                "bronze": 5,
                "silver": 4,
                "gold": 0
              },
              "reputation": 469,
              "user_id": 6718485,
              "profile_image": "https://www.gravatar.com/avatar/be9ecd10c5ebd2a36ed6766591e2fbb8?s=128&d=identicon&r=PG&f=1",
              "display_name": "AeroHil"
            },
            "score": 1,
            "creation_date": 1557174997,
            "comment_id": 98669155,
            "body": "this worked for me the best, since I had already pushed the bad commit up to github"
          }
        ],
        "owner": {
          "badge_counts": {
            "bronze": 85,
            "silver": 61,
            "gold": 14
          },
          "reputation": 7527,
          "user_id": 597858,
          "profile_image": "https://i.stack.imgur.com/fEwfm.jpg?s=128&g=1",
          "display_name": "KawaiKx"
        },
        "is_accepted": false,
        "score": 54,
        "last_activity_date": 1576255228,
        "creation_date": 1494118866,
        "answer_id": 43826836,
        "body": "<p>Suppose you made a wrong commit locally and pushed it to a remote repository. You can undo the mess with these two commands:</p>\n\n<p>First, we need to correct our local repository by going back to the commit that we desire:</p>\n\n<pre><code>git reset --hard &lt;previous good commit id where you want the local repository  to go&gt;\n</code></pre>\n\n<p>Now we forcefully push this good commit on the remote repository by using this command:</p>\n\n<pre><code>git push --force-with-lease\n</code></pre>\n\n<p>The 'with-lease' version of the force option it will prevent accidental deletion of new commits you do not know about (i.e. coming from another source since your last pull).</p>\n"
      },
      {
        "owner": {
          "badge_counts": {
            "bronze": 10,
            "silver": 1,
            "gold": 0
          },
          "reputation": 35,
          "user_id": 5742480,
          "profile_image": "https://i.stack.imgur.com/UCcYI.png?s=128&g=1",
          "display_name": "Praveen"
        },
        "is_accepted": false,
        "score": 14,
        "last_activity_date": 1539972949,
        "creation_date": 1496518336,
        "answer_id": 44347830,
        "body": "<p>Find the last commit hash code by seeing the log by:</p>\n\n<pre><code>git log\n</code></pre>\n\n<p>Then</p>\n\n<pre><code>git reset &lt;the previous co&gt;\n</code></pre>\n"
      },
      {
        "owner": {
          "badge_counts": {
            "bronze": 14,
            "silver": 6,
            "gold": 0
          },
          "reputation": 594,
          "user_id": 7378175,
          "profile_image": "https://i.stack.imgur.com/pn6Qt.jpg?s=128&g=1",
          "display_name": "Krzysztof Walczewski"
        },
        "is_accepted": false,
        "score": 17,
        "last_activity_date": 1539972909,
        "creation_date": 1497953121,
        "answer_id": 44649998,
        "body": "<p>In IntelliJ IDEA you can just open the Git repository log by pressing <kbd>Alt</kbd>+<kbd>9</kbd>, right mouse button click at some tag from the commits list, and select: <em>\"Reset Current Branch to Here...\"</em>.</p>\n"
      },
      {
        "owner": {
          "badge_counts": {
            "bronze": 150,
            "silver": 231,
            "gold": 19
          },
          "reputation": 78136,
          "user_id": 5423108,
          "profile_image": "https://i.stack.imgur.com/WtfBG.png?s=128&g=1",
          "display_name": "Alireza"
        },
        "is_accepted": false,
        "score": 269,
        "last_activity_date": 1509108394,
        "creation_date": 1498037599,
        "answer_id": 44672195,
        "body": "<p>Just reset it doing the command below using <code>git</code>:</p>\n\n<pre><code>git reset --soft HEAD~1\n</code></pre>\n\n<p><strong>Explain:</strong> what <code>git reset</code> does, it's basically <code>reset</code> to any commit you'd like to go back to, then if you combine it with <code>--soft</code> key, it will go back, but keep the  changes in your file(s), so you get back to the stage which the file was just added, <code>HEAD</code> is the head of the branch and if you combine with <code>~1</code> (in this case you also use <code>HEAD^</code>), it will go back only one commit which what you want...</p>\n\n<p>I create the steps in the image below in more details for you, including all steps that may happens in real situations and committing the code:</p>\n\n<p><a href=\"https://i.stack.imgur.com/7zrzb.jpg\" rel=\"noreferrer\"><img src=\"https://i.stack.imgur.com/7zrzb.jpg\" alt=\"How to undo the last commits in Git?\"></a></p>\n"
      },
      {
        "owner": {
          "badge_counts": {
            "bronze": 39,
            "silver": 24,
            "gold": 0
          },
          "reputation": 2582,
          "user_id": 1048170,
          "profile_image": "https://www.gravatar.com/avatar/86970c2f74a1c1a00887cc8cf8af99a9?s=128&d=identicon&r=PG",
          "display_name": "Dominic Cerisano"
        },
        "is_accepted": false,
        "score": 21,
        "last_activity_date": 1547842158,
        "creation_date": 1498599267,
        "answer_id": 44790317,
        "body": "<p>For sake of completeness, I will give the one glaringly obvious method that was overlooked by the previous answers.</p>\n\n<p>Since the commit was not pushed, the remote was unchanged, so:</p>\n\n<ol>\n<li>Delete the local repository.</li>\n<li>Clone the remote repository.</li>\n</ol>\n\n<p>This is sometimes necessary if your fancy Git client goes bye-bye. (eg. <code>non-fast-forward</code> errors)</p>\n\n<p>Don't forget to re-commit your <em>saved</em> changes since the last push.</p>\n"
      },
      {
        "owner": {
          "badge_counts": {
            "bronze": 87,
            "silver": 79,
            "gold": 6
          },
          "reputation": 13075,
          "user_id": 4453737,
          "profile_image": "https://www.gravatar.com/avatar/1d9f9a928492340ac248ee2f0493a39a?s=128&d=identicon&r=PG&f=1",
          "display_name": "Mohideen bin Mohammed"
        },
        "is_accepted": false,
        "score": 20,
        "last_activity_date": 1539972783,
        "creation_date": 1500375917,
        "answer_id": 45164987,
        "body": "<p><strong>HEAD:</strong></p>\n\n<p>Before reset commit we should know about HEAD... HEAD is nothing but your current state in your working directory. It is represented by a commit number.</p>\n\n<p><strong>Git commit:</strong></p>\n\n<p>Each change assigned under a commit which is represented by a unique tag. Commits can't be deleted. So if you want your last commit, you can simply dive into it using <code>git reset</code>.</p>\n\n<p>You can dive into the last commit using two methods:</p>\n\n<p><strong>Method 1:</strong> (if you don't know the commit number, but want to move onto the very first)</p>\n\n<pre><code>git reset HEAD~1  # It will move your head to last commit\n</code></pre>\n\n<p><strong>Method 2:</strong> (if you know the commit you simply reset onto your known commit)</p>\n\n<p><code>git reset 0xab3</code> # Commit number</p>\n\n<p><strong>Note:</strong> if you want to know a recent commit try <code>git log -p -1</code></p>\n\n<p>Here is the graphical representation:</p>\n\n<p><a href=\"https://i.stack.imgur.com/boiKO.png\" rel=\"noreferrer\"><img src=\"https://i.stack.imgur.com/boiKO.png\" alt=\"Enter image description here\"></a></p>\n"
      },
      {
        "owner": {
          "badge_counts": {
            "bronze": 15,
            "silver": 5,
            "gold": 0
          },
          "reputation": 282,
          "user_id": 3842006,
          "profile_image": "https://graph.facebook.com/100004646863327/picture?type=large",
          "display_name": "Shwetank"
        },
        "is_accepted": false,
        "score": 27,
        "last_activity_date": 1539972645,
        "creation_date": 1501664314,
        "answer_id": 45456148,
        "body": "<p>You can undo your Git commits in two ways:\nFirst is you can use <code>git revert</code>, if you want to keep your commit history:</p>\n\n<pre><code>git revert HEAD~3\ngit revert &lt;hashcode of commit&gt;\n</code></pre>\n\n<p>Second is you can use <code>git reset</code>, which would delete all your commit history and bring your head to commit where you want it.</p>\n\n<pre><code>git reset &lt;hashcode of commit&gt;\ngit reset HEAD~3\n</code></pre>\n\n<p>You can also use the <code>--hard</code> keyword if any of it starts behaving otherwise. But, I would only recommend it until it's extremely necessary.</p>\n"
      },
      {
        "comments": [
          {
            "owner": {
              "badge_counts": {
                "bronze": 122,
                "silver": 92,
                "gold": 21
              },
              "reputation": 26698,
              "user_id": 63550,
              "profile_image": "https://i.stack.imgur.com/RIZKi.png?s=128&g=1",
              "display_name": "Peter Mortensen"
            },
            "score": 0,
            "creation_date": 1517175416,
            "comment_id": 83976300,
            "body": "&quot;Working copy&quot;? Is this a Git concept? Isn&#39;t it an SVN concept?"
          },
          {
            "owner": {
              "badge_counts": {
                "bronze": 13,
                "silver": 7,
                "gold": 0
              },
              "reputation": 706,
              "user_id": 2165423,
              "profile_image": "https://i.stack.imgur.com/eruIX.jpg?s=128&g=1",
              "display_name": "Mohit"
            },
            "score": 0,
            "creation_date": 1525463205,
            "comment_id": 87381551,
            "body": "@PeterMortensen yes working copy, its a git concept though"
          }
        ],
        "owner": {
          "badge_counts": {
            "bronze": 13,
            "silver": 7,
            "gold": 0
          },
          "reputation": 706,
          "user_id": 2165423,
          "profile_image": "https://i.stack.imgur.com/eruIX.jpg?s=128&g=1",
          "display_name": "Mohit"
        },
        "is_accepted": false,
        "score": 70,
        "last_activity_date": 1517175299,
        "creation_date": 1505363632,
        "answer_id": 46210590,
        "body": "<p><strong>Undo the Last Commit</strong></p>\n\n<p>There are tons of situations where you really want to undo that last commit into your code. E.g. because you'd like to restructure it extensively - or even discard it altogether!</p>\n\n<p>In these cases, the \"reset\" command is your best friend:</p>\n\n<pre><code>$ git reset --soft HEAD~1\n</code></pre>\n\n<p>The above command (reset) will rewind your current HEAD branch to the specified revision. In our example above, we'd like to return to the one before the current revision - effectively making our last commit undone.</p>\n\n<p>Note the <code>--soft</code> flag: this makes sure that the changes in undone revisions are preserved. After running the command, you'll find the changes as uncommitted local modifications in your working copy.</p>\n\n<p>If you don't want to keep these changes, simply use the <code>--hard</code> flag. Be sure to only do this when you're sure you don't need these changes any more.</p>\n\n<pre><code>$ git reset --hard HEAD~1\n</code></pre>\n\n<p><a href=\"https://i.stack.imgur.com/hqetQ.png\" rel=\"noreferrer\"><img src=\"https://i.stack.imgur.com/hqetQ.png\" alt=\"Enter image description here\"></a></p>\n"
      },
      {
        "owner": {
          "badge_counts": {
            "bronze": 21,
            "silver": 11,
            "gold": 1
          },
          "reputation": 2506,
          "user_id": 5955784,
          "profile_image": "https://www.gravatar.com/avatar/c12dc4e9a11dbe06a656c4329fb68081?s=128&d=identicon&r=PG&f=1",
          "display_name": "Ankit Patidar"
        },
        "is_accepted": false,
        "score": 58,
        "last_activity_date": 1552454316,
        "creation_date": 1518678495,
        "answer_id": 48801644,
        "body": "<p><strong>Undo the last commit:</strong></p>\n\n<pre><code>git reset --soft HEAD^ or git reset --soft HEAD~\n</code></pre>\n\n<p><strong>This will undo the last commit.</strong></p>\n\n<p>Here <code>--soft</code> means reset into staging.</p>\n\n<p><code>HEAD~ or HEAD^</code> means to move to commit before HEAD.</p>\n\n<p>Replace the last commit to new commit:</p>\n\n<pre><code>git commit --amend -m \"message\"\n</code></pre>\n\n<p>It will replace the last commit with the new commit.</p>\n"
      },
      {
        "owner": {
          "badge_counts": {
            "bronze": 96,
            "silver": 60,
            "gold": 5
          },
          "reputation": 13914,
          "user_id": 4632019,
          "profile_image": "https://www.gravatar.com/avatar/8937eb40752cf51c7da61bd4a322a4ef?s=128&d=identicon&r=PG&f=1",
          "display_name": "Eugen Konkov"
        },
        "is_accepted": false,
        "score": 22,
        "last_activity_date": 1539972498,
        "creation_date": 1519806898,
        "answer_id": 49025156,
        "body": "<p>Here is site: <a href=\"http://ohshitgit.com/\" rel=\"noreferrer\"><code>Oh shit, git!</code></a>.</p>\n\n<p>Here are many recipes how to undo things in Git. Some of them:</p>\n\n<blockquote>\n  <p>Oh shit, I need to change the message on my last commit!</p>\n</blockquote>\n\n<pre><code>git commit --amend\n# follow prompts to change the commit message\n</code></pre>\n\n<blockquote>\n  <p>Oh shit, I accidentally committed something to master that should have been on a brand new branch!</p>\n</blockquote>\n\n<pre><code># Create a new branch from the current state of master\ngit branch some-new-branch-name\n# Remove the commit from the master branch\ngit reset HEAD~ --hard\ngit checkout some-new-branch-name\n# Your commit lives in this branch now :)\n</code></pre>\n"
      },
      {
        "owner": {
          "badge_counts": {
            "bronze": 14,
            "silver": 6,
            "gold": 0
          },
          "reputation": 600,
          "user_id": 7178104,
          "profile_image": "https://i.stack.imgur.com/j1OAJ.jpg?s=128&g=1",
          "display_name": "Raj S. Rusia"
        },
        "is_accepted": false,
        "score": 21,
        "last_activity_date": 1539972444,
        "creation_date": 1520339173,
        "answer_id": 49130829,
        "body": "<p>You can undo your commits from the local repository. Please follow the below scenario.</p>\n\n<p>In the below image I check out the 'test' branch (using Git command <code>git checkout -b test</code>) as a local and check status (using Git command <code>git status</code>) of local branch that there is nothing to commit.</p>\n\n<p><a href=\"https://i.stack.imgur.com/kQ0Ds.png\" rel=\"noreferrer\"><img src=\"https://i.stack.imgur.com/kQ0Ds.png\" alt=\"Enter image description here\"></a></p>\n\n<p>In the next image image you can see here I made a few changes in <strong>Filter1.txt</strong> and added that file to the staging area and then committed my changes with some message (using Git command <code>git commit -m \"Doing commit to test revert back\"</code>).</p>\n\n<p><strong>\"-m is for commit message\"</strong></p>\n\n<p><a href=\"https://i.stack.imgur.com/OpWzO.png\" rel=\"noreferrer\"><img src=\"https://i.stack.imgur.com/OpWzO.png\" alt=\"Enter image description here\"></a></p>\n\n<p>In the next image you can see your commits log whatever you have made commits (using Git command <code>git log</code>).</p>\n\n<p><a href=\"https://i.stack.imgur.com/2keAh.png\" rel=\"noreferrer\"><img src=\"https://i.stack.imgur.com/2keAh.png\" alt=\"Enter image description here\"></a></p>\n\n<p>So in the above image you can see the commit id with each commit and with your commit message now whatever commit you want to revert back or undo copy that commit id and hit the below Git command,\n<code>git revert {\"paste your commit id\"}</code>. Example:</p>\n\n<pre><code>git revert 9ca304ed12b991f8251496b4ea452857b34353e7\n</code></pre>\n\n<p><a href=\"https://i.stack.imgur.com/mi04t.png\" rel=\"noreferrer\"><img src=\"https://i.stack.imgur.com/mi04t.png\" alt=\"Enter image description here\"></a></p>\n\n<p>I have reverted back my last commit. Now if you check your Git status, you can see the modified file which is <strong>Filter1.txt</strong> and yet to commit.</p>\n\n<p><a href=\"https://i.stack.imgur.com/dfdMu.png\" rel=\"noreferrer\"><img src=\"https://i.stack.imgur.com/dfdMu.png\" alt=\"Enter image description here\"></a></p>\n"
      },
      {
        "owner": {
          "badge_counts": {
            "bronze": 21,
            "silver": 18,
            "gold": 0
          },
          "reputation": 1794,
          "user_id": 1483143,
          "profile_image": "https://i.stack.imgur.com/deYNU.jpg?s=128&g=1",
          "display_name": "serdarsenay"
        },
        "is_accepted": false,
        "score": 10,
        "last_activity_date": 1523979675,
        "creation_date": 1523979675,
        "answer_id": 49882301,
        "body": "<p>Try this, hard reset to previous commit where those files were not added, then:</p>\n\n<pre><code>git reset --hard &lt;commit_hash&gt;\n</code></pre>\n\n<p>Make sure you have a backup of your changes just in case, as it's a hard reset, which means they'll be lost (unless you stashed earlier)</p>\n"
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
        "score": 3,
        "last_activity_date": 1526626835,
        "creation_date": 1526626835,
        "answer_id": 50405545,
        "body": "<pre><code>git push --delete (branch_name) //this will be removing the public version of your branch\n\ngit push origin (branch_name) //This will add the previous version back\n</code></pre>\n"
      },
      {
        "owner": {
          "badge_counts": {
            "bronze": 8,
            "silver": 7,
            "gold": 0
          },
          "reputation": 894,
          "user_id": 5828092,
          "profile_image": "https://lh3.googleusercontent.com/-penVrDtGqSY/AAAAAAAAAAI/AAAAAAAADoA/yymVGPU2s1U/photo.jpg?sz=128",
          "display_name": "Khem"
        },
        "is_accepted": false,
        "score": 16,
        "last_activity_date": 1530555673,
        "creation_date": 1527033137,
        "answer_id": 50477973,
        "body": "<p>Rebasing and dropping commits are the best when you want to keep the history clean\nuseful when proposing patches to a public branch etc.</p>\n\n<p>If you have to drop the topmost commit then the following one-liner helps</p>\n\n<pre><code>git rebase --onto HEAD~1 HEAD\n</code></pre>\n\n<p>But if you want to drop 1 of many commits you did say</p>\n\n<p>a -> b -> c -> d -> master</p>\n\n<p>and you want to drop commit 'c'</p>\n\n<pre><code>git rebase --onto b c\n</code></pre>\n\n<p>This will make 'b' as the new base of 'd' eliminating 'c'</p>\n"
      },
      {
        "owner": {
          "badge_counts": {
            "bronze": 5,
            "silver": 2,
            "gold": 0
          },
          "reputation": 143,
          "user_id": 6033741,
          "profile_image": "https://graph.facebook.com/10207252177957590/picture?type=large",
          "display_name": "Georgi Georgiev"
        },
        "is_accepted": false,
        "score": 5,
        "last_activity_date": 1537958007,
        "creation_date": 1535980768,
        "answer_id": 52150606,
        "body": "<pre><code>git revert commit\n</code></pre>\n\n<p>This will generate the opposite changes from the commit which you want to revert back, and then just commit that changes. I think this is the simplest way.</p>\n\n<p><a href=\"https://git-scm.com/docs/git-revert\" rel=\"noreferrer\">https://git-scm.com/docs/git-revert</a></p>\n"
      },
      {
        "owner": {
          "badge_counts": {
            "bronze": 45,
            "silver": 20,
            "gold": 2
          },
          "reputation": 3288,
          "user_id": 3221094,
          "profile_image": "https://i.stack.imgur.com/29J5m.jpg?s=128&g=1",
          "display_name": "Theo Itzaris"
        },
        "is_accepted": false,
        "score": 9,
        "last_activity_date": 1537086983,
        "creation_date": 1537086983,
        "answer_id": 52352410,
        "body": "<p>What i do each time i need to undo a commit/commits are:</p>\n\n<ol>\n<li><code>git reset HEAD~&lt;n&gt;</code>  // the number of last commits i need to undo</li>\n<li><p><code>git status</code> // optional. All files are now in red (unstaged).</p></li>\n<li><p>Now, i can add &amp; commit just the files that i need:</p>\n\n<ul>\n<li><code>git add &lt;file names&gt; &amp; git commit -m \"message\" -m \"details\"</code></li>\n</ul></li>\n<li>Optional: I can rollback the changes of the rest files, if i need, to their previous condition, with checkout:  \n\n<ul>\n<li><code>git checkout &lt;filename&gt;</code></li>\n</ul></li>\n<li>if i had already pushed it to remote origin, previously:\n\n<ul>\n<li><code>git push origin &lt;branch name&gt; -f</code> // use -f to force the push.</li>\n</ul></li>\n</ol>\n"
      },
      {
        "owner": {
          "badge_counts": {
            "bronze": 82,
            "silver": 63,
            "gold": 18
          },
          "reputation": 10020,
          "user_id": 2450507,
          "profile_image": "https://i.stack.imgur.com/qNPPb.jpg?s=128&g=1",
          "display_name": "Nicholas"
        },
        "is_accepted": false,
        "score": 9,
        "last_activity_date": 1538536074,
        "creation_date": 1537790301,
        "answer_id": 52478913,
        "body": "<h2>If you want to undo the very first commit in your repo</h2>\n\n<p>You'll encounter this problem:</p>\n\n<pre><code>$ git reset HEAD~\nfatal: ambiguous argument 'HEAD~': unknown revision or path not in the working tree.\nUse '--' to separate paths from revisions, like this:\n'git &lt;command&gt; [&lt;revision&gt;...] -- [&lt;file&gt;...]'\n</code></pre>\n\n<p>The error occurs because if the last commit is the initial commit (or no parents) of the repository, there is no HEAD~.</p>\n\n<h2>Solution</h2>\n\n<p><strong>If you want to reset the only commit on \"master\" branch</strong></p>\n\n<pre><code>$ git update-ref -d HEAD\n$ git rm --cached -r .\n</code></pre>\n"
      },
      {
        "owner": {
          "badge_counts": {
            "bronze": 153,
            "silver": 111,
            "gold": 9
          },
          "reputation": 20541,
          "user_id": 5353461,
          "profile_image": "https://lh4.googleusercontent.com/-kpRTzH5zyzs/AAAAAAAAAAI/AAAAAAAAAAA/ICc26Nac6mY/photo.jpg?sz=128",
          "display_name": "Tom Hale"
        },
        "is_accepted": false,
        "score": 6,
        "last_activity_date": 1540038629,
        "creation_date": 1538053931,
        "answer_id": 52537837,
        "body": "<h3>How to <em>edit</em> an earlier commit</h3>\n\n<p>Generally I don't want to undo a bunch of commits, but rather edit an earlier commit to how I wish I had committed it in the first place.</p>\n\n<p>I found myself fixing a past commit frequently enough that I wrote a script for it.</p>\n\n<p>Here's the workflow:</p>\n\n<ol>\n<li><pre><code>git commit-edit &lt;commit-hash&gt;\n</code></pre>\n\n<p>This will drop you at the commit you want to edit.</p>\n\n<p>The changes of the commit will be <strong>un</strong>staged, ready to be staged as you wish it was the first time.</p></li>\n<li><p>Fix and stage the commit as you wish it had been in the first place.</p>\n\n<p>(You may want to use <code>git stash save --keep-index</code> to squirrel away any files you're not committing)</p></li>\n<li><p>Redo the commit with <code>--amend</code>, eg:</p>\n\n<pre><code>git commit --amend\n</code></pre></li>\n<li><p>Complete the rebase:</p>\n\n<pre><code>git rebase --continue\n</code></pre></li>\n</ol>\n\n<hr>\n\n<p>Call this following <code>git-commit-edit</code> and put it in your <code>$PATH</code>:</p>\n\n\n\n<pre class=\"lang-bash prettyprint-override\"><code>#!/bin/bash\n\n# Do an automatic git rebase --interactive, editing the specified commit\n# Revert the index and working tree to the point before the commit was staged\n# https://stackoverflow.com/a/52324605/5353461\n\nset -euo pipefail\n\nscript_name=${0##*/}\n\nwarn () { printf '%s: %s\\n' \"$script_name\" \"$*\" &gt;&amp;2; }\ndie () { warn \"$@\"; exit 1; }\n\n[[ $# -ge 2 ]] &amp;&amp; die \"Expected single commit to edit. Defaults to HEAD~\"\n\n# Default to editing the parent of the most recent commit\n# The most recent commit can be edited with `git commit --amend`\ncommit=$(git rev-parse --short \"${1:-HEAD~}\")\n\n# Be able to show what commit we're editing to the user\nif git config --get alias.print-commit-1 &amp;&gt;/dev/null; then\n  message=$(git print-commit-1 \"$commit\")\nelse\n  message=$(git log -1 --format='%h %s' \"$commit\")\nfi\n\nif [[ $OSTYPE =~ ^darwin ]]; then\n  sed_inplace=(sed -Ei \"\")\nelse\n  sed_inplace=(sed -Ei)\nfi\n\nexport GIT_SEQUENCE_EDITOR=\"${sed_inplace[*]} \"' \"s/^pick ('\"$commit\"' .*)/edit \\\\1/\"'\ngit rebase --quiet --interactive --autostash --autosquash \"$commit\"~\ngit reset --quiet @~ \"$(git rev-parse --show-toplevel)\"  # Reset the cache of the toplevel directory to the previous commit\ngit commit --quiet --amend --no-edit --allow-empty  #  Commit an empty commit so that that cache diffs are un-reversed\n\necho\necho \"Editing commit: $message\" &gt;&amp;2\necho\n</code></pre>\n"
      },
      {
        "comments": [
          {
            "owner": {
              "badge_counts": {
                "bronze": 10,
                "silver": 3,
                "gold": 0
              },
              "reputation": 353,
              "user_id": 3711574,
              "profile_image": "https://www.gravatar.com/avatar/d99cffa2ea59b24890e7f8f7259892ab?s=128&d=identicon&r=PG&f=1",
              "display_name": "R&#233;mi P"
            },
            "score": 0,
            "creation_date": 1542805523,
            "comment_id": 93699948,
            "body": "What is the difference with @JacoPretorius answer ?"
          }
        ],
        "owner": {
          "badge_counts": {
            "bronze": 33,
            "silver": 43,
            "gold": 1
          },
          "reputation": 7298,
          "user_id": 1217713,
          "profile_image": "https://i.stack.imgur.com/Za9wf.jpg?s=128&g=1",
          "display_name": "Nalan Madheswaran"
        },
        "is_accepted": false,
        "score": 8,
        "last_activity_date": 1544133644,
        "creation_date": 1541983754,
        "answer_id": 53254732,
        "body": "<p>Get last commit ID by using this command (in the log one on the top it is the latest one):</p>\n\n<pre><code>git log\n</code></pre>\n\n<p>Get the commit id (GUID) and run this command:</p>\n\n<pre><code>git revert &lt;commit_id&gt;\n</code></pre>\n"
      },
      {
        "owner": {
          "badge_counts": {
            "bronze": 105,
            "silver": 87,
            "gold": 10
          },
          "reputation": 23186,
          "user_id": 45767,
          "profile_image": "https://www.gravatar.com/avatar/9e83e0990a074bea96296aac170fd3cf?s=128&d=identicon&r=PG",
          "display_name": "JeremyWeir"
        },
        "is_accepted": false,
        "score": 4,
        "last_activity_date": 1543524286,
        "creation_date": 1543524286,
        "answer_id": 53547289,
        "body": "<p>If you simply want to trash all your local changes/commits and make your local branch look like the origin branch you started from...</p>\n\n<p><code>git reset --hard origin/branch-name</code></p>\n"
      },
      {
        "owner": {
          "badge_counts": {
            "bronze": 20,
            "silver": 8,
            "gold": 0
          },
          "reputation": 503,
          "user_id": 3114253,
          "profile_image": "https://www.gravatar.com/avatar/25fd740a6a27ca7c6473957db437d7eb?s=128&d=identicon&r=PG&f=1",
          "display_name": "Arun Karnawat"
        },
        "is_accepted": false,
        "score": 22,
        "last_activity_date": 1544425541,
        "creation_date": 1544425541,
        "answer_id": 53700956,
        "body": "<p>The simplest way to undo the last commit is</p>\n\n<pre><code>git reset HEAD^\n</code></pre>\n\n<p>This will bring the project state before you have made the commit.</p>\n"
      },
      {
        "owner": {
          "badge_counts": {
            "bronze": 39,
            "silver": 20,
            "gold": 3
          },
          "reputation": 7191,
          "user_id": 6426617,
          "profile_image": "https://i.stack.imgur.com/xqtjD.jpg?s=128&g=1",
          "display_name": "Keshan Nageswaran"
        },
        "is_accepted": false,
        "score": 23,
        "last_activity_date": 1545357747,
        "creation_date": 1545357747,
        "answer_id": 53878312,
        "body": "<h1>The difference between git reset --mixed, --soft and --hard</h1>\n\n<blockquote>\n  <p>Prerequisite: When a modification to an existing file in your\n  repository is made, this change is initially considered as unstaged.\n  In order to commit the changes, it needs to be staged which means\n  adding it to the index using <code>git add</code>. During a commit operation, the\n  files that are staged gets added to an index.</p>\n</blockquote>\n\n<p>Let's take an example: </p>\n\n<pre><code>- A - B - C (master)\n</code></pre>\n\n<p><code>HEAD</code> points to <code>C</code> and the index matches <code>C</code>.</p>\n\n<h2>--soft</h2>\n\n<ul>\n<li>When we execute <code>git reset --soft B</code> with the intention of <strong>removing the commit C</strong> and <strong>pointing the master/HEAD to B</strong>. </li>\n<li>The master/HEAD will now point to B, but the <strong>index still has changed from C</strong>. </li>\n<li>When executing <code>git status</code> you could see the files indexed in <strong>commit C</strong> as <strong>staged</strong>. </li>\n<li>Executing a <code>git commit</code> at this point will create a new commit with <strong>the same changes as C</strong></li>\n</ul>\n\n<h2>--mixed</h2>\n\n<ul>\n<li>Execute <code>git reset --mixed B</code>. </li>\n<li>On execution, master/HEAD will point to B and the <strong>index is also modified to match B</strong> because of the mixed flag used.  </li>\n<li>If we run git commit at this point, nothing will happen since the <strong>index matches HEAD</strong>.</li>\n<li>We still have the changes in the working directory, but since they're not in the index, <strong>git status shows them as unstaged</strong>. </li>\n<li>To commit them, you would <code>git add</code> and then commit as usual.</li>\n</ul>\n\n<h2>--hard</h2>\n\n<ul>\n<li>Execute <code>git reset --hard B</code></li>\n<li>On execution, master/HEAD will point to B <strong>and modifies your working directory</strong></li>\n<li>The <strong>changes added in C</strong> and <strong>all the uncommitted changes</strong> will be <strong>removed</strong>.</li>\n<li>Files in the working copy will match the commit B, this will result in loosing permanently all changes which were made in commit C plus uncommitted changes</li>\n</ul>\n\n<p>Hope this comparison of flags that are available to use with <code>git reset</code> command will help someone to use them wisely. Refer these for further details <a href=\"https://gist.github.com/tnguyen14/0827ae6eefdff39e452b\" rel=\"noreferrer\">link1</a> &amp; <a href=\"https://stackoverflow.com/questions/3528245/whats-the-difference-between-git-reset-mixed-soft-and-hard\">link2</a></p>\n"
      },
      {
        "owner": {
          "badge_counts": {
            "bronze": 9,
            "silver": 3,
            "gold": 0
          },
          "reputation": 188,
          "user_id": 1403634,
          "profile_image": "https://www.gravatar.com/avatar/f79e2eb16122218436407a0b602dace4?s=128&d=identicon&r=PG",
          "display_name": "shiraz"
        },
        "is_accepted": false,
        "score": 9,
        "last_activity_date": 1562790466,
        "creation_date": 1549833937,
        "answer_id": 54621218,
        "body": "<p>Replace your local version, including your changes with the server version. These two lines of code will force Git to pull and overwrite local.</p>\n\n<p>Open a command prompt and navigate to the Git project root. If you use Visual Studio, click on <em>Team</em>, <em>Sync</em> and click on \"Open Command Prompt\" (see the image) below.</p>\n\n<p><a href=\"https://i.stack.imgur.com/sezIw.png\" rel=\"noreferrer\"><img src=\"https://i.stack.imgur.com/sezIw.png\" alt=\"Visual Studio\"></a></p>\n\n<p>Once in the Cmd prompt, go ahead with the following two instructions.</p>\n\n<pre><code>git fetch --all\n</code></pre>\n\n<p>Then you do</p>\n\n<pre><code>git reset --hard origin/master\n</code></pre>\n\n<p>This will overwrite the existing local version with the one on the Git server.</p>\n"
      },
      {
        "owner": {
          "badge_counts": {
            "bronze": 15,
            "silver": 8,
            "gold": 0
          },
          "reputation": 569,
          "user_id": 6847357,
          "profile_image": "https://i.stack.imgur.com/EuZaM.jpg?s=128&g=1",
          "display_name": "Abubakr Elghazawy"
        },
        "is_accepted": false,
        "score": 23,
        "last_activity_date": 1562790350,
        "creation_date": 1552288784,
        "answer_id": 55096873,
        "body": "<pre><code>git reset --soft HEAD~1\n</code></pre>\n\n<p>Reset will rewind your current HEAD branch to the specified revision.</p>\n\n<p><strong>Note</strong> the <code>--soft</code> flag: this makes sure that the changes in undone revisions are preserved. After running the command, you'll find the changes as uncommitted local modifications in your working copy.</p>\n\n<p>If you don't want to keep these changes, simply use the <code>--hard</code> flag. Be sure to only do this when you're sure you don't need these changes anymore.</p>\n\n<pre><code> git reset --hard HEAD~1\n</code></pre>\n\n<blockquote>\n  <p>Undoing Multiple Commits</p>\n</blockquote>\n\n<pre><code>git reset --hard 0ad5a7a6\n</code></pre>\n\n<p>Keep in mind, however, that using the reset command undoes all commits that came after the one you returned to:</p>\n\n<p><a href=\"https://i.stack.imgur.com/slheG.png\" rel=\"noreferrer\"><img src=\"https://i.stack.imgur.com/slheG.png\" alt=\"Enter image description here\"></a></p>\n"
      },
      {
        "owner": {
          "badge_counts": {
            "bronze": 15,
            "silver": 1,
            "gold": 0
          },
          "reputation": 357,
          "user_id": 7597165,
          "profile_image": "https://i.stack.imgur.com/H1UUN.png?s=128&g=1",
          "display_name": "Videsh Chauhan"
        },
        "is_accepted": false,
        "score": 4,
        "last_activity_date": 1562790291,
        "creation_date": 1558605135,
        "answer_id": 56272567,
        "body": "<p>You can use <code>git revert &lt;commit-id&gt;</code>.</p>\n\n<p>And for getting the commit ID, just use <code>git log</code>.</p>\n"
      },
      {
        "owner": {
          "badge_counts": {
            "bronze": 33,
            "silver": 12,
            "gold": 2
          },
          "reputation": 1660,
          "user_id": 10160112,
          "profile_image": "https://i.stack.imgur.com/JWMF0.jpg?s=128&g=1",
          "display_name": "Paras Korat"
        },
        "is_accepted": false,
        "score": 8,
        "last_activity_date": 1562790253,
        "creation_date": 1562307974,
        "answer_id": 56897588,
        "body": "<p>Do as the following steps. It might help you.</p>\n\n<p><strong>Step:1</strong></p>\n\n<p>Hit <code>git log</code></p>\n\n<p>From the list of log, find the last commit hash code and  then enter:</p>\n\n<p><strong>Step:2</strong></p>\n\n<pre><code>git reset &lt;hash code&gt;\n</code></pre>\n"
      },
      {
        "owner": {
          "badge_counts": {
            "bronze": 28,
            "silver": 21,
            "gold": 1
          },
          "reputation": 1837,
          "user_id": 792700,
          "profile_image": "https://i.stack.imgur.com/aXhTM.png?s=128&g=1",
          "display_name": "AO_"
        },
        "is_accepted": false,
        "score": 4,
        "last_activity_date": 1562790201,
        "creation_date": 1562599223,
        "answer_id": 56938039,
        "body": "<p>I wrote about this ages ago after having these same problems myself:</p>\n\n<p><a href=\"https://ao.gl/how-to-delete-revert-a-git-commit/\" rel=\"noreferrer\">https://ao.gl/how-to-delete-revert-a-git-commit/</a></p>\n\n<p>Basically you just need to do:</p>\n\n<p><code>git log</code>, get the first seven characters of the SHA, and then do a <code>git revert &lt;sha&gt;</code> followed by <code>git push --force</code>.</p>\n\n<p>You can also revert this by using the Git revert command as follows: <code>git revert &lt;sha&gt; -m -1</code> and then <code>git push</code>.</p>\n"
      },
      {
        "owner": {
          "badge_counts": {
            "bronze": 35,
            "silver": 29,
            "gold": 3
          },
          "reputation": 7895,
          "user_id": 369894,
          "profile_image": "https://www.gravatar.com/avatar/b7417e984cc78c088882a176050cfc07?s=128&d=identicon&r=PG",
          "display_name": "Michał Szajbe"
        },
        "is_accepted": false,
        "score": 9,
        "last_activity_date": 1571822377,
        "creation_date": 1571822377,
        "answer_id": 58519519,
        "body": "<p>To undo the last local commit, without throwing away its changes, I have this handy alias in <code>~/.gitconfig</code></p>\n\n<pre><code>[alias]\n  undo = reset --soft HEAD^\n</code></pre>\n\n<p>Then I simply use <code>git undo</code> which is super-easy to remember.</p>\n"
      },
      {
        "comments": [
          {
            "owner": {
              "badge_counts": {
                "bronze": 6,
                "silver": 0,
                "gold": 0
              },
              "reputation": 53,
              "user_id": 5923488,
              "profile_image": "https://www.gravatar.com/avatar/6c130c0669190c80c489436cdca54dea?s=128&d=identicon&r=PG",
              "display_name": "CloudJR"
            },
            "score": 0,
            "creation_date": 1584187124,
            "comment_id": 107362753,
            "body": "But keep in mind that --hard will completely discard all the changes that were made in the last commit as well as the content of the index."
          }
        ],
        "owner": {
          "badge_counts": {
            "bronze": 17,
            "silver": 5,
            "gold": 0
          },
          "reputation": 412,
          "user_id": 2968467,
          "profile_image": "https://i.stack.imgur.com/8SPLe.jpg?s=128&g=1",
          "display_name": "Stipe"
        },
        "is_accepted": false,
        "score": 24,
        "last_activity_date": 1578356761,
        "creation_date": 1578356761,
        "answer_id": 59620663,
        "body": "<p>Everybody comment in such complicated manner. </p>\n\n<p>If you want to remove the last commit from your branch simplest way to do it is: </p>\n\n<pre><code>git reset --hard HEAD~1\n</code></pre>\n\n<p>Now to actually push that change to get rid of your last commit you have to </p>\n\n<pre><code>git push --force\n</code></pre>\n\n<p>And that's it. This will remove your last commit</p>\n"
      },
      {
        "owner": {
          "badge_counts": {
            "bronze": 15,
            "silver": 5,
            "gold": 0
          },
          "reputation": 420,
          "user_id": 11151992,
          "profile_image": "https://lh3.googleusercontent.com/-b_nvodK8ikc/AAAAAAAAAAI/AAAAAAAAAAA/ACHi3re8FfFJAQ8yD7nWt0i1qrL9Rclp2g/mo/photo.jpg?sz=128",
          "display_name": "arslan"
        },
        "is_accepted": false,
        "score": 11,
        "last_activity_date": 1587106831,
        "creation_date": 1587105409,
        "answer_id": 61265477,
        "body": "<pre class=\"lang-sh prettyprint-override\"><code>$ git reset --soft HEAD~1\n\n$ git status\n\nOn branch master\nYour branch is ahead of 'origin/master' by 1 commit.\n  (use \"git push\" to publish your local commits)\n\nChanges to be committed:\n  (use \"git restore --staged &lt;file&gt;...\" to unstage)\n        new file:   file1\n\n$ git log --oneline --graph\n\n * 90f8bb1 (HEAD -&gt; master) Second commit\n * 7083e29 Initial repository commit\n</code></pre>\n"
      },
      {
        "owner": {
          "badge_counts": {
            "bronze": 6,
            "silver": 2,
            "gold": 0
          },
          "reputation": 31,
          "user_id": 4334372,
          "profile_image": "https://www.gravatar.com/avatar/55dea31b76971b7dd74c45c9e24180ff?s=128&d=identicon&r=PG&f=1",
          "display_name": "Ankit Tiwari"
        },
        "is_accepted": false,
        "score": 39,
        "last_activity_date": 1592387640,
        "creation_date": 1592386342,
        "answer_id": 62425854,
        "body": "<p>In these cases, the \"reset\" command is your best friend:</p>\n\n<pre><code>git reset --soft HEAD~1\n</code></pre>\n\n<p>Reset will rewind your current HEAD branch to the specified revision. In our example above, we'd like to return to the one before the current revision - effectively making our last commit undone.</p>\n\n<p>Note the --soft flag: this makes sure that the changes in undone revisions are preserved. After running the command, you'll find the changes as uncommitted local modifications in your working copy.</p>\n\n<p>If you don't want to keep these changes, simply use the --hard flag. Be sure to only do this when you're sure you don't need these changes anymore.</p>\n\n<pre><code>git reset --hard HEAD~1\n</code></pre>\n"
      },
      {
        "owner": {
          "badge_counts": {
            "bronze": 2,
            "silver": 1,
            "gold": 0
          },
          "reputation": 36,
          "user_id": 13892927,
          "profile_image": "https://www.gravatar.com/avatar/453a97dc75fdfd7b38f8e2d5ec30a3b8?s=128&d=identicon&r=PG&f=1",
          "display_name": "CyberChris"
        },
        "is_accepted": false,
        "score": 5,
        "last_activity_date": 1596312456,
        "creation_date": 1596176338,
        "answer_id": 63186702,
        "body": "<p>I validate an efficient method proposed, here is a concrete example using it:\nIn case you want to permanently undo/cancel your last commit (and so on, 1 by 1, as many as you want ) 3 steps:</p>\n<p>1: get the id = SHA of the commit you want to arrive on with, of course</p>\n<pre><code>$ git log\n</code></pre>\n<p>2: delete your previous commit with</p>\n<pre><code>$ git reset --hard 'your SHA'\n</code></pre>\n<p>3: force the new local history upon your origin GitHub with -f option (last commit track will be erased from GitHub history)</p>\n<pre><code>$ git push origin master -f\n</code></pre>\n<p>EXAMPLE:</p>\n<pre><code>$ git log\n</code></pre>\n<p>(last commit to cancel:)</p>\n<pre><code>commit e305d21bdcdc51d623faec631ced72645cca9131 (HEAD -&gt; master, origin/master, origin/HEAD)\nAuthor: Christophe &lt;blabla@bla.com&gt;\nDate:   Thu Jul 30 03:42:26 2020 +0200\n\nU2_30 S45; updating files package.json &amp; yarn.lock for GitHub Web Page from docs/CV_Portfolio...\n</code></pre>\n<p>(commit we want now on HEAD :)</p>\n<pre><code>commit 36212a48b0123456789e01a6c174103be9a11e61\nAuthor: Christophe &lt;blabla@bla.com&gt;\nDate:   Thu Jul 30 02:38:01 2020 +0200\n\nFirst commit, new title\n</code></pre>\n<p>reach the commit before by deleting last one :</p>\n<pre><code>$ git reset --hard 36212a4\n\nHEAD is now at 36212a4 First commit, new title\n</code></pre>\n<p>check it's ok :</p>\n<pre><code>$ git log\n\ncommit 36212a48b0123456789e01a6c174103be9a11e61 (HEAD -&gt; master)\nAuthor: Christophe &lt;blabla@bla.com&gt;\nDate:   Thu Jul 30 02:38:01 2020 +0200\n\n    First commit, new title\n\n$ git status\n\nOn branch master\nYour branch is behind 'origin/master' by 1 commit, and can be fast-forwarded.\n (use &quot;git pull&quot; to update your local branch)\n\nnothing to commit, working tree clean\n</code></pre>\n<p>update your history on the Git(Hub)</p>\n<pre><code>$ git push origin master -f\n\nTotal 0 (delta 0), reused 0 (delta 0), pack-reused 0\nTo https://github.com/ GitUser bla bla/React-Apps.git\n + e305d21...36212a4 master -&gt; master (forced update)\n</code></pre>\n<p>check it's all right</p>\n<pre><code>$ git status\n\nOn branch master\nYour branch is up to date with 'origin/master'.\n\nnothing to commit, working tree clean\n</code></pre>\n<p>=&gt; done ! :)</p>\n"
      },
      {
        "owner": {
          "display_name": "user13872507"
        },
        "is_accepted": false,
        "score": 2,
        "last_activity_date": 1599162291,
        "creation_date": 1599162291,
        "answer_id": 63730650,
        "body": "<pre><code>$ git commit -m 'Initial commit'\n$ git add forgotten_file\n$ git commit --amend\n</code></pre>\n<p>It’s important to understand that when you’re amending your last commit, you’re not so much fixing it as replacing it entirely with a new, improved commit that pushes the old commit out of the way and puts the new commit in its place. Effectively, it’s as if the previous commit never happened, and it won’t show up in your repository history.</p>\n<p>The obvious value to amending commits is to make minor improvements to your last commit, without cluttering your repository history with commit messages of the form, “Oops, forgot to add a file” or “Darn, fixing a typo in last commit”.</p>\n<p><a href=\"https://git-scm.com/book/en/v2/Git-Basics-Undoing-Things\" rel=\"nofollow noreferrer\">https://git-scm.com/book/en/v2/Git-Basics-Undoing-Things</a></p>\n"
      }
    ],
    "owner": {
      "badge_counts": {
        "bronze": 229,
        "silver": 130,
        "gold": 37
      },
      "reputation": 47239,
      "user_id": 89904,
      "profile_image": "https://www.gravatar.com/avatar/4fef65cead13e5d519f6bce3c501a537?s=128&d=identicon&r=PG",
      "display_name": "Hamza Yerlikaya"
    },
    "is_answered": true,
    "view_count": 9020611,
    "protected_date": 1370840488,
    "accepted_answer_id": 927386,
    "answer_count": 86,
    "score": 21810,
    "last_activity_date": 1604380808,
    "creation_date": 1243620554,
    "question_id": 927358,
    "title": "How do I undo the most recent local commits in Git?",
    "body": "<p>I accidentally <strong>committed the wrong files</strong> to <a href=\"https://en.wikipedia.org/wiki/Git\" rel=\"noreferrer\">Git</a>, but didn't push the commit to the server yet.</p>\n<p>How can I <strong>undo those commits from the local repository</strong>?</p>\n"
  }
  render() {
    return <Question data={this.data}/>;
  }
};

export default QuestionContainer;
