---
layout: post
title: "A Finitely Generated Group that is not Finitely Presentable"
author: Joseph
tags: group-theory algebra
---

In this post we will work towards an example of a finitely generated group that cannot be expressed by any finite presentation.

I will assume a working knowledge of group theory, however much of the tools and notation used will be defined within this post as usual, for the sake of self-containment.

## 1. Background on group presentations

Very briefly we shall restate some important definitions and results with the goal of building up to our main question. The reader who is familiar with such notions can safely skip this section. *Combinatorial Group Theory* is the study of defining groups with a set of *generators*, and another set of *words* in these generators known as *relators*. More formally, we have the following definitions.

**Definition 1.1.** *(Words)* Let *X* be a set of *n* symbols and for any symbol \\(x\\) in *X*, define its formal inverse as a new symbol \\(x^{-1}\\). Similarly, the inverse of a symbol \\(x^{-1}\\) is defined as just \\((x^{-1})^{-1} = x\\). Let *X\** be the set of words in these symbols and their inverses (including the empty word, denoted 1), where a word is a finite sequence of symbols. Furthermore, define the formal inverse of a word *w* in *X\** as

$$
w^{-1} = (x_1 x_2 \ldots x_n)^{-1} = x_n^{-1} \ldots x_2^{-1} x_1^{-1}
$$

where each \\(x_i\\) is either an element of *X* or the inverse of one. Given two words *w* and *v*, we define their *juxtaposition* *wv* as concatenation in the obvious sense. A word *v* is a subword of another word *w* if it itself appears as a contiguous block within *w*.

**Definition 1.2.** *(Group presentations)* Let *X* be a set of symbols, then a *presentation* is a pair

$$
\langle X ; R \rangle
$$

where *R* is some subset of *X\**. Elements of *X* are known as generators, and elements of *R* are known as relators.

We say two words *w* and *v* in *X\** are equivalent if *v* can be obtained from *w* by a finite sequence of the following operations.

1. Insertion of any element of *R* or its inverse, or a string of the form \\(xx^{-1}\\) or \\(x^{-1}x\\) where \\(x \in X\\), in between any two consecutive symbols, or at the beginning or end of the *w*.

2. Deletion of any element of *R* or its inverse, or a string of the form \\(xx^{-1}\\) or \\(x^{-1}x\\) where \\(x \in X\\), if it appears as a subword of *w*.

This forms an equivalence relation on *X\** (we will not check this here). Define the following operation on the set of equivalence classes,

$$
[w] \cdot [v] = [wv],
$$

where *v*, *w* are elements of *X\**, and indeed this forms a group (which is another fact we will not check). Given some presentation *P*, denote its equivalence class group \\(\overline{P}\\).

We have that every presentation defines a group, and in fact it is also true that every group is defined by some presentation. More precisely we have the following theorem.

**Theorem 1.1.** *(Equivalence of groups and presentations)* Let *G* be some group, then there exists a presentation *P* such that *G* is isomorphic to \\(\overline{P}\\). Furthermore, every presentation defines a group in the above way.

So our notions of presentations and groups are indeed equivalent, though a given group may have many different presentations. A group *G* is called *finitely generated* if there exists a presentation for *G* with a finite set of generators, and similarly a group is called *finitely presentable* if there exist a presentation for *G* with both a finite set of generators and relators. The goal of this post is to work towards an example of a group which is finitely generated but *not* finitely presentable, and demonstrate that these two conditions are indeed very different.

## 2. Free Groups

Another concepts from the field worthy of discussion is *free groups*. Informally, these are groups with no defining relators, but as usual we shall follow this statement immediately with a formalisation.

**Definition 2.1.** *(Free groups)* Let *X* be a set, then define the *Free group on X* as $$F(X) := \overline {\langle X ; \emptyset \rangle}$$.

Free groups are often characterised (and even defined) by a different trait, sometimes known as the *universal property of free groups*.

**Theorem 2.1.** *(Universal property of free groups)* Let *X* be a set, and $$f : X \to G$$ where *G* is any group. Then this extends uniquely to a homomorphism $$f^* : F(X) \to G$$. Furthermore, suppose *H* is a group with some generating set *S* such that every function $$g : S \to G$$ extends uniquely to a homomorphism $$g^* : H \to G$$, where *G* is any group, then *G* is isomorphic to some free group $$F(Y)$$, where \\(\|Y\| = \|S\|\\). We say *G* is free on *S*, or *S* freely generates *G*.   

An important property which follows from the above is that follows from the above is that every group is in fact a quotient of some free group. To see this, consider a group *G*, and let *S* be any generating set. Then let *X* be a set in bijection with *S*, and by Theorem 2.1 we must have that this bijection extends to a homomorphism from $$F(X)$$ to *G*. Since *S* is a generating set, it is not too hard to show that the resulting homomorphism is surjective.

<!--break-->

## 3. Redundant Relators

## 4. Main Result

## 5. Closing Remarks

## 6. References

1. Magnus, W., Karrass, A. and Solitar, D., 1976. Combinatorial Group Theory. Dover Publications.

2. Neumann, B.H., 1937. Some remarks on infinite groups. Journal of the London Mathematical Society, 1(2), pp.120-127.
