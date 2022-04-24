import axios from "axios";

export const GET_LIST_CONTACT ='GET_LIST_CONTACT'

export const getListContact = ()=>{
    console.log("2. masuk action");
    return((dispatch)=>{
        //loading
        dispatch({
            type: GET_LIST_CONTACT,
            payload: {
                loading : true,
                data: false,
                errorMessage:false,
            }
        })

        //get API
        axios({
            method:'GET',
            url: 'http://localhost:3000/contacts',
            timeout: 120000
        })
        .then((response)=>{
            console.log("3. berhasil dapat data",response.data);
            //berhasil get API
            dispatch({
                type: GET_LIST_CONTACT,
                payload: {
                    loading : false,
                    data: response.data,
                    errorMessage:false,
                }
            })
        })
        .catch((error)=>{
            console.log("3. gagal dapat",error);
            //gagal get API
            dispatch({
                type: GET_LIST_CONTACT,
                payload: {
                    loading : false,
                    data: false,
                    errorMessage:error.message,
                }
            })
        })
    })
}