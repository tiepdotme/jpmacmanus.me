---
layout: post
title: "Modular Machines and their equivalence to Turing Machines"
author: Joseph
tags: computability modular-machines recursion turing-machines automata
---

Modular machines are a lesser-known class of automata, which act upon \\(\mathbb{N}^2\\) and are actually capable of simulating any Turing Machine - a fact which we will prove here.

The purpose of this post is to provide solid, self-contained introduction to these machines, which I found was surprisingly hard to find. My goal has been to collate and expand upon the relevant descriptions given by Aanderaa and Cohen [1], with the hope of making these automata more accessible outside of their usual applications.

## 1. Preliminaries

For the sake of self-containment I will give a definition of a Turing machine, and discuss some of the standards used. The reader familiar with such automata may skip this section but it might be handy to skim through and see what standards have been adopted. Familiarity with automata in general will be very helpful in understanding this post (see: the fact that DFAs are mentioned *immediately* in the next definition). Some of the standards in the below definition have been borrowed from Dr Ken Moody's lecture slides at Cambridge [2].

**Definition 1.1.** *(Turing Machine)* A Turing machine is a deterministic finite automaton (DFA) equipped with the ability to read and write on onto an infinite roll of tape with a finite alphabet \\(\Gamma\\). Its set of states *Q* contains a start-state \\(q_0\\), and its tape alphabet \\(\Gamma\\) contains a special black character *s*.

At the beginning of a computation, the tape is almost entirely blank - barring its input which is a finite number of filled spaces on the far left of the tape. The DFA begins at its start state, and the machine is placed at the left-hand end of the tape. A transition depends on both the current symbol on the tape below the machine, and the current state of the DFA, and will result in the DFA changing state, the machine writing a new symbol on the tape below it, and the machine moving one square either left (*L*) or right (*R*) along the tape.

In this post we will specify transitions with *quintuples*, one for each state-symbol pair (*q,a*), of the form \\((q,a,q',a',D)\\) (commonly abbreviated to just \\(qaq'a'D\\), omitting the parentheses and commas), where *q*, *q'* are states, *a*, *a'* are characters in the alphabet and *D* is either *L* or *R*. This represents the idea that from state *q*, after reading *a* from the tape, the DFA will switch to state *q'* then write *a'* on the tape below it before moving over one square in the direction *D*. We specify a halting state-symbol combination by simply omitting the relevant quintuplet.

Finally, we will specify machine configurations in the form

$$
C = a_k \ldots a_1 q a b_1 \ldots b_l,
$$

where \\(a_k \ldots a_1\\) are the symbols appearing to the left of the machine head, *q* is the current state, *a* is the symbol directly below the machine head, and \\(b_1 \ldots b_l\\) are the characters appearing up to the right of the machine head, where \\(b_l\\) is the left-most non-blank character. When our Turing machine transitions from *C* to some other configuration *C'*, we may write \\( C \Rightarrow C' \\) as shorthand.

Before we begin, one small remark on notation - throughout this post we include 0 in the natural numbers.

## 2. Modular Machines

As mentioned earlier, modular machines act upon \\(\mathbb{N}^2\\), that is, their configurations are of the form \\((\alpha, \beta) \in \mathbb{N}^2\\). The action of our machine only depends on the class of \\((\alpha, \beta)\\) modulo some *m*, which where the name comes from. We have our headlining definition.

<!--break-->

**Definition 2.1.** *(Modular Machine)* A modular machine *M* consists of an integer \\(m>1\\), together with a finite set of quadruples of the form *(a,b,c,D)* where *a*,*b*, and *c* are integers such that \\(m > a,b \geq 0\\) and \\(m^2 > c \geq 0\\), and *D* is either *L* or *R*. Moreover, if *(a,b,c,D)* and *(a,b,c',D')* are both in *M*, then \\(c = c'\\) and \\(D = D'\\) (That is, each quadruple in *M* is uniquely identified by its first two elements).

