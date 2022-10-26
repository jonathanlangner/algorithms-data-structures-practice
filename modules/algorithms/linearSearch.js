const searchArr = [28,23,46,14,55,20,3,34,17,13,47,22,1,31,48,29,13,47,54,17,50,9,29,5,2,23,16,1,44,13,0,43,5,14,1,8,54,26,
    52,33,26,11,32,5,11,35,30,30,40,53,28,32,47,40,33,48,28,15,10,55,38,37,13,24,4,
    13,18,13,38,53,42,35,34,32,19,46,11,32,31,0,31,16,22,34,43,23,40,46,6,9,7,8,11,55,9,25,10,20,
    53,25,23,1,47,51,1,23,18,33,50,43,20,50,31,35,54,48,34,43,29,13,26,7,46,1,46,20,3,17,14,2,27,41,44,53,9,23,21,5,50,32,
    49,0,0,50,52,12,53,38,27,18,20,20,14,53,23,5,50,0,22,25,47,0,55,17,8,4,53,38,21,13,21,34,41,16,29,27,31,51,13,24,53,35,32,
    45,0,29,16,5,30,55,40,38,30,39,4,3,38,9,21,39,1,49,43,48,37,4,14,31,11,39,17,22,26,43,20,51,41,23,41,51,52,13,20,52,51,44,26,
    2,12,49,5,22,10,8,11,0,22,11,13,21,13,25,31,19,46,30,45,39,48,42,0,5,34,6,52,10,50,37,14,24,18,51,41,20,55,51,7,31,30,38,3,27,47,
    0,5,45,44,49,9,33,19,31,10,22,16,36,3,49,16,52,37,54,5,41,22,2,22,17,39,27,17,35,28,47,34,46,25,38,12,47,31,55,48,0,4,30,34,16,15,
    31,43,0,28,50,47,48,0,28,20,54,40,15,27,6,53,18,11,29,13,55,7,0,15,22,48,8,39,38,4,14,29,15,24,3,4,28,9,51,13,54,19,40,39,35,21,5,32,
    3,51,41,8,32,51,33,19,19,6,55,16,33,28,30,32,8,51,41,13,30,30,39,5,53,23,48,28,52,3,35,20,30,1,35,35,11,20,52,42,29,55,9,8,50,33,47,19,0,
    16,31,24,4,30,24,51,39,19,55,51,6,50,0,35,5,42,52,7,17,31,46,55,10,19,44,4,8,25,23,15,12,22,22,51,22,28,1,21,15,19,13,20,12,27,46,0,35,4,12,41,
    9,39,48,41,21,45,31,51,11,26,52,30,31,41,32,51,24,53,34,14,47,55,14,34,10,40,27,55,46,3,49,49,27,4,27,10,27,30,9,5,0,3,40,33,19,15,13,27,53,45,26,
    34,0,4,2,37,34,32,54,54,28,21,26,31,6,37,18,3,12,55,10,53,21,44,7,55,25,38,50,45,5,6,22,4,20,35,15,12,12,42,10,54,45,29,21,11,23,53,54,34,49,19,
    44,34,53,13,16,28,40,43,29,53,19,23,42,31,32,15,12,43,42,30,50,38,45,10,21,39,46,24,20,27,36,2,0,30,11,44,8,5,44,12,19,15,40,41,48,28,53,30,33,
    48,31,46,10,44,28,45,50,40,42,5,49,30,46,26,29,27,50,53,50,17,54,11,5,49,30,37,18,21,27,10,4,29,44,48,21,46,25,35,27,22,9,33,2,54,44,2,17,25,
    16,38,51,9,17,4,8,51,13,34,31,31,43,15,1,54,40,29,18,38,10,4,9,3,25,17,43,43,16,29,43,22,8,54,14,4,24,39,52,29,13,55,1,17,34,38,8,14,47,48,15,
    11,34,28,32,50,41,42,34,22,27,25,52,54,28,14,24,53,9,11,33,11,43,11,29,41,18,25,18,41,29,12,27,24,51,38,38,29,0,53,48,32,0,38,42,45,32,
    22,49,37,55,25,15,35,31,47,13,2,17,46,9,52,1,40,33,7,37,13,6,44,39,10,54,52,43,52,29,37,17,32,1,54,38,0,2,20,40,5,29,29,41,2,14,
    4,31,31,34,25,21,47,13,13,2,54,4,33,2,55,19,36,53,21,7,50,24,23,5,36,0,51,54,53,34,0,43,7,30,26,20,21,53,52,1,1,15,33,49,12,26,7,
    51,37,8,6,6,12,14,33,30,37,41,32,12,9,10,53,9,23,21,51,13,35,36,35,5,29,4,23,29,16,14,34,19,48,41,49,40,24,6,17,43,35,11,17,7,55,6,
    10,35,9,47,22,24,12,1,37,19,53,34,24,51,10,15,11,27,18,29,15,3,35,13,6,16,41,18,16,39,38,50,47,33,38,37,31,41,16,8,5,31,45,53,40,1,
    25,32,6,36,40,13,48,41,8,0,49,1,29,36,55,11,47,30,2,14,0,29,15,21,52,37,33,22,15,48,28,29,14,50,45,23,50,50,1,30,52,12,52,45,31,47,
    45,34,55,8,33,43,46,3,1,52,42,15,52,7,34,9,34,45,16,4,50,34,20,16,54,8,40,47,13,34,55,42,40,18,23,17,19,23,1,16,46,8,4,26,48,47,34,3,
    18,2,25,17,0,28,45,22,34,30,55,28,38,43,22,50,50,36,43,46,43,53,24,48,8,0,8,29,26,15,8,8,46,35,11,6,0,52,28,7,9,20,52,47,14,54,5,41,23,38,26,19,
    6,29,45,45,18,6,29,4,21,53,5,6,0,22,5,37,30,17,11,17,48,46,9,46,10,33,42,35,48,15,23,13,47,45,39,48,43,39,42,41,26,12,21,4,44,29,9,26,8,36,49,8,44,
    27,45,17,52,53,41,6,16,38,38,43,49,10,50,48,43,44,21,45,49,42,33,35,47,16,41,5,48,2,25,48,38,13,31,2,7,11,12,38,9,36,21,51,16,31,0,52,1,13,42,43,19,19,53,
    31,33,38,8,36,51,28,17,5,16,11,50,33,27,32,49,4,19,6,2,1,23,32,14,37,55,42,39,14,51,21,52,20,27,49,21,21,18,21,31,16,12,38,40,15,14,55,52,31,20,21,12,51,20,
    16,24,54,16,54,9,3,40,29,42,19,4,41,14,39,18,22,15,0,7,20,36,7,36,18,39,1,23,29,28,46,28,4,14,7,33,35,33,5,26,5,1,39,23,34,6,41,42,36,14,2,33,5,28,18,5,16,47,
    17,24,11,44,49,29,26,42,3,6,28,16,1,8,32,27,44,13,12,22,35,35,8,12,35,40,50,25,1,53,3,51,34,42,18,43,3,1,17,54,39,37,3,49,7,40,38,5,46,6,39,0,51,53,6,30,0,26,49,
    23,31,26,36,4,39,29,39,32,27,10,37,18,33,25,17,43,45,16,0,50,49,32,35,44,38,44,25,53,5,47,48,11,31,22,3,44,13,14,3,45,45,0,8,12,18,24,2,48,12,16,14,50,16,22,42,15,
    6,53,51,23,39,47,53,48,17,46,48,26,6,5,14,22,14,10,16,12,40,30,23,19,25,21,0,44,36,8,23,20,35,40,22,23,38,40,5,30,42,5,42,49,39,16,40,3,50,20,8,32,54,4,27,3,15,54,
    19,17,27,0,21,53,31,13,28,11,7,18,46,25,29,36,44,29,1,15,54,22,48,55,49,10,18,39,26,16,29,37,25,15,14,49,27,53,10,12,44,12,28,48,44,18,23,37,14,22,28,27,55,29,43,46,
    29,33,20,40,15,38,2,44,1,40,46,27,17,34,5,8,41,46,31,53,32,27,35,32,27,24,19,53,15,19,53,12,29,43,22,52,1,42,24,7,24,26,51,37,5,3,34,34,26,17,34,3,53,18,5,27,3,49,11,
    28,8,2,4,17,15,32,46,26,29,0,29,51,43,44,13,28,49,15,39,25,43,1,51,36,44,7,25,18,19,53,33,16,49,21,3,49,19,48,20,21,41,55,22,47,53,10,21,30,21,11,23,35,31,29,43,26,10,
    39,33,8,21,32,24,16,9,11,55,17,45,7,8,12,48,38,45,0,4,33,15,29,32,21,46,52,1,8,4,40,29,7,30,13,47,4,5,12,29,40,25,21,30,33,16,28,8,8,34,55,4,4,29,45,53,7,30,0,17,45,30,
    15,2,28,23,37,2,45,4,19,0,15,14,10,10,5,39,40,10,25,43,46,6,46,0,34,32,2,22,18,44,2,38,52,23,5,37,29,34,36,24,28,24,33,33,19,41,42,52,30,51,27,48,46,4,4,43,24,17,
    46,24,4,53,36,12,5,3,39,47,36,11,54,50,27,25,19,36,9,34,20,10,32,0,22,38,17,15,17,43,44,28,22,35,5,17,24,8,7,39,55,24,34,12,5,1,33,52,28,3,36,54,22,51,24,24,27,38,
    9,31,4,21,41,42,19,7,26,17,15,35,37,40,26,7,31,35,46,47,7,5,15,12,19,9,35,12,37,30,13,13,20,26,16,31,37,9,52,14,16,35,39,40,8,52,21,19,55,35,4,33,23,39,15,18,16,32,23,
    19,20,36,5,39,10,52,55,47,20,29,7,18,30,17,43,15,3,47,35,11,15,52,55,23,36,32,5,54,12,29,2,18,44,55,54,22,43,9,26,23,41,6,44,25,20,53,19,53,9,48,22,52,
    51,36,54,7,44,53,0,48,15,8,29,45,11,39,15,55,15,40,47,43,31,16,12,6,10,14,0,52,44,9,24,6,25,8,45,6,45,50,35,14,27,0,8,16,37,13,45,5,2,6,8,35,54,24,2,10,27,38,20,47,
    23,1,46,45,21,27,47,43,39,42,24,55,37,34,10,13,33,37,21,29,19,46,29,23,18,3,53,12,34,1,12,4,51,19,18,8,14,7,29,32,13,5,44,21,5,53,14,44,20,2,7,13,34,33,46,35,0,50,
    18,22,13,42,50,50,12,40,4,33,22,11,2,26,22,49,35,12,14,13,30,9,21,11,45,44,22,17,53,42,52,35,46,50,8,22,38,22,54,41,34,19,8,33,5,4,33,14,52,52,44,21,38,13,4,26,13,34,42,
    52,32,7,35,54,2,25,54,42,55,35,39,4,51,51,50,53,51,55,37,49,20,45,39,37,55,16,11,55,20,19,16,8,54,27,53,18,5,9,5,46,38,54,0,8,39,18,12,2,25,1,11,50,12,11,17,2,31,19,30,5,33,
    51,19,22,24,26,44,15,44,46,24,46,41,27,40,22,55,38,3,2,8,21,20,5,45,29,36,55,29,36,37,13,47,0,13,14,34,49,5,16,6,47,10,51,15,18,48,33,32,45,55,10,53,18,32,37,2,37,16,23,27,
    9,9,21,53,50,47,55,41,15,24,5,2,30,33,35,18,13,25,39,43,21,41,46,41,26,50,21,30,51,9,19,36,38,12,5,43,14,14,15,54,8,43,2,1,53,25,10,43,17,37,43,6,31,45,37,23,17,30,18,54,9,
    37,55,3,53,33,29,30,23,44,26,34,51,14,41,38,24,11,49,4,38,41,27,45,30,11,54,25,22,23,15,0,28,1,21,19,26,4,39,26,34,2,55,11,30,47,37,48,22,49,44,15,38,29,28,27,44,33,50,26,36,36,17,36,39,8,47,35,55,35,0,44,26,41,16,42,45,37,10,3,23,35,33,30,9,28,4,55,43,30,5,4,37,54,51,29,24,42,19,40,23,38,2,53,42,34,41,2,37,8,8,12,46,41,16,42,34,51,25,25,45,1,20,22,25,21,50,6,19,10,29,29,51,12,48,43,30,16,24,53,12,40,36,27,43,
    36,9,12,21,41,29,2,42,39,33,8,7,53,31,10,9,55,29,0,4,47,29,38,6,50,50,29,42,40,28,3,42,3,15,36,14,51,45,37,53,27,53,39,14,12,6,54,22,15,11,35,38,52,16,51,51,55,16,18,5,46,8,53,27,8,0,1,55,10,30,40,43,6,31,5,39,22,27,5,22,13,33,48,18,20,6,17,41,51,10,3,34,42,41,43,48,49,30,6,21,37,54,37,40,16,19,44,8,47,50,33,13,41,1,14,40,
    11,38,15,47,46,13,53,30,35,52,7,22,9,42,13,53,36,37,35,35,40,19,9,33,41,26,9,38,41,37,17,9,25,26,36,7,34,31,22,0,21,43,16,38,9,22,42,22,53,52,40,8,8,26,47,54,22,10,24,34,30,36,3,33,17,0,51,53,9,21,14,16,15,33,29,38,6,48,48,37,0,10,8,9,52,49,54,36,32,9,6,27,40,47,18,54,12,16,7,10,24,37,45,24,49,41,29,35,54,11,14,30,7,53,13,15,52,31,4,33,23,40,28,35,39,34,9,44,34,49,30,44,1,37,45,22,5,49,43,33,51,5,3,1,34,41,
    31,45,14,13,21,30,54,24,32,49,36,17,5,4,41,17,36,31,53,47,20,42,4,22,14,1,23,38,43,47,35,37,40,22,41,41,3,9,41,30,28,47,43,34,34,47,29,55,47,3,17,47,36,9,5,28,19,45,8,36,48,0,1,46,41,4,7,15,20,47,23,9,8,18,40,22,7,36,39,39,23,3,12,23,55,12,0,0,21,25,21,48,36,43,52,31,48,51,32,2,36,48,20,24,6,45,46,24,31,41,1,31,47,29,45,45,51,22,5,18,4,33,54,38,11,32,43,26,25,24,15,13,33,11,44,2,11,2,4,21,11,10,16,48,46,42,9,
    47,38,33,30,23,38,44,7,53,52,11,47,7,0,9,12,31,50,19,53,5,30,39,42,41,19,45,23,31,43,51,0,22,23,6,19,14,36,17,8,50,3,15,34,7,20,48,18,28,37,44,5,10,35,4,37,31,42,13,54,3,50,28,38,37,31,7,45,26,31,2,38,19,24,10,21,33,16,40,2,23,31,41,5,50,33,3,21,52,12,9,10,16,1,4,39,33,37,54,15,2,18,55,9,46,14,43,36,2,29,10,33,44,42,30,53,55,4,7,18,5,55,19,29,44,38,38,17,50,52,35,5,25,55,20,19,4,23,12,49,17,16,8,36,54,3,16,26,12,8,52,5,29,11,40,
    51,24,6,53,41,55,50,8,43,37,16,10,0,42,6,37,32,27,12,28,36,7,33,5,24,13,32,53,12,41,12,47,54,45,8,8,43,48,20,35,54,47,14,25,36,4,32,39,45,53,40,48,54,12,24,20,22,34,13,54,42,29,37,50,32,46,51,0,17,35,11,47,27,39,46,0,45,53,32,27,44,0,14,50,18,24,54,32,35,20,39,37,37,0,23,12,42,46,18,35,41,33,0,38,23,54,34,26,42,28,41,33,23,39,9,35,45,31,19,8,32,7,44,49,15,22,44,13,15,44,55,29,8,45,9,7,44,37,36,10,11,55,47,6,38,6,29,13,30,21,6,
    54,51,21,15,7,37,43,15,50,41,41,18,24,4,30,46,18,1,44,26,10,34,45,28,26,43,35,15,42,40,27,54,12,23,8,54,39,12,21,39,43,54,16,47,17,45,16,2,36,49,2,0,42,25,2,39,54,35,39,2,6,33,31,6,33,35,9,37,37,37,3,46,19,52,2,48,33,6,42,52,24,37,29,14,12,50,48,25,7,52,15,55,32,53,45,39,9,5,36,1,15,8,38,10,6,20,55,20,40,34,24,52,55,16,45,52,32,15,36,39,45,53,19,36,36,49,45,21,37,5,50,54,12,52,2,7,53,43,0,37,43,45,3,19,45,21,55,15,18,19,14,40,39,
    16,31,8,25,34,7,19,25,51,31,32,28,36,39,30,45,26,32,40,8,23,54,2,20,19,34,6,28,1,17,47,34,51,28,51,7,3,46,18,15,22,12,2,29,43,41,48,39,42,35,8,33,43,52,9,29,27,27,4,51,14,25,48,4,11,13,12,14,40,35,17,19,49,34,15,16,54,10,50,39,8,34,20,26,49,11,25,54,3,52,31,4,38,54,13,53,1,8,3,22,25,12,42,25,45,4,25,11,29,49,16,18,31,18,51,11,40,9,22,21,16,24,20,40,44,46,9,16,37,22,29,20,1,5,36,51,21,21,5,44,30,8,12,27,16,7,53,55,18,18,22,30,52,
    43,3,10,34,36,21,30,3,21,29,32,3,30,1,32,20,2,41,42,34,40,48,42,5,32,6,45,52,9,30,17,40,25,25,3,47,15,48,19,32,42,9,3,16,9,23,41,11,49,53,53,44,11,33,49,15,3,45,9,45,15,8,32,5,1,44,4,21,32,18,26,14,34,3,18,47,18,13,53,36,30,49,18,24,29,40,54,2,25,48,37,9,5,55,52,55,0,44,48,30,44,2,26,14,53,31,49,22,10,14,1,9,36,29,45,9,3,0,36,22,12,4,31,13,51,21,47,37,0,38,54,20,5,43,20,11,55,25,6,43,5,37,40,11,16,53,34,49,13,24,10,37,51,47,43,24,
    6,51,25,22,14,19,12,49,2,47,39,10,11,19,10,39,24,45,10,36,23,0,54,52,0,46,34,17,5,53,12,19,22,20,2,49,31,48,53,17,26,48,37,55,30,28,39,6,6,48,4,37,34,29,43,43,46,29,47,51,12,32,44,32,45,7,15,41,29,54,10,8,43,13,47,13,26,31,37,42,38,27,42,1,7,53,6,8,54,4,6,7,39,30,0,17,39,21,29,22,30,50,40,14,33,52,38,55,35,19,21,12,10,5,38,36,35,13,8,31,51,52,13,10,0,33,47,16,49,23,28,3,21,36,43,32,12,6,21,53,34,35,29,53,1,47,45,45,17,12,22,26,47,
    17,32,54,24,50,49,2,8,21,38,50,39,19,20,14,32,9,49,0,25,2,25,32,53,16,44,21,25,20,23,35,14,10,41,45,23,32,32,43,31,16,45,28,7,11,22,46,37,48,22,15,39,50,15,15,1,3,50,22,46,34,12,42,14,21,12,1,1,9,2,32,9,42,50,7,44,51,20,39,6,47,24,29,15,6,20,16,49,25,50,18,25,13,20,4,8,36,16,19,5,41,25,37,25,27,22,18,26,46,26,44,49,52,49,42,30,18,49,46,12,42,4,36,2,46,38,23,53,45,45,26,2,52,41,24,2,46,46,53,25,0,39,31,54,48,6,25,28,21,25,5,7,40,54,24,
    27,32,25,44,46,44,8,5,45,28,8,38,20,19,45,28,2,46,19,40,50,45,42,46,7,15,13,16,48,22,18,34,22,17,12,9,44,37,41,47,20,43,55,39,29,13,21,52,54,16,8,55,17,10,6,10,37,50,53,32,2,13,1,20,31,32,35,6,44,3,13,17,51,29,5,43,32,34,47,9,30,30,47,6,5,3,21,18,53,51,49,55,6,31,52,32,39,44,53,25,25,47,49,33,
    34,37,32,11,15,18,35,20,26,25,8,4,44,44,50,48,6,7,51,53,46,23,50,46,11,21,25,48,46,16,33,28,14,20,23,48,39,53,15,11,50,8,4,7,36,1,52,34,14,12,38,14,12,38,30,5,39,6,18,32,39,47,53,45,4,43,1,51,39,45,54,47,27,36,2,52,35,40,38,21,31,29,30,38,25,25,31,46,13,14,43,40,51,27,10,15,28,1,21,40,2,37,49,18,23,43,35,53,1,43,26,29,6,3,31,7,46,55,11,25,19,6,51,45,6,25,25,23,53,2,40,39,22,23,50,16,32,36,52,40,35,20,27,45,37,54,53,53,8,37,24,18,15,
    42,8,23,7,40,17,19,43,50,24,48,52,33,20,45,4,30,5,25,44,54,39,24,18,35,15,9,27,25,44,2,25,35,12,41,53,40,14,35,20,55,27,41,30,23,17,12,1,52,34,22,2,47,10,17,46,25,33,35,48,24,27,2,17,10,55,35,19,48,18,24,40,37,36,54,24,16,17,32,24,2,34,21,3,39,40,1,2,46,53,23,52,8,17,42,50,23,26,24,24,1,26,53,8,25,0,21,37,13,41,24,5,27,24,42,42,19,8,53,19,54,53,4,12,5,41,43,37,24,53,2,
    46,21,9,15,25,22,22,14,0,37,14,34,14,51,20,51,12,44,6,50,53,3,15,10,1,14,36,50,34,30,9,24,25,21,46,18,6,12,0,46,34,29,15,31,15,2,13,17,21,13,43,4,8,29,12,18,44,23,52,16,46,32,55,13,54,40,15,33,15,21,31,29,22,14,13,49,12,8,38,43,14,27,14,0,55,42,16,24,33,29,38,23,39,50,35,50,1,54,53,40,34,23,55,29,23,11,30,15,22,47,33,42,35,41,0,54,11,20,35,1,34,33,28,26,19,50,17,36,1,48,4,8,30,36,52,16,30,47,43,24,55,41,4,23,26,52,0,44,32,19,53,28,0,2,39,42,35,11,28,10,4,16,34,47,48,55,37,0,22,10,15,45,4,45,23,37,28,19,27,14,46,40,6,18,53,11,23,22,53,31,17,32,1,37,43,27,55,25,0,0,19,25,34,9,19,33,41,51,17,20,38,17,30,21,2,27,24,54,20,55,30,33,7,41,10,48,40,43,31,43,43,17,53,28,3,12,16,49,4,45,27,39,44,
    38,48,47,0,5,55,16,52,31,55,38,33,32,51,1,34,51,14,40,48,18,34,46,28,50,27,31,34,36,37,
    51,47,4,33,12,33,37,14,8,38,44,24,14,1,34,8,14,19,2,48,49,19,1,29,40,26,10,55,8,15,34,19,41,36,53,
    23,13,37,3,1,5,1,21,25,35,49,22,12,26,33,24,24,17,50,3,20,39,3,33,6,11,12,2,48,12,30,55,7,2,46,39,54,55,3,41,13,28,27,5,26,
    22,31,5,24,11,36,22,30,37,17,7,2,32,39,34,49,16,24,8,17,32,36,21,22,25,48,31,33,31,33,47,37,47,9,6,3,35,43,19,16,22,4,48,
    28,22,39,55,9,17,24,28,36,47,18,48,32,7,55,24,18,35,23,0,5,36,53,3,2,46,11,6,37,21,17,3,0,21,19,30,52,24,29,13,37,33,20,
    10,19,37,39,36,4,47,14,44,23,20,35,2,34,5,13,53,22,38,17,41,35,22,44,8,50,11,11,34,54,5,15,5,22,34,55,25,13,36,10,6,21,
    45,29,42,5,4,25,18,47,10,0,17,41,33,38,5,31,15,4,15,26,42,39,45,13,47,18,14,47,3,42,50,10,4,43,45,32,32,1,39,14,43,4,
    41,7,23,46,17,19,36,24,37,6,37,23,3,8,31,45,12,29,48,0,15,49,21,14,21,29,18,30,0,48,32,3,17,31,49,32,33,40,51,27,52,19,2,5,15,
    52,46,27,35,42,19,3,28,24,8,23,26,34,43,20,11,54,49,45,7,18,35,45,26,2,50,22,11,55,26,13,30,9,17,32,25,49,6,12,2,27,13,7,25,8,51,27,39,23,32,3,36,4,35,51,19,9,24,33,14,21,35,25,9,29,21,16,16,3,9,22,16,36,31,33,7,36,11,3,48,12,53,40,46,8,37,40,5,20,25,26,2,51,1,47,50,32,36,33,27,4,45,1,43,49,0,48,3,54,41,38,49,0,53,18,48,7,1,26,7,36,37,11,35,45,55,48,27,40,35,23,31,28,17,20,3,32,42,50,32,32,4,3,37,25,30,11,32,15,17,54,39,11,41,35,4,3,53,2,31,44,16,8,43,31,12,11,39,40,46,24,36,54,6,8,50,43,30,24,10,23,0,28,24,40,25,23,37,3,27,30,9,6,47,28,9,39,34,20,11,40,24,52,25,37,6,34,47,52,31,40,19,18,28,2,40,19,13,30,27,24,48,48,18,23,4,23,50,48,47,18,13,5,19,39,14,28,48,54,24,13,50,31,19,45,15,33,50,49,44,3,12,27,13,36,33,18,0,6,26,21,14,55,47,11,46,16,41,20,32,23,40,53,40,13,2,46,52,44,12,10,8,49,23,21,46,50,52,20,34,16,13,16,4,28,17,2,5,6,12,18,51,16,12,37,52,27,7,38,53,30,16,9,31,18,1,
    20,17,20,45,26,7,36,42,8,48,35,6,11,19,17,55,38,13,6,55,42,9,11,2,6,14,45,45,15,32,8,3,40,42,36,54,21,45,38,4,49,
    50,38,1,8,8,31,39,8,53,31,9,21,43,21,49,3,38,14,26,11,52,27,51,45,40,9,34,16,28,29,52,38,5,50,38,51,31,20,40,53,48,17,32,
    11,21,51,20,48,45,35,47,9,33,45,25,26,1,38,6,24,48,31,41,41,42,1,39,4,12,21,19,22,40,38,35,42,0,9,25,50,5,7,35,15,45,30,29,13,
    7,23,39,28,20,22,13,21,55,19999, 21,17,43,37,50,14,0,8,37,43,48,29,11,36,51,25,17,49,8,44,36,23,25,40,31,13,16,17,12,34,20,49,24,6,25,
    22,20,1,24,37,4,7,0,34,19,48,50,31,28,49,55,28,15,36,15,41,47,47,26,16,51,17,3,34,0,46,4,29,38,13,28,2,19,33,31,18,50,34,16,10,
    30,48,0,17,46,41,0,33,0,1,40,14,18,17,53,2,55,11,50,38,53,6,20,37,34,54,22,34,42,52,17,27,9,53,36,52,11,46,37,51,27,35,48,31,
    41,3,11,43,48,41,41,11,34,50,48,6,33,47,19,40,18,6,51,50,50,27,50,52,19,21,0,50,39,17,47,31,1,9,40,3,17,7,14,11,21,43,36,21,36,
    37,36,39,11,1,40,32,16,0,39,49,44,47,1,1,39,46,20,25,54,18,6,26,1,16,1,5,6,28,34,12,30,40,21,13,24,11,42,4,28,27,7,
    39,16,47,1,0,2,14,54,30,17,26,46,46,47,7,5,5,24,20,4,25,8,6,20,20,46,41,54,19,36,22,32,40,6,41,35,15,33,43,11,32,12,27,38,
    44,42,7,37,43,45,50,38,22,19,27,42,31,38,29,53,2,13,36,23,44,24,38,31,41,2,10,45,46,0,7,53,13,33,14,51,50,26,26,46,35,6,4,37,13,
    51,46,19,30,16,35,1,6,7,31,26,32,11,39,33,41,9,36,11,28,48,51,22,46,2,41,7,53,44,8,
    49,47,40,31,36,6,3,15,8,32,17,47,54,47,23,41,1,0,11,3,23,25,40,29,17,26,54,6,33,45,23,25,47,8,24,30,23,41,55,13,52,47,23,36,30,27,
    45,18,0,52,39,21,27,55,54,33,53,51,5,15,38,35,46,22,35,1,27,21,45,11,34,35,29,48,27,1,52,5,15,52,34,33,22,14,13,29,13,27,0,45,6,49,30,
    21,25,23,31,20,34,3,12,21,36,39,27,0,29,9,7,41,21,32,36,55,11,55,10,29,8,52,5,21,7,23,47,47,25,2,6,19,11,
    39,43,46,46,13,55,19,8,27,54,8,53,45,8,0,43,16,26,12,13,42,43,13,26,55,5,38,12,13,23,39,52,48,16,26,12,17,30,7,6,17,7,52,49,24,34,7,1,40,44,42,11,0,47,21,13,42,41,36,53,40,27,30,53,2,53,21,20,50,48,31,30,32,25,29,21,52,49,27,46,44,9,38,20,15,55,25,55,50,31,47,23,24,41,27,19,22,40,30,33,2,41,29,3,34,15,28,36,47,19,15,39,48,34,35,17,21,51,5,2,44,39,13,48,54,2,50,27,8,12,36,51,17,27,15,19,14,23,22,20,33,36,38,12,13,2,10,41,45,18,26,23,20,19,46,6,17,7,34,20,47,1,2,15,30,30,14,51,25,47,37,45,15,0,5,1,54,25,1,18,52,39,5,34,16,0,52,51,40,30,25,22,2,20,51,0,26,16,30,19,15,45,28,4,23,2,50,44,35,42,35,52,42,4,23,38,16,19,19,55,41,11,28,19,14,48,47,52,13,43,35,37,19,31,52,43,38,51,38,11,35,4,29,29,46,35,13,17,25,39,2,8,30,49,34,51,40,1,50,50,27,18,46,33,31,46,7,9,51,1,25,33,21,7,51,49,5,1,47,11,13,13,52,47,30,6,10,14,25,34,31,35,3,53,49,29,51,20,38,53,48,39,16,11,33,53,7,45,20,33,28,35,32,4,16,13,16,8,19,21,24,1,54,54,
    39,1,26,14,18,22,13,28,7,35,34,5,47,54,46,45,5,52,43,25,38,14,4,3,42,20,48,42,0,52,12,13,47,34,27,52,5,24,9,13,52,1,41,10,40,54,54,7,5,11,41,51,2,0,11,44,19,11,4,23,
    33,8,10,18,9,54,19,51,19,18,23,17,2,51,50,9,16,46,8,55,4,47,9,26,4,53,40,25,18,49,17,49,53,30,46,2,27,9,13,44,49,25,12,41,12,52,31,10,30,37,19,36,18,38,7,8,25,35,7,52,26,28,19,1,10,37,33,23,24,47,38,17,20,38,19,14,36,33,44,40,40,52,16,39,39,2,36,5,4,11,43,6,42,8,2,37,36,20,26,41,50,42,30,53,47,0,52,29,3,23,40,26,6,43,40,54,8,24,18,34,29,45,35,30,2,32,53,53,22,6,50,44,20,32,54,52,49,23,28,13,38,18,51,12,35,45,43,13,10,28,4,52,50,26,24,36,18,32,28,52,29,3,50,44,0,17,33,55,50,3,44,14,18,40,41,15,31,43,31,28,53,52,53,0,20,31,25,41,49,22,19,18,1,17,41,7,22,32,10,29,44,38,6,51, 87];


    const linearSearch = function (a, s){
        const arrLength = a.length - 1;
        for(let i = 0; i <= arrLength; ++i ){
            if(a[i] === s){
                return true;
            }
        }
        return false;
    }


    console.log(linearSearch(searchArr, 87));
