import axios from 'axios'
import UserData from '..//../UserData'
import React, { useEffect, useState } from 'react';
import LoadingPersonsData from '..//../OnLoadingPersonsData'
import Cookies from "js-cookie";

/*class Pochta extends React.Component { 
    state = {pochtas: [] , emails:[] }
    //emails= JSON.stringify(emails);
    pageNumber = 0;
    sizeNumber = 20;

    constructor() {
         super();
        this.setState = {emails:EmailService.getEmails()}
        this.getPochta()
    } */
//getEmails(userId){
  //return axios.get("http://localhost:8080/api/v1/email/")
  //.then(response=>{
    //  response.data.emails
  //})

  //getPochta = async () => {
   // try {
     //   let data = await api.get('/',{
            // headers: {
            //     Authorization: 'Bearer ' + localStorage.getItem('token')
            // },
       //     params: {
         //   page: this.pageNumber,
          //  size: this.sizeNumber
      //  }}).then(({data}) => data);
     //   this.setState({pochtas: data})
    //} catch (err) {
     //   console.log(err)
   // }
//}

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