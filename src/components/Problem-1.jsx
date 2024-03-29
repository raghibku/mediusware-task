import React, { useState } from 'react';
import { addItemToLS, getItemFromLS } from '../utility/LocalStorage';
import { customSort } from '../utility/SortingAlgo';
import { useEffect } from 'react';

const Problem1 = () => {
    const getTasks = getItemFromLS();
    const [show, setShow] = useState('all');
    const [tasks, setTasks] = useState(getTasks);
    const [count, setcount] = useState(0)

    const handleClick = (val) => {
        setShow(val);
    }

    const handleSubmit = e => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const status = form.status.value.toLowerCase();
        console.log(name, status);
        addItemToLS(name, status);
        setcount(count + 1);
        const newTask = {name,status}
        setTasks((tasks) => [...tasks, newTask])
    }

    console.log(tasks);
  
    const sortTasks = () => {
        if (show == 'active') {
            const selectedTasks = tasks.filter(task => task.status == 'active');
            return selectedTasks
        } else if (show == 'completed') {
            const selectedTasks = tasks.filter(task => task.status == 'completed');
            return selectedTasks
        }
        else {
            const sortedTasks = tasks.sort(customSort);
            return sortedTasks
        }
    }
    const sortedTasks = sortTasks();


    return (

        <div className="container">
            <div className="row justify-content-center mt-5">
                <h4 className='text-center text-uppercase mb-5'>Problem-1</h4>
                <div className="col-6 ">
                    <form onSubmit={handleSubmit} className="row gy-2 gx-3 align-items-center mb-4">
                        <div className="col-auto">
                            <input type="text" name='name' className="form-control" placeholder="Name" />
                        </div>
                        <div className="col-auto">
                            <input type="text" name='status' className="form-control" placeholder="Status" />
                        </div>
                        <div className="col-auto">
                            <button type="submit" className="btn btn-primary">Submit</button>
                        </div>
                    </form>
                </div>
                <div className="col-8">
                    <ul className="nav nav-pills mb-3" id="pills-tab" role="tablist">
                        <li className="nav-item">
                            <button className={`nav-link ${show === 'all' && 'active'}`} type="button" onClick={() => handleClick('all')}>All</button>
                        </li>
                        <li className="nav-item">
                            <button className={`nav-link ${show === 'active' && 'active'}`} type="button" onClick={() => handleClick('active')}>Active</button>
                        </li>
                        <li className="nav-item">
                            <button className={`nav-link ${show === 'completed' && 'active'}`} type="button" onClick={() => handleClick('completed')}>Completed</button>
                        </li>
                    </ul>
                    <div className="tab-content"></div>
                    <table className="table table-striped ">
                        <thead>
                            <tr>
                                <th scope="col">Name</th>
                                <th scope="col">Status</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                sortedTasks ? sortedTasks.map((task) => {
                                    return (
                                        <tr>
                                            <td>{task.name}</td>
                                            <td>{task.status}</td>
                                        </tr>
                                    )
                                })

                                    :
                                    <></>
                            }

                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default Problem1;