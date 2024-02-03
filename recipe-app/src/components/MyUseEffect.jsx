import React, {useEffect,useState} from 'react'

const MyUseEffect = () => {
    const [counter,setCounter]=useState(0)
    //useEffect fonksiyonu 2 argüman alır. Birinci argüman işlevin içeriğini ve yan etkiyi tanımlar. İkinci argüman ise bir dizi olarak belirtilen bağımlılıkları içerir. 
    //useEffect(() => {},[])
    //useEffect, component ilk render edildiğinde ve props, state değiştiğinde yeniden tetiklenir.
    useEffect(()=>{
        //Bileşen ilk render edildiğinde çalışır. Yan etki işlemleri burada gerçekleştirilir.
        console.log("useEffect Çalıştı")

        //Temizleme işlemleri (cleanup) : Component unmount edildiğinde çalışır.
        return()=>{
            console.log("useEffect Temizlendi")
        }
    },[counter]) // Bağımlılık Dizisi (Dependency Array): Atanan bir bağımlılığın değeri değiştiğinde useEffect yeniden tetiklenir.
    //[] => eğer boş dizi verilirse useEffect yalnızca component ilk kez render edildiğinde bir kere çalışır.
    //Bağımlılık belirtilmemişse, component her render edildiğinde useEffect yeniden çalışır.
  return (
    <div>
      <h2>Counter</h2>
      <p>Butona {counter} kez tıklandı</p>
      <button onClick={()=>setCounter((prevCount)=> prevCount+1)}>Tıkla</button>
    </div>
  )
}

export default MyUseEffect