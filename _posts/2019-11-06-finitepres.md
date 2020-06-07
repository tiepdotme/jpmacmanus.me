---
layout: post
title: "A Finitely-Generated Group that is not Finitely Presentable"
author: Joseph
tags: group-theory algebra
---

In this post we will work towards an example of a finitely generated group that cannot be expressed by any finite presentation.

For the sake of brevity, I will assume a working knowledge of combinatorial group theory and group presentations, however an informal exposition will be provided in Section 1.

## 1. Background

Very briefly we shall restate some important definitions and results regarding group presentations with the goal of building up to our main question, the reader who is familiar with such notions can safely skip this section. We will be roughly following the definitions laid out by Magnus in [1]. *Combinatorial Group Theory* is the study of defining groups with a set of *generators*, and another set of *words* in these generators known as *relators*. More formally, we have the following definitions.

**Definition 1.1.** (Words) *Let X be a set of n symbols and for any symbol \\(x\\) in X, define its formal inverse as a new symbol \\(x^{-1}\\). Similarly, the inverse of a symbol \\(x^{-1}\\) is defined as just \\((x^{-1})^{-1} = x\\). Let X\* be the set of words in these symbols and their inverses (including the empty word, denoted 1), where a word is a finite sequence of symbols. Furthermore, define the formal inverse of a word w in X\* as*

$$
w^{-1} = (x_1 x_2 \ldots x_n)^{-1} = x_n^{-1} \ldots x_2^{-1} x_1^{-1}
$$

*where each \\(x_i\\) is either an element of X or the inverse of one. Given two words w and v, we define their juxtaposition wv as concatenation in the obvious sense. A word v is a subword of another word w if it itself appears as a contiguous block within w. We may parameterise a word $$w(x,y,z \ldots)$$ or $$w(X)$$ to denote the set of symbols appearing in w.*

**Definition 1.2.** (Group presentations) *Let X be a set of symbols, then a presentation is a pair*
$$
\langle X ; R \rangle
$$
*where R is some subset of X\*. Elements of X are known as generators, and elements of R are known as relators.*

We say two words *w* and *v* in *X\** are equivalent if *v* can be obtained from *w* by a finite sequence of the following operations.

1. Insertion of any element of *R* or its inverse, or a string of the form \\(xx^{-1}\\) or \\(x^{-1}x\\) where \\(x \in X\\), in between any two consecutive symbols, or at the beginning or end of the *w*.

2. Deletion of any element of *R* or its inverse, or a string of the form \\(xx^{-1}\\) or \\(x^{-1}x\\) where \\(x \in X\\), if it appears as a subword of *w*.

This forms an equivalence relation on *X\** (we will not check this here), and it is clear that any relator lies within the class of the empty word. Define the following operation on the set of equivalence classes,

$$
[w] \cdot [v] = [wv],
$$

where *v*, *w* are elements of *X\**, and indeed this forms a group with the class of the empty word as the identity, and the obvious inverses (which is another fact we will not check). Given some presentation *P*, denote its equivalence class group \\(\overline{P}\\). One can think of relators as equations, where if the word *R* is a relator, then we stipulate $$R = 1$$ within our group. We may sometimes abuse notation and write *relations* $$X = Y$$ instead of relators in our group presentations, but it isn't hard to see that this doesn't change anything (every relation can be re-expressed as a relator). If a relation holds in a group given by a presentation, then this relation is said to be *derivable* from the given relations.

We have that every presentation defines a group, and in fact it is also true that every group is defined by some presentation. More precisely we have the following theorem.

**Theorem 1.1.** (Equivalence of groups and presentations) *Let G be some group, then there exists a presentation P such that G is isomorphic to \\(\overline{P}\\). Furthermore, every presentation defines a group in the above way.*

So our notions of presentations and groups are indeed equivalent, though a given group may have many different presentations. A group *G* is called *finitely generated* if there exists a presentation for *G* with a finite set of generators, and similarly a group is called *finitely presentable* if there exist a presentation for *G* with both a finite set of generators and relators. The goal of this post is to work towards an example of a group which is finitely generated but *not* finitely presentable, and demonstrate that these two conditions are indeed very different.

## 2. Redundant Relators

