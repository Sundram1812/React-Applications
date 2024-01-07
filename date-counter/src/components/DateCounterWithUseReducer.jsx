import React from 'react'
import { useReducer } from 'react';
import { useState } from 'react'

const initialState={count:0, step:1}

function reducer(state,action){
    console.log(state,action)
    // if(action.type==='inc') return state+action.payload;
    // if(action.type==='dec') return state-action.payload;
    // if(action.type==='setCount') return action.payload;

    switch(action.type){
        case 'inc':
            return {...state, count: state.count + state.step}
        case 'dec':
            return {...state, count: state.count - state.step}
        case 'setCount':
            return {...state, count: action.payload}
        case 'setStep':
            return {...state, step: action.payload}
        case 'reset':
            return {count:0, step:1}
        default:
            throw new Error("Unknown Action");
    }
}

function DateCounterWithUseReducer() { 
    // const initialState={count:0, step:1}
    const [state, dispatch]=useReducer(reducer, initialState);
    const {count,step}=state;

    let date=new Date("october 28 2023")
    date.setDate(date.getDate()+count) 


    function inc(){
        dispatch({type:'inc'})
    }

    function dec(){
        dispatch({type:'dec'})
    }

    function handleStep(e){
        dispatch({type:'setStep', payload:Number(e.target.value)})
    }

    function handleInput(e){
        dispatch({type:'setCount', payload:Number(e.target.value)})
    }

    function handleReset(){
        dispatch({type:'reset'})
    }

    return (
        <div className='w-4/12 mx-auto'>
            <input 
            onChange={handleStep}
            value={step}
            type="range"
            min={1} max={20} className="w-[75%] my-3 cursor-pointer"

            />

            <div>
                <button 
                onClick={dec}
                className='bg-purple-600 px-4 py-2 text-white font-bold rounded-lg'>-</button>

                <input 
                onChange={handleInput}
                value={count > 0 ? count : ''}
                type="number" className='border-2 border-purple-700 rounded-lg py-2 px-4 mx-4'

                />

                <button
                onClick={inc} 
                className='bg-purple-600 px-4 py-2 text-white font-bold rounded-lg'>+</button>

            </div>
            <p className='font-bold my-2'>{date.toDateString()}</p>
            <p className='font-bold'>Step count is : {step}</p>

            <button
            onClick={handleReset} 
            className='bg-purple-600 px-8 py-2 text-white font-bold rounded-lg'>Reset</button>
        </div>
    )
}
export default DateCounterWithUseReducer