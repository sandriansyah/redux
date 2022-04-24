import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getListContact } from '../../actions/contactAction'

function ListContact() {
    const {getListContactResult, getListContactloading,getListContactError} =useSelector((state)=>state.contactReducer)
    const dispatch = useDispatch()

    useEffect(()=>{
        //panggil action get list contact
        console.log('1. use effect component did mount');
        dispatch(getListContact())
    },[dispatch])

  return (
    <div>
        <h4>
            ListContact
        </h4>
        {getListContactResult ? (
            getListContactResult.map((contact)=>{
                return(
                    <p key={contact.id}> {contact.name} - {contact.noHp}</p>
                )
            })
        ) : getListContactloading ? (
            <p>loading ..</p>
        ): (
            <p>{getListContactError ? getListContactError : "Data Kosong"}</p>
        )}
    </div>
  )
}

export default ListContact