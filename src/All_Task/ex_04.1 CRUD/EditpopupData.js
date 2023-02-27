import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { editUser } from './Redux/Action/CRUDaction';

export default function EditpopupData({ index }) {

    const editData = useSelector(y => y.userName);

    const dispatch = useDispatch();
    // console.log(editData[index])

    const [inputData, setInputData] = useState({
        firstName: '',
        lastName: ''
    })

    useEffect(() => {
        if (editData[index] != undefined) {
            setInputData({
                firstName: editData[index].firstName,
                lastName: editData[index].lastName
            })
        }
    }, [editData[index]])

    const updateData = () => {
        let edt = [...editData];
        edt[index] = inputData;
        // console.log(edt[index]);
        dispatch(editUser(edt));
    }

    const InputHandler = (e) => {
        const { name, value } = e.target;
        setInputData({ ...inputData, [name]: value });
    }
    return (
        <>
            <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h1 class="modal-title fs-5" id="exampleModalLabel">Modal title</h1>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div class="modal-body d-flex flex-column col-6" >
                            <div>
                                <label class="form-label">First Name</label>
                                <input class='mb-2' type='text' name='firstName' value={inputData.firstName} onChange={InputHandler}/>
                            </div>
                            <div>
                                <label class="form-label">Last Name</label>
                                <input class='mb-2' type='text' name='lastName' value={inputData.lastName} onChange={InputHandler}/>
                            </div>

                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                            <button type="button" class="btn btn-primary" data-bs-dismiss="modal"  onClick={updateData}>Save changes</button>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}
