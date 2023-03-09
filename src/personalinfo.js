import React, { useState, useEffect } from 'react';

import React from 'react'

export const personalinfo = () => {

  const [firstname, setFirstname] = useState('');
  const [lastname, setLastname] = useState('');
  const [dob, setDob] = useState('2009-01-01');
  const [gender, setGender] = useState('');
  const [nin, setNin] = useState('');
  const [city, setCity] = useState('');
  const [address, setAddress] = useState('');
  const [linkedin, setLinkedin] = useState('');
  const [maritalstat, setMaritalstat] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');


  useEffect(() => {
    const fetchData = async () => {
      try{
        const response = await fetch('http://35.168.113.87:8080/api/personal-information')
        const data = await response.json()
        console.log(data)
      }
      catch(e){
        console.log('not found')
        console.log(e)
      }
    }
    fetchData()
}, [])

const handleFirstname = useCallback(val => {
  setFirstname(val);
}, []);

const handleLastname = useCallback(val => {
  setLastname(val);
}, []);

const handleDob = useCallback(val => {
  setDob(val);
}, []);

const handleGender = useCallback(val => {
  setGender(val);
}, []);

const handleNin = useCallback(val => {
  setNin(val);
}, []);

const handleCity = useCallback(val => {
  setCity(val);
}, []);

const handleAddress = useCallback(val => {
  setAddress(val);
}, []);

const handleEmail = useCallback(val => {
  setEmail(val);
}, []);

const handleLinkedin = useCallback(val => {
  setLinkedin(val);
}, []);

const handleMaritalstat = useCallback(val => {
  setMaritalstat(val);
}, []);



const handlePhone = useCallback(val => {
  setPhone(val);
}, []);

const data = {
  firstName: firstname,
  lastName: lastname,
  dateOfBirth: dob,
  gender: gender,
  nationalIdentityNumber: nin,
  city: city,
  address: address,
  email:email,
  linkedProfile: linkedin,
  maritalStatus: maritalstat,
  phoneNumber: phone
}


console.log(data)
fetch(url, {
  method: 'POST',
  mode: 'cors',
  cache: 'no-cache',
  credentials: 'same-origin',
  headers: {
      'Content-Type': 'application/json',
  },
  redirect: 'follow',
  referrerPolicy: 'no-referrer',
  body: JSON.stringify(data)
})
  return (
    <div>personalinfo</div>
  )
}

