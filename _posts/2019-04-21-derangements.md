---
title: Blog
layout: post
post-title: "Counting Derangements"
author: Joseph
banner: /assets/images/bridge.jpg
---

I present an inefficient yet novel way of recursively counting derangements of a set, and generalise this to counting permutations without short cycles.

The only prerequisites necessary are knowledge of the Symmetric Group and cycle-decompositions, as well as the definition of a partition.

## The Problem

Consider a classroom full of students who have just completed a short in-class test. To save time on marking, the teacher asks the students to hand over their test to somebody else in the room, so that each student can mark another student's test, and nobody gets the opportunity to be the marker of their own work.

In essence we are permuting these tests around with the goal that no test paper lands on it's original desk. Our question is in how many different ways can we achieve this?

**Definition 1.** *A permutation \\(\sigma \in S_n\\) acting on a set \\(X\\) is call a **derangement** if it has no fixed points. That is, there does not exist an \\(x \in X\\) such that \\(\sigma(x) = x\\). The number of derangements within \\(S_n\\) is denoted \\(!n\\), pronounced the **subfactorial** of \\(n\\). Denote the set of derangements of \\(n\\) elements with \\(D_n\\).*

From the above definition it should be clear that \\( \|D_n\| = !n \\). Note that throughout this article, \\(S_n\\) can be assumed to be acting on the set \\(N := \{1,2,\ldots,n\}\\). Recall that every permutation can be decomposed into a product of disjoint cycles, unique up reordering.

**Remark.** *It's important to note that any 1-cycle is simply the identity permutation, and thus is often omitted entirely when calculating or writing these decompositions - we will not make this omission in this article in order to keep the relationship between permutations and partitions as clear as possible.*

These cycle decompositions will form the basis of all our arguments, the relationship between derangements and decompositions is captured in the following lemma.

**Lemma 1.** *A permutation is a derangement if and only if its cycle decomposition does not contain a \\(1\\)-cycle.*

*Proof.* Let \\(\sigma \in S_n\\), and suppose its decomposition contains a \\(1\\)-cycle, \\((x)\\). Since the decomposition is made up of \textbf{disjoint} cycles, we have no other cycle in \\(\sigma\\) affects \\(x\\), so \\(\sigma(x) = x\\).

Conversely, suppose its decomposition contains no \\(1\\)-cycles, then we have that every element \\(x \in N\\) appears in exactly one cycle, which is of length at least \\(2\\). It follows that \\(\sigma\\) contains no fixed points.  //

# Counting via Partitions

In this section we will explore the link between permutations and partitions, and exploit this link with the aim of counting this derangements. Consider a permutation \\(\sigma\\) and its decomposition, it's easy to see that this decomposition determines a partition of \\(N\\) by mapping each cycle to a part containing all elements within the cycle. This works since every element of \\(N\\) appears in precisely one of its cycles. For example

$$
\sigma = (1,2,4)(5,6)(3,7)(8)
$$

determines the partition

$$
\{\{1,2,4\},\{5,6\},\{3,7\},\{8\}\}.
$$

One should note however that this correspondence is not one-to-one. If we reorder the elements of a cycle this does not affect its corresponding part, however may change the permutation itself. Our next definition will capture this idea.

**Definition 2.** *Let \\(\sigma \in S_n\\), then its corresponding partition, denoted \\(\Pi_\sigma\\) is obtained by mapping each cycle within its decomposition to a part containing elements affected by that cycle. Also, define the relation \\(\sim\\) on \\(S_n\\) by \\(\sigma \sim \sigma'\\) if and only if \\(\Pi_\sigma = \Pi_{\sigma'}\\).*

It can be easily checked that \\(\sim\\) defines an equivalence relation on \\(S_n\\), but we will not do so here. Our next result helps give us an idea of how big the equivalence classes can be, in particular the classes of cycles.

**Lemma 2.** *Let \\(c \in S_n\\) be a cycle of length \\(k\\), then we have that the size of the equivalence class \\([c]\\) is \\((k-1)!\\).*

*Proof.* Given a cycle \\(c = (x_1,x_2,\ldots,x_k) \in S_k\\), we know this defines the part \\(\{x_1, x_2,\ldots,x_k\}\\) and a partition \\(\Pi_c\\) where every other element lands in a singleton part, as does any other ordering of the elements in c. We can also write c as

$$
(x_k,x_1,\ldots,x_{k-1}), \ (x_{k-1},x_k,\ldots,x_{k-2}), \ \ldots \ (x_2,x_3,\ldots,x_1)
$$

totalling to \\(k\\) different equivalent forms. Clearly then we have \\(k!\\) different orderings of our elements defining the same part, and \\(k\\) of these orderings define exactly the same cycle. Following this we simply count \\(\frac{k!}{k} = (k-1)!\\) possible distinct cycles within \\([c]\\) by grouping orderings of our elements which define the same cycle. //

