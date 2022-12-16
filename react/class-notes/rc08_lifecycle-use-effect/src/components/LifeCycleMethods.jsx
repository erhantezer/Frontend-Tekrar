//?==================================================================
//?                         LIFECYCLE METOTLARI
//?          https://reactjs.org/docs/react-component.html
//?==================================================================

//* Lifecycle metotlari componetnlerin DOM'da varoldugu sure boyunca
//* uzerinde islem yapmamizi imkan saglayan ozel React mototlaridir.
//* Ornegin bir component olsuturuldugunda, DOM'a basilsiginda,
//* guncellendiginde veya DOM'dan kaldirildiginda bir seyler yapmak icin
//* lifecycle metotlari kullanilabilir.
//* En bilindik lifecycle metodu render() metodudur

//* Bir component'in olsuturulmasi (constructor,
//* Bir componentin DOM agacina eklenmesinin sonrasi(componentDidMount)
//* Bir component'in DOM'a basilmasi (render)
//* (Optional)Bir componentin guncellenmesinin sonrasi (componentDidUpdate)
//* Bir component'in DOM agacindan kaldirilmasi sonrasi(componentWillUnmount)

import React, { Component } from 'react';

class LifeCycleMethods extends Component {




    render() {
        //! 2-) Her bir render'da cagrilir
        console.log('Rendered');
        return (
            <div className="container text-center">
                <h1 className="text-danger">LIFECYCLE METHODS</h1>
                <h3>COUNT=</h3>
                <button className="btn btn-info">
                    INC
                </button>
            </div>
        );
    }
}

export default LifeCycleMethods;
