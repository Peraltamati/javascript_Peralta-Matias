


// ****************14. AJAX con jQuery***************

const APIURL = `https://saint-seiya-api.herokuapp.com/api/characters/`;
const Saint = $('#caballeros')

const renderData = (CaballerosZodiaco) => {

    const SaintSeiya = $('#SaintSeiya');
    SaintSeiya.prepend(`
                        <div class="card" style="width: 18rem;">
                        <img src=" " class="card-img-top" alt=" ">
                        <div class="card-body">
                         <h5 class="card-title">${CaballerosZodiaco.name}</h5>
                             <ul>
                                 <li>Caballero Id: ${CaballerosZodiaco.id}</li>
                                 <li>Cloth: ${CaballerosZodiaco.cloth}</li>
                                 <li>Group: ${CaballerosZodiaco.group}</li>
                                 <li>rank: ${CaballerosZodiaco.rank}</li>
                             </ul>
    </div>
</div>`);
}

const getData = (valorIdZodiaco) => {

    $.ajax({
        method: "GET",
        url: APIURL + `${valorIdZodiaco}`,
        success: (repuesta) => {
            console.log(repuesta);
            renderData(repuesta);
        },
        error: () => {
            alert('Algo salio mal');
        }
    })
}

$('#renderCaballero').click(()=>{
    let valorIdZodiaco = Number(Saint[0].value);
    console.log(valorIdZodiaco);

    if(Number.isInteger(valorIdZodiaco) && valorIdZodiaco >0 && valorIdZodiaco <781){
        getData(valorIdZodiaco);
    }else {
        alert('Tiene que ser un entero entre 1 y 780');
    }
})

// ****************Tercera Entrega del Proyecto Final*********************