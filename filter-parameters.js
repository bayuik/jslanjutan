let filterParameters = value => {
    let arr = [
        {negara: 'Indonesia', benua: 'Asia'},
        {negara: 'Jerman', benua: 'Eropa'},
        {negara: 'Spanyol', benua: 'Eropa'},
        {negara: 'Korea', benua: 'Asia'},
        {negara: 'Portugal', benua: 'Eropa'},
        {negara: 'Amerika Serikat', benua: 'Amerika'},
    ];

    let eropa = arr.filter(item => item.benua === value);
    console.log(eropa);
}

filterParameters('Asia');
filterParameters('Eropa');