**Corollary 3.** *Let \\(\sigma \in S_n\\) be a permutation, with a decomposition made up of cycles of length \\(x_1\\), \\(x_2\\), . . ., \\(x_s\\) (so \\(x_1 + \ldots + x_s = n\\)), then we have that the size of the equivalence class \\([\sigma]\\) is*

$$
| [\sigma] | = \prod_{i=1}^{s} (x_i-1)!
$$

*Proof.* Start with the partition \\(\Pi_\sigma\\) of \\(N\\) and for each part, choose a cycle in its preimage by fixing an ordering. By Lemma the result follows. //

The implications of the above are that given a partition of \\(N\\), and a part of order \\(k\\), we have that exactly \\((k-1)!\\) distinct cycles would map to this part. From this result, we deduce a highly inefficient but novel way of counting permutations. First note that we adopt the convention that \\(\|S_0\| = 1\\).

**Theorem 4.** *Let \\(S_n\\) be the symmetric group on \\(n\\) symbols, then \\(\|S_n\|\\) satisfies the recurrence*

$$
|S_n| = \sum_{\ell=1}^{n} { {n-1}\choose{\ell-1}} (\ell-1)! |S_{n-\ell}|
$$

*for any natural number \\(n \geq 1\\), with \\(\|S_0\| = 1\\).*

*Proof.* We will count elements in \\(S_n\\) by counting cycle decompositions via partitions of \\(N\\). Fix any element \\(x \in N\\), and we begin by first constructing the cycle \\(c\\) which houses \\(x\\). Suppose that \\(c\\) is of fixed length \\(1\leq \ell \leq n\\), then first we must choose \\(\ell-1\\) elements from \\(N-\{x\}\\) to sit alongside \\(x\\) in this cycle. Then, as in the Lemma 2 we have exactly \\((\ell-1)!\\) possible cycles to chose from, given our choice of elements. After we have chosen a cycle, we then have to choose a way to permute the remaining \\(n-\ell\\) elements of \\(N\\) not featured in \\(c\\). Since our cycles our disjoint, this clearly works out as exactly \\(\|S_{n-\ell}\|\\) possibilities. Given a fixed length \\(\ell\\) of the cycle containing \\(x\\), we have

$$
{ {n-1}\choose{\ell-1}} (\ell-1)! |S_{n-\ell}|
$$

possible permutations. Summing over possible values of \\(\ell\\), each of which giving a completely distinct set of possibilities, our result follows. //

**Remark.** *To understand the convention that \\(\|S_0\| = 1\\), think of it as permutations of the empty set. From this it must contain exactly one element - the empty function, which trivially is also a derangement. \\(S_0\\) is isomorphic to \\(S_1\\), and is simply the trivial group.*

The above result is not particularly noteworthy, or pretty - some simple algebra can be used to show that what we have is exactly equal \\(n!\\). However what it does do is demonstrate exactly the style of argument we will be using to count derangements. The above argument generalises very nicely to calculating subfactorials, and is this fact we present as our main result. Once again we adopt the convention that \\(\|D_0\| = !0 = 1\\).

**Theorem 5.** *Let \\(D_n\\) be the set of derangements on \\(n\\) symbols, then \\(\|D_n\|\\) satisfies the recurrence*

$$
|D_n| = \sum_{\ell=2}^{n} { {n-1}\choose{\ell-1}} (\ell-1)! |D_{n-\ell}|
$$

*for any natural number \\(n\geq 1\\), with \\(\|D_0\| = 1\\).*

*Proof.* Recall that \\(S_0\\) contains only the empty function which is trivially a derangement, so we have that \\(\|D_0\| = 1\\). The recurrence then follows from an identical argument to Theorem 4, except when we construct our first cycle, we fix its length \\(\ell\\) to be no less than \\(2\\). In doing so we recursively count permutations with no 1-cycles, which by Lemma 1 means we have counted precisely the number of derangements of \\(N\\). //

We then have the following natural generalisation of the above, which I believe demonstrates the merit of the aforementioned recursive formula.

**Corollary 6.** *Let \\(M_{m,n}\\) be the set of permutations on \\(n\\) symbols whose cycle decomposition contains no cycles of length less than \\(m\\), then*

$$
|M_{m,n}| = \sum_{\ell=m}^{n} { {n-1}\choose{\ell-1}} (\ell-1)! |M_{m,n-\ell}|
$$

*for any natural number \\(n\geq 1\\).*

*Proof.*  Similar argument to Theorem 5. //

**Remark.** *The above sequence where \\(m = 3\\) is recorded as [A038205][1] in the OEIS, and the sequence of subfactorials can be found at [A000166][2].*

I will draw a line in the sand here and stop, with exam season fast approaching. However there is plenty more to be done, in the future I would like to look at asymptotic behaviour of these formulas and maybe take some steps towards solving the recurrence. I also want to look at deriving more well-known results and formulas directly from the above.

[1]: https://oeis.org/A038205
[2]: https://oeis.org/A000166