We shall consider a result presented by B. H. Neumann, in his 1937 paper *Some remarks on infinite groups* [2]. This result about finitely presentable groups will be used in Section 3 to argue that our construction cannot be finitely presentable, by contradiction.

**Theorem 2.1.** Let *G* be a group defined by the finite presentation
$$
\langle x_1 \ldots x_n ; R_1, \ldots R_m \rangle
$$, and some suppose that
$$
Y = \{y_1, \ldots y_l\}
$$
is another finite generating set of *G*. Then, *G* can be defined with finitely many relators in *Y*.

*Proof.* Write $$X=\{ x_1 \ldots x_n \}$$, we consider the following sequence of transformations. First, we write each $$x_i$$ in terms of *Y*, and vice versa, as both *X* and *Y* generate *G*. That is,

$$
x_i = X_i(Y), \ \ y_j = Y_j(X),
$$

<!--break-->

for some words $$X_i$$, $$Y_j$$, for all *i*, *j*. Now we can transform *G*'s finite presentation in *X* by adding each $$y_j$$ as a generator, and adding the relation $$y_j = Y_j(X)$$, for each *j*. We then add the relations $$x_i = X_i(Y)$$ to our presentation, for each *i* (these should not change the group as they are derivable from existing relations). Using these new relations, we then substitute $$X_i(Y)$$ for each appearance of $$x_i$$ in the old relations. Following this, each $$x_i$$ is defined in terms of *Y*, and do not form part of any other relation in the presentation. It follows that we can delete generators *X* from our presentation as well as the corresponding relations, leaving us with a finite presentation of *G* in terms of generators *Y*. //

**Remark.** *It is not too hard to see how the above result can be improved to a bound on the number of relations required to define G, and this is in fact what Neumann does in his paper.*

**Corollary 2.2.** *Suppose G is finitely presentable, and let*
$$
\langle y_1, \ldots y_n ; S_1, S_2, \ldots \rangle
$$
*be a presentation for G with finitely many generators, but infinitely many relators. Then, there exists an l such that*
$$
\langle y_1, \ldots y_n ; S_1, S_2, \ldots S_l \rangle
$$
*also defines G. That is, all but finitely many of the relators are redundant.*

*Proof.* Write $$S = \{S_i \ ; \ i \in I\}$$, and recall that since *S* is a defining set of relators, every other relator in *G* is derivable from *S*. In particular, every relator in *G* can be derived in a *finite* number of applications of the rules (1) and (2) mentioned in Section 1. Let $$\langle Y ; R \rangle$$ be some finite presentation of *G* in generators *Y*, which must exist by Theorem 2.1, then every relator in *R* is derivable from *S* in a finite number of steps. Since *R* is itself finite, we must have that every relator in *R* can be derived using only a finite number of relators in *S*. Then, since every relator of *G* can then be derived from *R*, it follows that every relator of *G* can be derived using just a finite subset of *S*, and thus all but finitely many relators in *S* are redundant.  //

## 3. Main Result

We will now see how the above corollary can be used to show that a particular group defined by just two generators *cannot* be finitely presented. This example is a simplified version of Neumann's example, and is borrowed from [3]. We need to take a look at a concrete example of a group, the alternating group, but before that, a quick lemma on conjugate cycles.

**Lemma 3.1.** *Let $$\rho = (a_1, a_2, \ldots a_s)$$ be a cycle and $$\pi$$ be a permutation in $$S_n$$. Then*

$$
\pi \rho \pi^{-1} = (\pi (a_1), \pi (a_2), \ldots \pi (a_s)).
$$

*Proof.* Let *b* be any symbol, and first suppose *b* does not equal $$a_i$$, for any $$i$$. Then we have $$\pi \rho \pi^{-1} (b) = b,$$ and we are done. Else, fix some $$i \leq s$$ and observe that
$$
\pi \rho \pi^{-1} (\pi(a_i)) = \pi \rho (a_i),
$$
so in the cycle decomposition of $$\pi \rho \pi^{-1}$$ we have that $$\pi(a_i)$$ sits to the left of $$\pi(\rho(a_i))$$. Recall that in $$\rho$$, $$a_i$$ sits to the left of $$\rho(a_i)$$, so in fact since $$i$$ was chosen arbitrarily we have

$$
\pi \rho \pi^{-1} = (\pi (a_1), \pi (a_2), \ldots \pi (a_s)),
$$