Next we describe how *M* computes. A configuration of *M* is a pair of natural numbers \\((\alpha, \beta)\\). By dividing by *m* with remainder, we let \\(\alpha = um + a\\), and \\( \beta = vm + b\\) with \\(m > a,b \geq 0\\). If there does not a exist a *c* and *D* such that *(a,b,c,D)* is in *M*, then we say \\((\alpha, \beta)\\) is a *terminal configuration*. If such a *c* and *D* do exist (recall that they will be uniquely determined by *a* and *b*), then we first distinguish two cases:

1. If \\(D = R\\) then let \\( \alpha' = u m^2 + c\\), and \\( \beta' = v \\).

2. If \\(D = L\\) then let \\( \alpha' = u\\), and \\( \beta' = v m^2 + c \\).

and we write \\( (\alpha, \beta) \Rightarrow (\alpha', \beta') \\). Chaining these actions together, we write \\( (\alpha_1, \beta_1) \Rightarrow^* (\alpha_k, \beta_k) \\) if there exists some number of intermediate configurations such that

$$
(\alpha_1, \beta_1) \Rightarrow (\alpha_2, \beta_2) \Rightarrow \cdots \Rightarrow (\alpha_k, \beta_k).
$$

This includes the case that \\( (\alpha_1, \beta_1) = (\alpha_k, \beta_k) \\) (a sequence with zero steps). We shall refer to such a sequence as a *computation*. We will now look at a very simple concrete example to demonstrate how these machines run. Let *M* be the modular machine with \\(m = 5\\), and quadruples \\((2,2,4,R)\\), \\((4,1,0,L)\\), \\((0,0,2,L)\\). We will run *M* on the configuration (12,7). Using the above rules, we achieve the computation

$$
(12,7) \Rightarrow (54,1) \Rightarrow (10,0) \Rightarrow (2,2) \Rightarrow (4,0)
$$

where clearly (4,0) is terminal (as no quadruples begins with 4,0). I encourage the reader to follow the above computation on paper to get a better feel for how it works. This example happened to terminate, but modular machines can also loop. Consider the machine *M'*, with \\(m = 2\\) and the quadruples \\((0,1,1,R)\\), \\((1,0,1,L)\\). Running *M'* on the configuration (0,1) achieves

$$
(0,1) \Rightarrow (1,0) \Rightarrow (0,1) \Rightarrow \cdots
$$

so clearly these machines need not always terminate. With this in mind, it may be helpful to view modular machines as *partial* recursive functions \\(\mathbb{N}^2 \rightarrow \mathbb{N}^2\\) (recall that a partial function is allowed to be undefined in some of its domain). At a glance, these automata seem very chaotic and not massively useful. How would somebody even begin to program something like this? In the next section we will overcome this hurdle by giving a very useful construction.

## 3. Simulating Turing Machines

So, we've defined what a modular machine is and how it works. Next, we look towards demonstrating that given any Turing machine *T*, we can construct a modular machine *M* such that *M* simulates *T*. The below proof expands on the proof given in Theorem 4, Simpson [3].

**Theorem 3.1.** *Given any Turing machine T, there exists a modular machine M which simulates T.*

*Proof.* We will prove this by constructing the aforementioned machine. Let *Q* be the set of states of *T*, and \\(\Gamma\\) be its tape alphabet. Let *m* be the cardinality of \\(\Gamma \cup Q \\), and assume without loss of generality that \\( \Gamma = \left\\{ 1, \ldots, n \right\\} \\), \\( Q = \left\\{ n+1, \ldots, m \right\\} \\). In order to draw parallels, we associate two modular machine (m.m.) configurations \\((um+q, vm+a)\\) and \\((um+a, vm+q)\\) to every Turing machine (t.m.) configuration \\(C = a_k \ldots, a_1 q a b_1 \ldots b_l\\), where

$$
u = \sum_{i=1}^k a_i m^{i-1}, \ \ v = \sum_{j=1}^l b_j m^{j-1}.
$$

