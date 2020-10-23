// Ubahlah kalimat berikut menjadi lower case dan upper case :
// Saya beLajar bahaSa peMrograman deNgan khUsuk. (ubah ke lower case dan upper case)
// Allen SedAng MemAncinG IkaN di SuNgai, DIA MEndapat IkAN GaBuS 3 Ekor dan LanGsuNg Dijual. (ubah ke lower case dan upper case)

let lowUp = (a, b) => {
    console.log(a.toLowerCase());
    console.log(a.toUpperCase());

    console.log('===============');

    console.log(b.toLowerCase());
    console.log(b.toUpperCase());
}

lowUp('Saya beLajar bahaSa peMrograman deNgan khUsuk', 'Allen SedAng MemAncinG IkaN di SuNgai, DIA MEndapat IkAN GaBuS 3 Ekor dan LanGsuNg Dijual');
