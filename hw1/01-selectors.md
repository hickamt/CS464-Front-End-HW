<!-- Source: https://flukeout.github.io/ -->
## CSS Selectors - CSS Diner Game

1. plate
2. bento
3. #fancy
4. plate apple
5. #fancy pickle
6. .small
7. orange.small
8. bento orange.small
9. plate, bento
10. -
11. plate \*
12. plate + apple.small, plate + apple
13. bento ~ pickle
14. plate > apple
15. plate orange:first-child
16. plate apple:only-child, plate pickle:only-child
17. plate apple:last-child, pickle.small
18. plate apple:last-child, pickle.small
19. plate:nth-child(3)
20. bento:nth-last-child(3)
21. apple:first-of-type
22. plate:nth-of-type(even)
23. plate:nth-of-type(2n+3)
24. plate apple:only-of-type
25. orange:last-of-type, apple:last-of-type
26. bento:empty
27. apple:not(.small)
28. apple[for], plate[for], bento[for]
29. plate[for]
30. bento[for="Vitaly"]
31. plate[for^="Sa"], bento[for^="Sa"]
32. [for$="ato"]
33. [for*='obb']

<!-- Solutions | LihnNgyun linh224-->

## CSS Selectors - CSS Diner Game

1. plate
2. bento
3. #fancy
4. plate apple
5. #fancy pickle
6. .small
7. orange.small
8. bento orange.small
9. plate, bento
10. -
11. plate \*
12. plate + apple
13. bento ~ pickle
14. plate > apple
15. orange:first-child
16. plate > :only-child
17. .small:last-child
18. :nth-child(3)
19. bento:nth-last-child(3)
20. apple:first-of-type
21. :nth-of-type(even)
22. :nth-of-type(2n+3)
23. apple:only-of-type
24. .small:last-of-type
25. bento:empty
26. apple:not(.small)
27. [for]
28. plate[for]
29. [for="Vitaly"]
30. [for^="Sa"]
31. [for$="ato"]
32. [for*="obb"]