Next, for every quintuple \\(qaq'a'D\\) in *T* we add two quadruples \\( (q,a,a'm+q',D) \\) and  \\( (a,q,a'm+q',D) \\) to *M*. We need to check that if a pair \\( (\alpha, \beta) \\) is associated to two t.m. configurations *C*, *C'* then *C = C'*, as this will allow us to extract the final configuration with no ambiguity after running the modular machine. Divide \\(\alpha, \beta\\) by *m* with remainder to uniquely write \\(\alpha = um+r_1\\), \\(\beta = vm+r_2\\). Since our pair is associated to some configuration, we must have that one of \\(r_1, r_2\\) corresponds to the current state and the other, the last symbol read. These come from disjoint sets so this part of the configuration is in fact uniquely determined. We now turn our attention to the quotients *u* and *v*. It is a fact from number theory (which we will not prove here) that any natural number *r* can be decomposed uniquely as

$$
r = \sum_{i=1}^\ell c_i m^{i-1}, \ \ 1 \leq c_i \leq m,
$$

(simply consider the empty sum for *r* = 0). By applying this fact to *u* and *v* in turn, we can uniquely determine the rest of the tape. It follows that every pair is associated to at most one t.m. configuration.

Now all that remains is to show that *M* and *T* are equivalent. We will do this by showing that if \\( (\alpha, \beta) \\) is a m.m. configuration associated to some t.m. configuration *C*, then *C* is terminal if and only if \\( (\alpha, \beta) \\) is also terminal, and if \\( C \Rightarrow C'\\), then \\( (\alpha, \beta) \Rightarrow (\alpha', \beta') \\) where \\( (\alpha', \beta') \\) is some configuration associated with *C'*.

For the first claim, suppose that \\( (\alpha, \beta) \\) is terminal m.m. configuration associated to the t.m. configuration *C*, so it is of the form \\((um+q, vm+a)\\) or \\((um+a, vm+q)\\) like above. Clearly \\( (\alpha, \beta) \\) is terminal if and only there doesn't not exist some quadruple of the form \\( (q,a,c,D) \\) or \\( (a,q,c,D) \\), which can be true if and only if *T* did not contain a quintuple of the form \\(qaq'a'D\\).

For the second claim, suppose that \\( C \Rightarrow C'\\), with

$$
C = a_k \ldots a_1 q a b_1 \ldots b_l, \\ C' = a_k \ldots a_1 a' q' b_1 \ldots b_l.
$$

We are considering the case that the machine-head moves right (*R*), however the left-case is similar. Let \\( (\alpha, \beta) \\) be associated to *C*, so it is equal to either \\( (um+q, vm+a) \\) or \\( (um+a, vm+q) \\). Since \\( C \Rightarrow C'\\) we must have that there exists the quintuple \\( qaq'a'R \\) in *T*, which would then imply that both \\( (q,a,a'm+q',R) \\) and \\( (a,q,a'm + q',R) \\) are present in *M*. This means that

$$
(\alpha, \beta) \Rightarrow (um^2 + a'm + q', v),
$$

and it can be easily verified that the latter configuration is indeed associate to *C'*.
//

**Remark.** *If you've read the above proof, you may be questioning why we don't need to show that if some m.m. configuration moves on to some new configuration, then its associated t.m. configuration (if it exists) also gets moved to the new m.m. configuration's associate? This loose end is actually tied up by combining the last two proven claims, and I would encourage the reader to try briefly deduce why.*

So we have shown that any Turing machine can be simulated by some modular machine, but what about the converse? I will not prove so here, however I have a very strong suspicion that would not be too hard to construct a Turing machine capable of running arbitrary modular machines. The general power of Turing machines is very well-documented, so I think that showing such a machine exists is simply a programming exercise.  

<!-- In this section, we will define what we call the *functions computed by M* and *T*, where *M* and *T* are a modular machine and a Turing machine respectively. Following this, given some Turing machine *T*, our goal will be to construct a modular machine *M* such that *T* and *M* compute the same function. First, let's work on defining the function \\(f_M : \mathbb{N} \rightarrow \mathbb{N}\\) computed by a modular machine *M*. The function \\(f_M\\) will be of the form \\(u_M \circ g_M \circ i_M\\) where

1. \\(i_M : \mathbb{N} \rightarrow \mathbb{N}^2\\) is the input function, and it converts integers into an appropriate starting configuration.

2. \\(g_M : \mathbb{N}^2 \rightarrow \mathbb{N}^2\\) runs *M* until reaching a terminal configuration.

3. \\(u_M : \mathbb{N}^2 \rightarrow \mathbb{N}\\) is the output function, and takes a configuration and outputs an appropriate integer.

Let us first turn our attention to \\(g_M\\). We say that \\( g_M(\alpha, \beta) = (\alpha', \beta') \\) if and only if \\( (\alpha, \beta) \Rightarrow^* (\alpha', \beta') \\) and \\( (\alpha', \beta')\\) is a terminal configuration. Since modular machines are deterministic, \\(g_M\\) is well-defined, but not necessarily a total function as *M* may loop.

Moving on to the other two, we first need to fix some natural number \\(0 < n < m\\). How we choose *n* will be relevant later on, but for now it is not important. It is a fact from Number Theory that any natural number *r* can be written uniquely as \\(r = \sum^k_{i=0} b_i n^i \\), where \\( 1 \leq b_i \leq n \\) for all *i*. Given this decomposition, our input function outputs

$$
i_M (r) = \left( \sum^k_{j=0} b_j m^j, n+1 \right).
$$ -->

## 4. Applications and Closing Remarks

Modular machines find much usage within Group Theory - often simplifying proofs of known results. The application that initially attracted my attention was their usage in the Aanderaa-Cohen proof of unsolvability of the word problem for finitely-presented groups (summarised neatly in [3]). This proof uses the existence of a modular machine with an undecidable halting problem to construct a finitely presented group with an unsolvable word problem.

One can check quickly by inspection that any function computed by a modular machine is indeed *partial recursive*, and combining this fact with the ability to simulate any Turing machine actually gives a very simple proof that all Turing-computable functions are indeed partial recursive. I will not say much more about applications of these machines, but I will again point the reader to the original Aanderaa-Cohen paper in [1] if they wish to hear somebody more qualified talk about these applications.

The most interesting thing about these machines in my eyes is how they are able to simulate a machine with *infinite* memory, while only seemingly having finite memory itself. Of course to say a modular machine has finite memory is nonsense, as its ability to store two *arbitrarily large* integers in its configurations is where it gets its computing power from. One crude, inaccurate, but possibly helpful way of looking at their differences is that a Turing machine has a finite alphabet with infinite storage, but a modular machine has only a very small amount of storage but an infinite alphabet.

Are these automata practical models of computing? Almost certainly not, they're too abstract and seemingly very difficult to design without first constructing an equivalent Turing machine. They're best seen as a useful proof device, and I would advise against anybody trying to build anything meaningful using one. I still think they're cool though, and studying them briefly serves as a good way to see that Turing machines are far from *the* canonical model of computation. Perhaps there is an alien society out there somewhere, with a Dr Alan Modular working on his model of computation that uses modular machines.

## 5. Bibliography

1. Stål Aanderaa and Daniel E. Cohen. Modular Machines, The Word Problem for Finitely Presented Groups and Collins' Theorem. Studies in Logic and the Foundations of Mathematics 95C:1-16. (1980).

2. Dr Ken Moody, Computation Theory 2007-08, Cambridge University, Lecture slides. [Link](https://www.cl.cam.ac.uk/teaching/0708/CompTheory/Lecture1-foils.pdf).

3. Simpson, Stephen. (2005). A Slick Proof of the Unsolvability of the Word Problem for Finitely Presented Groups.