as required. //

We now turn our attention to the commutativity of certain elements of the alternating group. The proof of the next lemma is adapted from [this answer](https://math.stackexchange.com/a/3424779/629065) on Mathematics Stack Exchange.

**Lemma 3.2.** *Let $$j \geq 7$$ be an odd integer, and let*

$$
\alpha = (1, \cdots j), \ \ \beta = (1, 2, 3)
$$

*be cycles in the alternating group $$A_j$$. Then $$\alpha^k \beta \alpha^{-k}$$ commutes with $$\beta$$ if $$3 \leq k \leq j-3$$, but not if $$k = j-2$$.*

*Proof.* From Lemma 3.1, we can deduce that

$$
\begin{align}
\alpha^k\beta\alpha^{-k}
&=\left(\alpha^k\left(1\right),\  \alpha^k\left(2\right),\ \alpha^k\left(3\right)\right)\\
&=\cases{\left(k+1,\ k+2, \ k+3\right)&if $\ 1\le k\le j-3$,\\
\left(1,\ j-1, j\right)&if $\ k= j-2$.}
\end{align}
$$

The remaining cases are not important. It is clear from here that if $$3 \leq k \leq j-3$$, we have that $$\beta$$ is completely disjoint from $$\alpha^k \beta \alpha^{-k}$$, and therefore these two elements must commute. As for the case where $$k = j-2$$, we calculate that

$$ \beta \alpha^k \beta \alpha^{-k} = (1,2,3) (1, j-1, j) = (1,2,3,j-1,j), $$

whereas

$$ \alpha^k \beta \alpha^{-k} \beta = (1,j-1,j) (1, 2,3) = (1,j-1,j,2,3). $$

Our result follows. //

From here, we can prove our main result. A final notational remark, we notate the commutator $$[x,y] := xyx^{-1}y^{-1}$$. Recall that $$[x,y] = 1$$ if and only if $$x$$ and $$y$$ commute.

**Theorem 3.3.** *There exists a finitely generated group which is not finitely presentable.*

*Proof.* Consider the group *G* defined by the presentation

$$
\langle a, b ; [a^{2k+1} b a^{-(2k+1)}, b], k \in \mathbb N \rangle,
$$

 and suppose *G* is finitely presentable. To ease notation, write $$c_k = [a^{2k+1} b a^{-(2k+1)}, b]$$, and consider the group $$A_{2l+3}$$, for $$l \geq 2$$. If we then consider the map $$a \mapsto \alpha$$, $$b \mapsto \beta$$, then it follows from Lemma 3.2 that for $$1 \leq k \leq l-1$$, $$c_k = 1$$ in $$A_{2l+3}$$, but $$c_l$$ does *not* equal 1. It follows that the relation $$c_l=1$$ can't be derived from $$c_1, \ldots c_{l-1}=1$$ (if it could then $$c_l$$ must equal 1 in $$A_{2l+3}$$). Since this is true for arbitrary $$l \geq 2$$, this contradicts Corollary 2.2, and so *G* cannot be finitely presentable. //

## 4. Closing Remarks

In [2], Neumann uses this result (with his slightly fancier example) to go on to show that there are in fact uncountably many groups defined with two generators, up to isomorphism. Of course, there are only countably many finitely presented groups up to isomorphism, so in fact even for finitely generated groups, being is finitely presentable is far from the norm.

I have written this up, slightly adapting [3], as a small aside while I work on my project this year. My project concerns decision problems within combinatorial group theory, and indeed [3] (as well as much more literature) has formed a good part of my current reading.

## 5. References

1. Magnus, W., Karrass, A. and Solitar, D., 1976. *Combinatorial Group Theory*. Dover Publications.

2. Neumann, B.H., 1937. *Some remarks on infinite groups*. Journal of the London Mathematical Society, 1(2), pp.120-127.

3. Button, J., and Chiodo, M., 2016. *Infinite groups and decision problems*. Lecture notes, University of Cambridge. [Link](https://www.dpmms.cam.ac.uk/~mcc56/teaching/2015-16/Part%20III%20Infinite%20groups%20and%20decision%20problems%202015-16/Notes/Part%20III%20Infinite%20groups%20and%20decision%20problems%20notes%20v15%20FINAL.pdf).
