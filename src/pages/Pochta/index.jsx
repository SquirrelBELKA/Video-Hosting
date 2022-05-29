import axios from 'axios'
import UserData from '..//../UserData'
import React, { useEffect, useState } from 'react';
import LoadingPersonsData from '..//../OnLoadingPersonsData'
import Cookies from "js-cookie";



function Pochta() {

    const DataLoading =  LoadingPersonsData(UserData);
  //состояние стейта в компоненте
    const [appState, setAppState] = useState(
      {
        loading: false,
        emails: null,
      }
    )
  //useEffect будет следить за изменением setAppState и производить ререндер если это необходимо
   useEffect(() => {
      setAppState({loading: true})
      const apiUrl = '/api/v1/message/';
      console.log(Cookies.get("auth-token"))
      //отправляем get запрос на сервер, затем полученные JSON данные сохраняем в стейт
      axios.get(apiUrl, {
        headers:{
          Authorization: "Bearer " + Cookies.get("auth-token")
        }
      }).then((resp) => {
        console.log(resp.data)
        const allEmails = resp.data;
        setAppState({
        loading: false,
        emails: allEmails
         });
      });
    }, [setAppState]);
  
    
  
    return (
          


      <div className="app">
           
          <DataLoading isLoading={appState.loading} emails={appState.emails} />
          
      </div>
    );
  }
  
  export default Pochta;
  //http://www.filltext.com/?rows=32&id={number|1000}&firstName={firstName}&lastName={lastName}&email={email}&phone={phone|(xxx)xxx-xx-xx}&address={addressObject}&description={lorem|32}